import { range } from 'lodash'

const initialState = {
  pages: [
    {
      items: []
    }
  ],
};

const gallery = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_PAGE':
      return {
        ...state,
        isFetching: true,
      };
    case 'RECIEVE_PAGE':
      return {
        ...state,
        pages: [...state.pages, action.page],
        isFetching: false
      }
    default:
      return state;
  }
}

export default gallery;
