import store from "./store/index.js";

import { addAction, subAction } from "./store/actionCreators.js";


// 日志打印需求
function patchLogging(store) {
  const next = store.dispatch;

  function dispatchAndLog(action) {
    console.log("dispatching: ", action);
    next(action);
    console.log("new state: ", store.getState());
  }

  return dispatchAndLog;
}

// thunk需求
function patchThunk(store) {
  const next = store.dispatch;

  function dispatchAndThunk(action) {
    if (typeof action === "function") {
      action(store.dispatch, store.getState);
    } else {
      next(action);
    }
  }

  return dispatchAndThunk;
}

// 封装applyMiddleware
function applyMiddleware(...middlewares) {
  middlewares.forEach(middleware => {
    store.dispatch = middleware(store);
  })
}

applyMiddleware(patchLogging, patchThunk);


function getData(dispatch) {
  setTimeout(() => {
    dispatch(addAction(5));
  }, 3000);
}
 
store.dispatch(addAction(5));

store.dispatch(getData);
