import React from "react";
import { useRouter } from "next/router";
const PostsPage = () => {
  const router = useRouter();
  const postId = router.query.postId;

  return <div>Postsss....{postId}</div>;
};

export default PostsPage;
