import React from "react";
import DepartmentTemplate from "../components/DepartmentTemplate";

import img1 from "../../assets/departments/kriyasharir/1.jpg";
import img2 from "../../assets/departments/kriyasharir/2.jpg";
import img3 from "../../assets/departments/kriyasharir/3.jpg";
import img4 from "../../assets/departments/kriyasharir/4.jpg";

const departmentData = {
  title: "Department of Kriya Sharir",

  quote:
    "Understanding Life Through the Integration of Ayurvedic Wisdom and Modern Physiology.",

  introduction: `
Kriyā Śārīra (Ayurvedic Physiology) is a fundamental discipline of Ayurveda that deals with the functional aspects of the human body and the principles governing life, health, and disease. It provides a comprehensive understanding of physiological equilibrium through the harmonious interaction of Doṣa, Dhātu, Mala, Agni, Srotas, Indriya, Manas and Ātma.

The Department of Kriyā Śārīra teaches Ayurvedic physiology as described in the Caraka Saṃhitā, Suśruta Saṃhitā and Aṣṭāṅga Hṛdaya. In accordance with the NCISM competency-based curriculum, the department integrates classical Ayurvedic concepts with modern physiology, biochemistry, neuroscience, endocrinology, immunology and other biomedical sciences.
`,

  objectives: [
    "To impart comprehensive knowledge of Ayurvedic Physiology.",
    "To integrate classical Ayurvedic concepts with modern physiology.",
    "To develop competent and ethical Ayurvedic physicians.",
    "To encourage research and scientific inquiry.",
    "To strengthen competency-based education."
  ],

  vision: [
    "To become a centre of excellence in Kriyā Śārīra.",
    "To integrate Ayurvedic wisdom with contemporary physiology.",
    "To promote academic excellence, innovation and research."
  ],

  mission: [
    "Provide integrated theoretical and practical teaching.",
    "Promote competency-based education and research.",
    "Develop compassionate Ayurvedic physicians.",
    "Apply physiological principles in preventive and clinical healthcare."
  ],

  activities: [
    "Seminars and Workshops",
    "Student Presentations",
    "Research Activities",
    "Community Health Awareness Programmes",
    "Prakriti Examination",
    "Dhatu Sarata Examination",
    "Nadi Pariksha",
    "Digital Prakriti Assessment",
    "Hematology & Urine Analysis",
    "Clinical Correlation Sessions",
    "Skill Laboratory Training"
  ],

  facilities: [
    "Digital Prakriti Assessment (Nadi Tarangini)",
    "Prakriti Kiosk",
    "Skill Laboratory",
    "Human Physiology Laboratory",
    "Hematology Laboratory",
    "Urine Analysis Laboratory",
    "Research Facilities",
    "Seminar Hall"
  ],

  faculty: [
    {
      name: "Dr. Pranit H. Patil",
      qualification: "Head of Department",
      designation: "Professor"
    },
    {
      name: "Dr. Vinaya V. Potdar",
      qualification: "",
      designation: "Associate Professor"
    },
    {
      name: "Dr. Uditi M. Dhaygude",
      qualification: "",
      designation: "Assistant Professor"
    }
  ],

  gallery: [img1, img2, img3, img4]
};

function KriyaSharir() {
  return <DepartmentTemplate data={departmentData} />;
}

export default KriyaSharir;