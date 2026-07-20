// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Academics from "../pages/Academics";
import Hospital from "../pages/Hospital";
import Gallery from "../pages/Gallery";
import Events from "../pages/Events";
import Contact from "../pages/Contact";
import News from "../pages/Notices";



// About Us Menu
import History from "../pages/About/History";
import VisionMission from "../pages/About/VisionMission";
import GoverningBody from "../pages/About/GoverningBody";
import Affiliation from "../pages/About/Affiliation";
import AnnualReports from "../pages/About/AnnualReports";
import RTI from "../pages/About/RTI";
import OrganizationChart from "../pages/About/OrganizationChart";


// Administration menu
import DeansMessage from "../pages/Administration/DeansMessage";


// Academics menu
    // Committee & Cells Submenu
import AntiRaggingCommittee from "../pages/Academics/CommitteeCells/AntiRaggingCommittee"; 
import HRDCAntiRagging from "../pages/Academics/CommitteeCells/HRDCAntiRagging"; 
import GrievanceRedressal from "../pages/Academics/CommitteeCells/GrievanceRedressal"; 
import ResearchInnovationCell from "../pages/Academics/CommitteeCells/ResearchInnovationCell"; 
import CollegeCouncilCommittee from "../pages/Academics/CommitteeCells/CollegeCouncilCommittee"; 
import CommitteeAgainstSexualHarassment from "../pages/Academics/CommitteeCells/CommitteeAgainstSexualHarassment"; 




// Faculty menu
import NonTeachingStaff from "../pages/Faculty/NonTeachingStaff";

// IQAC menu
import IQACCommittee from "../pages/Academics/CommitteeCells/IQACCommittee";

function AppRoutes() {
    return (
            <Routes>

                 {/* Home */}
                <Route path="/" element={<Home />} />

                {/* About Us */}
                <Route path="/history" element={<History />} />
                <Route path="/vision-mission" element={<VisionMission />} />
                <Route path="/governing-body" element={<GoverningBody />} />
                <Route path="/affiliation" element={<Affiliation />} />
                <Route path="/annual-reports" element={<AnnualReports />} />
                <Route path="/rti" element={<RTI />} />
                <Route path="/org-chart" element={<OrganizationChart />} />

                {/* Administration */}
                <Route path="/deans-message" element={<DeansMessage />} />

                {/* Academics/Comittee & Cells */}
                <Route path="/Anti-Ragging-Cell" element={<AntiRaggingCommittee />} />
                <Route path="/HRDC-Anti-Ragging" element={<HRDCAntiRagging />} />
                <Route path="/Grievance-Redressal" element={<GrievanceRedressal />} />
                <Route path="/Research-innovation-entrepreneurship-cell" element={<ResearchInnovationCell />} />
                <Route path="/College-Council-Committee" element={<CollegeCouncilCommittee />} />
                <Route path="/Committee-Against-Sexual-Harassment" element={<CommitteeAgainstSexualHarassment />} />
                

                {/* Faculty */}
                <Route path="/faculty/non-teaching-staff" element={<NonTeachingStaff />}/>
 
                <Route path="/academics/committee-cells/iqac-committee" element={<IQACCommittee />}/>

                {/* Main Menu */}
                <Route path="/academics" element={<Academics />} />
                <Route path="/hospital" element={<Hospital />} />
                <Route path="/gallery" element={<Gallery />} />
                              
                <Route path="/contact" element={<Contact />} /> 

                {/* 404 */}
                <Route
                    path="*"
                    element={
                    <div style={{ padding: "80px", textAlign: "center" }}>
                        <h2>404 - Page Not Found</h2>
                    </div>
                    }
                />

            </Routes>

    );
}

export default AppRoutes;