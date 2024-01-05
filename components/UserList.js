
import React from "react";
import Link from "next/link";

const UserList = ({ users }) => {
  if (!users || users.length === 0) {
    return <p>Kullanıcı bulunamadı.</p>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.id}`} passHref legacyBehavior>
            <a>
              {user.firstName} {user.lastName}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
