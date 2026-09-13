import FooterImg from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-white text-slate-600 border-t border-slate-200 my-10">
      {/* Footer parent */}
      <div className="container mx-auto px-6 py-12">
        {/* top parent */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12">
          {/* left */}
          <div className="md:col-span-2">
            <div>
              <img src={FooterImg} alt="" className="h-7" />
            </div>
            <p className="text-sm text-slate-500 max-w-sm py-1">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div>
              <ul className="flex space-x-6 text-sm font-medium text-slate-700">
                <li>
                  <a href="#" className="hover:text-slate-900">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900">
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* middle - product */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-900 uppercase">
              Product
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#" className="text-slate-500 hover:text-slate-900">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-slate-900">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-slate-900">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* company */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-900 uppercase">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#" className="text-slate-500 hover:text-slate-900  ">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-slate-900  ">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-slate-900  ">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          {/* right - legal*/}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-900 uppercase">
              Legal
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#" className="text-slate-500 hover:text-slate-900">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-slate-900">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-slate-200 pb-8" />

        {/* bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex space-x-6">
            {" "}
            <a href="#" className="hover:text-slate-600">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-600">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
