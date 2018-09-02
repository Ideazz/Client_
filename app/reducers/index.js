import { combineReducers } from 'redux';
import articleReducer from './articleReducer';
import personReducer from './personReducer';
import ideasReducer from './ideasReducer';
import descriptionReducer from './descriptionReducer';
import profileReducer from './profileReducer';

export default combineReducers({
  articles: articleReducer,
  persons: personReducer,
  ideas: ideasReducer,
  description: descriptionReducer,
  profile: profileReducer,
});
