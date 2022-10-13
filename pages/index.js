import { Container, Grid, Paper } from "@mui/material";
import Head from "next/head";
import { useState, useEffect } from "react";
import axios from "axios";
import JobCards from "../components/JobCards";

export default function Home() {
  const [governmentData, setGovernmentData] = useState([]);

  const API_GOVERNMENT = "https://jobsall.herokuapp.com/api/govt/getAlljob";

  const fetchGovernanceData = async () => {
    const response = await axios.get(API_GOVERNMENT);
    setGovernmentData(response.data.data);
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
        <div className="boxesWrapper">
          <Grid container>
            <Grid item xs={12} sm={6} lg={3}>
              <Paper elevation={3} className="homeCategoryBox">
                <span>Government</span>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Paper elevation={3} className="homeCategoryBox">
                <span>Private</span>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Paper elevation={3} className="homeCategoryBox">
                <span>Interships</span>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Paper elevation={3} className="homeCategoryBox">
                <span>Freelancing</span>
              </Paper>
            </Grid>
          </Grid>
        </div>
        <div className="boxesWrapper">
          <Grid container>
            <JobCards title="Government Jobs" allPosts={governmentData} />
            <JobCards title="Private Jobs" allPosts={dummyData} />
            <JobCards title="Internship Jobs" allPosts={dummyData} />
            <JobCards title="Freelancing Jobs" allPosts={dummyData} />
          </Grid>
        </div>
      </main>
    </Container>
  );
}
