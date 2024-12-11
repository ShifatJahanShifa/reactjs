const Navbar = () => {
    return ( 
        <nav className="navbar flex flex-col gap-2">
            <h1 className="text-center">The dojo blog</h1>
            <div className="links mx-auto flex flex-row gap-3 justify-center">
                <a href="#">home</a>
                <a href="#">create</a>
            </div>
        </nav>
     );
}
 
export default Navbar;