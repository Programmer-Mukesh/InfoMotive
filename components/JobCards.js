import React from "react";
import { Paper } from "@mui/material";
import Link from "next/link";

const JobCards = ({ title, allPosts }) => {
  return (
    <Paper elevation={3} className="homeBox">
      <div class="box third-party">
        <h2 class="title">{title}</h2>
        <div className="div-2-list">
          <ul class="box-content">
            {allPosts.map((post, i) => (
              <li key={post._id}>
                <Link href={`/post/government/${post.descriptionURL}`}>
                  <a>{post.postName}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Paper>
  );
};

export default JobCards;
