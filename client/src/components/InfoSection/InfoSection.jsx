import "./InfoSection.css";

function InfoSection() {

    const sections = [

        {
            title:"College Information",
            links:[
                    "History, Vision & Mission",
                    "Governing Body / Trust",
                    "Affiliation & Recognition",
                    "Permission Letters",
                    "Annual Reports",
                    "RTI Information"
            ]
        },

        {
            title:"Academics",
            links:[
                    "Courses Offered",
                    "Syllabus & Curriculum",
                    "Academic Calendar",
                    "Time Table",
                    "Examination",
                    "Results"
            ]
        },

        {
            title:"Faculty",
            links:[
                    "Department Wise Faculty",
                    "Qualifications",
                    "Experience",
                    "Registration Details",
                    "Faculty Publications"
            ]
        },

        {
            title:"Hospital",
            links:[
                    "OPD Statistics",
                    "IPD Statistics",
                    "Bed Strength",
                    "Clinical Departments",
                    "Panchakarma Unit",
                    "Diagnostics"
            ]
        },

        {
            title:"Student Corner",
            links:[
                    "Student Support Services",
                    "Scholarships",
                    "Code of Conduct",
                    "Grievance Redressal",
                    "Placement Cell",
                    "Gallery"
            ]
        },

        {
            title:"Mandatory Disclosure",
            links:[
                    "Anti Ragging Committee",
                    "Grievance Redressal Committee",
                    "Internal Complaints Committee",
                    "Gender Harassment Committee",
                    "SC/ST Committee",
                    "Grievance Form"
            ]
        }

    ];

    return(

        <section className="info-section container-fluid">

            <div className="row g-2">

                {

                    sections.map((item,index)=>(

                        <div className="col-lg-2 col-md-4 mb-4" key={index}>

                            <div className="info-card">

                                <div className="info-title">

                                    {item.title}

                                </div>

                                <ul>

                                    {

                                        item.links.map((link,i)=>(

                                            <li key={i}>

                                                 {link}

                                            </li>

                                        ))

                                    }

                                </ul>

                            </div>

                        </div>

                    ))

                }

            </div>

        </section>

    )

}

export default InfoSection;