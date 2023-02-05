import React from 'react'
import web from '../assets/webdesign.png'
import app from '../assets/webAppDev.png'
import dev from '../assets/webDev.png'
import styled from 'styled-components'
const Services = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='row'>
          <div
            className='col-sm-4'
            data-aos='slide-left'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
          >
            <p className='service-name'>Web Development</p>
            <img src={dev} alt='Web Development' className='service-img' />
            <p className='service-desc'>
              I bring ideas to life in a web browser using HTML, CSS &
              Javascript
            </p>
          </div>
          {/*  */}
          <div
            className='col-sm-4'
            data-aos='zoom-out'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
          >
            <p className='service-name'>App Development</p>
            <img src={app} alt='Web Development' className='service-img' />
            <p className='service-desc'>
              I build standalone web application using PWA technology
            </p>
          </div>
          <div
            className='col-sm-4'
            data-aos='slide-right'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
          >
            <p className='service-name'>Web Design</p>
            <img src={web} alt='Web Development' className='service-img' />
            <p className='service-desc'>
              I leverage frontend tools to give users best experience
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  color: var(--light-color);
  background-color: var(--dark-gray);
  text-align: center;
  padding-top: 2rem;

  img {
    height: 100px;
  }

  .service-card {
    background-color: var(--dark-gray);
    margin: 0.5rem;
    width: 250px;
  }

  .service-name,
  .service-desc {
    background-color: var(--dark-color);
    padding: 0.4rem;
  }

  .service-name {
    font-weight: bold;
  }

  .service-desc {
    font-weight: light;
    font-size: 0.9rem;
  }
`
export default Services
