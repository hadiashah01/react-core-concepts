function User({ info }) {
  return (
    <>
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
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default User;
