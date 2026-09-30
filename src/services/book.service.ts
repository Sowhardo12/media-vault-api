import { Injectable } from '@nestjs/common';
import { BookRepository } from '../repositories/book.repository';
import { CreateBookDto } from '../dto/create-book.dto';
import { BookEntity } from '../entities/book.entity';
import { IBook, IBookService } from 'src/interfaces/book.interface';

@Injectable()
export class BookService implements IBookService {
  constructor(private readonly bookRepository: BookRepository) {}

  async create(dto: CreateBookDto): Promise<BookEntity> {
    return await this.bookRepository.createBook(dto);
  }

  async findAll(): Promise<BookEntity[]> {
    return await this.bookRepository.findAllBooks();
  }
}