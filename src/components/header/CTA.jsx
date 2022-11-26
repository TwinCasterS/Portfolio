import React from 'react'
import CV from '../../assets/MY_Transcript.pdf'
function CTA() {
  return (
    <div className='cta'>
       <a href={CV} download className='btn'>My Transcript</a>
       <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
