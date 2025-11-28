import React from 'react'
import { useState } from 'react'
import BlogForm from '../components/BlogForm'
import Bloglist from '../components/Bloglist'
const Blogpage = () => {
  const [refresh, setrefresh] = useState(false)
  return (
    <div>
      <BlogForm onBlogAdd={()=>setrefresh(!refresh)}/>
      <Bloglist key={refresh}/>
    </div>
  )
}

export default Blogpage;