// destructuring the useState hook or function 
import { useState , useEffect } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
    const [blogs,setBlogs]=useState(null)
    const [ isLoading, setIsLoading ]=useState(true)
    const [ name, setName ]=useState("mario")

    const handleClick=(id) =>{
        const modifiedBlogs=blogs.filter((blog) => blog.id!==id)
        setBlogs(modifiedBlogs)
    }

    setTimeout(()=>{
        
    },1000)
    useEffect(()=>{
        setTimeout(()=>{
            fetch("http://localhost:8000/blogs")
            .then(res => {
                return res.json()
            })
            .then((data)=>{
                setBlogs(data)
                setIsLoading(false)
            })
        },1000)
    },[])

    return ( 
        <div className="home">
            {isLoading && <div className="text-center">loading...</div>}
            {blogs && <Bloglist blogs={ blogs } title="All blogs" handleClick={ handleClick } />}
            {/* <button onClick={()=> setName("shifa")} className="bg-orange-200">see name</button>
            <p>{ name }</p> */}
            {/* <Bloglist blogs={ blogs.filter((blog)=> blog.author==="mario") } title="mario's blog"/> */}
        </div>
     );
}
 
export default Home;
