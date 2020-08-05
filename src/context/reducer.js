import {
  SET_USER_ACTION,
  SET_TOKEN_ACTION,
  SET_PLAYLIST_ACTION,
} from "./actions";

export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //   TODO: Remove token after developement process
  token:
    "BQCZUQv8wqWZhN3wzU1iUM9focUBSSv0JSW7tqWUNtu8xxMzXVEQ-LoyjSGnDILi4xoAQzRR6nRC5WEeOz8HyW5cleQ5gDmjry0KyeiuL4-nCdNk0lpPFP8W5c_U41ZFvGSVuIzxZgSfy0cHfimm5fvwT2Ea-lmdZIZwQXH11MzrPPu_",
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
    case SET_PLAYLIST_ACTION:
      return { ...state, playlists: action.playlists };
    default:
      return state;
  }
};

export default reducer;
