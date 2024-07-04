import { authOptions } from '@/utils/auth'
import { getServerSession } from 'next-auth'
import React from 'react'

const page = async() => {
  const session=await getServerSession(authOptions)
  return (
    <div>{JSON.stringify(session)}</div>
  )
}

export default page