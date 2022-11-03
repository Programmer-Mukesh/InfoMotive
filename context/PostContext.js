import axios from "axios";
import React, { useState, useEffect } from "react";
import { API_GET_GOVERNMENT_POSTS } from "../service/api";

export const PostContext = React.createContext();

const Context = ({ children }) => {
  const [governmentData, setGovernmentData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchGovernanceData = async () => {
    try {
      const response = await axios.get(API_GET_GOVERNMENT_POSTS);
      const allGovPosts = response.data.data;
      setGovernmentData(allGovPosts);
      setLoading(false);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    fetchGovernanceData();
  }, []);

  return (
    <PostContext.Provider
      value={{
        loading,
        governmentData,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default Context;
