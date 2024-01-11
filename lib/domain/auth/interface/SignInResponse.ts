type SignInResponseError =
  | 'NOT_CORRECT_EMAIL'
  | 'NOT_CORRECT_PASSWORD'
  | 'NOT_EXIST_USER';

export type SignInResponse = {
  error?: SignInResponseError;
  user?: {
    id: string;
    name: string;
    email?: string;
  };
};
