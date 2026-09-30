import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorEntity } from './entities/author.entity';
import { BookEntity } from './entities/book.entity';
import { VideoEntity } from './entities/video.entity';
import { AuthorRepository } from './repositories/author.repository';
import { BookRepository } from './repositories/book.repository';
import { VideoRepository } from './repositories/video.repository';
import { AuthorService } from './services/author.service';
import { MockAuthorService } from './services/mock-author.service';
import { BookService } from './services/book.service';
import { VideoService } from './services/video.service';
import { AuthorController } from './controllers/author.controller';
import { BookController } from './controllers/book.controller';
import { VideoController } from './controllers/video.controller';
import { AUTHOR_SERVICE } from './interfaces/author.interface';
import { BOOK_SERVICE } from './interfaces/book.interface';
import { VIDEO_SERVICE } from './interfaces/video.interface';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5436,
      username: 'postgres',
      password: 'postgrespassword',
      database: 'media_vault',
      entities: [AuthorEntity, BookEntity, VideoEntity],
      synchronize: true, // For dev/learning purpose
    }),
    TypeOrmModule.forFeature([AuthorEntity, BookEntity, VideoEntity]),
  ],
  controllers: [AuthorController, BookController, VideoController],
  providers: [
    AuthorRepository,
    BookRepository,
    VideoRepository,
   
    {
      provide: AUTHOR_SERVICE,
      // useClass: AuthorService,
      useClass: MockAuthorService, 
    },
    {
      provide: BOOK_SERVICE,
      useClass: BookService,
    },
    {
      provide: VIDEO_SERVICE,
      useClass: VideoService,
    },
  ],
})
export class AppModule {}