---
id: height-app-api.patchtasksoutoftrasheffect
title: PatchTasksOutOfTrashEffect type
hide_title: true
displayed_sidebar: null
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[height-app-api](./height-app-api.md) &gt; [PatchTasksOutOfTrashEffect](./height-app-api.patchtasksoutoftrasheffect.md)

## PatchTasksOutOfTrashEffect type

Move task out of the trash

**Signature:**

```typescript
export type PatchTasksOutOfTrashEffect = {
    type: 'trashState';
    trashState: 'active';
    trashStateEffectAt: string;
};
```