import "./Header.css";

import logo from "../../assets/images/logo.png";
import ncism from "../../assets/images/ncism.png";
import ayush from "../../assets/images/ayush.png";
import azadi from "../../assets/images/azadi.png";

function Header() {
  return (
    <header className="college-header">
      <div className="container-fluid px-4">

        <div className="row align-items-center">

          {/* Left Logo */}
          <div className="col-lg-1 text-center">
            <img
              src={logo}
              alt="College Logo"
              className="college-logo"
            />
          </div>

          {/* College Details */}
          <div className="col-lg-7 ps-4">

            <h1 className="college-title">
              GOVT. AYURVEDIC COLLEGE, KAGAL
            </h1>

            <h2 className="college-marathi">
              शासकीय आयुर्वेद महाविद्यालय व रुग्णालय, कागल
            </h2>

            <p className="college-address">
              Tal. Kagal, Dist. Kolhapur, Maharashtra - 416216
            </p>

          </div>

          {/* Right Logos */}
          <div className="col-lg-4">
            <div className="header-right">

              <div className="logo-box">
                <img src={ncism} alt="NCISM" />
              </div>

              <div className="logo-box">
                <img src={ayush} alt="AYUSH" />
              </div>

              <div className="logo-box">
                <img src={azadi} alt="Azadi" />
              </div>

            </div>
          </div>

        </div>

      </div>
    </header>
  );
}

export default Header;