import { CREATE_MARKDOWN, DELETE_MARKDOWN } from '../actions/markdownActions';

const initialState = {
  markdowns: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_MARKDOWN:
      return { 
        markdowns: [...state.markdowns, action.payload]
      };
    case DELETE_MARKDOWN:
      return { 
        markdowns: state.filter(markdown => markdown !== action.markdown)
      };
    default:
      return state;
  }
}

