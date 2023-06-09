import { randomUUID } from 'crypto';
import { Content } from '@application/entities/content.value-object';
import { Notification } from '@application/entities/notification.entity';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('You have received a new friend request'),
      category: 'social',
      recipientId: randomUUID(),
    });

    expect(notification).toBeTruthy();
  });
});
