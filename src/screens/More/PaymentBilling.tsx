import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
  StatusBar, ScrollView, TextInput, Modal,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PRIMARY = '#6C63FF';

const TRANSACTIONS = [
  { id: '5564ED54DA65', type: 'Escrow Payment', amount: -242, date: '25 Aug 2025, 08:54 PM', icon: require("../../../assets/alibaker/renew.png"), iconBg: '#E8F5E9', iconColor: '#4CAF50' },
  { id: '5564ED54DA65', type: 'Renew',          amount: -15,  date: '25 Aug 2025, 08:54 PM', icon: require("../../../assets/alibaker/renew.png"), iconBg: '#E8F5E9', iconColor: '#4CAF50' },
  { id: '5564ED54DA65', type: 'Renew',          amount: -15,  date: '25 Aug 2025, 08:54 PM', icon: require("../../../assets/alibaker/renew.png"), iconBg: '#E8F5E9', iconColor: '#4CAF50' },
  { id: '5564ED54DA65', type: 'Downgrade',      amount: -15,  date: '25 Aug 2025, 08:54 PM', icon: require("../../../assets/alibaker/downgrade.png"), iconBg: '#FDE8E8', iconColor: '#E53935' },
  { id: '5564ED54DA65', type: 'Upgrade',        amount: -15,  date: '25 Aug 2025, 08:54 PM', icon: require("../../../assets/alibaker/upgrd.png"), iconBg: '#E8F0FE', iconColor: '#4CAF50' },
  { id: '5564ED54DA65', type: 'Renew',          amount: -15,  date: '25 Aug 2025, 08:54 PM', icon: require("../../../assets/alibaker/renew.png"), iconBg: '#E8F5E9', iconColor: '#4CAF50' },
  { id: '5564ED54DA65', type: 'Purchase',       amount: -15,  date: '25 Aug 2025, 08:54 PM', icon: require("../../../assets/alibaker/purchase.png"), iconBg: '#F0F0F0', iconColor: '#888' },
];

const FILTER_OPTIONS = ['Purchase', 'Renew', 'Downgrade', 'Upgrade', 'Payment'];

function FilterModal({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [checked, setChecked] = useState<Record<string, boolean>>({ Renew: true, Upgrade: true, Payment: true });

  const toggle = (key: string) => setChecked(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <Modal visible={visible} transparent animationType="slide">
      <TouchableOpacity style={styles.modalOverlay} activeOpacity={1} onPress={onClose} />
      <View style={styles.modalSheet}>
        {/* Handle */}
        <View style={styles.sheetHandle} />

        {/* Title */}
        <View style={styles.sheetHeader}>
          <Text style={styles.sheetTitle}>Filter</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
            <Text style={styles.closeTxt}>✕</Text>
          </TouchableOpacity>
        </View>

        {/* Date range */}
        <View style={styles.dateRow}>
          <View style={styles.dateField}>
            <Text style={styles.dateLabel}>Start Date</Text>
            <TextInput
              style={styles.dateInput}
              placeholder="DD/MM/YYYY"
              placeholderTextColor="#bbb"
              value={startDate}
              onChangeText={setStartDate}
            />
          </View>
          <View style={styles.dateField}>
            <Text style={styles.dateLabel}>End Date</Text>
            <TextInput
              style={styles.dateInput}
              placeholder="DD/MM/YYYY"
              placeholderTextColor="#bbb"
              value={endDate}
              onChangeText={setEndDate}
            />
          </View>
        </View>

        {/* Checkboxes */}
        {FILTER_OPTIONS.map((opt, i) => (
          <TouchableOpacity
            key={opt}
            style={[styles.checkRow, i < FILTER_OPTIONS.length - 1 && styles.checkBorder]}
            onPress={() => toggle(opt)}
            activeOpacity={0.7}
          >
            <Text style={styles.checkLabel}>{opt}</Text>
            <View style={[styles.checkbox, checked[opt] && styles.checkboxChecked]}>
              {checked[opt] && <Text style={styles.checkMark}>✓</Text>}
            </View>
          </TouchableOpacity>
        ))}

        {/* Buttons */}
        <View style={styles.sheetFooter}>
          <TouchableOpacity style={styles.clearBtn} onPress={() => setChecked({})}>
            <Text style={styles.clearTxt}>Clear Filter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.applyBtn} onPress={onClose}>
            <Text style={styles.applyTxt}>Apply Filter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

export function PaymentBillingScreen({ navigation }: any) {
  const [search, setSearch] = useState('');
  const [filterVisible, setFilterVisible] = useState(false);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation?.goBack()} style={styles.backBtn}>
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment & Billing</Text>
        <View style={{ width: 36 }} />
      </View>

      {/* Search + filter */}
      <View style={styles.searchRow}>
        <View style={styles.searchWrapper}>
          <Feather name="search" size={24} color="black" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Transaction ID"
            placeholderTextColor="#bbb"
            value={search}
            onChangeText={setSearch}
          />
        </View>
        <TouchableOpacity style={styles.filterBtn} onPress={() => setFilterVisible(true)}>
          <Image source={require("../../../assets/alibaker/Filter.png")} style={{width:48,height:48}}/>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
        {TRANSACTIONS.map((tx, i) => (
          <TouchableOpacity
            key={i}
            style={[styles.txRow, i < TRANSACTIONS.length - 1 && styles.txBorder]}
            activeOpacity={0.7}
            onPress={() => navigation?.navigate('TransactionDetails', { tx })}
          >
            <View style={[styles.txIcon, { backgroundColor: tx.iconBg }]}>
              <Text style={[styles.txIconTxt, { color: tx.iconColor }]}><Image source={tx.icon} style={{width:24,height:24}}/></Text>
            </View>
            <View style={styles.txInfo}>
              <View style={styles.txTop}>
                <Text style={styles.txType}>{tx.type}</Text>
                <Text style={styles.txAmount}>-${Math.abs(tx.amount)}</Text>
              </View>
              <View style={styles.txBottom}>
                <Text style={styles.txId}>{tx.id}</Text>
                <TouchableOpacity><Text style={styles.copyIcon}>⧉</Text></TouchableOpacity>
              </View>
              <Text style={styles.txDate}>{tx.date}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <FilterModal visible={filterVisible} onClose={() => setFilterVisible(false)} />
    </SafeAreaView>
  );
}

export function TransactionDetailsScreen({ navigation, route }: any) {
  const tx = route?.params?.tx ?? TRANSACTIONS[0];

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#F2F4F7" />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation?.goBack()} style={styles.backBtn}>
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Transaction Details</Text>
        <View style={{ width: 36 }} />
      </View>

      <View style={styles.detailBody}>
        <View style={styles.detailCard}>
          {/* Success icon */}
          <View style={styles.successIconWrapper}>
            <View style={styles.successIcon}>
              <Text style={styles.successCheck}>✓</Text>
            </View>
          </View>

          <Text style={styles.successTitle}>Payment Successfull</Text>
          <Text style={styles.successSub}>The escrow payment has been successfully completed</Text>
          <Text style={styles.detailAmount}>${Math.abs(tx.amount)}</Text>

          <View style={styles.dottedDivider} />

          {/* Card info */}
          <View style={styles.cardInfo}>
            <View style={styles.visaBox}><Text style={styles.visaTxt}>VISA</Text></View>
            <Text style={styles.cardNumber}>4777 80** **** 0912</Text>
            <Text style={styles.cardName}>Franco Álvarez</Text>
          </View>

          <View style={styles.dottedDivider} />

          {/* TX ID + date */}
          <View style={styles.txMeta}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
              <Text style={styles.metaTxt}>{tx.id}</Text>
              <TouchableOpacity><Text style={styles.copyIcon}>⧉</Text></TouchableOpacity>
            </View>
            <Text style={[styles.metaTxt, { marginTop: 4 }]}>{tx.date}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 16, paddingVertical: 14,
  },
  backBtn: { width: 36, justifyContent: 'center' },
  backArrow: { fontSize: 28, color: '#1A1A2E', marginTop: -2 },
  headerTitle: { fontSize: 18, fontWeight: '700', color: '#1A1A2E' },

  // Search row
  searchRow: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, gap: 10, marginBottom: 8 },
  searchWrapper: {
    flex: 1, flexDirection: 'row', alignItems: 'center',
    borderWidth: 1.5, borderColor: '#E8E8F0', borderRadius: 12,
    paddingHorizontal: 12, height: 46, backgroundColor: '#FAFAFA',
  },
  searchIcon: { fontSize: 15, marginRight: 8 },
  searchInput: { flex: 1, fontSize: 13, color: '#1A1A2E' },
  filterBtn: {
    width: 46, height: 46, borderRadius: 12,
    alignItems: 'center', justifyContent: 'center',
  },
  filterIcon: { fontSize: 18, color: '#555' },

  // Transaction rows
  txRow: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 14 },
  txBorder: { borderBottomWidth: 1, borderBottomColor: '#F5F5F5' },
  txIcon: { width: 44, height: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  txIconTxt: { fontSize: 18 },
  txInfo: { flex: 1 },
  txTop: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 },
  txType: { fontSize: 14, fontWeight: '700', color: '#1A1A2E' },
  txAmount: { fontSize: 14, fontWeight: '700', color: '#E53935' },
  txBottom: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 2 },
  txId: { fontSize: 12, color: '#888' },
  copyIcon: { fontSize: 14, color: '#aaa' },
  txDate: { fontSize: 12, color: '#aaa' },

  // Filter modal
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.3)' },
  modalSheet: {
    backgroundColor: '#fff', borderTopLeftRadius: 24, borderTopRightRadius: 24,
    paddingHorizontal: 20, paddingBottom: 34, paddingTop: 12,
  },
  sheetHandle: { width: 40, height: 4, borderRadius: 2, backgroundColor: '#E0E0E0', alignSelf: 'center', marginBottom: 16 },
  sheetHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  sheetTitle: { fontSize: 17, fontWeight: '700', color: '#1A1A2E' },
  closeBtn: {
    width: 30, height: 30, borderRadius: 15,
    borderWidth: 1.5, borderColor: '#E53935', alignItems: 'center', justifyContent: 'center',
  },
  closeTxt: { fontSize: 13, color: '#E53935', fontWeight: '700' },
  dateRow: { flexDirection: 'row', gap: 12, marginBottom: 16 },
  dateField: { flex: 1 },
  dateLabel: { fontSize: 12, color: '#888', marginBottom: 6 },
  dateInput: {
    borderWidth: 1.5, borderColor: '#E8E8F0', borderRadius: 10,
    height: 44, paddingHorizontal: 12, fontSize: 13, color: '#1A1A2E', backgroundColor: '#FAFAFA',
  },
  checkRow: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingVertical: 14,
  },
  checkBorder: { borderBottomWidth: 1, borderBottomColor: '#F5F5F5' },
  checkLabel: { fontSize: 15, color: '#1A1A2E' },
  checkbox: {
    width: 22, height: 22, borderRadius: 5,
    borderWidth: 2, borderColor: '#E0E0E0',
    alignItems: 'center', justifyContent: 'center',
  },
  checkboxChecked: { backgroundColor: PRIMARY, borderColor: PRIMARY },
  checkMark: { color: '#fff', fontSize: 13, fontWeight: '700' },
  sheetFooter: { flexDirection: 'row', gap: 12, marginTop: 20 },
  clearBtn: {
    flex: 1, borderRadius: 30, paddingVertical: 14, alignItems: 'center',
    borderWidth: 1.5, borderColor: '#E53935',
  },
  clearTxt: { color: '#E53935', fontSize: 15, fontWeight: '600' },
  applyBtn: { flex: 1, backgroundColor: PRIMARY, borderRadius: 30, paddingVertical: 14, alignItems: 'center' },
  applyTxt: { color: '#fff', fontSize: 15, fontWeight: '600' },

  // Transaction Details
  detailBody: { flex: 1, padding: 16, backgroundColor: '#F2F4F7' },
  detailCard: { backgroundColor: '#fff', borderRadius: 16, padding: 24, alignItems: 'center' },
  successIconWrapper: { marginBottom: 14 },
  successIcon: {
    width: 64, height: 64, borderRadius: 32,
    backgroundColor: '#4CAF50', alignItems: 'center', justifyContent: 'center',
  },
  successCheck: { color: '#fff', fontSize: 30, fontWeight: '700' },
  successTitle: { fontSize: 18, fontWeight: '700', color: '#1A1A2E', marginBottom: 6 },
  successSub: { fontSize: 13, color: '#888', textAlign: 'center', marginBottom: 16 },
  detailAmount: { fontSize: 28, fontWeight: '800', color: PRIMARY, marginBottom: 20 },
  dottedDivider: {
    width: '100%', borderWidth: 1, borderColor: '#E0E0E0',
    borderStyle: 'dashed', marginVertical: 16,
  },
  cardInfo: { alignItems: 'center', gap: 6 },
  visaBox: {
    borderWidth: 1.5, borderColor: '#E0E0E0', borderRadius: 6,
    paddingHorizontal: 10, paddingVertical: 4, marginBottom: 4,
  },
  visaTxt: { fontSize: 13, fontWeight: '800', color: '#1A4CB0', letterSpacing: 1 },
  cardNumber: { fontSize: 14, color: '#1A1A2E', letterSpacing: 1 },
  cardName: { fontSize: 13, color: '#888' },
  txMeta: { alignItems: 'center' },
  metaTxt: { fontSize: 13, color: '#888' },
});