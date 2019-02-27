import { UPDATE_MARKDOWN_TITLE, UPDATE_MARKDOWN_BODY } from '../actions/markdownActions';

const initialState = {
  title: '', 
  body: '' 
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_MARKDOWN_TITLE: 
      return {
        ...state,
        title: action.payload
      };
    case UPDATE_MARKDOWN_BODY:
      return {
        ...state,
        body: action.payload
      };
    default:
      return state;
  }
}
