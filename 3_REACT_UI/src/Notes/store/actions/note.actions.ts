import { createAction } from "@reduxjs/toolkit";

// export const setWorkSearchParamsSelectedResources = createAction(
//     'demo/setWorkSearchParamsSelectedResources'
//   );

export const noop = createAction("NOOP", (amount) => amount);
//   let todo = createAction('todo', todo => ({ payload: todo }));

// same as
//   noop = createAction('NOOP');

// export const initializeNotes = createAction(
//     '[NOTES] initialize notes'
//   );

//   let noop = createAction('NOOP', amount => amount);
//   let todo = createAction('todo', todo => ({ payload: todo }));

// same as
//   noop = createAction('NOOP');
