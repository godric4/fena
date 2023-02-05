import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo-dark.jpg'
import SocialIcons from './SocialIcons'

const Navbar = () => {
  return (
    <Wrapper>
      <img src={logo} alt='Logo' height={'40px'} />
      <SocialIcons className='icons' />
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  position: fixed;
  width: 100vw;
  background-color: black;
  color: white;
  height: 4rem;
  z-index: 10;
  display: flex;
  justify-content: space-around;
  align-items: center;

  svg {
    font-size: 1rem !important;
    color: white;
  }
`
export default Navbar
