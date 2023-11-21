export interface AuthSession {
  user: {
    id: string;
    name: string;
  };
  expires: string;
}
