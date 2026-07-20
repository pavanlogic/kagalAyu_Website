import "./Footer.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="container-fluid">

        <div className="row g-2">

          {/* Contact */}

          <div className="col-lg-3 col-md-6">

            <h5>Contact Us</h5>

            <p>
              <FaMapMarkerAlt className="me-2" />
              Govt. Ayurvedic College,
              <br />
              Kagal, Tal. Kagal,
              <br />
              Dist. Kolhapur - 416216
            </p>

            <p>
              <FaPhoneAlt className="me-2" />
              02325-260105
            </p>

            <p>
              <FaEnvelope className="me-2" />
              deangovtayucollegekagal@gmail.com
            </p>

          </div>

          {/* Quick Links */}

          <div className="col-lg-2 col-md-6">

            <h5>Quick Links</h5>

            <ul>
              <li>              
                 <a
                      href="https://ncismindia.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      NCISM
                  </a>
              </li>
              <li>CCIM</li>
              <li>                 
                <a
                      href="https://www.muhs.ac.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      MUHS
                  </a>
              </li>
              
              <li>AYUSH Ministry</li>
              <li>RTI</li>
              <li>Privacy Policy</li>


            </ul>

          </div>

          {/* Important Links */}

          <div className="col-lg-2 col-md-6">

            <h5>Important Links</h5>

            <ul>
              <li>Admissions</li>
              <li>Examination</li>
              <li>E-Library</li>
              <li>Herbal Garden</li>
              <li>NSS Unit</li>
              <li>Alumni Association</li>
            </ul>

          </div>

          {/* Social */}

          <div className="col-lg-2 col-md-6">

            <h5>Connect With Us</h5>

            <div className="social-icons">

              <a href="#">
                <FaFacebookF />
              </a>

              <a href="#">
                <FaTwitter />
              </a>

              <a href="#">
                <FaYoutube />
              </a>

              <a href="#">
                <FaInstagram />
              </a>

            </div>

          </div>

          {/* Map */}

          
           <div className="col-lg-3 col-md-6">

                <h5>Location</h5>

                <iframe
                    title="College Map"
                    src="https://www.google.com/maps?q=Government+Ayurvedic+College+Kagal&output=embed"
                    loading="lazy"
                ></iframe>

            </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="footer-bottom">

        <div className="container-fluid">

          <div className="row g-2">

            <div className="col-md-4 text-start">
              © 2026 Government Ayurved College & Hospital,kagal
            </div>

            <div className="col-md-4 text-center">
              Website Designed & Developed by Gargi Tech
            </div>

            <div className="col-md-4 text-end">
              Last Updated : July 2026
            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;