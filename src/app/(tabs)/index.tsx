import { FlatList } from "react-native";

import posts from "../../../assets/data/posts.json";
import PostListItem from "../../components/PostListItem";

export default function HomeFeedScreen() {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostListItem post={item} />}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: 10 }}
    />

    // <View style={styles.container}>
    //   <PostListItem post={firstPost} />
    // </View>
  );
}
