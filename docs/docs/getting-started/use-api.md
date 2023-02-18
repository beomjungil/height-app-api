---
sidebar_position: 2
---

# Use API

::: note

You need to create [`Height`](https://height-api.xyz/docs/api/height-app-api.height) instance to use APIs.

Read [Setup](./setup.md) page to know how to create [`Height`](https://height-api.xyz/docs/api/height-app-api.height) instance.

:::

## How to use APIs

All apis in [OpenAPI Specification](https://height-api.xyz/openapi/) are implemented in this package.

![image](https://user-images.githubusercontent.com/24666383/219875345-9c7ec860-60c3-4464-bf0e-ebbb47427652.png)

When you are using API in TypeScript, just remember the following rules:

1. Path parameters in [OpenAPI Specification](https://height-api.xyz/openapi/) is combined to request body in this package.
  ex: /tasks/:id` -> `height.tasks.get({ id: '...' })`
2. Query parameters of GET requests in [OpenAPI Specification](https://height-api.xyz/openapi/) is combined to request body in this package.
  ex: /activities?taskId=...` -> `height.activities.get({ taskId: '...' })`
3. Query parameters of other requests in [OpenAPI Specification](https://height-api.xyz/openapi/) is combined to request body with `queryParams` property
  ex: /tasks/:id/?filters=...` -> `height.tasks.update({ id: '...', queryParams: { filters: {...} } })`
