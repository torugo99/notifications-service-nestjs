import { NotificationsRepository } from '@application/repositories';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Notification } from '@application/entities';
import { PrismaNotificationMapper } from '../mappers';

@Injectable()
export class PrismaNotificationRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    const createNotification = PrismaNotificationMapper.toPrisma(notification);

    await this.prismaService.notifications.create({
      data: createNotification,
    });
  }

  async save(notification: Notification): Promise<void> {
    const saveNotification = PrismaNotificationMapper.toPrisma(notification);

    await this.prismaService.notifications.update({
      where: {
        id: saveNotification.id,
      },
      data: saveNotification,
    });
  }

  async findById(notificationId: string): Promise<Notification | null> {
    const notification = await this.prismaService.notifications.findUnique({
      where: {
        id: notificationId,
      },
    });
    if (!notification) {
      return null;
    }
    return PrismaNotificationMapper.toDomain(notification);
  }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    const count = await this.prismaService.notifications.count({
      where: {
        recipientId,
      },
    });

    return count;
  }

  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    const notifications = await this.prismaService.notifications.findMany({
      where: {
        recipientId,
      },
    });

    return notifications.map(PrismaNotificationMapper.toDomain);
  }
}
