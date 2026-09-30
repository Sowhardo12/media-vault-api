import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
import { IBook } from '../interfaces/book.interface';

@Entity('books')
export class BookEntity implements IBook {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  pages!: number;

  @Column()
  publishedYear!: number;

  @CreateDateColumn()
  createdAt!: Date;
}