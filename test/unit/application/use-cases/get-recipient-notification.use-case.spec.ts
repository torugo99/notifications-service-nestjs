import { GetRecipientNotification } from '@application/use-cases';
import { makeNotification } from '@test/factories/notification.factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications.repository';

describe('Get recipient notification', () => {
  it('should be able to get recipient notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();

    const getRecipientNotification = new GetRecipientNotification(
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

    const { notifications } = await getRecipientNotification.execute({
      recipientId: 'recipient_id-1',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'recipient_id-1' }),
        expect.objectContaining({ recipientId: 'recipient_id-1' }),
      ]),
    );
  });
});
