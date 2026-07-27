import React from "react";
import DepartmentTemplate from "../components/DepartmentTemplate";

import img1 from "../../assets/departments/prasutitantra/1.jpg";
import img2 from "../../assets/departments/prasutitantra/2.jpg";
import img3 from "../../assets/departments/prasutitantra/3.jpg";
import img4 from "../../assets/departments/prasutitantra/4.jpg";

const departmentData = {
  title: "Department of Prasuti Tantra & Stree Rog",

  quote:
    "Dedicated to comprehensive Ayurvedic healthcare for women through compassionate, holistic and evidence-based practices.",

  introduction: `
The Department of Prasuti Tantra Evam Stree Rog at Government Ayurved College & Hospital, Kagal is dedicated to providing comprehensive Ayurvedic healthcare services for women at every stage of life.

The department offers preventive, promotive and curative care based on Ayurvedic principles with special emphasis on antenatal care, postnatal care, menstrual health, infertility management, gynaecological disorders and women's wellness.

Patient-centred care is delivered through ethical and evidence-based Ayurvedic practices with the objective of promoting healthy motherhood and reproductive well-being.
`,

  vision: [
    "To become a centre of excellence in Ayurvedic women's healthcare.",
    "To provide quality, accessible and holistic healthcare.",
    "To promote maternal and reproductive health while preserving Ayurvedic principles."
  ],

  mission: [
    "Provide comprehensive Ayurvedic obstetric and gynaecological care.",
    "Promote preventive, promotive and curative healthcare for women.",
    "Create awareness regarding menstrual hygiene, pregnancy and postnatal care.",
    "Deliver ethical, patient-centred treatment with academic excellence."
  ],

  objectives: [
    "Improve maternal and reproductive health.",
    "Provide holistic Ayurvedic treatment for women.",
    "Promote healthy pregnancy and childbirth.",
    "Encourage women's health awareness.",
    "Develop competency in Ayurvedic obstetrics and gynaecology."
  ],

  facilities: [
    "OPD Consultation",
    "Antenatal (Garbhini Paricharya) Care",
    "Postnatal (Sutika Paricharya) Care",
    "Garbha Sanskar Counselling",
    "Pregnancy Wellness Programme",
    "Menstrual Disorder Management",
    "Infertility Evaluation & Treatment",
    "Uttar Basti Therapy",
    "Preconception Counselling",
    "Women's Health Education",
    "Ayurvedic Medicines",
    "Lifestyle Guidance",
    "Referral Services"
  ],

  activities: [
    "Women's Health Awareness Programmes",
    "Pregnancy Counselling",
    "Menstrual Hygiene Education",
    "Infertility Counselling",
    "Academic Teaching",
    "Clinical OPD Services",
    "Patient Counselling",
    "Community Outreach Activities"
  ],

  faculty: [
    {
      name: "Dr. Mrunal Mukund Suryavanshi",
      qualification: "",
      designation: "Assistant Professor"
    }
  ],

  gallery: [img1, img2, img3, img4]
};

function PrasutiTantra() {
  return <DepartmentTemplate data={departmentData} />;
}

export default PrasutiTantra;