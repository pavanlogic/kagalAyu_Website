import React from "react";

import DepartmentTemplate from "../components/DepartmentTemplate";

// import departmentData from "./data/rachanaSharir";

import img1 from "../../assets/departments/rachana/1.jpg";
import img2 from "../../assets/departments/rachana/2.jpg";
import img3 from "../../assets/departments/rachana/3.jpg";
import img4 from "../../assets/departments/rachana/4.jpg";


const departmentData = {
    title: "Department of Rachana Sharir",

    quote: "Rachana Sharir (Human Anatomy) is the backbone of all medical sciences.",

    introduction: `
Rachana Sharir (Anatomy) is one of the fundamental subjects of Ayurveda...
`,

    vision: [
        "Develop an Ayurved Sharir Museum.",
        "Promote research and publication.",
        "Strengthen practical orientation."
    ],

    mission: [
        "Provide strong theoretical and practical knowledge.",
        "Integrate Ayurveda with modern anatomy.",
        "Develop skilled Ayurvedic physicians."
    ],

    outcomes: [
        "Strong anatomical knowledge.",
        "Application in Rugna Pariksha.",
        "Clinical application of Marma, Srotas and Shatchakra."
    ],

    teachingAids: [
        "Department Library",
        "LCD & Computer",
        "Dissection Hall",
        "Museum",
        "Specimens & Charts"
    ],

    faculty: [
        {
            name: "Dr. Anurita A. Sakat",
            qualification: "BAMS MD (Rachana Sharir)",
            designation: "Professor"
        },
        {
            name: "Dr. Swarupa Shyam Mane",
            qualification: "BAMS MD (Rachana Sharir), Ph.D. Scholar",
            designation: "Associate Professor"
        },
        {
            name: "Dr. Rabiya Shirgave",
            qualification: "BAMS MD (Rachana Sharir)",
            designation: "Assistant Professor"
        }
    ],

    // gallery: []
    gallery: [img1, img2, img3, img4],
};

/*  export default departmentData;

departmentData.gallery = [img1, img2, img3, img4];

export default function RachanaSharir() {
    return <DepartmentTemplate data={departmentData} />;
}  */

function RachanaSharir() {
  return <DepartmentTemplate data={departmentData} />;
}

export default RachanaSharir;