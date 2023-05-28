import { SendNotification } from '@application/use-cases';
import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

interface SendNotificationPayload {
  recipientId: string;
  content: string;
  category: string;
}

@Controller()
export class NotificationController {
  constructor(private sendNotification: SendNotification) {}

  @EventPattern('notifications.send-notification')
  async handleSendNotification(@Payload() content: SendNotificationPayload) {
    await this.sendNotification.execute({
      ...content,
    });
  }
}
