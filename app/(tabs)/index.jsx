import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator, StyleSheet,Text } from "react-native";
import axios from "axios";
import JobCard from "../../components/JobCard";

export default function Index() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await axios.get(`https://testapi.getlokalapp.com/common/jobs?page=${page}`);
      let result = response.data.results;
      let final_result_arr = result.filter((job) => job.hasOwnProperty("id"));
      setJobs((prevJobs) => [...prevJobs, ...final_result_arr]);
      setPage(page + 1);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Job Listings</Text>
      <FlatList
        data={jobs}
        keyExtractor={(item,index) => index}
        renderItem={({ item }) => <JobCard job={item} />}
        onEndReached={fetchJobs}
        onEndReachedThreshold={0.5}
        contentContainerStyle={styles.listContent}
        ListFooterComponent={loading && <ActivityIndicator size="large" color="#007AFF" style={styles.loader} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 24, 
    fontWeight: "bold", 
    textAlign: "center", 
    color: "#333", 
    marginVertical: 15, 
  },
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa", 
    paddingHorizontal: 15, 
  },
  listContent: {
    paddingVertical: 15, 
  },
  loader: {
    marginVertical: 20, 
    alignSelf: "center",
  },
});

