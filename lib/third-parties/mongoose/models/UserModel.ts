import { model, models, Schema } from 'mongoose';
import { ModelReturn } from '../interface';

export const UserSchema = new Schema(
  {
    anonymous_id: String,
    name: String,
    email: String,
    password: String,
    type: String,
  },
  {
    timestamps: true,
  },
);

export const UserModel = (models.user ||
  model('user', UserSchema)) as ModelReturn<typeof UserSchema>;
