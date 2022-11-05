import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  API_GET_GOVERNMENT_POSTS,
  API_GET_PRIVATE_POSTS,
} from "../service/api";

export const PostContext = React.createContext();

const Context = ({ children }) => {
  const [governmentData, setGovernmentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [privateData, setPrivateData] = useState([]);

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
  const fetchPrivateData = async () => {
    try {
      const response = await axios.get(API_GET_PRIVATE_POSTS);
      const allPvtPosts = response.data.data;
      setPrivateData(allPvtPosts);
      setLoading(false);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    fetchGovernanceData();
    fetchPrivateData();
  }, []);

  return (
    <PostContext.Provider
      value={{
        loading,
        governmentData,
        privateData,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default Context;
