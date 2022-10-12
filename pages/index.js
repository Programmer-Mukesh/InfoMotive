import { Container, Grid, Paper } from "@mui/material";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState({});

  const handleChange = (event) => {
    const objKey = event.target.name;
    const objValue = event.target.value;

    setInput({ ...input, [objKey]: objValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      Fee: {
        general: input?.generalFee,
        OBC: input?.obcFee,
        SC: input?.scFee,
        ST: input?.stFee,
        female: input?.femaleFee,
      },
      age: {
        min: input?.minAge,
        max: input?.maxAge,
      },
      totalPostCatWise: {
        UR: input?.URPosts,
        BC: input?.BCPosts,
        MBC: input?.MBCPosts,
        EWS: input?.EWSPosts,
        SC: input?.SCPosts,
        ST: input?.STPosts,
        total: input?.totalPosts,
      },
      dispHeading: input?.dispHeading,
      descriptionURL: input?.descriptionURL,
      postName: input?.postName,
      postDate: input?.postDate,
      examDate: input?.examDate,
      lastDate: input?.lastDate,
      shortInfo: input?.shortInfo,
      admitCardAvlbl: input?.admitCardAvlbl,
      postNameShortDtl: input?.postNameShortDtl,
      totalPost: input?.totalPost,
      eligibility: input?.eligibility,
      applyLink: input?.applyLink,
      notificationLink: input?.notificationLink,
      officialWebsiteLink: input?.officialWebsiteLink,
    };

    fetch("https://jobsall.herokuapp.com/api/govt/postjob", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Cache: "no-cache",
      },
    })
      .then((response) => {
        console.log(response);

        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container className="homeContainer">
      <Head>
        <title>InfoMotive</title>
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
