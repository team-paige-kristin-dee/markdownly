import { 
  UPDATE_MARKDOWN_TITLE, 
  UPDATE_MARKDOWN_BODY, 
  CREATE_MARKDOWN, 
  LOAD_MARKDOWN 
} from '../actions/markdownActions';

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
    case LOAD_MARKDOWN:
      return {
        ...state,
        body: action.payload
      };
    case CREATE_MARKDOWN:
      return initialState;
    default:
      return state;
  }
}
