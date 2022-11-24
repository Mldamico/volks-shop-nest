import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsIn,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    description: 'Product Title (Unique)',
    nullable: false,
    minLength: 1,
  })
  @IsString()
  @MinLength(1)
  @ApiProperty()
  title: string;
  @IsNumber()
  @IsPositive()
  @IsOptional()
  @ApiProperty()
  price?: number;
  @IsString()
  @IsOptional()
  @ApiProperty()
  description?: string;
  @IsString()
  @IsOptional()
  @ApiProperty()
  slug?: string;
  @IsInt()
  @IsOptional()
  @IsPositive()
  @ApiProperty()
  stock?: number;
  @IsString({ each: true })
  @IsArray()
  @ApiProperty()
  sizes: string[];
  @ApiProperty()
  @IsIn(['men', 'women', 'kid', 'unisex'])
  gender: string;

  @ApiProperty()
  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  tags: string[];

  @ApiProperty()
  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  images?: string[];
}
