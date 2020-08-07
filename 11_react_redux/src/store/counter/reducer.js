import { 
  ADD_NUMBER, 
  SUB_NUMBER
} from "./constants";

const defaultCounter = {
  counter: 0
}

function counterReducer(state = defaultCounter, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return {...state, counter: state.counter + action.num}
    case SUB_NUMBER:
      return {...state, counter: state.counter - action.num}
    default:
      return state; 
  }
}

export default counterReducer;