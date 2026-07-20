import React from "react";
import PageLayout from "../../../components/Common/PageLayout";

const CollegeCouncilCommittee = () => {
    return (
        <PageLayout
            title="College Council Committee"
            breadcrumb={[
                { label: "Home", link: "/" },
                { label: "Academics", link: "#" },
                { label: "ICollege Council Committee" },
            ]}
        >
            <div className="container py-4">

                <h2 className="text-success fw-bold mb-4">
                    College Council Committee
                </h2>

                <div className="table-responsive">

                    <table className="table table-bordered table-hover align-middle">

                        <thead className="table-success text-center">
                            <tr>
                                <th style={{ width: "8%" }}>Sr. No.</th>
                                <th style={{ width: "32%" }}>Name</th>
                                <th style={{ width: "15%" }}>Role</th>
                                <th style={{ width: "20%" }}>Mobile No.</th>
                                <th style={{ width: "25%" }}>Email ID</th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr>
                                <td className="text-center">1</td>
                                <td>Prof. Dr. Ummayya Sayyad</td>
                                <td>Chairperson</td>
                                <td>7276716040</td>
                                <td>drummayya@gmail.com</td>
                            </tr>

                            <tr>
                                <td className="text-center">2</td>
                                <td>Dr. Pranit Patil</td>
                                <td>Member</td>
                                <td>9960999892</td>
                                <td>Pranit.patil2950@gmail.com</td>
                            </tr>

                            <tr>
                                <td className="text-center">3</td>
                                <td>Dr. Anurita Sakat</td>
                                <td>Member</td>
                                <td>8483806305</td>
                                <td>dranuritasakat@gmail.com</td>
                            </tr>

                            <tr>
                                <td className="text-center">4</td>
                                <td>Dr. Swarupa Mane</td>
                                <td>Member</td>
                                <td>9421358723</td>
                                <td>dr.swarupamane@gmail.com</td>
                            </tr>

                            <tr>
                                <td className="text-center">5</td>
                                <td>Dr. Prashant Malage</td>
                                <td>Member</td>
                                <td>9175686993</td>
                                <td>prashtm.m434@gmail.com</td>
                            </tr>

                            <tr>
                                <td className="text-center">6</td>
                                <td>Dr. Vishwajeet Dhage</td>
                                <td>Member</td>
                                <td>9823808382</td>
                                <td>vishwjitdhage@gmail.com</td>
                            </tr>

                            <tr>
                                <td className="text-center">7</td>
                                <td>Dr. Rutuja Jadhav</td>
                                <td>Member</td>
                                <td>7875600704</td>
                                <td>rutuja.mi.30@gmail.com</td>
                            </tr>

                            <tr>
                                <td className="text-center">8</td>
                                <td>Dr. Mrunal Suryavanshi</td>
                                <td>Member</td>
                                <td>7709955720</td>
                                <td>drmrunalsuryavanshi39@gmail.com</td>
                            </tr>

                            <tr>
                                <td className="text-center">9</td>
                                <td>Dr. Pooja Bhosale</td>
                                <td>Member</td>
                                <td>9403241597</td>
                                <td>poojaabhosale77@gmail.com</td>
                            </tr>

                            <tr>
                                <td className="text-center">10</td>
                                <td>Dr. Gauri Khot</td>
                                <td>Member</td>
                                <td>8805577430</td>
                                <td>gaurikhot138@gmail.com</td>
                            </tr>

                            <tr>
                                <td className="text-center">11</td>
                                <td>Dr. Priyanka Tele</td>
                                <td>Member</td>
                                <td>8660969675</td>
                                <td>Vaidyatelepriyanka27@gmail.com</td>
                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>
        </PageLayout>
    );
};

export default CollegeCouncilCommittee;