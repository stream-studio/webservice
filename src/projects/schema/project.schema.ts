import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { User } from '../../users/schema/user.schema';

export type ProjectDocument = Project & Document;

@Schema()
export class Project {

  @Prop({ required: true })
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  owner: User;

}

export const ProjectSchema = SchemaFactory.createForClass(Project);