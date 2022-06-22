import React from 'react'
import { NavLink } from 'react-router-dom'

const Hero = () => {
    return (
        <div>
            <li><NavLink to="/collection">Collection</NavLink></li>
        </div>
    )
}

export default Hero