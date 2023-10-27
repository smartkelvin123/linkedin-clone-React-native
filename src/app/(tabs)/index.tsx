import { StyleSheet } from "react-native";

import { View } from "../../components/Themed";
import posts from "../../../assets/data/posts.json";
import PostListItem from "../../components/PostListItem";

const firstPost = posts[1];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <PostListItem post={firstPost} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
