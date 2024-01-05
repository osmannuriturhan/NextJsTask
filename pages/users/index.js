
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getUsers } from "../../services/userService";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        setUsers(response.data);
      } catch (error) {
        console.error("Kullanıcılar yüklenirken hata oluştu:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Kullanıcılar</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`} legacyBehavior>
              <a>
                {user.firstName} {user.lastName}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
