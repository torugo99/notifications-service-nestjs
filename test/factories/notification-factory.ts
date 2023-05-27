import {
  Content,
  Notification,
  NotificationProps,
} from '@application/entities';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    content: new Content('You have received a new friend request'),
    category: 'social',
    recipientId: 'recipient_id-1',
    ...override,
  });
}
