import axios from 'axios';
import { ADD_ARTICLE, SHOW_PERSON } from '../constants/action-types';

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
