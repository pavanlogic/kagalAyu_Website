import React from "react";
import DepartmentTemplate from "../components/DepartmentTemplate";

import img1 from "../../assets/departments/swasthavritta/1.jpg";
import img2 from "../../assets/departments/swasthavritta/2.jpg";
import img3 from "../../assets/departments/swasthavritta/3.jpg";
import img4 from "../../assets/departments/swasthavritta/4.jpg";

const departmentData = {
  title: "Department of Swasthavritta Evam Yoga",

  quote:
    "Promoting Holistic Health through Ayurveda, Preventive Medicine and Yoga.",

  introduction: `
The Department of Swasthavritta Evam Yoga is one of the important academic and clinical departments of Government Ayurved College & Hospital, Kagal, Kolhapur.

Swasthavritta, the Ayurvedic science of preventive and promotive healthcare, emphasizes preservation of health through healthy lifestyle practices, dietary regulations, personal hygiene, seasonal regimens and Yoga.

The department plays a vital role in educating undergraduate students regarding preventive medicine and holistic healthcare based on Ayurvedic principles. Regular academic teaching, practical demonstrations, Yoga training sessions, health awareness programmes and community outreach activities are conducted to impart comprehensive knowledge and practical skills.
`,

  vision: [
    "To become a centre of excellence in preventive and promotive healthcare through Ayurveda and Yoga.",
    "To promote holistic health and well-being of society."
  ],

  mission: [
    "Provide quality education in Swasthavritta and Yoga.",
    "Promote healthy lifestyle practices for disease prevention.",
    "Conduct Yoga training and wellness programmes.",
    "Create awareness regarding public health, hygiene and nutrition.",
    "Encourage research and community-oriented activities."
  ],

  objectives: [
    "Develop preventive healthcare awareness.",
    "Promote Ayurvedic lifestyle practices.",
    "Train students in Yoga therapy.",
    "Improve community health through education.",
    "Integrate Ayurveda and Yoga for holistic healthcare."
  ],

  activities: [
    "Undergraduate Teaching (NCISM Curriculum)",
    "Dinacharya Demonstration",
    "Ritucharya Demonstration",
    "Sadvritta Demonstration",
    "Yoga Practical Training",
    "Seminars & Guest Lectures",
    "Academic Discussions",
    "Swasthavritta & Yoga OPD",
    "Lifestyle Counselling",
    "Health Education",
    "International Yoga Day Celebration",
    "Health Awareness Camps",
    "Participation in National Health Programmes"
  ],

  facilities: [
    "Well-equipped Department",
    "Dedicated Yoga Hall",
    "Preventive Healthcare OPD",
    "Teaching Charts",
    "Models",
    "Audio Visual Teaching Aids",
    "Educational Displays"
  ],

  specialities: [
    "Preventive Healthcare",
    "Promotive Healthcare",
    "Yoga Therapy",
    "Lifestyle Modification Counselling",
    "Health Education",
    "Community Outreach Activities",
    "Integration of Ayurveda & Yoga"
  ],

  faculty: [
    {
      name: "Dr. Rahim Rajekhan Jamadar",
      qualification: "B.A.M.S., M.D. (Swasthavritta)",
      designation: "Assistant Professor"
    }
  ],

  gallery: [img1, img2, img3, img4]
};

function Swasthavritta() {
  return <DepartmentTemplate data={departmentData} />;
}

export default Swasthavritta;