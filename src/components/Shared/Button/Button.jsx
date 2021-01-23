

import React , {useState} from "react";
import styled from 'styled-components'
const Button = styled.button`
  width: 40%;
  cursor: pointer;
  margin-right: 0.25em;
  margin-top: 0.5em;
  padding: 0.938em;
  border: none;
  border-radius: 4px;
  background-color: #22223B;
  color: #fefefe;
  &.btn-full{
    width:100%;
  }

  &:hover{
    background-color: #4A4E69;
    color: #fefefe;
  }
  &:disabled{
    background-color: lightgray;
    color: #fefefe;
    cursor:default
  }
  `;

function ButtonShared(props) {
  const [size] = useState(props.size);

  return (
  <Button disabled={props.disabled} className={`btn-${size}`} onClick={props.handleClick}>{props.children}</Button>
  );
}

export default ButtonShared;
