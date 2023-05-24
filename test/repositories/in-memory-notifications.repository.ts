import { Notification } from '../../src/application/entities';
import { NotificationsRepository } from '../../src/application/repositories';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
