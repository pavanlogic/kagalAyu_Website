import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
// import "./Header.css";
import "./Navbar.css";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar sticky-top">

      <div className="container-fluid px-4">

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainMenu">

          <ul className="navbar-nav mx-auto">

            {/* Home */}

            <li className="nav-item">
              <Link className="nav-link" to="/">
                <FaHome />
              </Link>
            </li>

            {/* About */}

            <li className="nav-item dropdown">

              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                ABOUT US
              </a>

              <ul className="dropdown-menu">
 
                <li><Link className="dropdown-item" to="/history">History & Introduction</Link></li>

                <li><Link className="dropdown-item" to="/vision-mission">Vision & Mission</Link></li>

                <li><Link className="dropdown-item" to="governing-body">Governing Body</Link></li>

                <li><Link className="dropdown-item" to="org-chart">Organizational Chart</Link></li>

                <li><Link className="dropdown-item" to="affiliation">Affiliation & Recognition</Link></li> 

                <li><Link className="dropdown-item" to="annual-reports">Annual Reports</Link></li> 

                <li><Link className="dropdown-item" to="rti">RTI</Link></li> 
              </ul>

            </li>

            {/* NCISM Permission Orders */}

            <li className="nav-item dropdown">

              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                NCISM PERMISSION
              </a>

              <ul className="dropdown-menu">

                <li><Link className="dropdown-item" to="/about">Permission Letters</Link></li>
                <li><Link className="dropdown-item" to="/about">Teaching Staff Details</Link></li>
                <li><Link className="dropdown-item" to="/about">Non-Teaching Staff Details</Link></li>
                <li><Link className="dropdown-item" to="/about">Intake Capacity</Link></li>
                <li><Link className="dropdown-item" to="/about">Student Admission List</Link></li>
                <li><Link className="dropdown-item" to="/about">Infrastructure Details</Link></li>
                {/* <li><Link className="dropdown-item" to="/about">Hospital Statistics</Link></li> */}
                              <li>
                  <a
                      className="dropdown-item"
                      href="/pdf/Hospital_Statistic.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      Hospital Statistics
                  </a>
              </li>
                <li><Link className="dropdown-item" to="/about">Research Publications</Link></li>

              </ul>

            </li>

            {/* Administration */}

            <li className="nav-item dropdown">

              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                ADMINISTRATION
              </a>

              <ul className="dropdown-menu">

                <li><Link className="dropdown-item" to="deans-message">Dean's Message</Link></li>

                <li><Link className="dropdown-item" to="#">Medical Superintendent</Link></li>

                <li><Link className="dropdown-item" to="#">Deputy Medical Superintendent</Link></li>

                <li><Link className="dropdown-item" to="#">Administrative Staff</Link></li>

              </ul>

            </li>

              {/* Academics */}

              <li className="nav-item mega-dropdown">

                <a href="#" className="nav-link dropdown-toggle">
                  ACADEMICS
                </a>

                <div className="mega-menu">

                  <div className="mega-column">

                    <div className="mega-title">
                      Academics
                    </div>

                    <Link to="/ug-course">UG Course</Link>

                    <Link to="/academic-calendar">Academic Calendar</Link>

                    <Link to="/curriculum">Curriculum & Syllabus</Link>

                    {/* <Link to="/committees">Committees & Cells</Link> */}

                  </div>

                  <div className="mega-column">

                    <div className="mega-title">
                      Research & Publication
                    </div>

                    <Link to="/guest-lectures">Guest Lectures</Link>

                    <Link to="/cme">Continuing Medical Education (CME)</Link>

                    <Link to="/workshops">Workshops</Link>

                    <Link to="/seminars">Seminars</Link>

                    <Link to="/seminars">CME/Conferences</Link>

                  </div>

                  <div className="mega-column">

                    <div className="mega-title">
                      Committees & Cells
                    </div>

                    <Link to="/Anti-Ragging-Cell">Anti-Ragging Cell</Link>

                    <Link to="/College-Council-Committee">College Council Committee</Link>

                    <Link to="/ICC">Internal Complaints Committee (ICC)</Link>

                    <Link to="/SC-ST-Cell">SC/ST Cell</Link>

                    <Link to="/Minority-Cell">Minority Cell</Link>

                    <Link to="/Women-Development-Cell">Women Development Cell</Link>

                    <Link to="/HRDC-Anti-Ragging">HRDC Anti-Ragging Cell</Link>

                    <Link to="/Grievance-Redressal">Grievance Redressal</Link>

                    <Link to="/Research-innovation-entrepreneurship-cell">Research innovation & entrepreneurship development cell</Link>

                    <Link to="/Committee-Against-Sexual-Harassment">Committee Against Sexual Harassment</Link>
                    	

                  </div>

{/*                   <div className="mega-column">

                    <div className="mega-title">
                      Research & Publication
                    </div>
                    <Link to="/research-publication">Research & Publication</Link>
                  </div> */}

                </div>

              </li>

            {/* Admissions */}

         {/*    <li className="nav-item dropdown">

              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                ADMISSIONS
              </a>

              <ul className="dropdown-menu">

                <li><Link className="dropdown-item" to="#">BAMS Admission</Link></li>

                <li><Link className="dropdown-item" to="#">PG Admission</Link></li>

              </ul>

            </li> */}

            {/* Departments */}

            <li className="nav-item dropdown">

              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                DEPARTMENTS
              </a>

              <ul className="dropdown-menu">

                <li><Link className="dropdown-item" to="#">Samhita Siddhanta</Link></li>

                <li><Link className="dropdown-item" to="#">Rachana Sharir</Link></li>

                <li><Link className="dropdown-item" to="#">Kriya Sharir</Link></li>

                <li><Link className="dropdown-item" to="#">Dravyaguna</Link></li>

                <li><Link className="dropdown-item" to="#">Rognidan</Link></li>

                <li><Link className="dropdown-item" to="#">Rasashastra&Bhaishajya Kalpana</Link></li>

                <li><Link className="dropdown-item" to="#">Agadtantra</Link></li>
                <li><Link className="dropdown-item" to="#">Swasthavritta</Link></li>
                <li><Link className="dropdown-item" to="#">Prasuti Tantra &Striroga</Link></li>
                <li><Link className="dropdown-item" to="#">Kaumarbhritya</Link></li>
                <li><Link className="dropdown-item" to="#">Kayachikitsa</Link></li>
                <li><Link className="dropdown-item" to="#">Shalya Tantra</Link></li>
                <li><Link className="dropdown-item" to="#">Shalakya Tantra</Link></li>
                <li><Link className="dropdown-item" to="#">Panchakarma</Link></li>

              </ul>

            </li>

       {/* Faculty */}

            <li className="nav-item dropdown">

              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                FACULTY
              </a>

              <ul className="dropdown-menu">

                {/* <li><Link className="dropdown-item" to="/hospital">Teaching Staff</Link></li> */}
              <li>
                  <a
                      className="dropdown-item"
                      href="/pdf/Teaching_Staff.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      Teaching Staff
                  </a>
              </li>

                <li><Link className="dropdown-item" to="faculty/non-teaching-staff">Non-Teaching Staff</Link></li>

                <li><Link className="dropdown-item" to="#">Faculty Achievements</Link></li>

              </ul>

            </li>

       {/* Student Corner */}

            <li className="nav-item dropdown">

              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                STUDENT CORNER
              </a>

              <ul className="dropdown-menu">

                <li><Link className="dropdown-item" to="/hospital">Attendance</Link></li>

                <li><Link className="dropdown-item" to="#">Examination</Link></li>

                <li><Link className="dropdown-item" to="#">Scholarships</Link></li>

                <li><Link className="dropdown-item" to="#">Student Council</Link></li>

                <li><Link className="dropdown-item" to="#">Alumni</Link></li>

              </ul>

            </li>


            {/* Hospital */}

            <li className="nav-item dropdown">

              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                HOSPITAL
              </a>

              <ul className="dropdown-menu">

                <li><Link className="dropdown-item" to="#">OPD</Link></li>

                <li><Link className="dropdown-item" to="#">IPD</Link></li>

                <li><Link className="dropdown-item" to="/hospital">Panchakarma Unit</Link></li>

                <li><Link className="dropdown-item" to="/hospital">Operation Theatre</Link></li>

                <li><Link className="dropdown-item" to="/hospital">Laboratory</Link></li>

                <li><Link className="dropdown-item" to="/hospital">Pharmacy</Link></li>

              </ul>

            </li>


        {/* Gallery */}

            <li className="nav-item dropdown">

              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                GALLERY
              </a>

              <ul className="dropdown-menu">

                <li><Link className="dropdown-item" to="#">Photo Gallery</Link></li>

                <li><Link className="dropdown-item" to="#">Video Gallery</Link></li>

              </ul>

            </li>

        {/* IQAC */}

            <li className="nav-item dropdown">

              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                IQAC
              </a>

              <ul className="dropdown-menu">

                <li><Link className="dropdown-item" to="/academics/committee-cells/iqac-committee">IQAC Committee</Link></li>

                <li><Link className="dropdown-item" to="#">Goals,Objectives & Code Of Conduct</Link></li>

              </ul>

            </li>


            <li className="nav-item">
              <Link className="nav-link" to="/notices">
                Notices
              </Link>
            </li> 
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                CONTACT US
              </Link>
            </li>


            

          </ul>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;