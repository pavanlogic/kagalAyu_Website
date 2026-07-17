import "./Header.css";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function TopBar() {
    return (

        <div className="topbar">

            <div className="container-fluid">

                <div className="topbar-left">

                    <span>
                        <FaEnvelope />
                        deangovtayucollegekagal@gmail.com
                    </span>

                    <span>
                        <FaPhoneAlt />
                        02325 260105
                    </span>

                </div>

                <div className="topbar-right">

                    <a href="#">NCISM</a>

                    <a href="#">NCIM</a>

                    <a href="#">CCIM</a>

                    <a href="#">MUHS</a>

                    <a href="#">Government of Maharashtra</a>

                    <a href="#">Screen Reader Access</a>

                    <a href="#">A+</a>

                    <a href="#">A</a>

                    <a href="#">A-</a>

                    <select>

                        <option>English</option>

                        <option>मराठी</option>

                    </select>

                </div>

            </div>

        </div>

    );
}

export default TopBar;