import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  const date = new Date()
  const currentYear = date.getFullYear()

  return (
    <Wrapper>
      <div className='container'>
        <p className='mail'>godricifeji2008@yahoo.com</p>

        <p>
          Fena-WebDev &copy; Copyright 2022 - {currentYear}. All rights reserved
        </p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  text-align: center;
  background-color: var(--dark-color);
  color: white;
  width: 100vw;

  .mail {
    margin-bottom: -2rem;
  }

  p {
    padding: 1rem;
  }
`

export default Footer
