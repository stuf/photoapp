import { combineReducers } from 'redux';

import photos from './photos';
import photoDetail from './photo-detail';

const rootReducer = combineReducers({
  photos,
  photoDetail
});

export default rootReducer;
