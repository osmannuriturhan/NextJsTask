
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getUserById } from "../../services/userService";

const UserDetails = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const fetchUser = async () => {
        try {
          const response = await getUserById(id);
          setUser(response.data);
        } catch (error) {
          console.error("Kullanıcı detayları yüklenirken hata oluştu:", error);
        }
      };

      fetchUser();
    }
  }, [id]);

  if (!user) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <div>
      <h1>Kullanıcı Detayları</h1>
      <p>
        İsim: {user.firstName} {user.lastName}
      </p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserDetails;
