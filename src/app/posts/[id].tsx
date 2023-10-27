import { View, Text, ScrollView } from "react-native";

import posts from "../../../assets/data/posts.json";
import PostListItem from "../../components/PostListItem";
import { useLocalSearchParams } from "expo-router";

const PostDetailScreen = () => {
  //  making out  each id in the url ... check for url deep linking
  const { id } = useLocalSearchParams();
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return <Text>Post not found</Text>;
  }

  return (
    <ScrollView>
      <PostListItem post={post} />
    </ScrollView>
  );
};

export default PostDetailScreen;
