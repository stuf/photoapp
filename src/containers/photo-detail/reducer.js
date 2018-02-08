import { assoc, assocPath } from 'ramda';
import { UPDATE_PHOTO_FIELD } from './actions';

const initialState = {};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_PHOTO_FIELD:
      const { name, value } = payload;
      return assoc(name, value, state);
    default:
      return state;
  }
};

export default reducer;
