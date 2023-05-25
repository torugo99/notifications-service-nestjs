import { Notification } from 'src/application/entities';
import { NotificationsRepository } from 'src/application/repositories';
import { PrismaService } from '../prisma.service';

export class PrismaNotificationRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    await this.prismaService.notifications.create({
      data: {
        id: notification.id,
        category: notification.category,
        content: notification.content.value,
        recipient_id: notification.recipientsId,
        read_at: notification.readAt,
        created_at: notification.createdAt,
      },
    });
  }
}
