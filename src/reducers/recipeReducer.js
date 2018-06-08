import {
  FETCH_RECIPES,
  NEW_RECIPE,
  SEARCH_RECIPE,
  RESET_SEARCH
} from '../actions/types';

const initialState = {
  items: [],
  item: {},
  suggestions: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_RECIPES:
      return {
        ...state,
        items: action.payload
      };

    case NEW_RECIPE:
      return {
        ...state,
        item: action.payload
      };

    case SEARCH_RECIPE:
      return {
        ...state,
        suggestions: state.items.filter(item =>
          item.name.toLowerCase().includes(action.payload.toLowerCase())
        )
      };

    case RESET_SEARCH:
      return {
        ...state,
        suggestions: []
      };

    default:
      return state;
  }
}
