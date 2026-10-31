/* import { useEffect, useRef } from "react";
import "./HomeSection.css";

function ImportantUpdates() {

    const trackRef = useRef(null);

    const updates = [
        "Admission Notification 2026-27",
        "Academic Calendar Released",
        "Hospital OPD Timings Updated",
        "MUHS Examination Schedule",
        "National Ayurveda Seminar",
        "BAMS Admission Started",
        "Library New Books Added",
        "Sports Competition Notice",
        "Holiday Circular",
        "Recruitment Notice"
    ];

    useEffect(() => {

        const track = trackRef.current;

        let position = 0;

        const speed = 0.5;

        function animate() {

            position += speed;

            if (position >= track.scrollHeight / 2) {

                position = 0;

            }

            track.style.transform = `translateY(-${position}px)`;

            requestAnimationFrame(animate);

        }

        requestAnimationFrame(animate);

    }, []);

    return (

        <div className="updates-box">

            <div className="updates-header">
                IMPORTANT UPDATES
            </div>

            <div className="updates-scroll">

                <div className="updates-track" ref={trackRef}>

                    {[...updates, ...updates].map((item, index) => (

                        <div className="update-item" key={index}>

                            <span className="new-badge">NEW</span>

                            <span>{item}</span>

                        </div>

                    ))}

                </div>

            </div>

            <button className="view-btn">
                View All
            </button>

        </div>

    );
}

export default ImportantUpdates; */

import React from "react";
import "./ImportantUpdates.css";

const updates = [
  {
    title: "Contact number For Admission NEET UG 2026-27",
    file: "/pdf/contactnoforadmission.pdf",
  },

  {
    title: "Instructions to Student NEET UG 2026-27",
    file: "/pdf/instructiontostudent.pdf",
  },

  {
    title: "State Quota Admission Fees and DD details NEET UG 2026-27",
    file: "/pdf/feestructure2026_27.pdf",
  },
 ]

export default function ImportantUpdates() {
  return (
    <div className="updates-box">
      <div className="updates-header">
        IMPORTANT UPDATES
      </div>

      <marquee
        direction="up"
        scrollamount="2"
        onMouseOver={(e) => e.target.stop()}
        onMouseOut={(e) => e.target.start()}
      >
        {updates.map((item, index) => (
          <div key={index} className="update-item">
            <span className="new-badge">NEW</span>

            <a
              href={item.file}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.title}
            </a>
          </div>
        ))}
      </marquee>

      {/* <button className="view-btn">View All</button> */}
    </div>
  );
}