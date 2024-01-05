import mongoose from 'mongoose';

// const DB_URI = process.env.MONGODB_URI || "";
const DB_URI = 'mongodb://root:example@localhost:27017/admin';

export class ConnectService {
  static mongoose: mongoose.Mongoose;
  static mongoosePromise: Promise<mongoose.Mongoose>;

  static async connect() {
    if (!this.mongoosePromise) {
      this.mongoosePromise = mongoose.set('debug', true).connect(DB_URI);
    }
    this.mongoose = await this.mongoosePromise;

    return this.mongoose;
  }
}
