import { Body, Controller, Post } from '@nestjs/common';
import { CreateNotificationBody } from '../dtos';

@Controller('notifications')
export class NotificationController {
  @Post()
  async create(@Body() body: CreateNotificationBody) {
    console.log(body);

    const { recipient_id, content, category } = body;
  }
}
