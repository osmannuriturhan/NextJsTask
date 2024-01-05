
import React from "react";
import Link from "next/link";

const PostList = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return <p>Post bulunamadı.</p>;
  }

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/posts/${post.id}`} passHref>
            <a>{post.title}</a>
          </Link>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
