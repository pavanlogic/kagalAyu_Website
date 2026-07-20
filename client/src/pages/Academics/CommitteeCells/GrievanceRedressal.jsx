import React from "react";
//import PageLayout from ".../.../components/Common/PageLayout";
import PageLayout from "../../../components/Common/PageLayout";

const GrievanceRedressal = () => {
  return (
    <PageLayout
      title="GRIEVANCE REDRESSAL COMMITTEE "
      breadcrumb={[

        { label: "Home", link: "/" },
        { label: "Administration", link: "#" },
        { label: "Grievance Redressal Comittee" },
]}
    >
 <div className="container py-4">

    <h2 className="text-success fw-bold mb-4">
        Grievance Redressal Committee
    </h2>

    <div className="table-responsive">

        <table className="table table-bordered table-hover align-middle">

            <thead className="table-success text-center">

                <tr>
                    <th style={{ width: "8%" }}>Sr. No.</th>
                    <th style={{ width: "22%" }}>Designation</th>
                    <th style={{ width: "70%" }}>Name</th>
                </tr>

            </thead>

            <tbody>

                <tr>
                    <td className="text-center">1</td>
                    <td>Chairperson</td>
                    <td>Dean, Government Ayurved College, Kagal, Kolhapur</td>
                </tr>

                <tr>
                    <td className="text-center">2</td>
                    <td>Coordinator</td>
                    <td>Dr. Vinaya Potdar (Associate Professor – Kriya Sharira Department)</td>
                </tr>

                <tr>
                    <td className="text-center">3</td>
                    <td>Member Secretary</td>
                    <td>Dr. Mohan Kadam (Assistant Professor – Samhita Department)</td>
                </tr>

                <tr>
                    <td className="text-center">4</td>
                    <td>Member</td>
                    <td>Dr. Pooja Bhosale (Assistant Professor – Balrog Department)</td>
                </tr>

                <tr>
                    <td className="text-center">5</td>
                    <td>Member</td>
                    <td>Dr. Rahim Jamadar (Assistant Professor – Swasthavritta Department)</td>
                </tr>

                <tr>
                    <td className="text-center">6</td>
                    <td>Member</td>
                    <td>Dr. Mrunal Suryavanshi (Assistant Professor – Strirog & Prasuti Vigyan Department)</td>
                </tr>

            </tbody>

        </table>

    </div>

</div>
    </PageLayout>
  );
};

export default GrievanceRedressal;