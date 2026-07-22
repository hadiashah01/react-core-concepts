import "./User.css";
import { useState } from "react";
function User({ info }) {
  const [age, setAge] = useState(info.age);
  const eligibility = "...?";
  const [eligibilityStatus, setEligibilityStatus] = useState(eligibility);
  function checkStatus() {
    if (age > 18 && age < 25) {
      setEligibilityStatus("Eligible");
    } else {
      setEligibilityStatus("Not Eligible");
    }
  }
  return (
    <>
      <h1>Eligibility Checker</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Country</th>
            <th>Age</th>
            <th>Date of Birth</th>
            <th>City</th>
            <th>Profession</th>
            <th>Eligibility</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{info.name}</td>
            <td>{info.surname}</td>
            <td>{info.country}</td>
            <td>{info.age}</td>
            <td>
              <time dateTime="2006-02-10">{info.dob}</time>
            </td>
            <td>{info.city}</td>
            <td>{info.profession}</td>
            <td>{eligibilityStatus}</td>
          </tr>
        </tbody>
      </table>

      <button onClick={checkStatus}>Check Eligibilty Status</button>
    </>
  );
}
export default User;
