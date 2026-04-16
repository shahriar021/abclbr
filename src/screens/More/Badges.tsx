import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const BadgeItem = ({ label, active }: any) => {
  return (
    <View style={styles.badgeItem}>
      <View
        style={[
          styles.badgeIcon,
          { backgroundColor: active ? "#6B7280" : "#9CA3AF" },
        ]}
      >
        <Ionicons name="lock-closed" size={16} color="#fff" />
      </View>
      <Text style={styles.badgeLabel}>{label}</Text>
    </View>
  );
};

export default function BadgesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={22} color="#111" />
        <Text style={styles.headerTitle}>Badges</Text>
        <Ionicons name="document-text-outline" size={22} color="#111" />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Top Badge List */}
        <View style={styles.card}>
          <View style={styles.badgeRow}>
            <BadgeItem label="Starter" active />
            <BadgeItem label="Verified" />
            <BadgeItem label="Pro" />
            <BadgeItem label="Elite" />
            <BadgeItem label="Impact Leader" />
          </View>
        </View>

        {/* No Badge Found */}
        <View style={styles.card}>
          <View style={styles.noBadgeRow}>
            <View style={styles.noBadgeIcon}>
              <Ionicons name="help" size={22} color="#9CA3AF" />
            </View>

            <View>
              <Text style={styles.noBadgeTitle}>No Badge Found</Text>
              <Text style={styles.noBadgeSub}>Your badge</Text>
            </View>
          </View>
        </View>

        {/* Starter Badge Card */}
        <View style={styles.card}>
            <View style={{width:"100%",alignItems:"flex-end"}}><Ionicons name="information-circle-outline" size={18} color="#9CA3AF" /></View>
          <View style={styles.starterHeader}>
            <View style={styles.greenCircle}>
              <Ionicons name="arrow-up" size={22} color="#fff" />
            </View>

            
          </View>

          <Text style={styles.starterTitle}>Starter Badge</Text>
          <Text style={styles.starterDesc}>
            You’re eligible to unlock starter badge
          </Text>

          <Text style={styles.price}>
            $9.99 <Text style={styles.perMonth}>/ per month</Text>
          </Text>
        </View>
      </ScrollView>

      {/* Bottom Button */}
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Purchase Badge</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginVertical: 10,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
  },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginBottom: 14,
    borderRadius: 16,
    padding: 16,
  },

  // Badge Row
  badgeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  badgeItem: {
    alignItems: "center",
    width: 60,
  },

  badgeIcon: {
    width: 42,
    height: 42,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
  },

  badgeLabel: {
    fontSize: 11,
    textAlign: "center",
    color: "#374151",
  },

  // No Badge
  noBadgeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  noBadgeIcon: {
    width: 50,
    height: 50,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#E5E7EB",
    justifyContent: "center",
    alignItems: "center",
  },

  noBadgeTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
  },

  noBadgeSub: {
    fontSize: 12,
    color: "#9CA3AF",
  },

  // Starter Badge
  starterHeader: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },

  greenCircle: {
    width: 56,
    height: 56,
    borderRadius: 30,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
  },

  starterTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    color: "#374151",
  },

  starterDesc: {
    fontSize: 12,
    textAlign: "center",
    color: "#9CA3AF",
    marginVertical: 6,
  },

  price: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 6,
    color: "#111827",
  },

  perMonth: {
    fontSize: 12,
    fontWeight: "400",
    color: "#6B7280",
  },

  // Bottom Button
  bottom: {
    padding: 16,
    backgroundColor: "#F3F4F6",
  },

  button: {
    backgroundColor: "#6366F1",
    paddingVertical: 14,
    borderRadius: 28,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
});