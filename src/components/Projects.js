import React from 'react'
import styled from 'styled-components'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <Wrapper>
      <div className=' '>
        <h1>My Projects</h1>
        <ProjectCard />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 1rem 0;
  background-color: var(--dark-color);
  color: var(--light-color);

  h1 {
    padding: 2rem 0;
    text-align: center;
    font-size: 1.5rem;
  }
`

export default Projects
