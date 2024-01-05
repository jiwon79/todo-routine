import { model, models, Schema } from 'mongoose';

const usersSchema = new Schema({
  name: String,
});

export const UsersModel = models.users || model('users', usersSchema);
