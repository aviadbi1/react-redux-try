import axios from "axios";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { KibanaState, FETCH_SAVED_OBJECTS } from "./types";

export function fetchSavedObjects(indexPatterns: KibanaState) {
  return {
    type: FETCH_SAVED_OBJECTS,
    payload: indexPatterns
  };
}

export const thunkFetchSavedObjects = (
  message: string
): ThunkAction<void, KibanaState, null, Action<string>> => async dispatch => {
  const asyncResp = await getIndexPatterns(
    "http://www.mocky.io/v2/5d742f9c3300003351081921"
  );
  dispatch(fetchSavedObjects(asyncResp));
};

async function getIndexPatterns(url: string) {
  let x: KibanaState = { indexPatterns: [] };
  await axios
    .get(url)
    .then(function(response) {
      // handle success
      // console.log("response ", response);
      x.indexPatterns = response.data.objects;
      // console.log("objects ", x);
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
  return x;
}
