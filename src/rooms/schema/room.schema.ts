import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Project } from 'src/projects/schema/project.schema';

export type RoomDocument = Room & Document;

@Schema()
export class Room {

  @Prop()
  publishers: string[];

  @Prop()
  subscribers: string[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true })
  project: Project;

}

export const RoomSchema = SchemaFactory.createForClass(Room);