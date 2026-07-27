import React from "react";
import DepartmentTemplate from "../components/DepartmentTemplate";

import img1 from "../../assets/departments/kayachikitsa/1.jpg";
import img2 from "../../assets/departments/kayachikitsa/2.jpg";
import img3 from "../../assets/departments/kayachikitsa/3.jpg";
import img4 from "../../assets/departments/kayachikitsa/4.jpg";

const departmentData = {
  title: "Department of Kayachikitsa",

  quote:
    "Excellence in Ayurvedic Internal Medicine through education, patient care, research and community service.",

  introduction: `
The Department of Kayachikitsa is one of the core clinical departments of Ayurveda, dedicated to the study, teaching, research and clinical application of Ayurvedic Internal Medicine.

Kayachikitsa deals with the diagnosis, prevention and management of systemic diseases and forms the backbone of Ayurvedic clinical practice. The department is committed to preserving the classical principles of Ayurveda while integrating them with contemporary scientific advancements.

The department provides comprehensive academic and clinical training to undergraduate and postgraduate students through classroom teaching, bedside clinical demonstrations, case presentations, seminars, journal clubs and research activities. Students develop sound clinical skills, diagnostic competence, ethical values and a patient-centred approach to healthcare.

Specialized Ayurvedic management is provided for metabolic disorders, gastrointestinal diseases, respiratory illnesses, musculoskeletal disorders, neurological disorders, skin diseases and lifestyle-related diseases using Shamana Chikitsa, Panchakarma support therapies, Pathya-Apathya, Rasayana therapy and Yoga-based interventions.

The department actively participates in community outreach programmes, health awareness campaigns, preventive healthcare initiatives and medical camps while encouraging research, scientific publications and continuing medical education.
`,

  vision: [
    "To emerge as a nationally recognized department in Ayurvedic Internal Medicine.",
    "To achieve excellence in teaching, clinical practice, research and community healthcare.",
    "To integrate classical Ayurvedic principles with contemporary scientific knowledge."
  ],

  mission: [
    "Provide quality education and clinical training in Kayachikitsa.",
    "Deliver affordable, ethical and patient-centred Ayurvedic healthcare.",
    "Promote research and innovation in disease prevention and management.",
    "Develop competent, compassionate and socially responsible Ayurvedic physicians.",
    "Strengthen community health through preventive, promotive and curative healthcare."
  ],

  objectives: [
    "Develop strong clinical knowledge in Ayurvedic Internal Medicine.",
    "Promote evidence-based Ayurvedic practice.",
    "Strengthen research and innovation.",
    "Encourage ethical clinical practice.",
    "Improve community health through Ayurveda."
  ],

  activities: [
    "Undergraduate Teaching",
    "Postgraduate Teaching",
    "Bedside Clinical Demonstrations",
    "Case Presentations",
    "Seminars",
    "Journal Club",
    "Clinical Research",
    "Medical Camps",
    "Health Awareness Programmes",
    "Community Outreach Activities",
    "Continuing Medical Education (CME)"
  ],

  facilities: [
    "Kayachikitsa OPD",
    "Kayachikitsa IPD",
    "Clinical Demonstration Facilities",
    "Patient Counselling",
    "Panchakarma Support Therapies",
    "Research Activities",
    "Seminar Hall",
    "Teaching Aids",
    "Department Library"
  ],

  speciality: [
    "Ayurvedic Internal Medicine",
    "Metabolic Disorders",
    "Gastrointestinal Diseases",
    "Respiratory Disorders",
    "Musculoskeletal Disorders",
    "Neurological Disorders",
    "Skin Diseases",
    "Lifestyle Disorders",
    "Rasayana Therapy",
    "Yoga-based Management"
  ],

  faculty: [
    {
      name: "Dr. Gouri Ashok Khot",
      qualification: "M.D. (Kayachikitsa), Ph.D. Scholar",
      designation: "Assistant Professor"
    }
  ],

  gallery: [img1, img2, img3, img4]
};

function Kayachikitsa() {
  return <DepartmentTemplate data={departmentData} />;
}

export default Kayachikitsa;