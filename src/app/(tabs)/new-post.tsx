import { useNavigation, useRouter } from "expo-router";
import { useLayoutEffect, useState } from "react";
import { StyleSheet, TextInput, View, Pressable, Text } from "react-native";

export default function postScreen() {
  // binding the state variable to the state input
  const [content, setContent] = useState("");
  const router = useRouter;

  const navigation = useNavigation();

  const onPost = () => {
    console.warn("posting", content);
    router.push("/(tabs)/");
    setContent("");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={onPost} style={styles.postButton}>
          <Text style={styles.postButtonText}>Submit</Text>
        </Pressable>
      ),
    });
  }, [onPost]);

  return (
    <View style={styles.container}>
      <TextInput
        value={content}
        onChangeText={setContent}
        placeholder="how are you doing"
        style={styles.input}
        multiline
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "red",
    fontSize: 18,
  },

  postButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  postButton: {
    backgroundColor: "royalblue",
    padding: 5,
    borderRadius: 50,
    paddingHorizontal: 15,
    marginRight: 10,
  },
});
