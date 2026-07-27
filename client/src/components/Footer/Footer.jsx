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

{/*                 <iframe
                    title="College Map"
                    src="https://maps.app.goo.gl/SFif3fVxqPyfQBma6?g_st=awb"
                    loading="lazy"
                ></iframe> */}

                <div className="map-container">
                  <iframe
                    title="College Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1603.2724290926058!2d74.3284455!3d16.578817100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0fbee6f7a7a2f%3A0xa3bed061cb26c3e7!2sAgricultuire%20Colleges%20Farm!5e1!3m2!1sen!2sin!4v1784986359474!5m2!1sen!2sin"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>

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