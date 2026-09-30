import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
import { IVideo } from '../interfaces/video.interface';

@Entity('videos')
export class VideoEntity implements IVideo {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  durationMinutes!: number;

  @Column()
  url!: string;

  @CreateDateColumn()
  createdAt!: Date;
}