interface BaseSignInReq<T extends string> {
  type: T;
}

export interface SignInEmailPwdReq extends BaseSignInReq<'email-password'> {
  email: string;
  password: string;
}

export interface SignInAnonymousReq extends BaseSignInReq<'anonymous'> {
  id: string;
}

export type SignInReq = SignInEmailPwdReq | SignInAnonymousReq;
