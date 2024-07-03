import React from 'react'

interface Props{
  text:string
  bgColor:string
  onClick?:()=>void
  type:'button' | 'submit' | 'reset'
}

const Button = ({ text, bgColor, onClick, type }:Props) => {
  return (
    <button type={type} className={`${bgColor}`} onClick={onClick}>{text}</button>
  )
}

export default Button