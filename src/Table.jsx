import React from "react";

export const Table = ({ data }) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>First_name</th>
            <th>Last_name</th>
            <th>Email</th>
          </tr>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
