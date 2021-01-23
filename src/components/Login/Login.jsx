import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import Button from '../Shared/Button/Button'


import {selectXPLoginAction,selectOLoginAction,selectErrorMsg} from '../../actions/loginActions'


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width:80vw;
  height: 90vh;
  padding: 40px;
  border-radius: 6px;
  box-shadow: 0px 8px 36px #222;
  background-color: #fefefe;
  @media (min-width: 1300px) {
    width:50vw;
  }
`;
const Title = styled.h1`
    display: flex;
    justify-content: center;
    font-family: "Segoe UI", "Ubuntu", "Roboto", "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 2em;
    font-weight: lighter;
    margin-top: 0.25em;
    color: #222;
    text-align:center;
    letter-spacing: 2px;
    @media (max-width: 767px) {
      font-size: 1.5em;
    }
`;

const ErrorMsg = styled.p`
  color: #dc3545;
`;
const InputBox = styled.input`
  padding: 10px 10px;
  border-radius: 5px;
  border: 1px solid #d6d1d5;
  margin-top: 5px;
  width: 100%;
`;
const Label = styled.label`
margin-bottom: 0.5em;
color: #444;
font-weight: lighter;
width:100%;
padding: 0.5rem 14rem;
@media (min-width: 1300px) {
  padding: 0.5rem 10rem;

}
@media (max-width: 991px) {
  padding: 0.5rem 5rem;
}
@media (max-width: 767px) {
  padding: 0.5rem 1rem;
}
`;
const ButtonWrapper = styled.div`
padding: 0.5rem 14rem;
@media (max-width: 991px) {
  padding: 0.5rem 5rem;
}
@media (max-width: 767px) {
  padding: 0.5rem 1rem;
}
`;

function Login(props ) {
  const history = useHistory();

    const {login} = props
    const [player_1, setPlayer1] = useState(null);
    const [player_2, setPlayer2] = useState(null);
    const [displayBtn, setDisplayBtn] = useState(false);

    function checkIfDisplayBtn(){
      if(player_1 === null || player_2 === null ){
        props.dispatch(selectErrorMsg(''));
      }
     else if(player_1 === player_2 || player_1 === '' || player_2 === '') {
        setDisplayBtn(false)
        props.dispatch(selectErrorMsg('Player name should not be identical or empty'));
      } else {
        props.dispatch(selectErrorMsg(''));
        setDisplayBtn(true)
      }
    
    }

    useEffect(() => {
      checkIfDisplayBtn()
     }, [player_1, player_2]);

    function handleChange(e) {
      if(e.target.id === 'player1'){
        setPlayer1(e.target.value)

      }
      if(e.target.id === 'player2'){
        setPlayer2(e.target.value)
      }
    }

    const disabled = displayBtn ? '' : 'disabled'

    return (
        <>
        <Wrapper>
         <Title>Welcom to Tic Tac Toe </Title>
          <Label> Player 1: <InputBox id="player1"  type='text' onChange={handleChange}/></Label>
          <Label> Player 2: <InputBox id="player2"  type='text' onChange={handleChange} /></Label>
          <ErrorMsg> {login.errorMsg !== '' ? login.errorMsg: ''} </ErrorMsg>
          <ButtonWrapper>
              <Button size="full" disabled={disabled} handleClick={(e)=>{
              e.preventDefault()
              props.dispatch(selectXPLoginAction(player_1));
              props.dispatch(selectOLoginAction(player_2));
              props.dispatch(selectErrorMsg(''));
              history.push('/game')
          }}>
              Start New Game
            </Button>
          </ButtonWrapper>
        
        </Wrapper>
        </>
    )
}

const mapStateToProps = ({ login }) => ({login })
export default connect(mapStateToProps)(Login)

