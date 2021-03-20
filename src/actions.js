import * as actions from "./actionsTypes";

export function bugAdded(description) {
  return {
    type: actions.BUG_ADDED,
    payload: {
      description,
    },
  };
}
