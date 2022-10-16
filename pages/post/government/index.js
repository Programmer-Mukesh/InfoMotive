import React, { useContext, useState } from "react";
import { Container, Grid, Paper } from "@mui/material";
import JobCards from "../../../components/JobCards";
import { PostContext } from "../../../context/PostContext";

const index = () => {
  const { governmentData, loading } = useContext(PostContext);

  return (
    <Container className="">
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <h2>All Government Job Postings are here</h2>
          <div className="jobCardContainer">
            <Grid container className="boxesWrapper">
              <Grid item xs={12} sm={6}>
                <JobCards
                  title="All Government Jobs"
                  allPosts={governmentData}
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
