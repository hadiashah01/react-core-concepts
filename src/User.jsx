import { useState } from 'react'
function User(info) {
  return (
    <>
      <table border={1}>
        <th>
          <td>Name</td>
          <td>Age</td>
          <td>Date of Birth</td>
          <td>City</td>
          <td>Profession</td>
        </th>
        <tbody><td>info.name</td>
        <td>info.age</td>
        <td><time datetime="2006-02-10">info.dob</time></td>
        <td>info.city</td>
        <td>info.profession</td></tbody>
      </table>
    </>
  )
}

export default User
