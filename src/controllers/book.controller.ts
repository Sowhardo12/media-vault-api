import { Controller, Get, Post, Body, Inject } from '@nestjs/common';
import { BookService } from '../services/book.service';
import { CreateBookDto } from '../dto/create-book.dto';
import { BOOK_SERVICE } from 'src/interfaces/book.interface';
import type { IBookService } from 'src/interfaces/book.interface';

@Controller('books')
export class BookController {
  constructor(@Inject(BOOK_SERVICE) private readonly bookService: IBookService) {}

  @Post()
  create(@Body() dto: CreateBookDto) {
    return this.bookService.create(dto);
  }

  @Get()
  findAll() {
    return this.bookService.findAll();
  }
}