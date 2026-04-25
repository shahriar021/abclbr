import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
  StatusBar, ScrollView, TextInput,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const PRIMARY = '#6C63FF';

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
          <Image source={require("../../../assets/alibaker/earningI.png")} style={{width:20,height:20}}/>
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
            <View style={[styles.inputWrapper, { backgroundColor: '#E2E8F0' }]}>
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
          <Image source={require("../../../assets/alibaker/withdrawWarning.png")} style={{width:24,height:24}}/>
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
    backgroundColor: '#FFF8E7', borderRadius: 10, padding: 14,
  },
  warningIcon: { fontSize: 18, color: '#FFA000' },
  warningTxt: { fontSize: 13, color: '#4F3515' }
  
    // Withdraw Balance
   
  });