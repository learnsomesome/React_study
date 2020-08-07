import { 
  CHANGE_BANNER,
  CHANGE_RECOMMEND
} from "./constants";

const defaultList = {
  banner: [],
  recommend: []
}

function listReducer(state = defaultList, action) {
  switch (action.type) {
    case CHANGE_BANNER:
      return {...state, banner: action.banner}
    case CHANGE_RECOMMEND:
      return {...state, recommend: action.recommend}
    default:
      return state; 
  }
}

export default listReducer;