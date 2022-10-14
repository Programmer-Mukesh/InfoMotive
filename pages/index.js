import { Container, Grid, Paper } from "@mui/material";
import Head from "next/head";
import { useState, useEffect } from "react";
import axios from "axios";
import JobCards from "../components/JobCards";
import { useRouter } from "next/router";

export default function Home() {
  const [governmentData, setGovernmentData] = useState([]);
  const router = useRouter();
  const API_GOVERNMENT = "https://jobsall.herokuapp.com/api/govt/getAlljob";

  const fetchGovernanceData = async () => {
    const response = await axios.get(API_GOVERNMENT);
    const firstFiveResponses = response.data.data.slice(0, 5);
    setGovernmentData(firstFiveResponses);
  };

  useEffect(() => {
    fetchGovernanceData();
  }, []);

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
                <span>All Private Jobs</span>
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
              <JobCards title="Government Jobs" allPosts={governmentData} />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <JobCards title="Private Jobs" allPosts={dummyData} />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <JobCards title="Internship Jobs" allPosts={dummyData} />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <JobCards title="Freelancing Jobs" allPosts={dummyData} />
            </Grid>
          </Grid>
        </div>
      </main>
    </Container>
  );
}
