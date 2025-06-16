import React from 'react'
import { Link } from 'react-router-dom'
import './btnstyle.css'

const Button = ({ title, to = "", color = "" }) => {

  return (
    <Link to={to} className="inline-block">
      <button style={{ '--btn-before-bg': color }}
        className={`cusbutton btn-outline px-4 py-2 font-medium text-lg rounded-lg border-2 bg-transparent text-cuswhite text-shadow-lg/30`}>
        {title}
      </button>
    </Link>
  )
}

export default Button