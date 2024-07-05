import React from 'react'

interface Props{
    notif:string,
    succes:boolean
}

const Notification = ({ notif, succes }:Props) => {

  return (
    <div className="absolute top-0 right-0 w-64 py-2">
      <h1>{notif}</h1>
    </div>
  )
}

export default Notification
