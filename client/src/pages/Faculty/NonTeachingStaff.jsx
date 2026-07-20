import React from "react";
import PageLayout from "../../components/Common/PageLayout";

const NonTeachingStaff = () => {
    return (
        <PageLayout
            title="Non-Teaching Staff"
            // breadcrumb={["Faculty", "Non-Teaching Staff"]}

                  breadcrumb={[
                        { label: "Home", link: "/" },
                        { label: "Faculty", link: "#" },
                        { label: "Non-Teaching Staff" },
                    ]}

        >
            <div className="container py-4">

                <h2 className="text-success fw-bold mb-4">
                    Non-Teaching Staff
                </h2>

                <div className="table-responsive">

                    <table className="table table-bordered table-hover align-middle">

                        <thead className="table-success text-center">

                            <tr>
                                <th style={{ width: "7%" }}>Sr. No.</th>
                                <th style={{ width: "25%" }}>Name of Post</th>
                                <th style={{ width: "28%" }}>Department</th>
                                <th style={{ width: "40%" }}>Name of the Staff</th>
                            </tr>

                        </thead>

                        <tbody>

                            <tr><td className="text-center">1</td><td>IT Officer</td><td>IT Cell</td><td>Reshma Jiddimani</td></tr>
                            <tr><td className="text-center">2</td><td>IT Assistant</td><td>IT Cell</td><td>Mujamil Mujawar</td></tr>
                            <tr><td className="text-center">3</td><td>Multi Tasking Staff 1</td><td>IT Cell</td><td>Ajit Sonule</td></tr>

                            <tr><td className="text-center">4</td><td>PA</td><td>Administrative</td><td>Pranam Kamble</td></tr>
                            <tr><td className="text-center">5</td><td>Office Superintendent (OS)</td><td>Administrative</td><td>Saif Shaikh</td></tr>
                            <tr><td className="text-center">6</td><td>Clerical Staff 1</td><td>Administrative</td><td>Mayur Kamble</td></tr>
                            <tr><td className="text-center">7</td><td>Clerical Staff 2</td><td>Administrative</td><td>Prashant Kirte</td></tr>
                            <tr><td className="text-center">8</td><td>Clerical Staff 3</td><td>Administrative</td><td>Minal Ghatge</td></tr>
                            <tr><td className="text-center">9</td><td>Clerical Staff 4</td><td>Administrative</td><td>Rahul Hegde</td></tr>
                            <tr><td className="text-center">10</td><td>Accountant</td><td>Administrative</td><td>Om Jog</td></tr>
                            <tr><td className="text-center">11</td><td>Clerk</td><td>Administrative</td><td>Sanket Patil</td></tr>
                            <tr><td className="text-center">12</td><td>Clerk</td><td>Administrative</td><td>Aditya Hansnale</td></tr>
                            <tr><td className="text-center">13</td><td>Multi Tasking Staff 1</td><td>Administrative</td><td>Rohit Patil</td></tr>
                            <tr><td className="text-center">14</td><td>Multi Tasking Staff 2</td><td>Administrative</td><td>Prathamesh Gurav</td></tr>
                            <tr><td className="text-center">15</td><td>Multi Tasking Staff 3</td><td>Administrative</td><td>Pratik Dabade</td></tr>
                            <tr><td className="text-center">16</td><td>Multi Tasking Staff 4</td><td>Administrative</td><td>Vaibhav Malvekar</td></tr>

                            <tr><td className="text-center">17</td><td>Librarian</td><td>Central Library</td><td>Priyadarshan Patil</td></tr>
                            <tr><td className="text-center">18</td><td>Assistant Librarian 1</td><td>Central Library</td><td>Abhishek Morbale</td></tr>
                            <tr><td className="text-center">19</td><td>Assistant Librarian 2</td><td>Central Library</td><td>Rahul Mulik</td></tr>
                            <tr><td className="text-center">20</td><td>Library Attendant</td><td>Central Library</td><td>Shubham Kamble</td></tr>
                            <tr><td className="text-center">21</td><td>Multi Tasking Staff 1</td><td>Central Library</td><td>Kavita Kamble</td></tr>
                            <tr><td className="text-center">22</td><td>Clerk (1st Year)</td><td>Central Library</td><td>Suhas Patil</td></tr>

                            <tr><td className="text-center">23</td><td>Multi Tasking Staff 1</td><td>Ayurveda Samhita Siddhanta</td><td>Dhanaji Parit</td></tr>

                            <tr><td className="text-center">24</td><td>Cadaver Lifter</td><td>Rachana Sharira</td><td>Yogesh Parit</td></tr>
                            <tr><td className="text-center">25</td><td>Attendant cum Museum Keeper</td><td>Rachana Sharira</td><td>Ajay Chougule</td></tr>

                            <tr><td className="text-center">26</td><td>Lab Technician</td><td>Kriya Sharira</td><td>Vijay Telvekar</td></tr>
                            <tr><td className="text-center">27</td><td>Lab Attendant</td><td>Kriya Sharira</td><td>Nagesh Jamadagni</td></tr>

                            <tr><td className="text-center">28</td><td>Store Clerk</td><td>Store</td><td>Rohit Telvekar</td></tr>
                            <tr><td className="text-center">29</td><td>Store MTS</td><td>Store</td><td>Sandip M. Magdum</td></tr>

                            <tr><td className="text-center">30</td><td>Gardener</td><td>Campus Maintenance</td><td>Darshan Chandekar</td></tr>
                            <tr><td className="text-center">31</td><td>Site Engineer</td><td>Engineering</td><td>Ajit Kamble</td></tr>
                            <tr><td className="text-center">32</td><td>Electrician</td><td>Engineering</td><td>Mukesh Sharma</td></tr>
                            <tr><td className="text-center">33</td><td>Plumber</td><td>Engineering</td><td>Ketan Sonule</td></tr>
                            <tr><td className="text-center">34</td><td>Multi Tasking Staff</td><td>Engineering</td><td>Karan Gosavi</td></tr>
                            <tr><td className="text-center">35</td><td>Carpenter</td><td>Engineering</td><td>Ajay Sutar</td></tr>

                        </tbody>

                    </table>

                </div>

            </div>
        </PageLayout>
    );
};

export default NonTeachingStaff;