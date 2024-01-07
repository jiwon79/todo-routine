type SignInResponseError = 'NOT_CORRECT_EMAIL' | 'NOT_CORRECT_PASSWORD';

export type SignInResponse = {
  error?: SignInResponseError;
  user?: { id: string };
};
