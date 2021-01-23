import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { checkResult } from '../../../actions/resultsAction.js';

const Title = styled.h1`
    display: flex;
    justify-content: center;
    font-family: "Segoe UI", "Ubuntu", "Roboto", "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 2em;
    font-weight: lighter;
    margin-top: 0.25em;
    color: #222;
    letter-spacing: 2px;
    @media (max-width: 767px) {
      font-size: 1.5em;
      margin-bottom:1em
    }
`;
const SummaryWrapper = styled.div`

`;
const TagWins = styled.span`
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
    osition: relative;
    padding: .75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: .25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    width:300px;
    margin: auto;
    @media (max-width: 767px) {
      width: 100%;
      margin: 2rem 0;
    }
`;
const TagResults = styled.span`
    color: #004085;
    background-color: #cce5ff;
    border-color: #b8daff;
    osition: relative;
    padding: .75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: .25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
`;
const Players = styled.p`
  padding: 1rem 3rem;
  margin-bottom: 0;
  margin-top: 1rem;
  text-align: center;
  span{
    margin:0 20px;
  }
  @media (max-width: 991px) {
    padding: 0 2rem;
    margin:0
  }
`;


function Summary(props) {
  const { board, players, result, checkResult, login } = props;

  if (!(result.tie || result.win)) {
    checkResult(board)
  }

  return (
      <SummaryWrapper>
        {
          result.win !== 'X' &&  result.win !== 'O' && (
            <>
            <Title>Current Player: 
            <strong>{players.turn === 'p1' ? login.player1 : login.player2}</strong>
            </Title>
            <Players>
              <p><span><strong>{login.player1}</strong>: {players.p1} </span>| <span><strong>{login.player2}</strong>: {players.p2}</span></p>
            </Players>
            </>
          )
        }

        {
          result.win === 'X' && (
              <TagWins>
                {players.p1 === 'X' ? login.player1 + ' Wins!' : login.player2  + ' Wins!'}
              </TagWins>
          )
        }
        {
          result.win === 'O' && (
              <TagWins>
                {players.p1 === 'O' ? login.player1 + ' Wins!' : login.player2  + ' Wins!'}
              </TagWins>
          )
        }
         {
          result.tie &&(
              <TagResults>
               It's a Draw 
              </TagResults>
          )
        }
      </SummaryWrapper>
  )
}

export default connect(
  ({ board, players, result,login }) => ({ board, players, result,login }),
  dispatch => ({ checkResult: (board) => dispatch(checkResult(board)) })
)(Summary)