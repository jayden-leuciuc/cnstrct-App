import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './footer.scss'

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join Our Newsletter For The Best Deals!
                </p>
                <p className="footer-subscription-text">
                    You can cancel at any time!
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email:" className="footer-input"/>
                        <Button buttonStyle='btn--outline'>Subscribe Now!</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About us</h2>
                        <Link to='/sign-up'>FAQ</Link>
                        <Link to='/sign-up'>Testimonitals</Link>
                        <Link to='/sign-up'>Careers</Link>
                        <Link to='/sign-up'>Terms of Service</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About us</h2>
                        <Link to='/sign-up'>FAQ</Link>
                        <Link to='/sign-up'>Testimonitals</Link>
                        <Link to='/sign-up'>Careers</Link>
                        <Link to='/sign-up'>Terms of Service</Link>
                    </div>
                </div>
            </div>
            <section className="social-medi">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/'className="social-logo">
                            XPLOR <i className="fab fa-typo3"></i>
                        </Link>
                    </div>
                    <small className="website-rights">XPLOR © 2020</small>
                    <div className="social-icons">
                        <Link className="social-icon link facebook"
                        to='/'
                        target="_blank"
                        aria-label='Facebook'>
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="social-icon link instagram"
                        to='/'
                        target="_blank"
                        aria-label='Instagram'>
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link className="social-icon link youtube"
                        to='/'
                        target="_blank"
                        aria-label='Youtube'>
                            <i className="fab fa-youtube"></i>
                        </Link>
                        <Link className="social-icon link twitter"
                        to='/'
                        target="_blank"
                        aria-label='Twitter'>
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link className="social-icon link linkedin"
                        to='/'
                        target="_blank"
                        aria-label='LinkedIn'>
                            <i className="fab fa-linkedin"></i>
                        </Link>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
