
import "./HomeSection.css";
import ImportantUpdates from "./ImportantUpdates";

function HomeSection() {
  const cards = [
    {
      icon: "🎓",
      title: "BAMS COURSE",
      text: "UG Program Intake Capacity 100 Seats",
    },
    {
      icon: "👨‍⚕️",
      title: "PG COURSES",
      text: "MD/MS Ayurveda Programmes",
    },
    {
      icon: "🏥",
      title: "HOSPITAL",
      text: "OPD|IPD|Panchakarma Quality Patient Care",
    },
    {
      icon: "🏛",
      title: "DEPARTMENTS",
      text: "6 Clinical Departments  15 Basic Departments",
    },
    {
      icon: "🏢",
      title: "INFRASTRUCTURE",
      text: "Well Equipped Modern Facilities",
    },
  ];

  return (
    <section className="home-section">

    {/*   <div className="updates-box">

        <div className="updates-header">
          IMPORTANT UPDATES
        </div>

        <ul className="updates-list">
          <li>📢 Contact number For Admission NEET UG 2026-27</li>
          <li>📢 Instructions to Student NEET UG 2026-27</li>
          <li>📢 State Quota Admission Fees 2026-27</li>
        </ul>

        <button className="view-btn">View All</button>

      </div> */}
      <ImportantUpdates />

      <div className="cards-area">

        {cards.map((card, index) => (
          <div className="feature-card" key={index}>

            <div className="card-icon">
              {card.icon}
            </div>

            <h4>{card.title}</h4>

            <p>{card.text}</p>

{/*             <button className="view-btn">
               View Details 
            </button> */}

          </div>
        ))}

      </div>

    </section>
  );
}

export default HomeSection;