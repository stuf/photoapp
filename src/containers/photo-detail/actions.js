import { curry2 } from '../../shared/helpers';

export const UPDATE_PHOTO_FIELD = 'UPDATE_PHOTO_FIELD';

export const updatePhotoField = curry2((name, value) => ({
  type: UPDATE_PHOTO_FIELD,
  payload: { name, value }
}));
