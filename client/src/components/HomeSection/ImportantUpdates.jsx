import { useEffect, useRef } from "react";
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

export default ImportantUpdates;