import mongoose from 'mongoose';

const DB_URI = process.env.MONGODB_URI || '';
const isDev = process.env.NODE_ENV === 'development';

export class MongooseService {
  static mongoose: mongoose.Mongoose;
  static mongoosePromise: Promise<mongoose.Mongoose>;

  static async connect() {
    if (!this.mongoosePromise) {
      this.mongoosePromise = mongoose.set('debug', isDev).connect(DB_URI);
    }
    this.mongoose = await this.mongoosePromise;

    return this.mongoose;
  }
}
