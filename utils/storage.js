import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveBookmark = async (job) => {
  let bookmarks = await getBookmarks();
  bookmarks.push(job);
  await AsyncStorage.setItem("bookmarks", JSON.stringify(bookmarks));
};

export const getBookmarks = async () => {
  const bookmarks = await AsyncStorage.getItem("bookmarks");
  return bookmarks ? JSON.parse(bookmarks) : [];
};
