import React from 'react'
import './error-indicator.css'
import icon from './oops.png'

const ErrorIndicator = () => {
    return(
        <div className="error-indicator">
            <img src={icon} alt="error icon"/>
            <span>
                something has gone terribly wrong
            </span>
        </div>
    )
}

export default ErrorIndicator