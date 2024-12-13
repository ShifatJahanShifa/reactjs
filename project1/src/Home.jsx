// destructuring the useState hook or function 
import { useState , useEffect } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
    const [blogs,setBlogs]=useState(null)
    const [ isLoading, setIsLoading ]=useState(true)
    const [ name, setName ]=useState("mario")
    const [ error, setError ]=useState(null)

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
                if(!res.ok) 
                {
                    throw Error("not found")
                }
                return res.json()
            })
            .then((data)=>{
                setBlogs(data)
                setIsLoading(false)
                setError(null)
            })
            .catch((err)=>{
                setIsLoading(false)
                setError(err.message)
            })
        },1000)
    },[])

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
