import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { AdminModule } from './modules/admin/admin.module';
import { AnalyticsModule } from './modules/analytics/analytics.module';
import { AuthModule } from './modules/auth/auth.module';
import { CreatorsModule } from './modules/creators/creators.module';
import { DonationsModule } from './modules/donations/donations.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { PayoutsModule } from './modules/payouts/payouts.module';
import { UsersModule } from './modules/users/users.module';
import { WebhooksModule } from './modules/webhooks/webhooks.module';

@Module({
  imports: [
    AdminModule,
    AnalyticsModule,
    AuthModule,
    CreatorsModule,
    DonationsModule,
    NotificationsModule,
    PaymentsModule,
    PayoutsModule,
    UsersModule,
    WebhooksModule,
  ],
  controllers: [HealthController],
})
export class AppModule {}
