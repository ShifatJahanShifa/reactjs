// destructuring the useState hook or function 
import { useState } from "react";

const Home = () => {
    const [blogs,setBlogs]=useState(
        [
            {title: "nothing", body: "lorem ipsum..", author: "mario", id: 1},
            {title: "somethign", body: "lorem ipsum..", author: "lugui", id: 2},
            {title: "anything", body: "lorem ipsum..", author: "shifa", id: 3}
        ]
    )

    return ( 
        <div className="home">
            <h1>List of the blogs</h1>
            {
                blogs.map((blog)=>(
                    <div key={blog.id} className="p-2 mb-3 border border-s-slate-600 shadow-md">
                        <p> { blog.title } </p> 
                        <p>{ blog.author }</p>   
                    </div>
                ))
            }
        </div>
     );
}
 
export default Home;
