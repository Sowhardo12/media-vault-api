import { IsInt, IsNotEmpty, IsString, IsUrl, Min } from 'class-validator';

export class CreateVideoDto {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsInt()
  @Min(1)
  durationMinutes!: number;

  @IsUrl()
  @IsNotEmpty()
  url!: string;
}