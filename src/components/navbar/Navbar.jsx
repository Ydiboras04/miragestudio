import './Navbar.css';

function Navbar(){
    return(
        <>
            <div className="navbar">
                <div className="logo">
                    <img src="./illusion.png" alt="logo" srcset="/illusion.png" />
                </div>
                <div className="nav-links">
                    <nav className="links">
                        <p>Home</p>
                        <p>About</p>
                        <p>Contact</p>
                        <p>Services</p>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default Navbar;