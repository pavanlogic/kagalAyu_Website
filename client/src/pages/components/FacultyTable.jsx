import React from "react";

function FacultyTable({ faculty = [] }) {
  return (
    <div className="department-card">
      <h2>Faculty Members</h2>

      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Sr.</th>
              <th>Name</th>
              <th>Qualification</th>
              <th>Designation</th>
            </tr>
          </thead>

          <tbody>
            {faculty.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.qualification}</td>
                <td>{item.designation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FacultyTable;