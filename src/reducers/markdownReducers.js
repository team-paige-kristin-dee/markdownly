import { NEW_MARKDOWN_UPDATE } from '../actions/markdownActions';

const initialState = {
  markdown: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case NEW_MARKDOWN_UPDATE: 
      return {
        markdown: action.payload.markdown
      };
    default:
      return state;
  }
}
