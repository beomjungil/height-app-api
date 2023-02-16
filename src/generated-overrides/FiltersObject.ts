/* istanbul ignore file */
/* eslint-disable */

export type Operators = 'and' | 'or' | 'not';

export type Attributes<FieldTemplateID extends string = never> =
  | 'id'
  | 'index'
  | 'listIds'
  | 'assigneesIds'
  | 'completed'
  | 'completedAt'
  | 'createdAt'
  | 'createdUserId'
  | 'lastActivityAt'
  | 'parentTaskId'
  | 'status'
  | 'trashedAt'
  | 'trashed'
  | 'trashedByUserId'
  /**
   * not supported with (`query`)
   */
  | 'deleted'
  /**
  * not supported with (`query`)
  */
  | 'deletedAt'
  /**
  * not supported with (`query`)
  */
  | 'deletedByUserId'
  | FieldTemplateID;

type UUID = string;
type NONE_VALUE_ID = null;

export interface FilterDate {
  /**
   * ISO format date
   *
   * {@example "2021-01-01T00:00:00.000Z"}
   */
  date: string;
}

type Filter = {
  values?: Array<string | UUID | boolean | NONE_VALUE_ID>,

  /**
   * Use to find tasks with a date greater than the date provided.
   */
  gt?: FilterDate,

  /**
   * Use to find tasks with a date less than the date provided.
   */
  lt?: FilterDate,
}

/**
 * {@link https://www.notion.so/Search-tasks-bb201e3db042442e9a1d0686a7b271a2 | FiltersObject}
 *
 * @example
 * Example 1 (simple query)
 * ```json
 * {
 *    "status": {
 *      "values": ["backLog", "inProgress"]
 *    },
 *    "assigneeId": {
 *      "values": ["123e4567-e89b-12d3-a456-426655440000"]
 *    },
 *    "completed": {
 *      "values": [false]
 *    },
 *    "lastActivityAt": {
 *      "values": [],
 *      "gt": {"date":"2019-11-07T17:00:00.000Z"},
 *    }
 * }
 * ```
 *
 * Example 2 (with operators)
 *
 * ```json
 *  {
 *    "or": [{
 *      "status": {
 *        "values": ["backLog", "inProgress"]
 *      },
 *    }, {
 *      "not": [{
 *        "assigneeId": {
 *          "values": ["123e4567-e89b-12d3-a456-426655440000"]
 *        },
 *      }],
 *    }
 *  }
 * ```
 *
 * Filters with an empty values  array will be ignored.  For example,
 * ```json
 * {
 *   "or": [{
 *     "status": {
 *       "values": []
 *     },
 *   }, {
 *     "not": [{
 *       "assigneeId": {
 *         "values": ["123e4567-e89b-12d3-a456-426655440000"]
 *       },
 *     }],
 *   }
 * }
 * ```
 * will be treated as
 * ```json
 * {
 *   "or": [{
 *     "not": [{
 *       "assigneeId": {
 *         "values": ["123e4567-e89b-12d3-a456-426655440000"]
 *       },
 *     }],
 *   }
 * }
 * ```
 */
export type FiltersObject = {
  [key in Operators]?: FiltersObject[];
} | {
    [key in Attributes]?: Filter;
  };