import { DATA_FETCHED, LOADING } from './constants';

const initialState = {
  isLoading: true,
  todos: [],
};

export default function reducer(state = initialState, action = {}) {
  const { type, isLoading, todos } = action;
  switch (type) {
    case DATA_FETCHED:
      return {
        ...state,
        isLoading: false,
        todos
      };
    case LOADING:
      return {
        ...state,
        isLoading,
      };
    default:
      return state;
  }
}
