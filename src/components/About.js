import React from 'react'
import styled from 'styled-components'

const About = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='center'>
          <h3>Hi, i am Godric. Nice to meet you</h3>
          <p className='about-text'>
            I provide frontend development of websites and applications using
            CSS3, HTML5 and javascript(ReactJs). I do remote work for small
            businesses and institutions and as a naturally curious guy, my
            learning and pratice is up-to-date one line of code at a time.
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: var(--gray-color);
  color: var(--dark-color);

  h3 {
    text-align: center;
    padding-top: 1.5rem;
    margin-bottom: -1.3rem;
  }

  .about-text {
    text-align: center;
    padding: 1.5rem;
    font-weight: 400;
  }
`

export default About
