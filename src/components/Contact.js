import React from 'react'
import styled from 'styled-components'
import { useForm, ValidationError } from '@formspree/react'
import Thanks from './Thanks'

const Contact = () => {
  const [state, handleSubmit] = useForm('mnqyjejz')
  if (state.succeeded) {
    return <Thanks />
  }
  return (
    <Wrapper>
      <div
        className='container pt-3  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minima
            delectus facere recusandae quaerat eligendi ex amet voluptate dolore
            quam.mt-2'
      >
        <div className='center'>
          <form onSubmit={handleSubmit}>
            <div className='from-group'>
              <label htmlFor='email'>Email Address</label>
              <input
                id='email'
                type='email'
                name='email'
                className='form-control'
                placeholder='Enter your mail'
              />
            </div>
            <ValidationError
              prefix='Email'
              field='email'
              errors={state.errors}
            />
            <div className='form-group'>
              <label htmlFor='comment'>Your Message:</label>
              <textarea
                className='form-control'
                rows='3'
                id='message'
                placeholder='What is on your mind?'
                name='message'
              ></textarea>
            </div>

            <ValidationError
              prefix='Message'
              field='message'
              errors={state.errors}
            />
            <button
              type='submit'
              className='btn btn-light w-100 mt-3'
              disabled={state.submitting}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  text-align: center;
  background-color: var(--dark-color);
  color: var(--light-color);
`

export default Contact
