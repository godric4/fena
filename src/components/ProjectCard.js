import React from 'react'
import styled from 'styled-components'
import { projects } from '../data'

const ProjectCard = () => {
  return (
    <Wrapper>
      <div className=' container p-2'>
        <div className='row'>
          {projects.map((project) => {
            const { desc, title, link, img, id } = project
            return (
              <div className='grid-item col-sm-4' key={title}>
                <a href={link} className='btn  text-light'>
                  <img src={img} alt={title} />
                </a>
                <div className='details'>
                  <p>
                    {title} <span>({desc})</span>
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  img {
    height: 200px;
    width: 100%;
  }

  .grid-item {
    margin: 0.5rem 0rem;
    border: 5px solid var(--dark-color);
  }

  .details {
    background-color: var(--black-color);
    height: 10px;
    text-align: center;
    padding: 1rem 0rem;
    margin-top: -1rem;
  }

  .grid-item:hover {
    color: red;
    transform: scale(1.1);
    transition: var(--transition);
  }

  a {
    width: 100;
    padding: 0.5rem 1rem;
  }
`

export default ProjectCard
