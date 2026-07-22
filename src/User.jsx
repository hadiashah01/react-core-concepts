import "./User.css";
import { useState } from "react";
function User({ info }) {
  const [age, setAge] = useState(23);
  const eligibility = "...?";
  const [eligibilityStatus, setEligibilityStatus] = useState(eligibility);
  function checkStatus() {
    const calcAge = new Date().getFullYear() - new Date(info.dob).getFullYear();
    setAge(calcAge);
    if (calcAge > 18 && calcAge < 25) {
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
            <td>{age}</td>
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
