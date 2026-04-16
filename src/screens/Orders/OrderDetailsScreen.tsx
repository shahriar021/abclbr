import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar, ScrollView,
} from 'react-native';

const PRIMARY = '#6C63FF';

const STEPS = ['Pending', 'In Progress', 'Submitted', 'Approved'];

export default function OrderDetailsScreen({ navigation, route }: any) {
  const currentStep = 0; // 0=Pending, 1=In Progress, 2=Submitted, 3=Approved

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#F2F4F7" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation?.goBack()} style={styles.backBtn}>
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Orders</Text>
        <View style={{ width: 36 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 16, gap: 12, paddingBottom: 120 }}>

        {/* Order summary card */}
        <View style={styles.card}>
          <View style={styles.idRow}>
            <Text style={styles.idLabel}>Order ID: </Text>
            <Text style={styles.idVal}>56466SD556JH</Text>
            <TouchableOpacity style={styles.copyBtn}>
              <Text style={styles.copyIcon}>⧉</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.influencerRow}>
            <View style={styles.avatar} />
            <View>
              <Text style={styles.infName}>Sana Irfan</Text>
              <Text style={styles.infTags}>Fashion • Makeup</Text>
            </View>
          </View>

          <Text style={styles.deadline}>Deadline: <Text style={styles.deadlineVal}>05 Nov 2025, 11:53 PM</Text></Text>

          <View style={styles.cardBottom}>
            <Text style={styles.budget}>Budget: <Text style={styles.budgetVal}>$155</Text></Text>
            <View style={styles.statusBadge}>
              <Text style={styles.statusTxt}>Pending</Text>
            </View>
          </View>
        </View>

        {/* Order Progress */}
        <View style={styles.card}>
          <View style={styles.progressHeader}>
            <Text style={styles.sectionTitle}>Order Progress</Text>
            <TouchableOpacity style={styles.historyBtn}>
              <Text style={styles.historyTxt}>History</Text>
              <Text style={styles.historyArrow}> ›</Text>
            </TouchableOpacity>
          </View>

          {/* Step tracker */}
          <View style={styles.stepTracker}>
            {STEPS.map((step, i) => (
              <View key={step} style={styles.stepItem}>
                {/* Connector line before */}
                {i > 0 && (
                  <View style={[styles.connector, i <= currentStep && styles.connectorActive]} />
                )}
                {/* Circle */}
                <View style={[
                  styles.stepCircle,
                  i < currentStep && styles.stepDone,
                  i === currentStep && styles.stepCurrent,
                  i > currentStep && styles.stepFuture,
                ]}>
                  {i === currentStep && <Text style={styles.stepCheck}>✓</Text>}
                </View>
              </View>
            ))}
          </View>

          {/* Labels */}
          <View style={styles.stepLabels}>
            {STEPS.map((step, i) => (
              <Text key={step} style={[
                styles.stepLabel,
                i === currentStep && styles.stepLabelActive,
              ]}>
                {step}
              </Text>
            ))}
          </View>
        </View>

        {/* Campaign Info */}
        <TouchableOpacity style={styles.rowCard} activeOpacity={0.7}>
          <Text style={styles.rowCardTxt}>Campaign Info</Text>
          <Text style={styles.rowArrow}>›</Text>
        </TouchableOpacity>

        {/* Deliverables */}
        <TouchableOpacity style={styles.rowCard} activeOpacity={0.7}>
          <Text style={styles.rowCardTxt}>Deliverables</Text>
          <Text style={styles.rowArrow}>›</Text>
        </TouchableOpacity>

      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.declineBtn}>
          <Text style={styles.declineTxt}>Decline</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.acceptBtn}>
          <Text style={styles.acceptTxt}>Accept</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F2F4F7' },
  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 16, paddingVertical: 14, backgroundColor: '#F2F4F7',
  },
  backBtn: { width: 36, justifyContent: 'center' },
  backArrow: { fontSize: 28, color: '#1A1A2E', marginTop: -2 },
  headerTitle: { fontSize: 18, fontWeight: '700', color: '#1A1A2E' },

  card: { backgroundColor: '#fff', borderRadius: 14, padding: 16 },

  idRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  idLabel: { fontSize: 12, color: '#888' },
  idVal: { fontSize: 13, fontWeight: '700', color: '#1A1A2E' },
  copyBtn: { marginLeft: 6 },
  copyIcon: { fontSize: 14, color: '#aaa' },

  influencerRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 10 },
  avatar: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#C8C8C8' },
  infName: { fontSize: 14, fontWeight: '700', color: '#1A1A2E' },
  infTags: { fontSize: 12, color: '#888', marginTop: 2 },

  deadline: { fontSize: 13, color: '#888', marginBottom: 10 },
  deadlineVal: { color: '#1A1A2E', fontWeight: '500' },

  cardBottom: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  budget: { fontSize: 13, color: '#888' },
  budgetVal: { fontSize: 15, fontWeight: '800', color: '#1A1A2E' },
  statusBadge: { backgroundColor: '#F0F0F0', paddingHorizontal: 14, paddingVertical: 5, borderRadius: 20 },
  statusTxt: { fontSize: 13, color: '#888', fontWeight: '500' },

  // Progress
  progressHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  sectionTitle: { fontSize: 15, fontWeight: '700', color: '#1A1A2E' },
  historyBtn: { flexDirection: 'row', alignItems: 'center' },
  historyTxt: { fontSize: 13, color: PRIMARY, fontWeight: '600' },
  historyArrow: { fontSize: 16, color: PRIMARY },

  stepTracker: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  stepItem: { flex: 1, flexDirection: 'row', alignItems: 'center' },
  connector: {
    flex: 1, height: 2, backgroundColor: '#D0D0D0',
    borderStyle: 'dashed',
    marginHorizontal: -2,
  },
  connectorActive: { backgroundColor: PRIMARY },
  stepCircle: {
    width: 28, height: 28, borderRadius: 14,
    alignItems: 'center', justifyContent: 'center', zIndex: 1,
  },
  stepCurrent: { backgroundColor: PRIMARY },
  stepDone: { backgroundColor: PRIMARY },
  stepFuture: { backgroundColor: '#5A5A5A' },
  stepCheck: { color: '#fff', fontSize: 14, fontWeight: '700' },

  stepLabels: { flexDirection: 'row' },
  stepLabel: { flex: 1, textAlign: 'center', fontSize: 11, color: '#888' },
  stepLabelActive: { color: PRIMARY, fontWeight: '700' },

  rowCard: {
    backgroundColor: '#fff', borderRadius: 14, padding: 16,
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
  },
  rowCardTxt: { fontSize: 15, fontWeight: '600', color: '#1A1A2E' },
  rowArrow: { fontSize: 20, color: '#C0C0C0' },

  footer: {
    position: 'absolute', bottom: 0, left: 0, right: 0,
    flexDirection: 'row', gap: 12, padding: 16, paddingBottom: 28,
    backgroundColor: '#F2F4F7',
  },
  declineBtn: {
    flex: 1, borderRadius: 30, paddingVertical: 14, alignItems: 'center',
    backgroundColor: '#FDE8E8',
  },
  declineTxt: { color: '#E53935', fontSize: 15, fontWeight: '600' },
  acceptBtn: {
    flex: 1, borderRadius: 30, paddingVertical: 14, alignItems: 'center',
    backgroundColor: '#E8F5E9',
  },
  acceptTxt: { color: '#4CAF50', fontSize: 15, fontWeight: '600' },
});