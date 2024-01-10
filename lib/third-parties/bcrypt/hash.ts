import bcrypt from 'bcrypt';

export function hash(str: string) {
  return bcrypt.hashSync(str, 10);
}
