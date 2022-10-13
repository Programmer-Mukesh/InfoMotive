import React from "react";
import { Grid, Paper } from "@mui/material";
import Link from "next/link";

const JobCards = ({ title, allPosts }) => {
  return (
    <Grid item xs={12} sm={6} lg={3}>
      <Paper elevation={3} className="homeBox">
        <div class="box third-party">
          <h2 class="title">{title}</h2>
          <div className="div-2-list">
            <ul class="box-content">
              {allPosts.map((post, i) => (
                <li key={post._id}>
                  <Link href="/post/government/upsc">
                    <a>{post.postName}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Paper>
    </Grid>
  );
};

export default JobCards;
