import React from "react";
import PageLayout from "../../../components/Common/PageLayout";

const ResearchInnovationCell = () => {
    return (
        <PageLayout
            title="Research Innovation & Entrepreneurship Development Cell"
            breadcrumb={[
                { label: "Home", link: "/" },
                { label: "Administration", link: "#" },
                { label:"Research Innovation Cell"},
            ]}
        >
            <div className="container py-4">

                <h2 className="text-success fw-bold mb-4">
                    Research Innovation & Entrepreneurship Development Cell
                </h2>

                <div className="table-responsive">

                    <table className="table table-bordered table-hover align-middle">

                        <thead className="table-success text-center">
                            <tr>
                                <th style={{ width: "8%" }}>Sr. No.</th>
                                <th style={{ width: "25%" }}>Designation</th>
                                <th style={{ width: "67%" }}>Name</th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr>
                                <td className="text-center">1</td>
                                <td>Chairperson</td>
                                <td>Dean</td>
                            </tr>

                            <tr>
                                <td className="text-center">2</td>
                                <td>Co-ordinator</td>
                                <td>Dr. Hariprasad Kulkarni</td>
                            </tr>

                            <tr>
                                <td className="text-center">3</td>
                                <td>Member</td>
                                <td>Dr. Umayya Sayyad</td>
                            </tr>

                            <tr>
                                <td className="text-center">4</td>
                                <td>Member</td>
                                <td>Dr. Pranit Patil</td>
                            </tr>

                            <tr>
                                <td className="text-center">5</td>
                                <td>Member</td>
                                <td>Dr. Anurita Sakat</td>
                            </tr>

                            <tr>
                                <td className="text-center">6</td>
                                <td>Member</td>
                                <td>Dr. Gauri Khot</td>
                            </tr>

                            <tr>
                                <td className="text-center">7</td>
                                <td>Member</td>
                                <td>Dr. Rahim Jamadar</td>
                            </tr>

                            <tr>
                                <td className="text-center">8</td>
                                <td>Member</td>
                                <td>Dr. Rabiya Shirgave</td>
                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>
        </PageLayout>
    );
};

export default ResearchInnovationCell;