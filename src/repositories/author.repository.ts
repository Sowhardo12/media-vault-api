import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { AuthorEntity } from '../entities/author.entity';
import { CreateAuthorDto } from '../dto/create-author.dto';

@Injectable()
export class AuthorRepository extends Repository<AuthorEntity> {
  constructor(private dataSource: DataSource) {
    super(AuthorEntity, dataSource.createEntityManager());
  }

  async createAuthor(dto: CreateAuthorDto): Promise<AuthorEntity> {
    const author = this.create(dto);
    return await this.save(author);
  }

  async findAllAuthors(): Promise<AuthorEntity[]> {
    return await this.find();
  }
}