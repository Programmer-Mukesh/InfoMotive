import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Container } from "@mui/material";

const PostsPage = () => {
  const [post, setPost] = useState({});
  const router = useRouter();
  const postId = router.query.postId;

  useEffect(() => {
    setPost(JSON.parse(sessionStorage.getItem("currentPost")));
  }, []);

  console.log("first", post);

  return (
    <Container className="single-post-wrapper">
      <Head>
        <title>{post.postName} </title>
        <meta name="description" content="Private Posts listing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h4 style={{ marginTop: "20px" }}>
        <span className="col1">Name of the Post: </span>
        {post.postName}
      </h4>
    </Container>
  );
};

export default PostsPage;
