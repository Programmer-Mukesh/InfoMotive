import { Container, Grid, Paper } from "@mui/material";
import Head from "next/head";
import { useState, useContext } from "react";
import JobCards from "../components/JobCards";
import { useRouter } from "next/router";
import { PostContext } from "../context/PostContext";

export default function Home() {
  const { governmentData, loading, privateData } = useContext(PostContext);
  const router = useRouter();

  const firstFiveGovPosts = governmentData.slice(0, 5);
  const firstFivePvtPosts = privateData.slice(0, 5);

  const dummyData = [
    { id: 1, postName: "Amazon" },
    { id: 2, postName: "Microsoft" },
    { id: 3, postName: "Walmart" },
    { id: 4, postName: "Google" },
    { id: 1, postName: "Apple" },
  ];

  return (
    <Container className="homeContainer">
      <Head>
        <title>InfoMotive | HomePage</title>
        <meta
          name="description"
          content="One stop solution for all jobs and results notification"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {loading ? (
        <h3>Loading.....</h3>
      ) : (
        <main className="main-home">
          <h3 className="heading">
            Welcome! Get updates to all the jobs and result notification here
          </h3>
          <div className="jobCardContainer">
            <Grid container className="boxesWrapper">
              <Grid item xs={12} sm={6} lg={3}>
                <Paper elevation={3} className="homeCategoryBox">
                  <span onClick={() => router.push("/post/government/")}>
                    All Government Jobs
                  </span>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <Paper elevation={3} className="homeCategoryBox">
                  <span onClick={() => router.push("/post/private/")}>
                    All Private Jobs
                  </span>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <Paper elevation={3} className="homeCategoryBox">
                  <span>All Interships Jobs</span>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <Paper elevation={3} className="homeCategoryBox">
                  <span>All Freelancing Jobs</span>
                </Paper>
              </Grid>
            </Grid>
          </div>
          <div className="jobCardContainer">
            <Grid container className="boxesWrapper">
              <Grid item xs={12} sm={6} lg={3}>
                <JobCards
                  title="Government Jobs"
                  allPosts={firstFiveGovPosts}
                  btnRoute="/post/government"
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <JobCards
                  title="Private Jobs"
                  allPosts={firstFivePvtPosts}
                  btnRoute="/post/private"
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <JobCards
                  title="Internship Jobs"
                  allPosts={dummyData}
                  btnRoute="/post/intership"
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <JobCards
                  title="Freelancing Jobs"
                  allPosts={dummyData}
                  btnRoute="/post/freelancing"
                />
              </Grid>
            </Grid>
          </div>
        </main>
      )}
    </Container>
  );
}
