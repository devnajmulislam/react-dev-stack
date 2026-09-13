import FooterImg from "../assets/logo-text.png";

const Footer = () => {
  return (
    <>
      {/* Footer parent */}
      <div className="container mx-auto my-7">
        {/* top parent */}
        <div className="flex justify-between py-2">
          {/* left */}
          <div>
            <div>
              <img src={FooterImg} alt="" />
            </div>
            <p>
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div>
              <ul>
                <li>
                  <a href="#">GitHub</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Linkedin</a>
                </li>
              </ul>
            </div>
          </div>
          {/* middle - product */}
          <div>
            <ul>
              <li>
                <a href="#">PRODUCT</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Technologies</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
            </ul>
          </div>

          {/* company */}
          <div>
            <ul>
              <li>
                <a href="#">COMPANY</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          {/* right - legal*/}
          <div>
            <ul>
              <li>
                <a href="#">LEGAL</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom */}
        <div className="flex justify-between items-center">
          <small>© 2026 Dev Stack. All rights reserved.</small>
          <div className="">
            {" "}
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
