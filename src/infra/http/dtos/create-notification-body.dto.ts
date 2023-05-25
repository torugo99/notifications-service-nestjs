import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty({ message: 'RecipientId is required' })
  @IsUUID()
  recipient_id: string;

  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  category: string;
}
