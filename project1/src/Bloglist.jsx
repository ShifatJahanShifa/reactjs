import { Link } from "react-router-dom";

const Bloglist = ({blogs,title,handleClick}) => {
    return ( 
        <div>
            <h1>{ title }</h1>
            {
                blogs.map((blog)=>(
                    <div key={blog.id} className="p-2 mb-3 border border-s-slate-600 shadow-md">
                        <Link to={`/blogs/${blog.id}`}>
                        <p> { blog.title } </p> 
                        <p>written by { blog.author }</p>  
                        </Link> 
                        <button className="bg-green-300" onClick={()=> handleClick(blog.id)}>Delete</button>
                    </div>
                ))
            }
        </div>
     );
}
 
export default Bloglist;