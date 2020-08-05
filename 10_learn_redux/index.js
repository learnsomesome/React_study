import store from "./store/index";

import { addAction, subAction } from "./store/actionCreators";

store.subscribe(() => {
  console.log(store.getState().counter);
})

store.dispatch(addAction(5));
store.dispatch(subAction(12));
