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
      <div className='container pt-3 mt-2'>
        <div className='contact-form'>
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
              className='btn btn-dark text-light w-100 mt-3'
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
  display: flex;
  place-items: center;

  .contact-form {
    width: 500px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
`

export default Contact
