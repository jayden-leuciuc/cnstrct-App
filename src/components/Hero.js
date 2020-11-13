import React from 'react'
import { Button } from './Button'
import './hero.scss'

function Hero() {
    return (
        <div className="hero-container">
            <h1>The islands are calling.</h1>
            <p>Will you answer?</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>LEARN MORE</Button>
            </div>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large'>VISUALIZE PARADISE <i className="far fa-play-circle"></i></Button>
            </div>
        </div>
    )
}

export default Hero
