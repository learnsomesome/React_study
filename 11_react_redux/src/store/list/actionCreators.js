import axios from "axios";

import { 
  CHANGE_BANNER,
  CHANGE_RECOMMEND
} from "./constants";

const changeBannerAction = banner => ({
  type: CHANGE_BANNER,
  banner
})

const changeRecommendAction = recommend => ({
  type: CHANGE_RECOMMEND,
  recommend
})

// redux-thunk 定义的 action 函数
export const getHomeMultidataAction = dispatch => {
  axios({
    url: "http://123.207.32.32:8000/home/multidata"
  }).then(res => {
    const data = res.data.data;
    dispatch(changeBannerAction(data.banner.list));
    dispatch(changeRecommendAction(data.recommend.list));
  })
}
