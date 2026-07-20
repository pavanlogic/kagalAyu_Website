import React from "react";
import PageLayout from "../../../components/Common/PageLayout";

const HRDCAntiRagging = () => {
  return (
    <PageLayout
      title="Human Resource Development Cell (HRDC) Anti-Ragging"
      breadcrumb={[

        { label: "Home", link: "/" },
        { label: "Administration", link: "#" },
        { label: "HRDC Anti-Ragging" },
]}
    >
<div className="container py-4">

    <h2 className="text-success fw-bold mb-4">
        HRDC Anti-Ragging Cell
    </h2>

    <div className="table-responsive">

        <table className="table table-bordered table-hover align-middle">

            <thead className="table-success text-center">

                <tr>
                    <th style={{ width: "8%" }}>Sr. No.</th>
                    <th style={{ width: "32%" }}>Name</th>
                    <th style={{ width: "35%" }}>Position</th>
                    <th style={{ width: "25%" }}>Designation</th>
                </tr>

            </thead>

            <tbody>

                <tr>
                    <td className="text-center">1</td>
                    <td>Dr. Umayya Sayyad</td>
                    <td>Dean</td>
                    <td>Chairperson</td>
                </tr>

                <tr>
                    <td className="text-center">2</td>
                    <td>Dr. Pranit H. Patil</td>
                    <td>Professor &amp; H.O.D., Kriya Sharira</td>
                    <td>Coordinator</td>
                </tr>

                <tr>
                    <td className="text-center">3</td>
                    <td>Dr. Prashant Malage</td>
                    <td>Consultant, Agad Tantra</td>
                    <td>Member</td>
                </tr>

                <tr>
                    <td className="text-center">4</td>
                    <td>Dr. Sunita Vaijwade</td>
                    <td>Yoga Therapist</td>
                    <td>Member</td>
                </tr>

                <tr>
                    <td className="text-center">5</td>
                    <td>Mr. Mayur Kamble</td>
                    <td>Administration</td>
                    <td>Member</td>
                </tr>

                <tr>
                    <td className="text-center">6</td>
                    <td>Mr. Vikas Akurde</td>
                    <td>Administration</td>
                    <td>Member</td>
                </tr>

                <tr>
                    <td className="text-center">7</td>
                    <td>Mrs. Ulka Hegade</td>
                    <td>Faculty Member</td>
                    <td>Member</td>
                </tr>

            </tbody>

        </table>

    </div>

</div>
    </PageLayout>
  );
};

export default HRDCAntiRagging;