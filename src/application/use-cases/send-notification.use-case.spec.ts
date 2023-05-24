import { randomUUID } from 'crypto';
import { SendNotification } from './send-notification.use-case';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications.repository';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();

    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      content: 'You have received a new friend request',
      category: 'social',
      recipientId: randomUUID(),
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
