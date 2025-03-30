import React, { useCallback, useEffect, useState } from "react";
import { View, FlatList, Text } from "react-native";
import { getBookmarks } from "../../utils/storage";
import JobCard from "../../components/JobCard";
import styles from "../../styles/styles";
import { useFocusEffect } from "@react-navigation/native";


export default function BookmarksScreen() {
  const [bookmarks, setBookmarks] = useState([]);

  useFocusEffect(
    useCallback(() => {
      loadBookmarks();
    }, [])
  );

  const loadBookmarks = async () => {
    const savedJobs = await getBookmarks();
    console.log(savedJobs);
    
    setBookmarks(savedJobs);
  };

  return (
    <View style={styles.container}>
      {bookmarks.length === 0 ? (
        <Text>No Bookmarks</Text>
      ) : (
        <FlatList
          data={bookmarks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <JobCard job={item} />}
        />
      )}
    </View>
  );
}
