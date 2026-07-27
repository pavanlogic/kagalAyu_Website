import React from "react";
import DepartmentTemplate from "../components/DepartmentTemplate";

import img1 from "../../assets/departments/shalyatantra/1.jpg";
import img2 from "../../assets/departments/shalyatantra/2.jpg";
import img3 from "../../assets/departments/shalyatantra/3.jpg";
import img4 from "../../assets/departments/shalyatantra/4.jpg";

const departmentData = {
  title: "Department of Shalya Tantra",

  quote:
    "Excellence in Ayurvedic Surgery through education, clinical care, research and innovation.",

  introduction: `
The Department of Shalya Tantra represents the surgical branch of Ayurveda and is one of the important clinical departments of the institution.

The department is well equipped with two fully functional operation theatres, adequate bed capacity and a dedicated support staff. It provides comprehensive surgical care based on classical Ayurvedic principles integrated with modern surgical practices.

Specialized Ayurvedic surgical procedures such as Ksharasutra, Rakta Mokshana and Agnikarma are routinely performed. The department also provides quality education, practical training, research opportunities and ethical patient care to undergraduate students.
`,

  vision: [
    "To become a centre of excellence in Shalya Tantra education, clinical care and research.",
    "To integrate classical Ayurvedic wisdom with modern medical sciences.",
    "To provide excellence in Ayurvedic surgical practice."
  ],

  mission: [
    "Provide holistic, ethical and affordable surgical healthcare.",
    "Promote interdisciplinary research and innovation.",
    "Develop competent Ayurvedic surgeons.",
    "Inculcate professionalism and lifelong learning."
  ],

  objectives: [
    "Provide quality education in Ayurvedic Surgery.",
    "Develop practical surgical skills.",
    "Promote research and innovation.",
    "Deliver patient-centred surgical care.",
    "Preserve and promote classical Ayurvedic surgical techniques."
  ],

  activities: [
    "Undergraduate Teaching",
    "Clinical Demonstrations",
    "Operation Theatre Training",
    "Case Discussions",
    "Seminars",
    "Research Activities",
    "Surgical Workshops",
    "Clinical Services"
  ],

  facilities: [
    "Two Fully Functional Operation Theatres",
    "Shalya Tantra OPD",
    "Shalya Tantra IPD",
    "Surgical Instruments",
    "Charts & Models",
    "Medicine Display",
    "Instrument Handling Practice",
    "Suturing Pads",
    "Bandaging Practice",
    "Surgical Knot Practice",
    "Incision Practice Models"
  ],

  speciality: [
    "Ksharasutra Therapy",
    "Rakta Mokshana",
    "Agnikarma",
    "Minor Ayurvedic Surgical Procedures",
    "Post-operative Ayurvedic Care"
  ],

  highlights: [
    "Display of Anatomical Charts",
    "Medicine Display",
    "Instrument Demonstration",
    "Hands-on Suturing Practice",
    "Surgical Knot Training",
    "Bandaging Techniques",
    "Incision Practice Models"
  ],

  faculty: [
    {
      name: "Dr. Vishwajeet S. Dhage",
      qualification: "M.S. (Shalya Tantra)",
      designation: "Assistant Professor"
    }
  ],

  gallery: [img1, img2, img3, img4]
};

function ShalyaTantra() {
  return <DepartmentTemplate data={departmentData} />;
}

export default ShalyaTantra;