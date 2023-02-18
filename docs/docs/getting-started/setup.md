---
sidebar_position: 1
---

# Setup

## Install

If you use npm:

```bash
npm install height-app-api
```

If you use yarn:

```bash
yarn add height-app-api
```

If you use pnpm:

```bash
pnpm add height-app-api
```

It's contains type itself, so you don't need to install `@types/height-app-api`.

## Get Secret Key from Height

You need to get your secret key from Height to use this package.

1. Go to [Height App](https://height.app)
2. Get the secret key in `Settings > API`'
      ![`Settings > API`](https://user-images.githubusercontent.com/24666383/219874878-6c3260ab-98c2-41a4-a18e-b22c7efe57a8.png)
3. Copy the secret key and go to next section

## Create `Height` instance

To use Height API with this package, you need to create [`Height`](https://height-api.xyz/docs/api/height-app-api.height) instance.

[`Height`](https://height-api.xyz/docs/api/height-app-api.height) instance contains all of the Height APIs.

You can create [`Height`](https://height-api.xyz/docs/api/height-app-api.height) instance with your secret key.

```ts title="example.ts"
import { Height } from 'height-app-api'

const height = new Height({ secretKey: 'secret_yoursecretkey' });
```

now you can use all of the Height APIs with [`Height`](https://height-api.xyz/docs/api/height-app-api.height) instance like below:

```ts title="example.ts"
height.users.me();
height.lists.all();
height.tasks.create({...});
```

Check the [Use APIs](./use-api.md) page to know how to use APIs.
