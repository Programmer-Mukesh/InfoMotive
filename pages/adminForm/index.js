import { Container, Grid, Paper } from "@mui/material";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState({});
  const [formState, setFormState] = useState("government");

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

  const handleFormToShow = (e) => {
    setFormState(e.target.value);
  };
  console.log("first", formState);
  return (
    <Container className="AdminFormContainer">
      <Head>
        <title>InfoMotive | Post data Form</title>
        <meta
          name="post data"
          content="One stop solution for all jobs and results notification"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mainWrapper">
        <div className="flexSpaceBtw">
          <p>
            Welcome! Get updates to all the jobs and result notification here
          </p>
          <select
            id="jobType"
            className="selectJobType"
            onChange={handleFormToShow}
          >
            <option value="government">Government</option>
            <option value="private">Private</option>
            <option value="intership">Intership</option>
            <option value="freelancing">Freelancing</option>
          </select>
        </div>
        <Paper className="form" elevation={1}>
          <form className="postForm" onSubmit={handleSubmit}>
            <div className="flexRow">
              <label>Post name</label>
              <input
                onChange={handleChange}
                placeholder="Enter Post name"
                name="postName"
              />

              <label>Post Date</label>
              <input onChange={handleChange} type="date" name="postDate" />

              <label>Exam date</label>
              <input onChange={handleChange} type="date" name="examDate" />

              <label>Last Date</label>
              <input onChange={handleChange} type="date" name="lastDate" />
            </div>
            <div className="flexRow">
              <label>Total Post</label>
              <input
                onChange={handleChange}
                placeholder="Enter total posts"
                type="number"
                name="totalPost"
              />

              <label>Eligibility</label>
              <input
                onChange={handleChange}
                placeholder="Enter Eligibility"
                name="eligibility"
              />

              <label>Apply Link</label>
              <input
                onChange={handleChange}
                placeholder="Enter Apply Link"
                name="applyLink"
              />
            </div>
            <div className="flexRow">
              <label>Notification Link</label>
              <input
                onChange={handleChange}
                placeholder="Enter Notification Link"
                name="notificationLink"
              />
              <label>Official Website Link</label>
              <input
                onChange={handleChange}
                placeholder="Enter Official Website Link"
                name="officialWebsiteLink"
              />

              <label>Description URL</label>
              <input
                onChange={handleChange}
                placeholder="Enter Description URL"
                name="descriptionURL"
              />
            </div>
            <div className="flexRow">
              <label>Display Heading</label>
              <input
                onChange={handleChange}
                placeholder="Enter Display Heading"
                name="dispHeading"
              />
              <label>PostName Short Detail</label>
              <input
                onChange={handleChange}
                placeholder="PostName Short Detail"
                name="postNameShortDtl"
              />
              <label>Admit card available date</label>
              <input
                onChange={handleChange}
                placeholder="Admit card available date"
                name="admitCardAvlbl"
                type="date"
              />
            </div>
            <div className="flexRow">
              <label>Short Infomation</label>

              <textarea
                placeholder="Enter Job Info"
                rows="4"
                cols="50"
                name="shortInfo"
                onChange={handleChange}
              />
              <label>Position Description</label>

              <textarea
                placeholder="Enter Position Description"
                rows="4"
                cols="50"
                name="postDescription"
                onChange={handleChange}
              />
            </div>
            <div className="flexRow">
              <label>Key Skills</label>

              <textarea
                placeholder="Enter Key Skills"
                rows="4"
                cols="50"
                name="skills"
                onChange={handleChange}
              />
              <label>Eligibility Criteria</label>

              <textarea
                placeholder="Enter Eligibility/Apply Criteria"
                rows="4"
                cols="50"
                name="applyCriteria"
                onChange={handleChange}
              />
            </div>
            {formState === "government" && (
              <>
                <div className="">
                  <label>Enter Fee for all categories</label>
                  <input
                    onChange={handleChange}
                    placeholder="General Fees"
                    name="generalFee"
                  />
                  <input
                    onChange={handleChange}
                    placeholder="OBC Fees"
                    name="obcFee"
                  />
                  <input
                    onChange={handleChange}
                    placeholder="SC Fees"
                    name="scFee"
                  />
                  <input
                    onChange={handleChange}
                    placeholder="ST Fees"
                    name="stFee"
                  />
                  <input
                    onChange={handleChange}
                    placeholder="Female Fees"
                    name="femaleFee"
                  />
                </div>
                <div className="flexRow">
                  <label>Age Details</label>
                  <input
                    onChange={handleChange}
                    placeholder="Enter min age"
                    name="minAge"
                  />
                  <input
                    onChange={handleChange}
                    placeholder="Enter max age"
                    name="maxAge"
                  />
                </div>
                <div className="">
                  <label>Categories wise posts</label>
                  <input
                    onChange={handleChange}
                    placeholder="UR Posts"
                    name="URPosts"
                  />
                  <input
                    onChange={handleChange}
                    placeholder="BC Posts"
                    name="BCPosts"
                  />
                  <input
                    onChange={handleChange}
                    placeholder="MBC Posts"
                    name="MBCPosts"
                  />
                  <input
                    onChange={handleChange}
                    placeholder="EWS Posts"
                    name="EWSPosts"
                  />
                  <input
                    onChange={handleChange}
                    placeholder="SC Posts"
                    name="SCPosts"
                  />
                  <input
                    onChange={handleChange}
                    placeholder="ST Posts"
                    name="STPosts"
                  />
                  <input
                    onChange={handleChange}
                    placeholder="Total Posts"
                    name="totalPosts"
                  />
                </div>
              </>
            )}
            {formState !== "government" && (
              <div className="flexRow">
                <label>CTC</label>
                <input
                  onChange={handleChange}
                  placeholder="Enter CTC"
                  name="ctc"
                />
                <label>Hourly Pay</label>
                <input
                  onChange={handleChange}
                  placeholder="Enter Hourly Pay"
                  name="hourlyPay"
                />
              </div>
            )}
            <br />
            <div className="alignBtnCenter">
              <input className="btnOrange" type="submit" placeholder="submit" />
            </div>
          </form>
        </Paper>
      </main>
    </Container>
  );
}
