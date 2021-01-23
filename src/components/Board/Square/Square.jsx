import React from 'react'
import { connect } from 'react-redux'

import Cross from './Cross/Cross.jsx'
import Zero from './Zero/Zero.jsx'
import { drawXAction, drawOAction } from '../../../actions/boardActions.js';
import { toggleTurnAction } from '../../../actions/playerActions.js';

import styled from 'styled-components'
const SquareBox = styled.div`
  border: 1px solid lightgray;
  height: 100px;
  width: 100px;
  cursor: pointer;
  :&hover{
    background: lightgray
  }
  @media (max-width: 991px) {
    height: 80px;   
    width: 30%;

  }
`;

function Square(props) {
  const { symbol, index, draw, players, board, toggleTurn,result } = props
  const disabled = symbol ? 'disabled' : ''

  return (
    <>
    <SquareBox className={'cell ' + disabled} onClick={() => {
        if(result.win === null && board[index] === null){
          draw(board, players, index).then(() => { toggleTurn(); })
        }
      }
        }
        
        >
          {symbol ? (symbol === 'X' ? <Cross /> : <Zero />) : ''}
        </SquareBox >

    </>
  )
}
const mapStateToProps = ({ board, players,result }) => ({ board, players,result })

const mapDispatchToProps = dispatch => ({
  draw: (board, players, cellIndex) => {
       if (!board[cellIndex]) {
      if (players[players.turn] === 'X') {
        return dispatch(drawXAction(cellIndex))
      } else {
        return dispatch(drawOAction(cellIndex))
      }
    }
   
  },
  toggleTurn: () => dispatch(toggleTurnAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Square)