import React from 'react'

import styled from 'styled-components'

const ZeroSign = styled.div`
  line-height: 100px;
  font-weight: bold;
  font-size: 32px;  
  text-align:center;
  @media (max-width: 991px) {
    line-height: 80px;
  }

`;


function Zero(props) {
  return <ZeroSign>O</ZeroSign>
}

export default Zero