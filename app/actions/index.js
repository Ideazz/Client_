import axios from 'axios';
import { ADD_ARTICLE, SHOW_PERSON, SHOW_IDEAS, SHOW_DESCRIPTION, SHOW_PROFILE, FETCH_USER_IDEAS } from '../constants/action-types';

export const addArticle = article => ({
  type: ADD_ARTICLE,
  payload: article,
});
// export default addArticle;

export const showPerson = url => ({
  type: SHOW_PERSON,
  payload: axios.get(url),
});
// export default showPerson;

export const showIdeas = url => ({
  type: SHOW_IDEAS,
  payload: axios.get(url).then(res => res.data),
});

export const showDescription = url => ({
  type: SHOW_DESCRIPTION,
  payload: axios.get(url).then(res => res.data),
});

export const showProfile = url => ({
  type: SHOW_PROFILE,
  payload: axios.get(url).then(res => res.data),
});

export const fetchUserIdeas = url => ({
  type: FETCH_USER_IDEAS,
  payload: axios.get(url).then(res => res.data),
});
