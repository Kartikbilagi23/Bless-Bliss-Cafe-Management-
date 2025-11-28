import React from 'react'
import { useState } from 'react';
const BlogForm = ({onBlogAdd}) => {
    const [formdata, setformdata] = useState({
        title:"",
        content:"",
        author:"",
        image:"",
    });
    const handlechange=(e)=>{
        setformdata({...formdata,[e.target.name]:e.target.value});
    }
    const handlesubmit= async (e) => {
        e.preventDefault();
        const res=await fetch("http://localhost:5000/api/blog",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(formdata)
        })
    if (res.ok) {
        setformdata({title:"",content:"",author:"",image:""});
        onBlogAdd();
    }
    }
  return (
    <div className='max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6 my-8'>
        <h2 className='text-2xl font-bold mb-4 text-center'>Write a Blog</h2>
        <form onSubmit={handlesubmit} className='space-y-4'>
            <input type="text" name='title' placeholder='Blog Title' value={formdata.title} onChange={handlechange} className='w-full border p-2 rounded' required/>
            <input type="text" name="author" placeholder='Your Name' value={formdata.author} onChange={handlechange} className='w-full border p-2 rounded'required/>
            <textarea name="content" placeholder='Write ur Story..' value={formdata.content} onChange={handlechange} className='w-full border p-2 rounded h-40'></textarea>
            <button type='submit'className='bg-amber-700 text-white py-2 px-6 rounded hover:bg-amber-800'>Publish</button>
        </form>
    </div>
  );
};

export default BlogForm;