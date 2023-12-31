import { IsString, IsOptional, IsMobilePhone, IsNumber } from 'class-validator';

export class CreateShopDto {
  userId: string;

  @IsOptional()
  merchantId?: number;

  @IsString()
  merchantName: string;

  @IsString()
  merchantAddress: string;

  @IsMobilePhone()
  merchantPhoneNumber: string;

  @IsString()
  category: string;
}

export class ShopListDto {
  userId: string;
  limit: number;
  offset: number;
}

export class UpdateMerchantDto {
  @IsNumber()
  merchantId: number;

  @IsString()
  merchantName: string;

  @IsString()
  merchantAddress: string;

  @IsString()
  merchantPhoneNumber: string;

  @IsString()
  category: string;
}
