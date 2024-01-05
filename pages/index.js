import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getUsers } from "../services/userService";
import { getPosts } from "../services/postService";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        setUsers(response.data);
      } catch (error) {
        console.error("Kullanıcılar yüklenirken hata oluştu:", error);
      }
    };

    const fetchPosts = async () => {
      try {
        const response = await getPosts();
        setPosts(response.data);
      } catch (error) {
        console.error("Postlar yüklenirken hata oluştu:", error);
      }
    };

    fetchUsers();
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Ana Sayfa</h1>
      <nav>
        <Link href="/users" legacyBehavior>
          <a>Kullanıcılar</a>
        </Link>{" "}
        |
        <Link href="/posts" legacyBehavior>
          <a>Postlar</a>
        </Link>
      </nav>
      <h2>Kullanıcılar</h2>
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
      <h2>Postlar</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`} legacyBehavior>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
