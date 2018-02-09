import { combineReducers } from 'redux';

import photoDetail from './containers/photo-detail/reducer';
import photoList from './containers/photo-list/reducer';

const rootReducer = combineReducers({
  photoDetail,
  photoList,
});

export default rootReducer;
