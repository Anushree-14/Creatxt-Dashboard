import React from "react";
import { useGetUsersQuery } from "../api/apiSlice";

function Users() {
  const { data: users = [], isLoading } = useGetUsersQuery();

  return (
    <div className="container">
      <h2>Users</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table className="styled-table">
          <thead>
            <tr><th>Name</th><th>Email</th><th>City</th></tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td><td>{user.email}</td><td>{user.address.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Users;
