import { combineReducers } from 'redux'

import { boardReducer } from './boardReducer'
import { playerReducer } from './playerReducer'
import { resultReducer } from './resultReducer';
import { loginReducer } from './loginReducer';

export default combineReducers({
  board: boardReducer,
  players: playerReducer,
  result: resultReducer,
  login: loginReducer
})