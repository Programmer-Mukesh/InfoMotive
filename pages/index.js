import { Container, Grid, Paper } from "@mui/material";
import Head from "next/head";

export default function Home() {
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
          <Paper elevation={3} className="homeBox">
            <span>Government</span>
          </Paper>
          <Paper elevation={3} className="homeBox">
            <span>Private</span>
          </Paper>
          <Paper elevation={3} className="homeBox">
            <span>Interships</span>
          </Paper>
          <Paper elevation={3} className="homeBox">
            <span>Freelancing</span>
          </Paper>
        </div>
      </main>
    </Container>
  );
}
