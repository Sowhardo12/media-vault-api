import { Injectable } from '@nestjs/common';
import { AuthorRepository } from '../repositories/author.repository';
import { CreateAuthorDto } from '../dto/create-author.dto';
import { AuthorEntity } from '../entities/author.entity';
import { IAuthor, IAuthorService } from 'src/interfaces/author.interface';

//IAuthor is the shape and IAuthorService is the contract of how the Author Service will look like and what functions will it must have 

@Injectable()
export class AuthorService implements IAuthorService {
  constructor(private readonly authorRepository: AuthorRepository) {}

  async create(dto: CreateAuthorDto): Promise<AuthorEntity> {
    return await this.authorRepository.createAuthor(dto);
  }

  async findAll(): Promise<AuthorEntity[]> {
    return await this.authorRepository.findAllAuthors();
  }
}