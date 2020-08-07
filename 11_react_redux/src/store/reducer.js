import { combineReducers } from "redux";
 
import { reducer as counterReducer } from "./counter";
import { reducer as listReducer } from "./list";

/* const defaultState = {};

function reducer(state = defaultState, action) {
  return {
    counterInfo: counterReducer(state.counterInfo, action),
    listInfo: listReducer(state.listInfo, action)
  }
} */

const reducer = combineReducers({
  counterInfo: counterReducer,
  listInfo: listReducer
})

export default reducer;