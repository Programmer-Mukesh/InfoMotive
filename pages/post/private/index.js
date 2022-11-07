import React, { useContext, useState } from "react";
import { Container, Grid, Paper } from "@mui/material";
import JobCards from "../../../components/JobCards";
import Head from "next/head";
import { PostContext } from "../../../context/PostContext";
import Loading from "../../../components/Loading";

const index = () => {
  const { privateData, loading } = useContext(PostContext);
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
        <title>InfoMotive | All Private Posts</title>
        <meta name="description" content="All Government Posts listing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h2>All Private Job Postings are here</h2>
          <div className="jobCardContainer">
            <Grid container className="boxesWrapper">
              <Grid item xs={12} sm={6}>
                <JobCards
                  title="Private Jobs"
                  allPosts={privateData}
                  btnRoute="/post/private"
                />
              </Grid>
            </Grid>
          </div>
        </>
      )}
    </Container>
  );
};

export default index;
