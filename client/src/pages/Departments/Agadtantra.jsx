import React from "react";
import DepartmentTemplate from "../components/DepartmentTemplate";

import img1 from "../../assets/departments/agadtantra/1.jpg";
import img2 from "../../assets/departments/agadtantra/2.jpg";
import img3 from "../../assets/departments/agadtantra/3.jpg";
import img4 from "../../assets/departments/agadtantra/4.jpg";

const departmentData = {
  title: "Department of Agadtantra Evam Vidhivaidyaka",

  quote:
    "Excellence in Toxicology, Forensic Medicine, Research, and Ethical Healthcare.",

  introduction: `
The Department of Agadtantra Evam Vidhivaidyaka is an important academic and clinical department of Government Ayurved College, Sangav. The department provides quality teaching, clinical services, toxicology education, medico-legal training, research activities, and community awareness programmes.

The department focuses on preparing competent Ayurvedic graduates with sound knowledge of Agadtantra (Toxicology) and Vidhivaidyaka (Forensic Medicine), enabling them to serve society ethically and effectively.
`,

  objectives: [
    "Provide quality education in Agadtantra and Vidhivaidyaka.",
    "Develop clinical competency in Toxicology and Forensic Medicine.",
    "Promote ethical medico-legal practices.",
    "Encourage research and innovation.",
    "Strengthen community awareness regarding poisoning and medico-legal issues."
  ],

  vision: [
    "To become a centre of excellence in Agadtantra and Forensic Medicine.",
    "To provide quality education and research.",
    "To deliver ethical healthcare services."
  ],

  mission: [
    "Provide quality education in Agadtantra and Vidhivaidyaka.",
    "Promote research and innovation.",
    "Enhance medico-legal and toxicology competencies.",
    "Serve society through awareness and healthcare services."
  ],

  activities: [
    "Undergraduate Teaching",
    "OPD Services",
    "IPD Services",
    "Toxicology Museum",
    "Practical Demonstrations",
    "Research Activities",
    "Extension Activities",
    "Community Awareness Programmes"
  ],

  facilities: [
    "Toxicology Museum",
    "Clinical OPD",
    "Clinical IPD",
    "Practical Demonstration Hall",
    "Teaching Aids",
    "Research Facilities"
  ],

  faculty: [
    {
      name: "Dr. Prashant Tukaram Malage",
      qualification:
        "B.A.M.S., M.D. (Agadtantra Evam Vidhivaidyaka)",
      designation: "Assistant Professor"
    }
  ],

  gallery: [img1, img2, img3, img4]
};

function Agadtantra() {
  return <DepartmentTemplate data={departmentData} />;
}

export default Agadtantra;