import { View, Text, Button } from "react-native";
import React from "react";
import { Link, router, useNavigation } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function Login() {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 1000,
        rowGap: 10,
      }}
    >
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => router.replace("/sign-in")}
      >
        <Text style={{ color: "white", textAlign: "center", fontSize: 25 }}>
          Sign In
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={{ color: "white", textAlign: "center", fontSize: 25 }}>
          Sign up
        </Text>
      </TouchableOpacity>
      {/* <Link href="/sign-in" style={styles.buttonStyle}>
        <Text>Sign In</Text>
      </Link>
      <Link href="/sign-up">
        <Text>Sign Up</Text>
      </Link> */}
    </View>
  );
}

const styles = {
  buttonStyle: {
    elevation: 2,
    border: 1,
    borderRadius: 30,
    padding: 10,
    backgroundColor: "green",
    width: 250,
    textAign: "center",
  },
};
