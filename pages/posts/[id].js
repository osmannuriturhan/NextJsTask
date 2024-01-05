
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getPostById } from "../../services/postService";

const PostDetails = () => {
  const [post, setPost] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        try {
          const response = await getPostById(id);
          setPost(response.data);
        } catch (error) {
          console.error("Post detayları yüklenirken hata oluştu:", error);
        }
      };

      fetchPost();
    }
  }, [id]);

  if (!post) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <div>
      <h1>Post Detayları</h1>
      <h2>{post.title}</h2>
      <p>{post.text}</p>
    </div>
  );
};

export default PostDetails;
