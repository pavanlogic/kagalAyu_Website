import "./DeansMessage.css";
import PageLayout from "../../components/Common/PageLayout";
import deanPhoto from "../../assets/images/dean.jpg";

function DeansMessage() {
  return (
    <PageLayout
       title="DEAN"
      breadcrumb={[
        { label: "Home", link: "/" },
        { label: "Administration", link: "#" },
        { label: "Dean's Message" },
      ]}
    >
      {/* Heading */}
      <div className="dean-title">
        <h2>DEAN'S MESSAGE</h2>
        <div className="title-line"></div>
      </div>

      {/* Main Section */}
      <div className="dean-main">


        {/* ================= LEFT PROFILE ================= */}

<div className="dean-profile">

    <div className="profile-card">

        <img
            src={deanPhoto}
            alt="Dean"
            className="dean-photo"
        />

        <div className="profile-content">

            <h3>Dr. Abhijit Ahire</h3>

            <p className="designation">
                Dean
            </p>

            <hr />

   
        </div>

    </div>

</div>

        {/* Right Message */}
        <div className="dean-message">

          <div className="sloka-box">

            <h4>॥ संस्कृत श्लोक ॥</h4>

            <p className="sloka">
              विद्या ददाति विनयं विनयाद् याति पात्रताम् ।
              पात्रत्वात् धनमाप्नोति धनात् धर्मं ततः सुखम् ॥
            </p>

            <p className="meaning">
              Education gives humility. Humility develops
              worthiness. Worthiness leads to prosperity.
              Prosperity enables righteousness, and righteousness
              leads to true happiness.
            </p>

          </div>

          <h3>Dear Students,</h3>

          <p>
            Welcome to Government Ayurved College and Hospital,
            Kagal.
          </p>

          <p>
            Ayurveda is one of the oldest systems of medicine in
            the world and continues to guide healthcare through
            its holistic principles. Our institution is committed
            to preserving this rich heritage while embracing
            modern scientific advancements in education,
            research, and patient care.
          </p>

          <p>
            Our dedicated faculty members, well-equipped
            departments, teaching hospital, laboratories,
            library, and clinical facilities provide an excellent
            environment for academic learning and professional
            development.
          </p>

          <p>
            We encourage every student to cultivate discipline,
            compassion, ethical values, and scientific thinking
            while serving society through Ayurveda. Together we
            can strengthen this ancient science and contribute to
            the healthcare needs of our nation.
          </p>

          <p>
            I wish every student a successful academic journey
            and a bright professional future.
          </p>

{/*           <div className="signature">

            <h4>Dr. Abhijit Ahire</h4>

            <p>Dean</p>

            <p>
              Government Ayurved College &
              Hospital, Kagal
            </p>

          </div> */}

        </div>

      </div>

   <div className="info-grid">

  {/* Personal Details */}
  <div className="info-card">
    <h2>Personal Details</h2>

    <div className="info-row">
      <span>Name</span>
      <p>Dr. Abhijit Ahire</p>
    </div>

    <div className="info-row">
      <span>Date of Birth</span>
      <p>-</p>
    </div>

    <div className="info-row">
      <span>Date of Joining</span>
      <p>01/01/2026</p>
    </div>

    <div className="info-row">
      <span>Designation</span>
      <p>Dean, Govt. Ayurvedic College, Kagal</p>
    </div>

    <div className="info-row">
      <span>MCIM Registration No.</span>
      <p>I40175A1</p>
    </div>

    <div className="info-row">
      <span>NCISM Teacher Code</span>
      <p>-</p>
    </div>
  </div>

  {/* Qualifications */}

  <div className="info-card">

    <h2>Qualifications</h2>

    <div className="info-row">
      <span>BAMS</span>
      <p>Govt. College of Ayurveda Nanded</p>
    </div>

    <div className="info-row">
      <span>M.D.</span>
      <p>Shri Ayurved College Nagpur</p>
    </div>

    <div className="info-row">
      <span>Ph.D.</span>
      <p>Mahatma Gandhi Ayurved College Wardha, Maharashtra.</p>
    </div>

  </div>

  {/* Professional Information */}

  <div className="info-card">

    <h2>Professional Information</h2>

    <div className="info-row">
      <span>Subject</span>
      <p>Kayachikitsa</p>
    </div>

    <div className="info-row">
      <span>Languages Known</span>
      <p>Marathi, Hindi, English, Sanskrit</p>
    </div>

    <div className="info-row">
      <span>Research Publications</span>
      <p>10x Publications in various subjects</p>
    </div>

    <div className="info-row">
      <span>Teaching Experience</span>
      <p>20+ Years</p>
    </div>

  </div>

  {/* Career Experience */}

  <div className="info-card">

    <h2>Career Experience</h2>

    <div className="info-row">
      <span>Assistant Professor</span>
      <p>D.Y Patil College Mumbai Nerul For 5years Government Govt.Ayurvedic College Nanded For 10yrs</p>
    </div>

    <div className="info-row">
      <span>Associate Professor & Dean</span>
      <p>Govt Ayurvedic College Jalgaon for 3 yrs since 1/01/23 to 31/12/25</p>
    </div>

    <div className="info-row">
      <span>Dean</span>
      <p>Govt Homoeopathy College & Hospital, Pimpalgaon Khurd, Kagal since 01/01/2026</p>
    </div>

  </div>

   {/* Contact Information */}

{/*   <div className="info-card">

    <h2>Contact Information</h2>

    <div className="info-row">
      <span>GOVT. AYURVEDIC COLLEGE, KAGAL</span>
      <p>Pimpalgaon Khurd, Kagal, Kolhapur. Maharashtra – 416216.</p> 
      <p>Email: abhijit.ahire@gov.in </p>
      <p>Mobile no: 7774048512</p>
    </div>

 </div> */}

<div className="info-card">

    <h2>Contact Information</h2>

    <div className="contact-details">

        <h5>Government Ayurvedic College, Kagal</h5>

        <p>Pimpalgaon Khurd, Kagal, Kolhapur, Maharashtra – 416216</p>

        <p>
            <strong>Email :</strong> abhijit.ahire@gov.in
        </p>

        <p>
            <strong>Mobile :</strong> 7774048512
        </p>

    </div>

</div>

</div>

    </PageLayout>
  );
}

export default DeansMessage;