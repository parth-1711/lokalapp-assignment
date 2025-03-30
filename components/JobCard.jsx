import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function JobCard({ job }) {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.7} 
      onPress={() => {
        router.push({
          pathname: "/JobDetailsScreen",
          params: { job: JSON.stringify(job) },
        });
      }}
    >
      <View>
        <Text style={styles.title}>{job.title}</Text>
        <Text style={styles.details}>{job.primary_details.Place}</Text>
        <Text style={styles.details}>Salary: {job.primary_details.Salary}</Text>
        <Text style={styles.whatsapp}>WhatsApp: {job.whatsapp_no}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, 
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  details: {
    fontSize: 14,
    color: "#666",
    marginBottom: 2,
  },
  whatsapp: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#007AFF", 
    marginTop: 5,
  },
});

