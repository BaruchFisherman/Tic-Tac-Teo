import { PLAYER_1, PLAYER_2, ERROR_MSG } from '../helpers/actionTypes'

// export function selectXPLoginAction(player_name) {
//   return (dispatch) => {
//     return new Promise(resolve => {
//       dispatch({
//         type: PLAYER_1,
//         player_name
//       })
//       resolve()
//     })
//   }
// }

// export function selectOLoginAction(player_name) {
//   return (dispatch) => {
//     return new Promise(resolve => {
//       dispatch({
//         type: PLAYER_2,
//         player_name
//       })
//       resolve()
//     })
//   }
// }
export function selectXPLoginAction(player_name) {
  return {
    type: PLAYER_1,
    player_name
  }
  
}

export function selectOLoginAction(player_name) {
  return {
    type: PLAYER_2,
    player_name
  }
}
export function selectErrorMsg(errorMsg) {
  return {
    type: ERROR_MSG,
    errorMsg
  }
}