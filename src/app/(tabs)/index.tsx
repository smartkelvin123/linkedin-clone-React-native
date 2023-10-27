import { FlatList } from "react-native";

import posts from "../../../assets/data/posts.json";
import PostListItem from "../../components/PostListItem";

export default function HomeFeedScreen() {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostListItem post={item} />}
      // keyExtractor={(item) => item.id}     this is only when there is no id
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: 10 }}
    />
  );
}
