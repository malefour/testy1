import { IsString, IsNotEmpty, IsNumber, Min, IsDateString } from 'class-validator';

export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  description!: string;

  @IsString()
  @IsNotEmpty()
  venue!: string;

  @IsDateString()
  datetime!: string;

  @IsNumber()
  @Min(0)
  price!: number;

  @IsNumber()
  @Min(1)
  supply!: number;
}

export class EventResponseDto {
  id!: string;
  name!: string;
  description!: string;
  venue!: string;
  datetime!: string;
  price!: number;
  supply!: number;
  sold!: number;
  organiserId!: string;
  status!: string;
  createdAt!: Date;
} 