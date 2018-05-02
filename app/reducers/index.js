import { combineReducers } from 'redux';
import articleReducer from './articleReducer';
import personReducer from './personReducer';

export default combineReducers({
  articles: articleReducer,
  persons: personReducer,
});
