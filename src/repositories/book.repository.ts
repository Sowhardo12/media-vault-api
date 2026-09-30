import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { BookEntity } from '../entities/book.entity';
import { CreateBookDto } from '../dto/create-book.dto';

@Injectable()
export class BookRepository extends Repository<BookEntity> {
  constructor(private dataSource: DataSource) {
    super(BookEntity, dataSource.createEntityManager());
  }

  async createBook(dto: CreateBookDto): Promise<BookEntity> {
    const book = this.create(dto);
    return await this.save(book);
  }

  async findAllBooks(): Promise<BookEntity[]> {
    return await this.find();
  }
}