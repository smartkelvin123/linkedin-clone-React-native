import React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { User } from "@/types";

import { Link } from "expo-router";

type UserListItemProps = {
  user: User;
};

const UserListItem = ({ user }: UserListItemProps) => {
  return (
    <View>
      <Link href={`/users/${user.id}`} asChild>
        <Pressable style={styles.header}>
          <Image source={{ uri: user.image }} style={styles.userImage} />
          <View>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.position}>{user.position}</Text>
          </View>
        </Pressable>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  userImage: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontWeight: "600",
    marginBottom: 5,
  },
  position: {
    fontSize: 12,
    color: "grey",
  },
});

export default UserListItem;
