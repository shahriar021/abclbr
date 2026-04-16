import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const PURPLE = "#5B52D6";
const PURPLE_LIGHT = "#EEEDFE";
const PURPLE_TEXT = "#5B52D6";

export default function OrdersScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Orders</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

        {/* Order Card */}
        <View style={styles.card}>
          {/* Order ID */}
          <View style={styles.orderIdRow}>
            <Text style={styles.orderIdLabel}>Order ID: </Text>
            <Text style={styles.orderIdValue}>56466SD556JH</Text>
            <TouchableOpacity style={styles.copyIcon}>
              <View style={styles.copyBox}>
                <View style={styles.copyBoxInner} />
              </View>
            </TouchableOpacity>
          </View>

          {/* User Row */}
          <View style={styles.userRow}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>SI</Text>
            </View>
            <View>
              <Text style={styles.userName}>Sana Irfan</Text>
              <Text style={styles.userMeta}>Fashion • Makeup</Text>
            </View>
          </View>

          {/* Deadline */}
          <Text style={styles.deadlineText}>
            Deadline:{" "}
            <Text style={styles.deadlineValue}>05 Nov 2025, 11:53 PM</Text>
          </Text>

          {/* Budget + Status */}
          <View style={styles.budgetRow}>
            <Text style={styles.budgetText}>Budget: <Text style={styles.budgetAmount}>$155</Text></Text>
            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>In Progress</Text>
            </View>
          </View>
        </View>

        {/* Order Progress */}
        <View style={styles.card}>
          <View style={styles.progressHeader}>
            <Text style={styles.sectionTitle}>Order Progress</Text>
            <TouchableOpacity style={styles.historyBtn}>
              <Text style={styles.historyText}>History </Text>
              <Text style={styles.historyArrow}>›</Text>
            </TouchableOpacity>
          </View>

          {/* Step tracker */}
          <View style={styles.stepRow}>
            {["Pending", "In Progress", "Submitted", "Approved"].map((label, i) => {
              const done = i < 2;
              const active = i === 2;
              return (
                <View key={label} style={styles.stepItem}>
                  {/* Line before */}
                  {i > 0 && (
                    <View style={[styles.stepLine, done || active ? styles.stepLineDone : styles.stepLineGray]} />
                  )}
                  {/* Circle */}
                  <View style={[
                    styles.stepCircle,
                    done ? styles.stepCircleDone : active ? styles.stepCircleActive : styles.stepCircleGray
                  ]}>
                    {done && <Text style={styles.checkmark}>✓</Text>}
                  </View>
                  {/* Label */}
                  <Text style={[styles.stepLabel, done || active ? styles.stepLabelActive : styles.stepLabelGray]}>
                    {label}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>

        {/* Campaign Info */}
        <View style={styles.card}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Campaign Info</Text>
            <Text style={styles.chevron}>∧</Text>
          </View>

          <Text style={styles.fieldLabel}>Campaign Title</Text>
          <Text style={styles.fieldValue}>Summer Glow Collaboration</Text>

          <Text style={[styles.fieldLabel, { marginTop: 14 }]}>Description</Text>
          <Text style={styles.fieldValue}>
            We're launching our new GlowLab Summer Sunscreen a lightweight, non-greasy SPF 50
            formula designed for everyday use in hot and humid climates.
          </Text>

          <Text style={[styles.fieldLabel, { marginTop: 14 }]}>Goal</Text>
          <Text style={styles.fieldValue}>
            Boost awareness of GlowLab's new sunscreen line across South Asia
          </Text>
        </View>

        {/* Deliverables */}
        <View style={styles.card}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Deliverables</Text>
            <Text style={styles.chevron}>∧</Text>
          </View>
          <Text style={styles.fieldValue}>3 Reels + 2 Story Post</Text>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Submit Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.submitBtn} activeOpacity={0.85}>
          <Text style={styles.submitText}>Submit Deliverables</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#F2F2F7",
  },
  header: {
    backgroundColor: "#fff",
    paddingVertical: 14,
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#E5E5EA",
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "#000",
  },
  scrollContent: {
    padding: 16,
    gap: 12,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
  },
  orderIdRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  orderIdLabel: {
    fontSize: 13,
    color: "#8E8E93",
  },
  orderIdValue: {
    fontSize: 13,
    fontWeight: "600",
    color: "#000",
  },
  copyIcon: {
    marginLeft: 6,
  },
  copyBox: {
    width: 14,
    height: 14,
    borderWidth: 1.5,
    borderColor: "#8E8E93",
    borderRadius: 2,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  copyBoxInner: {
    width: 9,
    height: 9,
    borderWidth: 1.5,
    borderColor: "#8E8E93",
    borderRadius: 1,
    position: "absolute",
    bottom: -3,
    right: -3,
    backgroundColor: "#fff",
  },
  userRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#D1D1D6",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff",
  },
  userName: {
    fontSize: 15,
    fontWeight: "600",
    color: "#000",
  },
  userMeta: {
    fontSize: 13,
    color: "#8E8E93",
    marginTop: 1,
  },
  deadlineText: {
    fontSize: 13,
    color: "#8E8E93",
    marginBottom: 10,
  },
  deadlineValue: {
    color: "#000",
    fontWeight: "500",
  },
  budgetRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  budgetText: {
    fontSize: 13,
    color: "#8E8E93",
  },
  budgetAmount: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
  },
  statusBadge: {
    backgroundColor: PURPLE_LIGHT,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 5,
  },
  statusText: {
    color: PURPLE_TEXT,
    fontWeight: "500",
    fontSize: 13,
  },

  // Progress
  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  historyBtn: {
    flexDirection: "row",
    alignItems: "center",
  },
  historyText: {
    color: PURPLE,
    fontSize: 14,
    fontWeight: "500",
  },
  historyArrow: {
    color: PURPLE,
    fontSize: 18,
    lineHeight: 18,
  },
  stepRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  stepItem: {
    alignItems: "center",
    flex: 1,
    position: "relative",
  },
  stepLine: {
    position: "absolute",
    top: 12,
    right: "50%",
    left: "-50%",
    height: 2,
    zIndex: 0,
  },
  stepLineDone: {
    backgroundColor: PURPLE,
    borderStyle: "dashed",
  },
  stepLineGray: {
    backgroundColor: "#D1D1D6",
    borderStyle: "dashed",
  },
  stepCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    marginBottom: 6,
  },
  stepCircleDone: {
    backgroundColor: PURPLE,
  },
  stepCircleActive: {
    backgroundColor: "#8E8E93",
  },
  stepCircleGray: {
    backgroundColor: "#D1D1D6",
  },
  checkmark: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "700",
  },
  stepLabel: {
    fontSize: 11,
    textAlign: "center",
  },
  stepLabelActive: {
    color: "#000",
    fontWeight: "500",
  },
  stepLabelGray: {
    color: "#8E8E93",
  },

  // Campaign
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#000",
  },
  chevron: {
    fontSize: 16,
    color: "#8E8E93",
  },
  fieldLabel: {
    fontSize: 12,
    color: "#8E8E93",
    marginBottom: 4,
  },
  fieldValue: {
    fontSize: 14,
    color: "#000",
    lineHeight: 20,
  },

  // Footer
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    paddingBottom: 32,
    backgroundColor: "#F2F2F7",
  },
  submitBtn: {
    backgroundColor: PURPLE,
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: "center",
  },
  submitText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});