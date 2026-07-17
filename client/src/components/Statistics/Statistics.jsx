import "./Statistics.css";
import {
  FaUniversity,
  FaUserGraduate,
  FaUsers,
  FaUserMd,
  FaProcedures,
  FaHospital,
  FaBuilding,
} from "react-icons/fa";

function Statistics() {
  const stats = [
    {
      icon: <FaUniversity />,
      title: "Established",
      value: "2023",
    },
    {
      icon: <FaUserGraduate />,
      title: "BAMS Intake",
      value: "100 Seats",
    },
    {
      icon: <FaUsers />,
      title: "Total Faculty",
      value: "72+",
    },
    {
      icon: <FaUserMd />,
      title: "OPD (Average / Day)",
      value: "200+",
    },
    {
      icon: <FaProcedures />,
      title: "IPD (Average / Day)",
      value: "60+",
    },
    {
      icon: <FaHospital />,
      title: "Hospital Beds",
      value: "100",
    },
    {
      icon: <FaBuilding />,
      title: "Departments",
      value: "15",
    },
  ];

  return (
    <section className="statistics-section">

      <div className="container-fluid">

        <div className="row g-2">

          {stats.map((item, index) => (

            <div className="col-lg col-md-4 col-sm-6" key={index}>

              <div className="stat-card">

                <div className="stat-icon">
                  {item.icon}
                </div>

                <div className="stat-content">

                  <h6>{item.title}</h6>

                  <h2>{item.value}</h2>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Statistics;