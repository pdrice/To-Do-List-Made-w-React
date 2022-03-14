import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Link} from "react-router-dom";

function AboutApp() {
  return (
    <div className='container'>
    <h1>About This Project</h1>
    <p>This is a React app to write down your todos.</p>
    <Link to='/'><p>Back To Home</p></Link>
    </div>
  )
}

export default AboutApp