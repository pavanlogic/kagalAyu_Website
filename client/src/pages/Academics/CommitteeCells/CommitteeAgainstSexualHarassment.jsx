import React from "react";
import PageLayout from "../../../components/Common/PageLayout";

const CommitteeAgainstSexualHarassment = () => {
    return (
        <PageLayout
            title="Committee Against Sexual Harassment"
            breadcrumb={[
                { label: "Home", link: "/" },
                { label: "Academics", link: "#" },
                { label: "Committee Against Sexual Harassment" },
            ]}
        >
            <div className="container py-4">

                <h2 className="text-success fw-bold mb-4">
                    Committee Against Sexual Harassment
                </h2>

                <div className="table-responsive">

                    <table className="table table-bordered table-hover align-middle">

                        <thead className="table-success text-center">
                            <tr>
                                <th style={{ width: "10%" }}>Sr. No.</th>
                                <th style={{ width: "55%" }}>Name of the Member</th>
                                <th style={{ width: "35%" }}>Designation</th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr>
                                <td className="text-center">1</td>
                                <td>Dr. Abhijeet Ahire</td>
                                <td>Chairperson</td>
                            </tr>

                            <tr>
                                <td className="text-center">2</td>
                                <td>Dr. Swarupa Mane</td>
                                <td>Co-Ordinator</td>
                            </tr>

                            <tr>
                                <td className="text-center">3</td>
                                <td>Dr. Mrunal Suryawanshi</td>
                                <td>Member</td>
                            </tr>

                            <tr>
                                <td className="text-center">4</td>
                                <td>Dr. Gouri Khot</td>
                                <td>Member</td>
                            </tr>

                            <tr>
                                <td className="text-center">5</td>
                                <td>Dr. Uditi Dhaygude</td>
                                <td>Member</td>
                            </tr>

                            <tr>
                                <td className="text-center">6</td>
                                <td>Dr. Namrata Parulekar</td>
                                <td>Member</td>
                            </tr>

                            <tr>
                                <td className="text-center">7</td>
                                <td>Mrs. Ulka Hegde</td>
                                <td>Member</td>
                            </tr>

                            <tr>
                                <td className="text-center">8</td>
                                <td>Miss. Snehal Kamble</td>
                                <td>Member</td>
                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>
        </PageLayout>
    );
};

export default CommitteeAgainstSexualHarassment;