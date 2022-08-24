import React from 'react'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <div className='about-page'>
      <h1 className='text-6xl mb-4 about-me'>About Me</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see profile details. This
        project is part of the <br />
        <a href='https://www.udemy.com/course/modern-react-front-to-back/'>
          {' '}
          React Front To Back
        </a>{' '}
        Udemy course by
        <strong>
          <a href='https://traversymedia.com'> Brad Traversy</a>
        </strong>
        .
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400 about-page-last-para'>
        Layout By:
        <a className='text-white' href='https://twitter.com/hassibmoddasser'>
          Hassib Moddasser
        </a>
      </p>
      <Link to="/" className='about-page-btn' >
        Back to Homepage
      </Link>
    </div>
  )
}

export default AboutPage
