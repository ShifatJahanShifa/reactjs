import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar flex flex-col gap-2">
            <h1 className="text-center">The dojo blog</h1>
            <div className="links mx-auto flex flex-row gap-3 justify-center">
                <Link to="/">home</Link>
                <Link to="/create">create new blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;