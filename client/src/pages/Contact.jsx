import React from "react";
import "./Contact.css";
import PageLayout from "../components/Common/PageLayout";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Footer from "../components/Footer/Footer";

const Contact = () => {
    return (
        <PageLayout
            title="Contact Us"
            breadcrumb={[
        { label: "Home", link: "/" },
        { label: "Contact Us", link: "#" },
       /*  { label: "Affiliation & Recognition" }, */
      ]}
        >
            <div className="contact-page">

                <div className="row">

                    {/* Left Side */}

                    <div className="col-lg-4 mb-4">

                        {/* Address */}

                        <div className="contact-box">

                            <h3 className="contact-title">
                                <span>
                                    <FaMapMarkerAlt className="icon" />
                                    Address
                                </span>
                            </h3>

                            <p>
                                <strong>Government Ayurvedic College & Hospital</strong>
                                <br />
                                Pimpalgaon Khurd,
                                <br />
                                Tal. Kagal,
                                <br />
                                Dist. Kolhapur,
                                <br />
                                Maharashtra – 416216
                            </p>

                        </div>

                        {/* Email */}

                        <div className="contact-box">

                            <h3 className="contact-title">
                                <span>
                                    <FaEnvelope className="icon" />
                                    Email
                                </span>
                            </h3>

                            <p>
                                deangovtayucollegekagal@gmail.com
                            </p>

                        </div>

                        {/* Phone */}

                        <div className="contact-box">

                            <h3 className="contact-title">
                                <span>
                                    <FaPhoneAlt className="icon" />
                                    Phone
                                </span>
                            </h3>

                            <p>
                                Office : 02325-261005
                                <br />
                                Mobile : +91-XXXXXXXXXX
                            </p>

                        </div>

                    </div>

                    {/* Contact Form */}

                    <div className="col-lg-8">

                        <div className="contact-form">

                            <h2>Contact With Us</h2>

                            <form>

                                <div className="row">

                                    <div className="col-md-6 mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Name"
                                        />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Email"
                                        />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Subject"
                                        />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Phone"
                                        />
                                    </div>

                                    <div className="col-12 mb-3">

                                        <textarea
                                            rows="7"
                                            className="form-control"
                                            placeholder="Message"
                                        ></textarea>

                                    </div>

                                </div>

                                <button
                                    type="submit"
                                    className="send-btn"
                                >
                                    SEND MESSAGE
                                </button>

                            </form>

                        </div>

                    </div>

                </div>


            </div>
             <Footer/>
        </PageLayout>

       
    );
};

export default Contact;