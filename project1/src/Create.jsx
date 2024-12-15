import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const [ title, setTitle ]=useState("")
    const [ body, setBody ]=useState("")
    const [ author, setAuthor ]=useState("mario")
    const [ isPending, setIsPending ]=useState(false)
    const Navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        setIsPending(true)
        const newBlog= { title, body, author }
        
        fetch("http://localhost:8000/blogs",{
            method: 'POST',
            headers: {"content-type": "application/json"},
            body: JSON.stringify(newBlog)
        })
        .then(()=>{
            console.log("new blog created")
            setIsPending(false)
            // history.go(-1)
            Navigate('/')
        })
    }

    return ( 
        <div>
            <h1 className="text-center">Create a new blog</h1>
            <form className="bg-slate-200 p-5 mx-auto flex flex-col gap-2 w-1/2" onSubmit={handleSubmit}>
                <div>
                    <label for="title">Title: </label><br></br>
                    <input 
                        type="text"
                        id='title'
                        required
                        value={title}
                        onChange={(e)=> setTitle(e.target.value)}
                        className='w-full'
                    />
                </div>
                <div>
                    <label for="body">Body: </label><br></br>
                    <textarea
                        type="text"
                        id='body'
                        required
                        value={body}
                        onChange={(e)=> setBody(e.target.value)}
                        className='w-full'
                        rows="5"
                        cols="30"
                    ></textarea>
                </div>

                <div className='mb-3'>
                    <label for="author">Author: </label><br></br>
                    <select 
                        value={author}
                        onChange={(e)=> setAuthor(e.target.value)}
                        id='author'
                        className='w-full'
                    >
                        <option value="mario">mario</option>
                        <option value="yoshi">yoshi</option>
                    </select>     
                </div>

                { !isPending &&
                    <button type="submit" className="bg-green-200 p-2 mt-2 border border-green-950 rounded-md mx-auto">Create Blog</button>
                }

                { isPending &&
                    <button type="submit"  disabled className="bg-green-200 p-2 mt-2 border border-green-950 rounded-md mx-auto">Adding Blog...</button>
                }

            </form>
        </div>
     );
}
 
export default Create;