import { AsyncStorage } from 'react-native';
import { curry3 } from '../shared/helpers';

const handleError = err => err && console.error('Error committing state;', err);

const commitState = (state, key = 'state') =>
  AsyncStorage.setItem(key, JSON.stringify(state), handleError);

export const persistState = curry3((store, next, action) => {
  const nextState = next(action);

  commitState(store.getState());

  return nextState;
});
