import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function EmailVerificationScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={22} color="#111" />
        <Text style={styles.title}>Email Verification</Text>
        <View style={{ width: 22 }} /> {/* spacer */}
      </View>

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.iconWrapper}>
          <Ionicons name="mail-outline" size={40} color="#6366F1" />
        </View>

        <Text style={styles.heading}>Verify your email</Text>

        <Text style={styles.description}>
          We’ve sent a verification link to your email address. Please check
          your inbox and click the link to continue.
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Resend Email</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.secondary}>Change Email Address</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    paddingHorizontal: 16,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 12,
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  iconWrapper: {
    width: 90,
    height: 90,
    borderRadius: 50,
    backgroundColor: "#EEF2FF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  heading: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
    color: "#111827",
  },

  description: {
    textAlign: "center",
    fontSize: 13,
    color: "#6B7280",
    marginBottom: 25,
    paddingHorizontal: 20,
  },

  button: {
    backgroundColor: "#6366F1",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 14,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },

  secondary: {
    fontSize: 13,
    color: "#6366F1",
    fontWeight: "500",
  },
});