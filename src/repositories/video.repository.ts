import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { VideoEntity } from '../entities/video.entity';
import { CreateVideoDto } from '../dto/create-video.dto';

@Injectable()
export class VideoRepository extends Repository<VideoEntity> {
  constructor(private dataSource: DataSource) {
    super(VideoEntity, dataSource.createEntityManager());
  }

  async createVideo(dto: CreateVideoDto): Promise<VideoEntity> {
    const video = this.create(dto);
    return await this.save(video);
  }

  async findAllVideos(): Promise<VideoEntity[]> {
    return await this.find();
  }
}