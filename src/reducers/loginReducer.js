import { PLAYER_1, PLAYER_2 , ERROR_MSG} from '../helpers/actionTypes'

const initialState = {
    player1: 'Lee',
    player2: 'Gal',
    errorMsg: ''
  }
  

  export function loginReducer(state = initialState, action) {
    switch (action.type) {
      case PLAYER_1:
        const newP1State = { ...state }
        newP1State.player1 = action.player_name
        return newP1State
  

      case PLAYER_2:
        const newP2State = { ...state }
        newP2State.player2 = action.player_name
      return newP2State


      case ERROR_MSG:
        const newErrorState = { ...state }
        newErrorState.errorMsg = action.errorMsg
      return newErrorState

      default:
        return state
    }
  }