import { Container, Grid, Paper } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
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
        <div className="boxesWrapper">
          <Paper elevation={3} className="homeBox">
            <ul>
              <li>SSC cgl</li>
              <li>SEBI</li>
              <li>RBI Grade-B</li>
              <li>SBI PO</li>
              <li>SBI Clerk</li>
              <li>IBPS</li>
              <Link href="">see more</Link>
            </ul>
          </Paper>
          <Paper elevation={3} className="homeBox">
            <ul>
              <li>Amazon</li>
              <li>Microsoft</li>
              <li>Walmart</li>
              <li>TCS</li>
              <li>Infosys</li>
              <li>L&T</li>
              <Link href="">see more</Link>
            </ul>
          </Paper>
          <Paper elevation={3} className="homeBox">
            <ul>
              <li>Amazon</li>
              <li>DRDO</li>
              <li>Walmart</li>
              <li>Microsoft</li>
              <li>Google</li>
              <li>L&T</li>
              <Link href="">see more</Link>
            </ul>
          </Paper>
          <Paper elevation={3} className="homeBox">
            <ul>
              <li>Content Writer</li>
              <li>Grapic Design</li>
              <li>Video Editing</li>
              <li>Website Development</li>
              <li>Social media</li>
              <li>Assistant</li>
              <Link href="">see more</Link>
            </ul>
          </Paper>
        </div>
      </main>
    </Container>
  );
}
