import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { RoomsModule } from './rooms/rooms.module';
import { AdminModule } from './admin/admin.module';
import { AuthController } from './auth/auth.controller';
import { RoomsController } from './rooms/rooms.controller';
import { ProjectsController } from './projects/projects.controller';
import { UsersController } from './users/users.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI),
    AuthModule, 
    UsersModule, 
    ProjectsModule, 
    RoomsModule, 
    AdminModule
  ],
  controllers: [AppController, AuthController, RoomsController, ProjectsController, UsersController],
  providers: [AppService],
})
export class AppModule {}
