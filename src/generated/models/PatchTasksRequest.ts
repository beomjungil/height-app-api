/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PatchTasksAssigneesEffect } from './PatchTasksAssigneesEffect';
import type { PatchTasksDeletedEffect } from './PatchTasksDeletedEffect';
import type { PatchTasksDescriptionEffect } from './PatchTasksDescriptionEffect';
import type { PatchTasksFieldsEffect } from './PatchTasksFieldsEffect';
import type { PatchTasksListsEffect } from './PatchTasksListsEffect';
import type { PatchTasksMoveToTrashEffect } from './PatchTasksMoveToTrashEffect';
import type { PatchTasksNameEffect } from './PatchTasksNameEffect';
import type { PatchTasksOutOfTrashEffect } from './PatchTasksOutOfTrashEffect';
import type { PatchTasksParentTaskEffect } from './PatchTasksParentTaskEffect';
import type { PatchTasksStatusEffect } from './PatchTasksStatusEffect';

/**
 * Patch multiples tasks
 */
export type PatchTasksRequest = {
  patches?: Array<{
    /**
     * Array of task ids, either UUIDs or task numbers
     */
    taskIds: Array<string>;
    effects: Array<(PatchTasksNameEffect | PatchTasksDescriptionEffect | PatchTasksStatusEffect | PatchTasksDeletedEffect | PatchTasksParentTaskEffect | PatchTasksAssigneesEffect | PatchTasksListsEffect | PatchTasksFieldsEffect | PatchTasksMoveToTrashEffect | PatchTasksOutOfTrashEffect)>;
  }>;
};

