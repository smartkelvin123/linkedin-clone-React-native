import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";

import dummyUser from "../../../assets/data/user.json";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { User } from "@/types";

const UserProfile = () => {
  const [user, setUser] = useState<User>(dummyUser);
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ title: user.name });
  }, [user]);

  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <Image source={{ uri: user.backImage }} style={styles.backImage} />
        <View style={styles.headerContent}>
          <Image source={{ uri: user.image }} style={styles.image} />
          <Text style={styles.name}>{user.name}</Text>
          <Text>{user.position}</Text>

          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Connect</Text>
          </Pressable>
        </View>
      </View>

      {user.about && (
        <View style={styles.container}>
          <Text style={styles.title}>About</Text>
          <Text>{user.about}</Text>
        </View>
      )}

      <View style={styles.container}>
        <Text style={styles.title}>Experience</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "white",
  },
  headerContainer: {
    marginBottom: 5,
    backgroundColor: "white",
  },
  headerContent: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 5,
  },
  backImage: {
    width: "100%",
    height: 150,
    marginBottom: -60,
  },
  image: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "500",
  },

  button: {
    backgroundColor: "royalblue",
    padding: 5,
    borderRadius: 100,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
});

export default UserProfile;

// import { StyleSheet, Text, View, Image } from "react-native";
// import React, { useState } from "react";
// import { useLocalSearchParams } from "expo-router";
// import userJson from "../../../assets/data/posts.json";
// import { User } from "@/types";

// const UserProfile = () => {
//   const [user, setUser] = useState(userJson);

//   const { id } = useLocalSearchParams();
//   return (
//     <View style={styles.container}>
//       {/* header  */}
//       <View style={styles.header}>
//         {/* bg image  */}
//         <Image source={{ uri: user.backImage }} style={styles.userImage} />

//         {/* profile image  */}
//         <Image source={{ uri: user.image }} style={styles.image} />
//       </View>
//     </View>
//   );
// };

// export default UserProfile;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   header: {
//     backgroundColor: "white",
//     width: "100%",
//   },
//   userImage: {
//     width: "100%",
//     height: 150,
//     marginBottom: -60,
//   },
//   image: {
//     width: 120,
//     height: 100,
//     borderRadius: 50,
//     borderWidth: 3,
//     borderColor: "white",
//   },
// });
