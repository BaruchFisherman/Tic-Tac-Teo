import React from 'react';
import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Board from './components/Board/Board.jsx'
import Login from './components/Login/Login.jsx'
import styled from 'styled-components'

const AppWrapper = styled.div`
    font-family: Lato;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #4A4E69;
    
`;
function App() {
  return (
    <AppWrapper >
      <Router>    
          <Switch>
            <Route path="/game">
              <Board />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
      </Router>
    </AppWrapper>
  );
}

export default App;
