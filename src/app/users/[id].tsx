import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const UserProfile = () => {
  const { id } = useLocalSearchParams;
  return (
    <View>
      <Text>UserProfile: {id}</Text>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({});
