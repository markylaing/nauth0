import { NAuth0ApiRoute } from './route';
import { parseCookies, setCookie } from 'nookies';
import { sessionCookie, stateCookie } from '../cookies';
import { createClient } from '../oidc';
import { encodeSession, sessionFromTokenSet } from '../session';

export const callbackRoute: NAuth0ApiRoute = async (req, res, opts) => {
  const cookies = parseCookies({ req });
  const state = cookies[stateCookie];

  if (typeof state === undefined) {
    throw new Error('Missing state cookie');
  }

  const client = await createClient(opts);
  const params = client.callbackParams(req);
  const tokenSet = await client.callback(opts.redirectUri, params, {
    state,
  });

  const session = sessionFromTokenSet(tokenSet);
  const encodedSession = await encodeSession(session, opts);

  const eightHoursInSeconds = 60 * 60 * 8; // TODO: Handle optional config better
  setCookie({ res }, sessionCookie, encodedSession, {
    maxAge: opts.session.cookieLifetime ?? eightHoursInSeconds,
    httpOnly: true,
    path: '/',
  });

  res
    .writeHead(302, {
      Location: '/', // TODO: Get the redirectUri
    })
    .end();
};
