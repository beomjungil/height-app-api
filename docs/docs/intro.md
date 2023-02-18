---
sidebar_position: 1
---

:::caution

This package is not provided from official Height Team.
Some API can be wrong typed or may not work.

:::

# Introduction

## Why did you made this package?

Height is the task management app I'm most happy with.
I've gone back and forth between a lot of task management apps, but now I'm using Height every day.

Here's a story why i made this package. I just wanted to use Height's Task in the Raycast. But I [couldn't find](https://www.raycast.com/search?q=height) any extensions.

**So I decided to make it myself.**

But I found that there's [API Docs](https://www.notion.so/API-documentation-643aea5bf01742de9232e5971cb4afda) in notion and no official api package for TypeScript, so I made this package.

## What is purpose of this package?

This package is for developers who want to use Height's API in their apps.

You can easily use Height's API with typed API Request / Response.

## Why actual response of API is different from the type?

> Hey, there! Our API docs are admittedly a bit dated. The fields there are still in the new response, but we have a lot of other fields that are not documented as well.
>
> - When I sent this question to the Height team, they replied

I made OpenAPI spec from the [official API docs](https://www.notion.so/API-documentation-643aea5bf01742de9232e5971cb4afda), and generated the interfaces from it.

So if the type is different from the actual response,
1. it is because the official API docs are outdated.
2. is is because i made a mistake while write the OpenAPI spec.

If you find any mistakes or outdates, please let me know by [creating an issue](https://github.com/beomjungil/height-app-api/issues/new)
