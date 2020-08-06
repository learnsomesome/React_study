import { 
  ADD_NUMBER, 
  SUB_NUMBER,
  CHANGE_BANNER,
  CHANGE_RECOMMEND
} from "./constants.js";

export const addAction = num => ({
  type: ADD_NUMBER, 
  num 
});

export const subAction = num => ({
  type: SUB_NUMBER,
  num
})

export const changeBannerAction = banner => ({
  type: CHANGE_BANNER,
  banner
})

export const changeRecommendAction = recommend => ({
  type: CHANGE_RECOMMEND,
  recommend
})
