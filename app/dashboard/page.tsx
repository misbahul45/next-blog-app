import UserInformation from '@/components/dashboard/UserInformation'
import React from 'react'

const page = async() => {
  return (
    <div className="w-full flex flex-col items-center mt-6">
      <h1 className="text-2xl font-semibold mt-4">My Profile</h1>
      <UserInformation />
    </div>
  )
}

export default page
