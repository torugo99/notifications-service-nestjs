import { UnreadNotification } from '@application/use-cases';
import { NotificationNotFound } from '@application/use-cases/errors';
import { makeNotification } from '@test/factories/notification.factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications.repository';
import { randomUUID } from 'crypto';

describe('Unread notification', () => {
  it('should be able to unread a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();

    const unreadNotification = new UnreadNotification(notificationsRepository);

    const notification = makeNotification({ readAt: new Date() });

    await notificationsRepository.create(notification);

    await unreadNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].readAt).toBeNull;
  });

  it('should not be able to unread a non existing notification', () => {
    const notificationsRepository = new InMemoryNotificationsRepository();

    const unreadNotification = new UnreadNotification(notificationsRepository);

    expect(() => {
      return unreadNotification.execute({
        notificationId: randomUUID(),
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
