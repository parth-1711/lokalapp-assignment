import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, Image, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { getBookmarks, saveBookmark } from "../utils/storage";


export default function JobDetailsScreen() {
  const { job } = useLocalSearchParams();
  let jobObj = JSON.parse(job);
  // console.log(jobObj);
  

  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    checkIfBookmarked();
  }, [job,isBookmarked]);

  const checkIfBookmarked = async () => {
    const savedJobs = await getBookmarks();
    const exists = savedJobs.some((savedJob) => savedJob.id === jobObj.id);
    setIsBookmarked(exists);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.card}>
        <Image
          source={{ uri: jobObj.creatives[0].thumb_url || "../assets/images/notfound.jpg" }} 
          style={styles.image}
        />

        <Text style={styles.title}>{jobObj.title}</Text>
        <View style={styles.divider} />
        <Text style={styles.detail}>
          <Text style={styles.label}>Location:</Text> {jobObj.primary_details.Place}
        </Text>
        <Text style={styles.detail}>
          <Text style={styles.label}>Salary:</Text> {jobObj.primary_details.Salary}
        </Text>
        <Text style={styles.detail}>
          <Text style={styles.label}>WhatsApp:</Text> {jobObj.whatsapp_no}
        </Text>
        <Text style={styles.detail}>
          <Text style={styles.label}>Details:</Text><br />
          <Text>{jobObj.other_details==""?"No Details Provided": jobObj.other_details}</Text>
        </Text>

        {!isBookmarked && (
          <Button title="Bookmark Job" onPress={() => {saveBookmark(jobObj)
            setIsBookmarked(true);
          }} color="#007AFF" borderRadius='50' />
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  divider: {
    width: "100%",  
    height: 1,      
    backgroundColor: "#ccc", 
    marginVertical: 10, 
  },
  card: {
    width: "100%",
    minHeight: 350, 
    padding: 25,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    elevation: 5, 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    alignItems: "center", 
  },
  image: {
    width: 200, 
    height: 200,
    borderRadius: 50, 
    marginBottom: 15, 
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "#333",
  },
  detail: {
    fontSize: 16,
    marginBottom: 10,
    color: "#555",
    textAlign: "center",
  },
  label: {
    fontWeight: "bold",
    color: "#000",
  },
});

