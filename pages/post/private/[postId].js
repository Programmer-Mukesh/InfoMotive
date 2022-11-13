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
      <h1 className="post-heading">{post?.dispHeading}</h1>

      <p className="post-descp">{post?.shortInfo}</p>

      <table class="table">
        <tbody>
          <tr>
            <td>
              <strong>Post Name</strong>
            </td>
            <td>
              <a href="https://www.fresherslive.com/search-jobs/role/inspector-jobs">
                {post?.postName}
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Batch</strong>
            </td>
            <td>{post.batch}</td>
          </tr>

          <tr>
            <td>
              <strong>Location</strong>
            </td>
            <td>{post?.location}</td>
          </tr>

          <tr>
            <td>
              <strong>Total Posts</strong>
            </td>
            <td>{post?.totalPost}</td>
          </tr>
          <tr>
            <td>
              <strong> Apply link</strong>
            </td>
            <td>
              <a href={post?.applyLink}>{post?.applyLink}</a>
            </td>
          </tr>
          <tr>
            <td>
              <strong>CTC </strong>
            </td>
            <td>{post?.ctc}</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

export default PostsPage;
