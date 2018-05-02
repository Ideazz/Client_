import { SHOW_PERSON } from '../constants/action-types';

const personReducer = (state = [], action) => {
  console.log(action.payload);
  switch (action.type) {
    case SHOW_PERSON:
      return [...state, action.payload.data];
    default:
      return state;
  }
};

export default personReducer;
