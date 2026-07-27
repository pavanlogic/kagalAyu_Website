import React from "react";
import DepartmentTemplate from "../components/DepartmentTemplate";

import img1 from "../../assets/departments/shalakyatantra/1.jpg";
import img2 from "../../assets/departments/shalakyatantra/2.jpg";
import img3 from "../../assets/departments/shalakyatantra/3.jpg";
import img4 from "../../assets/departments/shalakyatantra/4.jpg";

const departmentData = {
  title: "Department of Shalakya Tantra",

  quote:
    "Comprehensive Ayurvedic and Modern Care for Eye, Ear, Nose and Throat Disorders.",

  introduction: `
Shalakya Tantra is the branch of Ayurveda dealing with Urdhva Jatrugata Vikaras, which include diseases of the eyes, ears, nose, throat, head and neck. It is one of the eight major branches of Ayurveda and is described in detail in the Uttara Tantra by the ancient Acharyas.

The Department of Shalakya Tantra focuses on the diagnosis, prevention and management of Eye and ENT disorders through an integration of classical Ayurvedic principles and modern medical science.

The department has separate Eye OPD, ENT OPD, Kriyakalpa Procedure Room, Dark Room for ophthalmic procedures and a well-equipped Minor Operation Theatre. Specialized Ayurvedic procedures such as Nasya, Tarpana, Karna Purana, Gandusha and Kaval are routinely performed for holistic patient care.
`,

  vision: [
    "Prevent blindness through early diagnosis and treatment.",
    "Diagnose hearing loss and provide appropriate hearing care.",
    "Improve quality of life through comprehensive Eye and ENT services.",
    "Integrate Ayurveda with modern science for chronic ENT disorders.",
    "Provide quality treatment at affordable cost.",
    "Perform advanced Eye and ENT surgeries with expert care."
  ],

  mission: [
    "Provide quality Ayurvedic and modern Eye & ENT healthcare.",
    "Promote preventive eye and hearing care.",
    "Deliver affordable surgical services.",
    "Encourage research and academic excellence.",
    "Improve patient quality of life through holistic treatment."
  ],

  objectives: [
    "Develop clinical expertise in Ophthalmology and ENT.",
    "Promote Ayurvedic Kriyakalpa therapies.",
    "Provide comprehensive surgical care.",
    "Train competent Ayurvedic Shalakya specialists.",
    "Promote preventive eye and ENT healthcare."
  ],

  services: [
    "Eye OPD",
    "ENT OPD",
    "Kriyakalpa Therapy",
    "Refraction & Spectacle Correction",
    "Cataract Evaluation",
    "Glaucoma Evaluation",
    "Retina Examination",
    "Perimetry",
    "Sac Syringing",
    "Foreign Body Removal",
    "Colour Vision Testing",
    "Contrast Sensitivity Test",
    "Ophthalmic Fitness Test",
    "Squint Evaluation",
    "Lazy Eye Assessment",
    "Ear Wax Removal",
    "Ear Syringing",
    "Audiometry",
    "Hearing Analysis",
    "Rhinoscopy",
    "Laryngoscopy",
    "Sinusitis Treatment",
    "Tonsillitis Treatment",
    "Allergic Rhinitis Management"
  ],

  minorProcedures: [
    "Chalazion Surgery",
    "Stye Surgery",
    "Auroplasty",
    "Foreign Body Removal",
    "Keloid Excision",
    "Sebaceous Cyst Excision"
  ],

  majorProcedures: [
    "Cataract Surgery (SICS)",
    "Phacoemulsification",
    "Pterygium Excision",
    "Ptosis Correction",
    "Tonsillectomy",
    "Adenoidectomy",
    "Septoplasty",
    "Tympanoplasty",
    "Functional Endoscopic Sinus Surgery (FESS)"
  ],

  ayurvedicProcedures: [
    "Nasya",
    "Tarpana",
    "Karna Purana",
    "Karna Dhoopana",
    "Bidalaka",
    "Kaval",
    "Gandusha",
    "Jalaukavacharana"
  ],

  highlights: [
    "Separate Eye OPD",
    "Separate ENT OPD",
    "Dedicated Kriyakalpa Room",
    "Dark Room for Ophthalmic Procedures",
    "Well-equipped Minor OT",
    "Integrated Ayurvedic & Modern Eye Care",
    "Integrated Ayurvedic & Modern ENT Care"
  ],

  faculty: [
    {
      name: "Dr. Rutuja Mahendra Jadhav",
      qualification: "",
      designation: "Assistant Professor"
    }
  ],

  gallery: [img1, img2, img3, img4]
};

function ShalakyaTantra() {
  return <DepartmentTemplate data={departmentData} />;
}

export default ShalakyaTantra;