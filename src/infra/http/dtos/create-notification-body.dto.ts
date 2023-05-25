import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty({ message: 'RecipientId is required' })
  @IsUUID()
  recipientId: string;

  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  category: string;
}
