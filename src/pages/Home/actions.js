import { DATA_FETCHED, LOADING } from './constants';

export function fetchHome() {
  return async dispatch => {
    dispatch(loadingAction(true));
    try {
      const todos = [{ id: '1', name: 'Todo 1' }, { id: '2', name: 'Todo 2' }];
      dispatch(dataFetchedAction(todos));
    } catch (err) {
      dispatch(loadingAction(false));
    }
  };
}

function loadingAction(isLoading) {
  return { type: LOADING, isLoading };
}

function dataFetchedAction(todos) {
  return { type: DATA_FETCHED, todos };
}
