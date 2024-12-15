import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./UseFetch";

const BlogDetails = () => {
    const { id }=useParams()
    const { data: blog, isLoading, error }=useFetch("http://localhost:8000/blogs/"+id)
    const Navigate=useNavigate()

    const handleClick=()=>{
        fetch("http://localhost:8000/blogs"+blog.id,{
            method: 'DELETE'
        })
        .then(()=>{
            Navigate('/')
        })
    }
    return ( 
        <>
            { isLoading && <div>Loading... </div>}
            { error && <div> { error }</div>}
            { blog && 
            <div className="flex flex-col gap-3 p-3 shadow-md bg-slate-200">
                <div className="bg-slate-300 text-center mx-auto w-fit">
                    <h2>{ blog.title }</h2>
                    <h3>written by { blog.author }</h3>
                </div>
                <div>
                    <p>{ blog.body }</p>
                </div>
                <div className="mx-auto">
                    <button className="bg-red-200 p-3 text-center border rounded-md" onClick={handleClick}>Delete</button>
                </div>
            </div>
            }
        </>
     );
}
 
export default BlogDetails;