import React from 'react'
import styled from 'styled-components'

const Thanks = () => {
  return (
    <Wrapper className='container '>
      <p className='text-center'>
        Thanks for reaching out! I will get back to you
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: black;
  color: greenyellow;
`

export default Thanks
