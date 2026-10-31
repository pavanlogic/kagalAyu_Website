import { useEffect, useState } from "react";
import "./AdmissionPopup.css";

const items = [
  {
    title: ["Contact number For Admission NEET UG 2026-27"],
    link: "/pdf/contactnoforadmission.pdf",
  },
  {
    title: ["Instructions to Student NEET UG 2026-27"],
    link: "/pdf/instructiontostudent.pdf",
  },
  {
    title: ["State Quota Admission Fees and DD details NEET UG 2026-27"],
    link: "/pdf/feestructure2026_27.pdf",
  },
];

export default function AdmissionPopup() {
  // show only if not already closed in this browser session
  const [open, setOpen] = useState(
    () => !sessionStorage.getItem("admissionPopupSeen")
  );

  const close = () => {
    sessionStorage.setItem("admissionPopupSeen", "1");
    setOpen(false);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  if (!open) return null;

  return (
    <div className="popup-overlay" onClick={close}>
      <div className="popup-box" onClick={(e) => e.stopPropagation()}>
        <div className="popup-header">
          Admissions 2026–27
          <button className="popup-x" onClick={close} aria-label="Close">
            &times;
          </button>
        </div>

        <div className="popup-body">
          {items.map((item, i) => (
            <div className="popup-item" key={i}>
              <h3>
                {item.title[0]}
                <br />
                {item.title[1]}
              </h3>
              <a href={item.link} target="_blank" rel="noreferrer">
                Click Here
              </a>
            </div>
          ))}
        </div>

        <div className="popup-footer">
          <button className="popup-close" onClick={close}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}