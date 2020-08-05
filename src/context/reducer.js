import { SET_USER_ACTION, SET_TOKEN_ACTION } from "./actions";

export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //   TODO: Remove token after developement process
  token:
    "BQB-cYChHicu7b3KuQno4tYvsTmiFGz2yjUS6EeefB8ULMAVRn…Qjj5quiOeOCXVDARhAtgk7rW7B-dSi4pyqvtQR7nBNM9C6UCp",
};

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case SET_USER_ACTION:
      return {
        ...state,
        user: action.user,
      };
    case SET_TOKEN_ACTION:
      return { ...state, token: action.token };
    default:
      return state;
  }
};

export default reducer;
