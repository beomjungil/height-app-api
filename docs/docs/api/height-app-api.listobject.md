---
id: height-app-api.listobject
title: ListObject type
hide_title: true
displayed_sidebar: null
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[height-app-api](./height-app-api.md) &gt; [ListObject](./height-app-api.listobject.md)

## ListObject type

Tasks belong to one list. To create tasks, it's necessary to know in which list you want to create them.

**Signature:**

```typescript
export type ListObject = {
    id: string;
    model: 'list';
    type: 'list' | 'smartlist' | 'user' | 'inbox' | 'search';
    key: string;
    description: string;
    url: string;
    appearance: {
        iconUrl: string;
        hue?: number | null;
    };
};
```