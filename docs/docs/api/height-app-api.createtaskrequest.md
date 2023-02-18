---
id: height-app-api.createtaskrequest
title: CreateTaskRequest type
hide_title: true
displayed_sidebar: null
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[height-app-api](./height-app-api.md) &gt; [CreateTaskRequest](./height-app-api.createtaskrequest.md)

## CreateTaskRequest type

**Signature:**

```typescript
export type CreateTaskRequest = {
    name: string;
    listIds: Array<string>;
    description?: string;
    status?: string;
    assigneesIds?: Array<string>;
    parentTaskId?: string;
    fields?: Array<{
        fieldTemplateId: string;
        value?: string;
        date?: string;
        labels?: Array<string>;
        linkedTasks?: Array<{
            id?: string;
            index?: number;
        }>;
    }>;
    orderIntent?: {
        intent?: 'start' | 'end' | 'before' | 'after';
        taskId?: string;
    };
};
```