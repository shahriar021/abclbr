import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
  StatusBar, ScrollView, TextInput,
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
    iconSymbol: '↑',
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
    iconSymbol: '↓',
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
          <Text style={styles.infoTxt}>ℹ</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>

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
                <View style={[styles.historyIcon, { backgroundColor: h.iconBg, borderWidth: 1.5, borderColor: h.iconColor }]}>
                  <Text style={[styles.historyIconTxt, { color: h.iconColor }]}>{h.iconSymbol}</Text>
                </View>
              </View>
              <Text style={styles.historyId}>Order ID: {h.orderId}</Text>
              <Text style={styles.historyId}>Transaction ID: {h.txId}</Text>
              <View style={styles.historyBottom}>
                <Text style={[styles.historyType, { color: h.typeColor }]}>{h.type}</Text>
                <View style={styles.amtBadge}>
                  <Text style={styles.amtTxt}>{h.amount}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Footer buttons */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.outlineBtn}>
          <Text style={styles.outlineTxt}>Purchase Subscription</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.primaryBtn}
          onPress={() => navigation?.navigate('WithdrawBalance')}
        >
          <Text style={styles.primaryTxt}>Withdraw Balance</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// ─── Withdraw Balance ─────────────────────────────────────────────────────────

export function WithdrawBalanceScreen({ navigation }: any) {
  const [amount, setAmount] = useState('');

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation?.goBack()} style={styles.backBtn}>
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Withdraw Balance</Text>
        <TouchableOpacity style={styles.infoBtn}>
          <Text style={styles.infoTxt}>ℹ</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.wbBody}>
        {/* Amount row */}
        <View style={styles.amountRow}>
          <View style={{ flex: 1 }}>
            <Text style={styles.fieldLabel}>Withdraw Amount</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Enter amount"
                placeholderTextColor="#bbb"
                value={amount}
                onChangeText={setAmount}
                keyboardType="numeric"
              />
            </View>
          </View>
          <View style={{ width: 12 }} />
          <View style={{ flex: 1 }}>
            <Text style={styles.fieldLabel}>Rest Amount</Text>
            <View style={[styles.inputWrapper, { backgroundColor: '#F0F0F0' }]}>
              <Text style={styles.restAmt}>$566</Text>
            </View>
          </View>
        </View>

        {/* Transfer via */}
        <Text style={styles.fieldLabel}>Transfer Via</Text>
        <View style={styles.stripeRow}>
          <View style={styles.radioSelected} />
          <Text style={styles.stripeTxt}>stripe</Text>
        </View>

        {/* Warning */}
        <View style={styles.warningBox}>
          <Text style={styles.warningIcon}>⚠</Text>
          <Text style={styles.warningTxt}>Minimum withdraw amount  <Text style={{ fontWeight: '700' }}>$50</Text></Text>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.primaryBtn}>
          <Text style={styles.primaryTxt}>Confirm Withdraw</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

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
    width: 34, height: 34, borderRadius: 17,
    borderWidth: 1.5, borderColor: '#D0D0D0', alignItems: 'center', justifyContent: 'center',
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

  footer: { position: 'absolute', bottom: 5, left: 0, right: 0, padding: 16, paddingBottom: 28, backgroundColor: '#fff', gap: 10 },
  outlineBtn: {
    borderWidth: 1.5, borderColor: '#E0E0E0', borderRadius: 30,
    paddingVertical: 14, alignItems: 'center',
  },
  outlineTxt: { fontSize: 15, color: '#1A1A2E', fontWeight: '500' },
  primaryBtn: { backgroundColor: PRIMARY, borderRadius: 30, paddingVertical: 16, alignItems: 'center' },
  primaryTxt: { color: '#fff', fontSize: 16, fontWeight: '600' },

  // Withdraw Balance
  wbBody: { flex: 1, paddingHorizontal: 16, paddingTop: 8 },
  amountRow: { flexDirection: 'row', marginBottom: 20 },
  fieldLabel: { fontSize: 14, fontWeight: '600', color: '#1A1A2E', marginBottom: 8 },
  inputWrapper: {
    borderWidth: 1.5, borderColor: '#E8E8F0', borderRadius: 10,
    backgroundColor: '#FAFAFA', height: 48, justifyContent: 'center',
  },
  input: { paddingHorizontal: 14, fontSize: 14, color: '#1A1A2E' },
  restAmt: { paddingHorizontal: 14, fontSize: 15, color: '#1A1A2E', fontWeight: '600' },
  stripeRow: {
    flexDirection: 'row', alignItems: 'center', gap: 12,
    borderWidth: 1.5, borderColor: '#E8E8F0', borderRadius: 12,
    padding: 14, marginBottom: 16,
  },
  radioSelected: {
    width: 20, height: 20, borderRadius: 10,
    borderWidth: 6, borderColor: PRIMARY,
  },
  stripeTxt: { fontSize: 18, fontWeight: '800', color: PRIMARY, letterSpacing: 0.5 },
  warningBox: {
    flexDirection: 'row', alignItems: 'center', gap: 10,
    backgroundColor: '#FFF8E8', borderRadius: 10, padding: 14,
  },
  warningIcon: { fontSize: 18, color: '#FFA000' },
  warningTxt: { fontSize: 13, color: '#888' },
});