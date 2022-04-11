import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Project, ProjectSchema } from './schema/project.schema';
import { ProjectsGateway } from './projects.gateway';

@Module({
  imports: [MongooseModule.forFeature([{ name: Project.name, schema: ProjectSchema }])],
  providers: [ProjectsService, ProjectsGateway],
  controllers: [ProjectsController]
})
export class ProjectsModule {}
