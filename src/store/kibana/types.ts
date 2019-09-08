export interface IndexPattern {
  id: string;
  type: string;
  version: number;
  attributes: {
    title: string;
  };
}

export interface KibanaState {
  indexPatterns: IndexPattern[];
}

export const FETCH_SAVED_OBJECTS = "FETCH_SAVED_OBJECTS";

interface FetchSavedObjectAction {
  type: typeof FETCH_SAVED_OBJECTS;
  payload: KibanaState;
}

export type KibanaActionTypes = FetchSavedObjectAction;
