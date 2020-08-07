const redux = require("redux");

const initialState = {
  counter: 0
}

// reducer(第一次state赋值默认值)
function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      // 纯函数准则
      // 重新创建对象，counter属性覆盖
      return { ...state, counter: state.counter + 1 }
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 }
    case "ADD_NUMBER":
      return { ...state, counter: state.counter + action.num }
    case "SUB_NUMBER":
      return { ...state, counter: state.counter - action.num }
    default:
      // 未匹配到action时，返回原state对象
      return state;
  }
}

// store

const store = redux.createStore(reducer);

// 订阅store的修改
store.subscribe(() => {
  console.log("counter：", store.getState().counter);
})

// action
const action1 = { type: "INCREMENT" };
const action2 = { type: "DECREMENT" };

const action3 = { type: "ADD_NUMBER", num: 5 };
const action4 = { type: "SUB_NUMBER", num: 12 };

// 派发action(执行reducer函数并传入action)
store.dispatch(action1);
store.dispatch(action2);
store.dispatch(action3);
store.dispatch(action4);