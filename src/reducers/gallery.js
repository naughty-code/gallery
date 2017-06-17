
const initialState = {
  items: Array(50).fill("Hello")
};

const gallery = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PAGE':
      return {
        ...state,
        items: [...state.items, ...action.items]
      };
    default:
      return state;
  }
}

export default gallery;

export const getItems = (state) => state.gallery.items;
