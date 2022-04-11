import { Module } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { RoomsController } from './rooms.controller';
import { RoomsGateway } from './rooms.gateway';

@Module({
  providers: [RoomsService, RoomsGateway],
  controllers: [RoomsController]
})
export class RoomsModule {}
