import React from 'react'
import { Button } from './Button'
import './hero.scss'

function Hero() {
    return (
        <div className="hero-container">
            <h1>CNSTRCT </h1>
            <p>Done. Faster.</p>
            <div className="hero-btns" >
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large' >TALK WITH US</Button>
            </div>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large' >OUR PROJECTS<i className="fas fa-toolbox"></i></Button>
            </div>
        </div>
    )
}

export default Hero
