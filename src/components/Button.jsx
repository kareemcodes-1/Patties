import React from 'react'

const Button = ({type, text, className, onClick}) => {
  return (
    <button type='button' onClick={onClick} className={`btn ${type} ${className}`}>{text}</button>
  )
}

export default Button