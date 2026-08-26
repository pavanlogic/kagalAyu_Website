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
    title: "anatomy tank आयुर्वेद जाहिरात",
    file: "/pdf/anatomytankआयुर्वेदजाहिरात.pdf",
  },

  {
    title: "शासकीय आयुर्वेद महाविद्यालय कागलकरिता 100 विद्यार्थी क्षमतेची इमार",
    file: "/pdf/शासकीयआयुर्वेदमहाविद्यालयकागलकरिता100विद्यार्थीक्षमतेचीइमार.pdf",
  },

  {
    title: "जाहिरात इंटरनेट लॅन आयुर्वेद महाविद्यालय व रुग्णालय",
    file: "/pdf/intenetLan.pdf",
  },
  {
    title: "कॉम्प्युटर जाहिरात आयुर्वेद रुग्णालय",
    file: "/pdf/computer_advertising.pdf",
  },
  {
    title: "दरपत्रक स्टेशनरी आयुर्वेद महाविद्यालय व रुग्णालय",
    file: "/pdf/stetionary.pdf",
  },
  {
    title: "जाहिरात औषध आयुर्वेद महाविद्यालय व रुग्णालय",
    file: "/pdf/medicine.pdf",
  },
   {
    title: "जाहिरात chemical reagents and consumables आयुर्वेद रुग्णालय",
    file: "/pdf/ad_chemical_reagents_consumables.pdf",
  },
   {
    title: "जाहिरात consumables items for surgical procedure and other relevant medicine आयुर्वेद रुग्णालय",
    file: "/pdf/ad_consumables_items_for_surgical_procedure_and_other_relevant_medicine.pdf",
  },
  {
    title: "जाहिरात departmental modelआयुर्वेद महाविद्यालय व रुग्णालय",
    file: "/pdf/ad_departmental_model.pdf",
  },
   {
    title: "जाहिरात फर्निचर आयुर्वेद महाविद्यालय व रुग्णालय",
    file: "/pdf/ad_furniture.pdf",
  },
   {
    title: "जाहिरात cctv आयुर्वेद महाविद्यालय व रुग्णालय",
    file: "/pdf/ad_cctv.pdf",
  },
   {
    title: "जाहिरात किरकोळ कामे आयुर्वेद महाविद्यालय व रुग्णालय",
    file: "/pdf/ad_other_work.pdf",
  },
   {
    title: "जाहिरात पडदे बसविणे आयुर्वेद महाविद्यालय व रुग्णालय",
    file: "/pdf/ad_curtains.pdf",
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