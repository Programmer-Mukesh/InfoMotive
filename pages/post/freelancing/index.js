import React, { useContext, useState } from "react";
import { Container, Grid, Paper } from "@mui/material";
import JobCards from "../../../components/JobCards";
import Head from "next/head";

const index = () => {
  // const { governmentData, loading } = useContext(PostContext);
  const dummyData = [
    { id: 1, postName: "Amazon" },
    { id: 2, postName: "Microsoft" },
    { id: 3, postName: "Walmart" },
    { id: 4, postName: "Google" },
    { id: 1, postName: "Apple" },
  ];

  return (
    <Container className="">
      <Head>
        <title>InfoMotive | All Freelancing Posts</title>
        <meta name="description" content="All Government Posts listing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <h2>All Freelancing Job Postings are here</h2>
        <div className="jobCardContainer">
          <Grid container className="boxesWrapper">
            <Grid item xs={12} sm={6}>
              <JobCards
                title="Freelancing Jobs"
                allPosts={dummyData}
                btnRoute="/post/freelancing"
              />
            </Grid>
          </Grid>
        </div>
      </>
    </Container>
  );
};

export default index;
