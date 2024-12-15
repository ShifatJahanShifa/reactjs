import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="mx-auto text-center bg-slate-200 border rounded-md w-2/5">
            <h2>The page is not found</h2>
            <Link to='/'>
                <h3>Go to the home page</h3>
            </Link>
        </div>
     );
}
 
export default NotFound;