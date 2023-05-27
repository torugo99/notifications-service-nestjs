import { CountRecipientNotification } from '@application/use-cases';
import { makeNotification } from '@test/factories/notification.factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications.repository';

describe('Count recipient notification', () => {
  it('should be able to count recipient notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();

    const countRecipientNotification = new CountRecipientNotification(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient_id-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient_id-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient_id-2' }),
    );

    const { count } = await countRecipientNotification.execute({
      recipientId: 'recipient_id-1',
    });

    expect(count).toEqual(2);
  });
});
