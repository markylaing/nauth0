/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NAuth0Client } from './client';
import { NAuth0Options } from './server';

export default (opts: NAuth0Options): NAuth0Client => {
  const isBrowser = typeof window !== 'undefined';

  if (isBrowser) {
    return new (require('./client').default)(opts);
  }

  return new (require('./server').default)(opts);
};

export * from './browser';
export * from './server';
