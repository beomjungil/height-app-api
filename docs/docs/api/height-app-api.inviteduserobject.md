---
id: height-app-api.inviteduserobject
title: InvitedUserObject type
hide_title: true
displayed_sidebar: null
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[height-app-api](./height-app-api.md) &gt; [InvitedUserObject](./height-app-api.inviteduserobject.md)

## InvitedUserObject type

**Signature:**

```typescript
export type InvitedUserObject = {
    id: string;
    model: 'user';
    state: 'enabled' | 'invited';
    email: string;
    access: 'member' | 'guest' | 'anonymous';
    createdAt: string;
    pictureUrl?: string;
};
```