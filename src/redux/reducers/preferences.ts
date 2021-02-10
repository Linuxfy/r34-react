import produce from "immer";
import {
  PreferenceKey,
  INFINITE,
  RATED,
  RATEDTRESHOLD,
  ORIGINALS,
  COOKIES,
} from "../../data/types";
import { AppAction, SET_OPTION, ALLOW_COOKIES } from "../actions";

export interface PreferencesState {
  infinite: boolean;
  rated: boolean;
  ratedTreshold: number;
  originals: boolean;
  cookies: boolean;
}

export const initialPreferencesState: PreferencesState = {
  infinite: true,
  rated: false,
  ratedTreshold: 1,
  originals: false,
  cookies: false,
};

const setOption = (state: PreferencesState, key: PreferenceKey, value: any) =>
  produce(state, (draft) => {
    switch (key) {
      case INFINITE:
        draft.infinite = value;
        break;
      case RATED:
        draft.rated = value;
        break;
      case RATEDTRESHOLD:
        draft.ratedTreshold = value;
        break;
      case ORIGINALS:
        draft.originals = value;
        break;
      case COOKIES:
        draft.cookies = value;
        break;
    }
  });

export default (
  state: PreferencesState = initialPreferencesState,
  action: AppAction
): PreferencesState => {
  switch (action.type) {
    case SET_OPTION:
      return setOption(state, action.key, action.value);
    case ALLOW_COOKIES:
      return setOption(state, COOKIES, action.value);
    default:
      return state;
  }
};