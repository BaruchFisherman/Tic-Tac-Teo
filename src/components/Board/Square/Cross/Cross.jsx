import React from 'react'


import styled from 'styled-components'

const CrossSign = styled.div`
  line-height: 100px;
  font-weight: bold;
  font-size: 32px;  
  text-align:center;
  @media (max-width: 991px) {
    line-height: 80px;
  }

`;


function Cross(props) {
  return <CrossSign>X</CrossSign>
}

export default Cross