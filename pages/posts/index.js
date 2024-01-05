
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getPosts } from "../../services/postService";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getPosts();
        setPosts(response.data);
      } catch (error) {
        console.error("Postlar yüklenirken hata oluştu:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Postlar</h1>
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

export default PostList;
