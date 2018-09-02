import { SHOW_DESCRIPTION } from '../constants/action-types';

const descriptionReducer = (state = [], action) => {
  // console.log(action.payload);
  switch (action.type) {
    case SHOW_DESCRIPTION:
      return action.payload;
    default:
      return state;
  }
};

export default descriptionReducer;
