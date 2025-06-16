import React from 'react'
import { Link } from 'react-router-dom'
import './btnstyle.css'


const Button = ({ title, to = "" }) => {

  return (
    <Link to={to} className="inline-block">
      <button class="btn-outline px-4 py-2 font-medium text-lg rounded-lg">{title}</button>
    </Link>
  )
}

export default Button