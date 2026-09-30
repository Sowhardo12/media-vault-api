export interface IVideo {
  id?: number;
  title: string;
  durationMinutes: number;
  url: string;
  createdAt?: Date;
}

export interface IVideoService {
  create(dto: any): Promise<IVideo>;
  findAll(): Promise<IVideo[]>;
}

export const VIDEO_SERVICE = Symbol('IVideoService');

