import React, { useEffect, useState } from "react";
import { Container, Grid, Paper } from "@mui/material";
import JobCards from "../../../components/JobCards";
import axios from "axios";

const index = () => {
  const [governmentData, setGovernmentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_GOVERNMENT = "https://jobsall.herokuapp.com/api/govt/getAlljob";

  const fetchGovernanceData = async () => {
    const response = await axios.get(API_GOVERNMENT);
    setGovernmentData(response.data.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchGovernanceData();
  }, []);

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
