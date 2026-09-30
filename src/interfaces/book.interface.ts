export interface IBook {
  id?: number;
  title: string;
  pages: number;
  publishedYear: number;
  createdAt?: Date;
}

export interface IBookService {
  create(dto: any): Promise<IBook>;
  findAll(): Promise<IBook[]>;
}

export const BOOK_SERVICE = Symbol('IBookService');