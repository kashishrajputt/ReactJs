"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const page = () => {
    const [users, setUsers] = useState([])
    const getUsers = async ()=>{
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
    
    setUsers(data)
  }
 useEffect(() => {
   getUsers()
 }, [])
 
  return (
    <>
    <button onClick = {getUsers} className = 'bg-green-600 text-white px-4 py-2 rounded font-bold '>Get Data</button>
    <div className='p-8 bg-slate-600 mt-5'></div>
    <ul>
      {users.map((e)=>{
        return <li>{e.username} ----- <a href={`/${e.id}`}>Explore</a></li>
        
      })}
    </ul>
    </>
  )
}

export default page
