import { Injectable } from '@nestjs/common';
import { VideoRepository } from '../repositories/video.repository';
import { CreateVideoDto } from '../dto/create-video.dto';
import { VideoEntity } from '../entities/video.entity';
import { IVideo, IVideoService } from 'src/interfaces/video.interface';

@Injectable()
export class VideoService implements IVideoService {
  constructor(private readonly videoRepository: VideoRepository) {}

  async create(dto: CreateVideoDto): Promise<VideoEntity> {
    return await this.videoRepository.createVideo(dto);
  }

  async findAll(): Promise<VideoEntity[]> {
    return await this.videoRepository.findAllVideos();
  }
}