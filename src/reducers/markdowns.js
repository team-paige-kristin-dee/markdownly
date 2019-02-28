import { CREATE_MARKDOWN } from '../actions/markdownActions';

const initialState = {
  markdowns: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_MARKDOWN:
      return { 
        markdowns: [...state.markdowns, action.payload]
      };
    default:
      return state;
  }
}

