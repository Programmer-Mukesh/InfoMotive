import React from "react";
import { Paper } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

const JobCards = ({ title, allPosts, btnRoute }) => {
  const router = useRouter();
  const handleCurrentPost = (post) => {
    sessionStorage.setItem("currentPost", JSON.stringify(post));
  };
  return (
    <Paper elevation={3} className="homeBox">
      <div class="box third-party">
        <h2 class="title">{title}</h2>
        <div className="div-2-list">
          <ul class="box-content">
            {allPosts.map((post, i) => (
              <li key={post._id}>
                <Link href={`${btnRoute}/${post.descriptionURL}`}>
                  <a onClick={() => handleCurrentPost(post)}>{post.postName}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {router.pathname === "/" && (
          <div className="btnCenter">
            <Link href={`${btnRoute}`}>
              <a className="viewMoreBtn">View More</a>
            </Link>
          </div>
        )}
      </div>
    </Paper>
  );
};

export default JobCards;
