import { Controller, Get, Post, Body, Inject } from '@nestjs/common';
import { VideoService } from '../services/video.service';
import { CreateVideoDto } from '../dto/create-video.dto';
import { VIDEO_SERVICE } from 'src/interfaces/video.interface';
import type { IVideoService } from 'src/interfaces/video.interface';
@Controller('videos')
export class VideoController {
  constructor(@Inject(VIDEO_SERVICE) private readonly videoService: IVideoService) {}

  @Post()
  create(@Body() dto: CreateVideoDto) {
    return this.videoService.create(dto);
  }

  @Get()
  findAll() {
    return this.videoService.findAll();
  }
}