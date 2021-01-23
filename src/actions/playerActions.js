import { PLAYER_X, TURN, PLAYER_O ,RESET_PLAYERS} from '../helpers/actionTypes'

export function selectXPlayerAction(player) {
  return {
    type: PLAYER_X,
    player
  }
}

export function selectOPlayerAction(player) {
  return {
    type: PLAYER_O,
    player
  }
}

export function toggleTurnAction() {
  return {
    type: TURN
  }
}
export function resetPlayers() {
  return {
    type: RESET_PLAYERS
  }
}

