import { Module } from '@nestjs/common';
import { NotificationController } from './controllers/notification.controller';
import { SendNotification } from 'src/application/use-cases';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationController],
  providers: [SendNotification],
})
export class HttpModule {}
