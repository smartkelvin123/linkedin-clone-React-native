import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Experience } from "@/types";

type ExperienceListItemProps = {
  experience: Experience;
};

const ExperienceListItem = ({ experience }: ExperienceListItemProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: experience.companyImage }} style={styles.image} />
      <View>
        <Text style={styles.title}>{experience.title}</Text>
        <Text>{experience.companyName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    marginBottom: 10,
    borderColor: "lightgray",
    borderBottomWidth: 0.5,
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    width: 100,
    marginRight: 5,

    aspectRatio: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ExperienceListItem;
