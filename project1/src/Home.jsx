// destructuring the useState hook or function 
import { useState , useEffect } from "react";
import Bloglist from "./Bloglist";
import useFetch from "./UseFetch";

const Home = () => {
    const { data: blogs, isLoading, error }=useFetch("http://localhost:8000/blogs")
    
    const handleClick=(id) =>{
        const modifiedBlogs=blogs.filter((blog) => blog.id!==id)
        // setBlogs(modifiedBlogs)
    }

    return ( 
        <div className="home">
            {error && <div className="text-center">{ error }</div>}
            {isLoading && <div className="text-center">loading...</div>}
            {blogs && <Bloglist blogs={ blogs } title="All blogs" handleClick={ handleClick } />}
            {/* <button onClick={()=> setName("shifa")} className="bg-orange-200">see name</button>
            <p>{ name }</p> */}
            {/* <Bloglist blogs={ blogs.filter((blog)=> blog.author==="mario") } title="mario's blog"/> */}
        </div>
     );
}
 
export default Home;
