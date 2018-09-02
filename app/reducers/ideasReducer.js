import { SHOW_IDEAS } from '../constants/action-types';

const ideasReducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case SHOW_IDEAS:
      return action.payload;
    default:
      return state;
  }
};

export default ideasReducer;
