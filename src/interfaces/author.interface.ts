export interface IAuthor {
  id?: number;
  name: string;
  email: string;
  createdAt?: Date;
}

export interface IAuthorService {
  create(dto: any): Promise<IAuthor>;
  findAll(): Promise<IAuthor[]>;
}

export const AUTHOR_SERVICE = Symbol('IAuthorService');