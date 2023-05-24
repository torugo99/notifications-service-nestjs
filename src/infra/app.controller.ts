import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'crypto';
import { CreateNotificationBody } from './create-notification-body';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notifications.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    console.log(body);

    const { recipient_id, content, category } = body;

    await this.prisma.notifications.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipient_id,
      },
    });
  }
}
