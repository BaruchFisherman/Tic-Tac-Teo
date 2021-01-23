import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom';

import Summary from './Summary/Summary.jsx'
import Square from './Square/Square.jsx'
import {resetAction} from '../../actions/boardActions'
import {resetResult} from '../../actions/resultsAction'
import {resetPlayers} from '../../actions/playerActions'

import Button from '../Shared/Button/Button'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width:80vw;
  height: 90vh;
  padding: 40px;
  border-radius: 6px;
  box-shadow: 0px 8px 36px #222;
  background-color: #fefefe;
  @media (max-width: 767px) {
    padding: 40px 20px;
  }
  @media (min-width: 1300px) {
    width:50vw;
  }
`;
const BoardGame = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;
@media (max-width: 767px) {
  width: 100%;
  margin: 2rem 0;
}
`;

  const ButtonWrapper = styled.div`
  width: 300px;
  display:flex;
  margin: auto;
  justify-content: space-around;
  @media (max-width: 767px) {
    margin:0
  }
`;
  
function Board(props) {
  const history = useHistory();
  const { board } = props
  return (
    <>
    <Wrapper>
    <Summary />
      <BoardGame id="board">
        {
          board.map((symbol, i) => <Square key={i} index={i} symbol={symbol} />)
        }
      </BoardGame>
      <ButtonWrapper>
          <Button handleClick={()=>{
            props.dispatch(resetAction());
            props.dispatch(resetResult());
            props.dispatch(resetPlayers());

          }}>Reset</Button>
              
          <Button  handleClick={(e)=>{
            e.preventDefault()
            props.dispatch(resetAction());
            props.dispatch(resetResult());
            props.dispatch(resetPlayers());
            history.push('/')
          }}>New Game</Button>
      </ButtonWrapper>
      </Wrapper>
    </>
  )
}

export default connect(({ board }) => ({ board }))(Board)
