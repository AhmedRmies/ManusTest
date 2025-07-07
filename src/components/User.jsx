import React from 'react'

const User = ({name, email}) => {
  return (
    <div className='flex flex-col justify-center items-center border-1 p-2 m-3 w-48'>
        <h1 className='text-2xl pb-3'>{name}</h1>
        <hr className='w-full'/>
        <p className='text-lg pt-3'>{email}</p>
    </div>
  )
}

export default User