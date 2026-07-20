import React from "react";
//import PageLayout from ".../.../components/Common/PageLayout";
import PageLayout from "../../../components/Common/PageLayout";

const AntiRaggingCommittee = () => {
  return (
    <PageLayout
      title="Anti-Ragging Committee"
    //   breadcrumb={["Administration", "Anti-Ragging Committee"]}
      breadcrumb={[

        { label: "Home", link: "/" },
        { label: "Administration", link: "#" },
        { label: "Anti-Ragging Cell" },
]}
    >
      <div className="container py-4">

        <h2 className="text-success fw-bold mb-4">
          Anti-Ragging Committee
        </h2>

        <div className="table-responsive">

          <table className="table table-bordered table-hover align-middle">

            <thead className="table-success text-center">

              <tr>
                <th style={{ width: "10%" }}>Sr. No.</th>
                <th style={{ width: "45%" }}>Name</th>
                <th style={{ width: "45%" }}>Designation</th>
              </tr>

            </thead>

            <tbody>

              <tr>
                <td className="text-center">1</td>
                <td>Dr. Umayya Sayyad</td>
                <td>Chairperson</td>
              </tr>

              <tr>
                <td className="text-center">2</td>
                <td>Dr. Mohan Kadam</td>
                <td>Co-ordinator</td>
              </tr>

              <tr>
                <td className="text-center">3</td>
                <td>Dr. Monalisa Ghatage</td>
                <td>Member</td>
              </tr>

              <tr>
                <td className="text-center">4</td>
                <td>Dr. Vinaya Potdar</td>
                <td>Member</td>
              </tr>

              <tr>
                <td className="text-center">5</td>
                <td>Dr. Vishwajeet Dhage</td>
                <td>Member</td>
              </tr>

              <tr>
                <td className="text-center">6</td>
                <td>Mr. Sushant Patil</td>
                <td>Member (Lawyer)</td>
              </tr>

              <tr>
                <td className="text-center">7</td>
                <td>Mr. Kalandar Sanadi</td>
                <td>Local Media Representative</td>
              </tr>

              <tr>
                <td className="text-center">8</td>
                <td>Sambhaji Patil</td>
                <td>Civil Person</td>
              </tr>

              <tr>
                <td className="text-center">9</td>
                <td>Mr. Sunil Patil</td>
                <td>Local Police Representative</td>
              </tr>

              <tr>
                <td className="text-center">10</td>
                <td>--------------------</td>
                <td>Warden – Boys Hostel</td>
              </tr>

              <tr>
                <td className="text-center">11</td>
                <td>--------------------</td>
                <td>Warden – Girls Hostel</td>
              </tr>

              <tr>
                <td className="text-center">12</td>
                <td>Mr. Shivtej Magdum</td>
                <td>Administrative Staff</td>
              </tr>

              <tr>
                <td className="text-center">13</td>
                <td>Mrs. Priyanka Patankar</td>
                <td>Administrative Staff</td>
              </tr>

              <tr>
                <td className="text-center">14</td>
                <td>--------------------</td>
                <td>Student Representative (Boys)</td>
              </tr>

              <tr>
                <td className="text-center">15</td>
                <td>--------------------</td>
                <td>Student Representative (Girls)</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>
    </PageLayout>
  );
};

export default AntiRaggingCommittee;