import React from 'react'
import styled from 'styled-components'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import Projects from './Projects'
import Contact from './Contact'
import SocialIcons from './SocialIcons'

const Page = () => {
  return (
    <Wrapper>
      <Hero />
      <About />
      <Services />
      <Projects />
      <div className='container text-center center'>
        <h3>Contact Me</h3>
        <p>
          Do you want to collaborate, mentor or you have work for me, feel feel
          to reachout
        </p>
        <SocialIcons />
      </div>

      <Contact />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  svg {
    color: var(--light-color);
    font-size: 1rem;
    margin-top: -2rem;
  }
`

export default Page
