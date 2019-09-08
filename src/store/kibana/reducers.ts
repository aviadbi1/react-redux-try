import { FETCH_SAVED_OBJECTS, KibanaState, KibanaActionTypes } from "./types";

const initialState: KibanaState = {
  indexPatterns: []
};

export function kibanaReducer(
  state = initialState,
  action: KibanaActionTypes
): KibanaState {
  switch (action.type) {
    case FETCH_SAVED_OBJECTS: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
}
