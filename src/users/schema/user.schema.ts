import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as bcrypt from 'bcrypt';

export type UserDocument = User & Document;

@Schema()
export class User {

  @Prop({required:true})
  password: string;

  @Prop({unique:true,required:true})
  email: string;

}


export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre('save', async function(next: Function) {
  try {
    if (!this.isModified('password')) {
      return next();
    }
    const hashed = await bcrypt.hash(this['password'], 10);
    this['password'] = hashed;
    return next();
  } catch (err) {
    return next(err);
  }
});