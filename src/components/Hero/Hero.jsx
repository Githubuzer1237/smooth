import React from 'react'
import './Hero.css'
const Hero = ({ num }) => {
  return (
<>
<section className={`hero hero${num}`} id={`hero${num}`}>
  <div className="container">
    <div className="hero__wrapper">
      <h1> HERO {num} </h1>
    </div>
  </div>
</section>
</>
  )
}

export default Hero
