import { combineReducers } from 'redux';

import photoDetail from './containers/photo-detail/reducer';

const rootReducer = combineReducers({
  photoDetail
});

export default rootReducer;
