import { Controller, Get, Post, Body, Inject } from '@nestjs/common';
import { AUTHOR_SERVICE } from 'src/interfaces/author.interface';
import type { IAuthorService } from 'src/interfaces/author.interface';
import { CreateAuthorDto } from '../dto/create-author.dto';

@Controller('authors')
export class AuthorController {
  constructor( @Inject(AUTHOR_SERVICE) private readonly authorService: IAuthorService) {}

  @Post()
  create(@Body() dto: CreateAuthorDto) {
    return this.authorService.create(dto);
  }

  @Get()
  findAll() {
    return this.authorService.findAll();
  }
}