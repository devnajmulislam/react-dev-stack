import NavLogo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <nav className="navbar-sticky">
        {/* nav parent */}
      <div className="bg-orange-200 flex justify-between items-center container mx-auto py-4 px-2 ">
        {/* Navbar left site */}
        <div>
          <img src={NavLogo} alt="Nav logo" />
        </div>

        {/* Navbar middle site */}
        <div>
            <ul className="flex items-center gap-4">
                <li><a href="#">Home</a></li>
                <li><a href="#">Technologies</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>

        {/* Navbar right site */}
        <div>
             <button>Sign In</button>
             <button className="btn btn-active btn-secondary">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
