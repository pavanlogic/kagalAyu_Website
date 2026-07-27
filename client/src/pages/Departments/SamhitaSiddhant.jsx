 import React from "react";
import DepartmentTemplate from "../components/DepartmentTemplate";
//  import PageLayout from "../../../components/Common/PageLayout";

import img1 from "../../assets/departments/samhita/1.jpg";
import img2 from "../../assets/departments/samhita/2.jpg";
import img3 from "../../assets/departments/samhita/3.jpg";
import img4 from "../../assets/departments/samhita/4.jpg";

const departmentData = {
  title: "Department of Sanskrit, Samhita and Siddhant",

  bannerTitle: "",

  quote: "न हि ज्ञानेन सदृशं पवित्रमिह विद्यते।",

  subQuote: "तत्स्वयं योगसंसिद्धः कालेनात्मनि विन्दति॥",

  introduction: `The Department of Sanskrit, Samhita and Siddhant forms the
  foundational pillar of Ayurvedic education. It focuses on teaching the
  classical Ayurvedic texts and core principles that guide diagnosis,
  treatment and ethical medical practice. The department emphasizes a
  clear understanding of Charaka Samhita, Sushruta Samhita and
  Ashtanga Hridaya through systematic and analytical study.
  Sanskrit teaching enables students to interpret original Ayurvedic
  literature accurately and confidently. By integrating traditional
  knowledge with modern teaching methods, the department develops
  scholarly competence, critical thinking and conceptual clarity
  essential for future Ayurvedic physicians, educators and researchers.`,

  objectives: [
    "Preserve traditional Ayurvedic knowledge while embracing modern technology.",
    "Validate classical Ayurvedic principles through scientific research.",
    "Provide students with a strong conceptual foundation for diagnosis and treatment."
  ],

  activities: `The department regularly organizes Webinars, Seminars,
  Quiz Competitions, Poetry Competitions, Shloka Recitation, Skit
  Competitions, Charaka Jayanti and Guru Purnima celebrations to
  strengthen students' understanding of Ayurvedic literature and
  classical knowledge.`,

  faculty: [
    {
      name: "Dr. Umayya Y. Sayyad",
      qualification: "M.D. Samhita (Ph.D. Scholar)",
      designation: "Professor",
    },
    {
      name: "Dr. Hariprasad D. Kulkarni",
      qualification: "M.D. Samhita & Siddhant",
      designation: "Associate Professor",
    },
    {
      name: "Dr. Mohan K. Kadam",
      qualification: "M.D. Samhita & Siddhant",
      designation: "Assistant Professor",
    },
    {
      name: "Dr. Prashant P. Tirmare",
      qualification: "M.D. Samhita & Siddhant",
      designation: "Assistant Professor",
    },
    {
      name: "Dr. Smita A. Vipra",
      qualification: "B.A.M.S., M.A. Sanskrit",
      designation: "Assistant Professor",
    },
  ],

  gallery: [img1, img2, img3, img4],
};

function SamhitaSiddhant() {
  return <DepartmentTemplate data={departmentData} />;
}

export default SamhitaSiddhant; 

/* const departmentData = {
    title: "...",
    introduction: "...",
    objectives: [...],
    activities: "...",
    faculty: [...],
    gallery: [img1, img2, img3, img4]
};

export default function SamhitaSiddhant() {
    return <DepartmentTemplate data={departmentData} />;
} */