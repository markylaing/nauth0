# `nauth0`

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

Easy and awesome authentication for NextJS applications using Auth0.

**This project is a WIP and is likely to include breaking changes**

## Installation

Install the dependencies:

```
yarn add nauth0
```

Add `/lib/nauth0.ts` to your NextJS application. This creates your instantiated nauth0 instance that we'll use in the rest of your application.

```ts
import nauth0 from 'nauth0';

export default nauth0({
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  redirectUri: 'http://localhost:3000/api/auth/callback',
  logoutRedirectUri: 'http://localhost:3000/',
  scope: 'openid profile',
  session: {
    cookieSecret: 'supersecret',
  },
});
```

Add `/pages/api/auth/[auth].ts` with the following contents:

```ts
import nauth0 from 'lib/nauth0';

export default nauth0.handler();
```

The Auth0 Domain, Client ID and Client Secret can be found by creating the application within the Auth0 dashboard.

## Requirements

- Node >= 12.19.0

## Auth0 Configuration

Create a new Regular Web Application with the following settings:

- Allowed Callback URLs: `http://localhost:3000/api/auth/callback`
- Allowed Logout URLs: `http://localhost:3000/`

## Features

- Written in Typescript
- Uses Auth0
- Simple setup
- Simple API
- Hooks
- SSR support
- Works well with custom APIs

## Client API

### `useSession`

[Example](https://github.com/jamiedavenport/nauth0/blob/main/example/pages/index.tsx)

### `getSession`

[Example](https://github.com/jamiedavenport/nauth0/blob/main/example/pages/ssr.tsx)

### `SessionProvider`

`SessionProvider` allows the user session to be shared across the application and injected on the server-side to avoid loading screens. Highly recommended!

[Example](https://github.com/jamiedavenport/nauth0/blob/main/example/pages/_app.tsx)

## Rest API

### `/api/auth/login`

### `/api/auth/logout`

### `/api/auth/callback`

### `/api/auth/session`

## Contributing

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://jamiedavenport.dev"><img src="https://avatars2.githubusercontent.com/u/1329874?v=4" width="100px;" alt=""/><br /><sub><b>Jamie Davenport</b></sub></a><br /><a href="https://github.com/jamiedavenport/nauth0/commits?author=jamiedavenport" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
