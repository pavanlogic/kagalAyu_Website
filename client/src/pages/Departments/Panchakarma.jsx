import React from "react";
import DepartmentTemplate from "../components/DepartmentTemplate";

import img1 from "../../assets/departments/panchakarma/1.jpg";
import img2 from "../../assets/departments/panchakarma/2.jpg";
import img3 from "../../assets/departments/panchakarma/3.jpg";
import img4 from "../../assets/departments/panchakarma/4.jpg";

const departmentData = {
  title: "Department of Panchakarma",

  quote:
    "Authentic Panchakarma therapies for purification, rejuvenation and holistic healthcare.",

  introduction: `
The Department of Panchakarma is one of the most important clinical departments of Ayurveda, dedicated to the teaching, practice and research of Panchakarma therapies.

Panchakarma is the classical Ayurvedic purification and rejuvenation therapy aimed at eliminating vitiated Doshas and restoring health. The department provides comprehensive OPD and IPD services along with classical Panchakarma procedures and specialized therapeutic treatments.

The department actively participates in undergraduate education, clinical training, patient care, research activities, health awareness programmes and community outreach services.
`,

  vision: [
    "Establish excellence in Panchakarma education.",
    "Provide quality patient care through authentic Ayurveda.",
    "Promote research and innovation.",
    "Serve society through community healthcare."
  ],

  mission: [
    "Provide quality Panchakarma healthcare services.",
    "Impart comprehensive clinical and academic training.",
    "Promote research and innovation in Panchakarma.",
    "Create awareness about preventive healthcare.",
    "Extend Panchakarma services through health camps."
  ],

  objectives: [
    "Promote authentic Panchakarma therapies.",
    "Develop competent Ayurvedic physicians.",
    "Enhance clinical skills through practical training.",
    "Support research in Panchakarma.",
    "Improve community health."
  ],

  facilities: [
    "Well-equipped Panchakarma Therapy Unit",
    "Separate Male Therapy Section",
    "Separate Female Therapy Section",
    "OPD Services",
    "IPD Services",
    "Panchakarma Operation Theatre",
    "Teaching & Demonstration Facilities",
    "Clinical Documentation System"
  ],

  therapies: [
    "Vamana Karma",
    "Virechana Karma",
    "Basti Chikitsa",
    "Nasya Karma",
    "Raktamokshana",
    "Sarvanga Abhyanga",
    "Swedana",
    "Shirodhara",
    "Kati Basti",
    "Greeva Basti",
    "Janu Basti",
    "Patra Pinda Sweda",
    "Parisheka",
    "Local Panchakarma Procedures"
  ],

  activities: [
    "Undergraduate Teaching",
    "Clinical Demonstrations",
    "Seminars",
    "Workshops",
    "Continuing Medical Education (CME)",
    "Research Activities",
    "Health Awareness Programmes",
    "Medical Camps",
    "Community Outreach Services"
  ],

  speciality: [
    "Classical Panchakarma Procedures",
    "Detoxification Therapy",
    "Rejuvenation Therapy",
    "Pain Management",
    "Lifestyle Disease Management",
    "Rehabilitation Therapy"
  ],

  faculty: [
    {
      name: "Vd. Priyanka Subhash Tele",
      qualification: "B.A.M.S., M.D. (Panchakarma)",
      designation: "Assistant Professor"
    }
  ],

  facultyProfile: `
Vd. Priyanka Subhash Tele is an Ayurvedic physician specializing in Panchakarma. She completed B.A.M.S. and M.D. (Panchakarma) and is serving as Assistant Professor in the Department of Panchakarma.

She is actively involved in undergraduate teaching, clinical training, patient care, Panchakarma therapies, health camps, research activities and preventive healthcare. Her academic interests include Panchakarma, rehabilitation through Ayurveda and integrative disease management.
`,

  gallery: [img1, img2, img3, img4]
};

function Panchakarma() {
  return <DepartmentTemplate data={departmentData} />;
}

export default Panchakarma;