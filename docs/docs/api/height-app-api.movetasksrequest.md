---
id: height-app-api.movetasksrequest
title: MoveTasksRequest type
hide_title: true
displayed_sidebar: null
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[height-app-api](./height-app-api.md) &gt; [MoveTasksRequest](./height-app-api.movetasksrequest.md)

## MoveTasksRequest type

**Signature:**

```typescript
export type MoveTasksRequest = {
    taskIds: Array<string>;
    sourceId: string;
    orderIntent: {
        intent?: 'start' | 'end' | 'before' | 'after';
        taskId?: string;
    };
};
```