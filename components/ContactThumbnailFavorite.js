import React from "react";
import { TouchableOpacity, Image, StyleSheet, Text, View } from "react-native";

const ContactThumbnailFavorite = ({ avatar, name, phone, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 20
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default ContactThumbnailFavorite;
