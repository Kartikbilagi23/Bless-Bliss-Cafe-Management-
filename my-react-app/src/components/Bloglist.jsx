import React, { useState,useEffect } from 'react'

const Bloglist = () => {
    const [blogs, setblogs] = useState([]);
    const fetchBlogs = async () => {
        const res = await fetch("http://localhost:5000/api/blog")
        const data = await res.json();
        setblogs(data);
    };
    useEffect(() => {
        fetchBlogs();
    }, [])

    return (
        <div className='px-8 py-10 bg-[#fffdf9] min-h-screen'>
            <h2 className='text-3xl font-bold text-center mb-8'>Our Blogs</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {blogs.map((blog) => (
                    <div key={blogs._id} className='bg-white rounded-2xl shadow-lg overflow-hidden'>
                        <div className='p-5'>
                            <h3 className='text-2xl font-semibold mb-2'>{blog.title}</h3>
                            <p className='text-gray-600 mb-4'>{blog.content}</p>
                            <div className='text-sm text-gray-500'>
                                <p>{blog.author}</p>
                                <p>{new Date(blog.date).toLocaleDateString()}</p>
                            </div>
                        </div>
                    </div>))}
            </div>
        </div>
    )
}

export default Bloglist