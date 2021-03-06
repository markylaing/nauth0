export interface NAuth0Options {
  domain: string;
  clientId: string;
  clientSecret: string;
  scope: string;
  redirectUri: string;
  logoutRedirectUri: string;
  audience?: string;

  session: {
    cookieSecret: string;
    cookieLifetime?: number;
  };
}
