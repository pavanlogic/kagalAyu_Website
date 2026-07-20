import React from "react";
import PageLayout from "../../../components/Common/PageLayout";

const IQACCommittee = () => {
    return (
        <PageLayout
            title="IQAC Committee"
            breadcrumb={[
                { label: "Home", link: "/" },
                { label: "IQAC", link: "#" },
                { label: "IQAC Comittee" },
            ]}
        >
            <div className="container py-4">

                <h2 className="text-success fw-bold mb-4">
                    IQAC Constitution 2026-27
                </h2>

                <div className="table-responsive">

                    <table className="table table-bordered table-hover align-middle">

                        <thead className="table-success text-center">
                            <tr>
                                <th style={{ width: "10%" }}>Sr. No.</th>
                                <th style={{ width: "30%" }}>Designation</th>
                                <th style={{ width: "60%" }}>Name</th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr>
                                <td className="text-center">1</td>
                                <td>Chairperson</td>
                                <td>Dr. Umayya Sayyad</td>
                            </tr>

                            <tr>
                                <td className="text-center">2</td>
                                <td>Medical Superintendent</td>
                                <td>Dr. Abhijit Ahire</td>
                            </tr>

                            <tr>
                                <td className="text-center">3</td>
                                <td>Member Secretary</td>
                                <td>Dr. Rabiya Shirgave</td>
                            </tr>

                            <tr>
                                <td className="text-center">4</td>
                                <td>Member</td>
                                <td>Dr. Vinaya Potdar</td>
                            </tr>

                            <tr>
                                <td className="text-center">5</td>
                                <td>Member</td>
                                <td>Dr. Hariprasad Kulkarni</td>
                            </tr>

                            <tr>
                                <td className="text-center">6</td>
                                <td>Member</td>
                                <td>Dr. Swarupa Mane</td>
                            </tr>

                            <tr>
                                <td className="text-center">7</td>
                                <td>Member</td>
                                <td>Mr. Mayur Kamble</td>
                            </tr>

                            <tr>
                                <td className="text-center">8</td>
                                <td>Member</td>
                                <td>Mr. Sanket Patil</td>
                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>
        </PageLayout>
    );
};

export default IQACCommittee;