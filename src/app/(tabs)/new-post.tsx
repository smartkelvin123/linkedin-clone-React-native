import { useNavigation, useRouter } from "expo-router";
import { useLayoutEffect, useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Pressable,
  Text,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { EvilIcons } from "@expo/vector-icons";

export default function postScreen() {
  // binding the state variable to the state input
  const [content, setContent] = useState("");
  const [image, setImage] = useState<String | null>(null);

  const router = useRouter();

  const navigation = useNavigation();

  const onPost = () => {
    console.warn("posting", content);
    router.push("/(tabs)/");
    setContent("");
    setImage(null);
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

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      // aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={content}
        onChangeText={setContent}
        placeholder="how are you doing"
        style={styles.input}
        multiline
      />

      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: 200, height: 200, aspectRatio: 1, marginTop: "auto" }}
        />
      )}

      <View style={styles.footer}>
        <Pressable style={styles.iconButton} onPress={pickImage}>
          <EvilIcons name="image" size={24} color="grey" />
        </Pressable>
        <View style={styles.iconButton}>
          <EvilIcons name="user" size={24} color="grey" />
        </View>
        <View style={styles.iconButton}>
          <EvilIcons name="star" size={24} color="grey" />
        </View>
      </View>
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
  footer: {
    // alignSelf: "flex-end",
    marginTop: "auto",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  iconButton: {
    backgroundColor: "gainboro",
    padding: 20,
    borderRadius: 100,
  },
});
