import NavLogo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <nav className="navbar-sticky border-b border-[#ddd3d3d5]  backdrop-blur-sm">
      {/* nav parent */}
      <div className="flex justify-between items-center container mx-auto py-[30px] px-2 ">
        {/* Navbar left site */}
        <div>
          <img src={NavLogo} alt="Nav logo" />
        </div>

        {/* Navbar middle site */}
        <div>
          <ul className="flex items-center gap-4 text-[14px] font-semibold text-[#475569]">
            <li className="font-hover-color">
              <a className="text-[#DB2777]" href="#">
                Home
              </a>
            </li>
            <li className="font-hover-color">
              <a href="#">Technologies</a>
            </li>
            <li className="font-hover-color">
              <a href="#">Projects</a>
            </li>
            <li className="font-hover-color">
              <a href="#">About</a>
            </li>
            <li className="font-hover-color">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* Navbar right site */}
        <div className="text-[14px] font-semibold text-[#475569]">
          <button className="mr-6 cursor-pointer btn-hover-style">
            Sign In
          </button>
          <button className="btn btn-active btn-secondary rounded-4xl cursor-pointer hover:bg-[#a71255]">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
