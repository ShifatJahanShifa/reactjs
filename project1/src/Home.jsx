// destructuring the useState hook or function 
import { useState , useEffect } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
    const [blogs,setBlogs]=useState(
        [
            {title: "nothing", body: "lorem ipsum..", author: "mario", id: 1},
            {title: "somethign", body: "lorem ipsum..", author: "lugui", id: 2},
            {title: "anything", body: "lorem ipsum..", author: "mario", id: 3}
        ]
    )

    const [ name, setName ]=useState("mario")

    const handleClick=(id) =>{
        const modifiedBlogs=blogs.filter((blog) => blog.id!==id)
        setBlogs(modifiedBlogs)
    }

    useEffect(()=>{
        console.log("use effect ran")
    },[name])

    return ( 
        <div className="home">
            <Bloglist blogs={ blogs } title="All blogs" handleClick={ handleClick } />
            <button onClick={()=> setName("shifa")} className="bg-orange-200">see name</button>
            <p>{ name }</p>
            {/* <Bloglist blogs={ blogs.filter((blog)=> blog.author==="mario") } title="mario's blog"/> */}
        </div>
     );
}
 
export default Home;
