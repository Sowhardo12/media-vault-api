import { Injectable } from '@nestjs/common';
import { IAuthorService, IAuthor } from '../interfaces/author.interface';
import { CreateAuthorDto } from '../dto/create-author.dto';

@Injectable()
export class MockAuthorService implements IAuthorService {
  private authors: IAuthor[] = [];

  async create(dto: CreateAuthorDto): Promise<IAuthor> {
    const newAuthor: IAuthor = {
      id: Math.floor(Math.random() * 1000),
      name: `[MOCK] ${dto.name}`,
      email: dto.email,
      createdAt: new Date(),
    };
    this.authors.push(newAuthor);
    return newAuthor;
  }

  async findAll(): Promise<IAuthor[]> {
    return this.authors;
  }
}