import React from 'react'
import styled from 'styled-components'
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa'

const SocialIcons = () => {
  return (
    <Wrapper>
      <div>
        <a href='https://twitter.com/Fenalito'>
          <FaTwitter />
        </a>
        <a href='https://www.linkedin.com/in/godric-ikeji-519b03119/'>
          <FaLinkedin />
        </a>
        <a href='https://www.instagram.com/fena_400/'>
          <FaInstagram />
        </a>
        <a href="https://wa.me/2348188534279?text=Hello %20Godric,%20i%20got%20something%2important%20to%20share%20with%20you'">
          <FaWhatsapp />
        </a>
        <a href='https://github.com/godric4'>
          <FaGithub />
        </a>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  svg {
    margin: 0 0.4rem;
    font-size: 1.7rem;
  }

  svg:hover {
    transform: scale(1.5);
    transition: var(--transition);
  }
`

export default SocialIcons
