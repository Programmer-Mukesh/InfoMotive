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
          <Grid container>
            <Grid item xs={12} sm={6} lg={3}>
              <Paper elevation={3} className="homeBox">
                <span>Government</span>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Paper elevation={3} className="homeBox">
                <span>Private</span>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Paper elevation={3} className="homeBox">
                <span>Interships</span>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Paper elevation={3} className="homeBox">
                <span>Freelancing</span>
              </Paper>
            </Grid>
          </Grid>
        </div>
        <div className="boxesWrapper">
          <Grid container>
            <Grid item xs={12} sm={6} lg={3}>
              <Paper elevation={3} className="homeBox">
                <Link href="/post/government/ssc">
                  <a>SSC cgl</a>
                </Link>
                <Link href="/post/government/sebi">
                  <a>SEBI</a>
                </Link>
                <Link href="/post/government/rbi">
                  <a>RBI Grade-B</a>
                </Link>
                <Link href="/post/government/sbi">
                  <a>SBI</a>
                </Link>
                <Link href="/post/government/nabard">
                  <a>NABARD</a>
                </Link>
                <Link href="/post/government/ibps">
                  <a>IBPS</a>
                </Link>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Paper elevation={3} className="homeBox">
                <Link href="/post/private/amazon">
                  <a>Amazon</a>
                </Link>
                <Link href="/post/private/microsoft">
                  <a>Microsoft</a>
                </Link>
                <Link href="/post/private/walmart">
                  <a>Walmart</a>
                </Link>
                <Link href="/post/private/tcs">
                  <a>TCS</a>
                </Link>
                <Link href="/post/private/infosys">
                  <a>Infosys</a>
                </Link>
                <Link href="/post/private/l&t">
                  <a>L&T</a>
                </Link>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Paper elevation={3} className="homeBox">
                <Link href="/post/internship/amazon">
                  <a>Amazon</a>
                </Link>
                <Link href="/post/internship/drdo">
                  <a>DRDO</a>
                </Link>
                <Link href="/post/internship/walmart">
                  <a>Walmart</a>
                </Link>
                <Link href="/post/internship/microsoft">
                  <a>Microsoft</a>
                </Link>
                <Link href="/post/internship/google">
                  <a>Google</a>
                </Link>
                <Link href="/post/internship/l&t">
                  <a>L&T</a>
                </Link>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Paper elevation={3} className="homeBox">
                <Link href="/post/freelancing/content-writer">
                  <a>Content Writer</a>
                </Link>
                <Link href="/post/freelancing/graphic-design">
                  <a>Grapic Design</a>
                </Link>
                <Link href="/post/freelancing/video-editing">
                  <a>Video Editing</a>
                </Link>
                <Link href="/post/freelancing/web-developer">
                  <a>Website Development</a>
                </Link>
                <Link href="/post/freelancing/social-media-marketing">
                  <a>Social media</a>
                </Link>
                <Link href="/post/freelancing/assistant">
                  <a>Assistant</a>
                </Link>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </main>
    </Container>
  );
}
