import React, { useState } from 'react'
import User from './components/User'
import Posts from './components/Posts'
import Button from './components/Button'

const App = () => {

  const [users, setUsers] = useState([
    {name: "Ahmed" , email: "ahmed@gmail.com"},
    {name: "Omar" , email: "omar@gmail.com"},
    {name: "Nour" , email: "nour@gmail.com"},
    {name: "Sara" , email: "sara@gmail.com"},
    {name: "Mohammed" , email: "moe@gmail.com"},
    {name: "Ali" , email: "ali@gmail.com"}
  ])

  return (
    <div>
      <Button />
      <div className='grid grid-cols-3'>
        
      {users.map((user, index)=> <User key={index} name={user.name} email={user.email} />)}
      <Posts />
      </div>
    </div>
  )
}

export default App