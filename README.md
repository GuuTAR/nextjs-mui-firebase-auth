# nextjs-mui-firebase-auth

Reusable Next.js project template with MUI and Firebase Authentication.

## Requirements

- Node.js 20+
- Yarn 1.22 (Classic)
- A Firebase project with Authentication enabled

## Project setup

```bash
$ yarn
```

## Environment

Copy `.env.template` to `.env.local` and fill in the values. Next.js loads it automatically, and real environment variables take precedence over it.

```bash
$ cp .env.template .env.local
```

Only variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. Everything else is available only on the server.

### Backend

| Variable | Description |
| --- | --- |
| `BACKEND_URL` | Base URL of the backend API |
| `API_TIMEOUT` | Request timeout for backend calls, in milliseconds. Default: `5000` |

### Firebase client

Find these in the Firebase console under **Project settings → General → Your apps → SDK setup and configuration**.

| Variable | Description |
| --- | --- |
| `FIREBASE_API_KEY` | Web API key |
| `FIREBASE_AUTH_DOMAIN` | Auth domain, e.g. `<project-id>.firebaseapp.com` |
| `FIREBASE_PROJECT_ID` | Firebase project ID |
| `FIREBASE_STORAGE_BUCKET` | Storage bucket |
| `FIREBASE_MESSAGING_SENDER_ID` | Cloud Messaging sender ID |
| `FIREBASE_APP_ID` | Web app ID |
| `FIREBASE_MEASUREMENT_ID` | Google Analytics measurement ID (optional) |

### Firebase Admin

Generate a key in the Firebase console under **Project settings → Service accounts → Generate new private key**.

| Variable | Description |
| --- | --- |
| `FIREBASE_ADMIN_PROJECT_ID` | Service account's project ID |
| `FIREBASE_ADMIN_CLIENT_EMAIL` | Service account's client email |
| `FIREBASE_ADMIN_PRIVATE_KEY` | Service account's private key. Wrap it in double quotes and keep the `\n` line breaks |
| `FIREBASE_ADMIN_SESSION_LIFETIME_DAYS` | How long a session cookie stays valid, in days. Default: `7` |

### Demo account

| Variable | Description |
| --- | --- |
| `DEMO_UID` | Firebase UID of the demo user |
| `DEMO_USER` | Demo user's sign-in email |
| `DEMO_PASSWORD` | Demo user's password |

## Compile and run the project

```bash
# development (http://localhost:3000)
$ yarn dev

# production build
$ yarn build
$ yarn start
```

## Lint and type check

```bash
$ yarn lint

# generates Next.js route types (LayoutProps, PageProps, ...) then runs tsc
$ yarn type-check
```

## License

[MIT](LICENSE)
