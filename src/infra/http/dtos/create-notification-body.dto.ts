import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty({ message: 'RecipientId is required' })
  @IsUUID()
  @ApiProperty({ type: String })
  recipientId: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  content: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  category: string;
}
