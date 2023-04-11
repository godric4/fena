import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import styled from 'styled-components'
import SocialIcons from './SocialIcons'

const Hero = () => {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <Wrapper>
      <div className='hero-container'>
        <div
          className='text-half'
          data-aos='zoom-in'
          data-aos-delay='50'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
        >
          <h1>Godric Marto</h1>
          <h4>Creative Frontend Web Developer </h4>
          <SocialIcons />
        </div>
        <div
          className='pic-half'
          data-aos='zoom-out'
          data-aos-delay='50'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
        >
          <img
            src='https://res.cloudinary.com/gentlegiant/image/upload/v1672851804/samples/smith/Developer_activity_gf59kh.svg'
            alt='Godric marto'
            height={'300px'}
          />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  svg {
    color: black;
  }

  color: black;
  overflow: hidden;
  .hero-container {
    text-align: center;
    height: 100vh;
    width: 100vw;

    padding-top: 4rem;
    background-color: var(--light-color);
  }

  .text-half {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 5rem;
  }

  h1 {
    font-size: 3rem;
    font-family: lobster;
  }

  h4 {
    font-weight: 300;
    font-size: 1.3rem;
    padding: 0.5rem;
  }

  @media (min-width: 768px) {
    .hero-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100vw;
      padding-top: 0;
    }

    h1 {
      font-size: 4rem;
      font-family: lobster;
    }
  }
`

export default Hero
