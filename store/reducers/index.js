import { combineReducers } from 'redux';

import formReducer from './form.reducer';
import gameReducer from './game.reducer';

export default combineReducers({
  form: formReducer,
  game: gameReducer,
});
