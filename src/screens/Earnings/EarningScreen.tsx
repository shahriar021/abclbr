import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
  StatusBar, ScrollView, TextInput,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PRIMARY = '#6C63FF';

// ─── Earnings & Withdrawals ───────────────────────────────────────────────────

const STATS = [
  { val: '$1,723', label: 'Waiting for release' },
  { val: '$576',   label: 'Ongoing orders' },
  { val: '$1,723', label: 'Total earnings' },
  { val: '$576',   label: 'Earnings on Oct 2025' },
  { val: '$1,723', label: 'Total withdrawals' },
  { val: '$576',   label: 'Withdrawals on Oct 2025' },
];

const HISTORY = [
  {
    date: '25 Aug 2025, 11:53 PM',
    orderId: 'HGD74648HDG',
    txId: '8766789KJGD4',
    type: 'Balance Withdraw',
    typeColor: '#E53935',
    amount: '$754',
    iconBg: '#FDE8E8',
    iconColor: '#E53935',
    iconSymbol: require('../../../assets/alibaker/earningRed.png'),
    bgColor:"#FFF7F6"
  },
  {
    date: '25 Aug 2025, 11:53 PM',
    orderId: 'HGD74648HDG',
    txId: '8766789KJGD4',
    type: 'Order Completed',
    typeColor: '#4CAF50',
    amount: '$754',
    iconBg: '#E8F5E9',
    iconColor: '#4CAF50',
    iconSymbol: require('../../../assets/alibaker/earningGreen.png'),
    bgColor:"#F3FCF4"
  },
];

export function EarningsWithdrawalsScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation?.goBack()} style={styles.backBtn}>
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Earnings & Withdrawals</Text>
        <TouchableOpacity style={styles.infoBtn}>
          <Image source={require("../../../assets/alibaker/earningI.png")} style={{width:20,height:20}}/>
        </TouchableOpacity>
      </View>

      <ScrollView  style={{ flex: 1 }} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 140 }}>

        {/* Balance */}
        <View style={styles.balanceSection}>
          <Text style={styles.balanceAmt}>$345</Text>
          <Text style={styles.balanceLabel}>Available Balance</Text>
        </View>

        {/* Stats grid */}
        <View style={styles.statsGrid}>
          {STATS.map((s, i) => (
            <View key={i} style={styles.statCard}>
              <Text style={styles.statVal}>{s.val}</Text>
              <Text style={styles.statLabel}>{s.label}</Text>
            </View>
          ))}
        </View>

        <View style={styles.divider} />

        {/* History */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>History</Text>
          <TouchableOpacity><Text style={styles.seeAll}>See all</Text></TouchableOpacity>
        </View>

        <View style={styles.historyList}>
          {HISTORY.map((h, i) => (
            <View key={i} style={[styles.historyCard, i < HISTORY.length - 1 && { marginBottom: 12 }]}>
              <View style={styles.historyTop}>
                <Text style={styles.historyDate}>{h.date}</Text>
                <Image source={h.iconSymbol} style={{width:32,height:32}}/>
              </View>
              <Text style={styles.historyId}>Order ID: {h.orderId}</Text>
              <Text style={styles.historyId}>Transaction ID: {h.txId}</Text>
              <View style={styles.historyBottom}>
                <Text style={[styles.historyType, { color: h.typeColor,backgroundColor:h.bgColor,padding:5,borderRadius:10 }]}>{h.type}</Text>
                <View style={styles.amtBadge}>
                  <Text style={styles.amtTxt}>{h.amount}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
        <View style={styles.footer}>
        <TouchableOpacity style={styles.outlineBtn}>
          <Text style={styles.outlineTxt}>Purchase Subscription</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.primaryBtn}
          onPress={() => navigation?.navigate('WithdrawBalance Screen')}
        >
          <Text style={styles.primaryTxt}>Withdraw Balance</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>

      {/* Footer buttons */}
      
    </SafeAreaView>
  );
}

// ─── Withdraw Balance ─────────────────────────────────────────────────────────



// ─── Styles ───────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 16, paddingVertical: 14,
  },
  backBtn: { width: 36, justifyContent: 'center' },
  backArrow: { fontSize: 28, color: '#1A1A2E', marginTop: -2 },
  headerTitle: { fontSize: 17, fontWeight: '700', color: '#1A1A2E' },
  infoBtn: {
    width: 34, height: 34,  alignItems: 'center', justifyContent: 'center',
  },
  infoTxt: { fontSize: 16, color: '#888' },

  balanceSection: { alignItems: 'center', paddingVertical: 8, marginBottom: 16 },
  balanceAmt: { fontSize: 32, fontWeight: '800', color: PRIMARY },
  balanceLabel: { fontSize: 13, color: '#888', marginTop: 4 },

  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 12, gap: 10, marginBottom: 20 },
  statCard: {
    width: '47.5%', borderWidth: 1.5, borderColor: '#E8E8F0', borderRadius: 14, padding: 14,
  },
  statVal: { fontSize: 18, fontWeight: '800', color: '#1A1A2E', marginBottom: 4 },
  statLabel: { fontSize: 12, color: '#888' },

  divider: { height: 1, backgroundColor: '#F0F0F0', marginHorizontal: 16, marginBottom: 16 },

  sectionHeader: {
    flexDirection: 'row', justifyContent: 'space-between',
    paddingHorizontal: 16, marginBottom: 12,
  },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: '#1A1A2E' },
  seeAll: { fontSize: 13, color: PRIMARY, fontWeight: '600' },

  historyList: { paddingHorizontal: 16 },
  historyCard: { borderWidth: 1.5, borderColor: '#E8E8F0', borderRadius: 14, padding: 14 },
  historyTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 },
  historyDate: { fontSize: 13, color: '#1A1A2E', fontWeight: '500' },
  historyIcon: {
    width: 32, height: 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center',
  },
  historyIconTxt: { fontSize: 16, fontWeight: '700' },
  historyId: { fontSize: 12, color: '#888', marginBottom: 2 },
  historyBottom: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 },
  historyType: { fontSize: 13, fontWeight: '700' },
  amtBadge: {
    backgroundColor: '#EAE9FF', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 20,
  },
  amtTxt: { fontSize: 13, color: PRIMARY, fontWeight: '700' },

  footer: { 
  padding: 16,
  paddingBottom: 34,
  backgroundColor: '#fff',
  gap: 10,
}
,
  outlineBtn: {
    borderWidth: 1.5, borderColor: '#E0E0E0', borderRadius: 30,
    paddingVertical: 14, alignItems: 'center',
  },
  outlineTxt: { fontSize: 15, color: '#1A1A2E', fontWeight: '500' },
  primaryBtn: { backgroundColor: PRIMARY, borderRadius: 30, paddingVertical: 16, alignItems: 'center' },
  primaryTxt: { color: '#fff', fontSize: 16, fontWeight: '600' },

  // Withdraw Balance
 
});