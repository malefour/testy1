import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class BuyTicketDto {
  @IsString()
  @IsNotEmpty()
  eventId!: string;

  @IsString()
  @IsNotEmpty()
  paymentMethod!: string;

  @IsOptional()
  @IsString()
  promoCode?: string;
}

export class TicketResponseDto {
  id!: string;
  ticketId!: string;
  nftId!: string;
  eventId!: string;
  userId!: string;
  status!: 'unused' | 'used' | 'cancelled';
  qrPath!: string;
  qrDataUrl?: string;
  purchasedAt!: Date;
  usedAt?: Date;
  event?: {
    name: string;
    venue: string;
    datetime: string;
  };
  nftMetadata?: {
    name: string;
    symbol: string;
    description: string;
    image: string;
    attributes: Array<{
      trait_type: string;
      value: string;
    }>;
  };
} 