import React from 'react'
import {Link} from "react-router-dom";

function AboutLink() {
  return (
    <div className='about'>
    <Link to='/about'><h2>About The App ?</h2></Link>
    </div>
  )
}

export default AboutLink