# Media Vault API

## Architecture

The API follows a layered architecture:

**Controller → Service → Repository → Database**

---

## Example Flow

Example request:

```bash
curl -X POST http://localhost:5004/authors \
  -H "Content-Type: application/json" \
  -d '{"name": "Alice Walker", "email": "alice@example.com"}'
```

### 1. Controller

The request first reaches `AuthorController`.

```ts
@Post()
create(@Body() dto: CreateAuthorDto) {
  return this.authorService.create(dto);
}
```

The JSON request body is mapped to the properties of the `CreateAuthorDto` instance through:

```ts
@Body() dto: CreateAuthorDto
```

The DTO is then passed to `AuthorService.create()`.

---

### 2. Service

`AuthorService` implements the `IAuthorService` interface.

The interface defines the methods that `AuthorService` must implement.

```ts
async create(dto: CreateAuthorDto): Promise<AuthorEntity> {
  return await this.authorRepository.createAuthor(dto);
}
```

The service calls the repository to handle database persistence.

---

### 3. Repository

```ts
async createAuthor(dto: CreateAuthorDto): Promise<AuthorEntity> {
  const author = this.create(dto);
  return await this.save(author);
}
```

Here:

* `this.create(dto)` is TypeORM's `Repository.create()` method.
* It creates an `AuthorEntity` object from the DTO.
* `this.save(author)` persists the data to the database.

If the entity does not have an existing ID, `save()` creates a new record. If the ID already exists, it updates the existing record.

Internally, an SQL query like this is executed:

```sql
INSERT INTO authors (name, email)
VALUES ($1, $2)
RETURNING *;
```

---

### 4. Entity

`AuthorEntity` defines the shape of an author.

---

## Dependency Injection

Instead of directly depending on `AuthorService`, the controller can work with the `IAuthorService` interface.

This allows `AuthorService` to be replaced with something like `MockAuthorService`, which can use an in-memory data store instead of PostgreSQL.

The implementation can be rewired in `AppModule` without changing the controller.

---

# SOLID Principles

## Single Responsibility Principle

Each layer has one main responsibility:

* **AuthorDto:** Changes when API request validation rules change.
* **AuthorController:** Changes when HTTP routes or payload formats change.
* **AuthorService:** Changes when business rules around authors change.
* **AuthorRepository:** Changes when database schema or persistence queries change.

## Open-Closed Principle

If we want to add a new type of media, we can extend the system without modifying some of the major existing code.

## Liskov Substitution Principle

`AuthorService` and `MockAuthorService` can both implement `IAuthorService`.

Therefore, one implementation can be substituted for the other as long as it follows the same contract.

## Interface Segregation Principle

Instead of having one large interface such as `IMedia`, interfaces are separated:

* `IAuthor`
* `IBook`
* `IVideo`

This avoids forcing classes to depend on methods they do not need.

## Dependency Inversion

The controller does not need to directly depend on a specific service implementation.

Because the service is wired through an interface, a different implementation can be used without changing the controller.

For example, if we need to replace `AuthorService` with `MockAuthorService` or another implementation, we only need to change the wiring in `AppModule`.
