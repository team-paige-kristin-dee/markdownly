import { UPDATE_MARKDOWN_TITLE } from '../actions/markdownActions';

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
    default:
      return state;
  }
}
