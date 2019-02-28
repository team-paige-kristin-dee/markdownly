import { combineReducers } from 'redux';
import markdowns from './markdowns';
import markdownReducers from './markdownReducers';

export default combineReducers({
  markdowns,
  markdownReducers
});
