import React from "react";
import DepartmentTemplate from "../components/DepartmentTemplate";

import img1 from "../../assets/departments/kaumarbhritya/1.jpg";
import img2 from "../../assets/departments/kaumarbhritya/2.jpg";
import img3 from "../../assets/departments/kaumarbhritya/3.jpg";
import img4 from "../../assets/departments/kaumarbhritya/4.jpg";

const departmentData = {
  title: "Department of Kaumarbhritya (Balroga)",

  quote:
    "Dedicated to comprehensive Ayurvedic healthcare for infants, children and adolescents through holistic pediatric care.",

  introduction: `
The Department of Kaumarbhritya (Balroga) is dedicated to the comprehensive healthcare of infants, children and adolescents through Ayurvedic principles integrated with modern pediatric knowledge.

The department focuses on preventive, promotive and curative aspects of child health, emphasizing proper growth, development, nutrition, immunity and disease management. It also provides specialized care for neonatal and pediatric disorders while promoting traditional practices such as Suvarnaprashana and other child-friendly Ayurvedic therapies.

Through academic excellence, clinical training and research activities, the department aims to develop competent pediatric physicians and contribute to the well-being of future generations.
`,

  vision: [
    "To promote healthy growth and development of children.",
    "To provide holistic Ayurvedic pediatric healthcare.",
    "To develop competent pediatric physicians through quality education and research."
  ],

  mission: [
    "Provide comprehensive preventive, promotive and curative child healthcare.",
    "Strengthen immunity through Ayurvedic principles and Suvarnaprashana.",
    "Promote academic excellence, clinical training and research.",
    "Serve society through child health awareness and community outreach."
  ],

  objectives: [
    "Promotion of child health and development.",
    "Holistic management of neonatal and childhood disorders.",
    "Provide quality education in Kaumarbhritya.",
    "Strengthen immunity through Rasayana and Suvarnaprashana.",
    "Develop skilled Ayurvedic pediatric practitioners."
  ],

  activities: [
    "Seminars",
    "Webinars",
    "Continuing Medical Education (CME)",
    "Case Discussions",
    "School Health Check-up Camps",
    "Suvarnaprashana Camps",
    "Poshan Abhiyan Activities",
    "Breastfeeding Week Celebration",
    "National Nutrition Week",
    "World Children's Day",
    "Community Health Awareness Programmes"
  ],

  facilities: [
    "Pediatric OPD",
    "Pediatric IPD",
    "Neonatal Care Services",
    "Balroga Museum",
    "Departmental Library",
    "Classical Ayurvedic Texts",
    "Research Journals",
    "LCD Projector",
    "Charts & Models",
    "Audio Visual Teaching Aids",
    "Suvarnaprashana Clinic",
    "Growth Monitoring Services",
    "Nutrition Counselling",
    "School Health Programme",
    "Journal Club",
    "Seminars",
    "Case Presentations",
    "Dissertation Guidance"
  ],

  faculty: [
    {
      name: "Dr. Pooja Bankat Bhosale",
      qualification: "",
      designation: "Assistant Professor"
    }
  ],

  gallery: [img1, img2, img3, img4]
};

function Kaumarbhritya() {
  return <DepartmentTemplate data={departmentData} />;
}

export default Kaumarbhritya;