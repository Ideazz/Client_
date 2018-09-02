import { SHOW_PROFILE } from '../constants/action-types';

const profileReducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case SHOW_PROFILE:
      return action.payload;
    default:
      return state;
  }
};

export default profileReducer;
