import bcrypt from 'bcrypt';

export function compareHash(str: string, hashStr: string) {
  return bcrypt.compareSync(str, hashStr);
}
