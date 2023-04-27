import { Type } from 'class-transformer';
import {
  IsString,
  IsNumber,
  Min,
  IsEnum,
  ValidateNested,
} from 'class-validator';
import { Gender } from '../interface/patient.interface';

class AddressDto {
  @IsString()
  readonly streetAddress: string;

  @IsString()
  readonly subDistrict: string;

  @IsString()
  readonly district: string;

  @IsString()
  readonly province: string;

  @IsString()
  readonly postalCode: string;
}

export class PatientDto {
  @IsString()
  readonly firstName: string;

  @IsString()
  readonly lastName: string;

  @IsString()
  readonly tel: string;

  @IsNumber()
  @Min(0)
  readonly age: number;

  @IsString()
  @IsEnum(Gender)
  readonly gender: Gender;

  @Type(() => AddressDto)
  @ValidateNested()
  readonly address: AddressDto;
}
