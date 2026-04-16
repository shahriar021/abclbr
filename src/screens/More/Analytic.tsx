import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar,
} from 'react-native';

const PRIMARY = '#6C63FF';

const STATS = [
  { label: 'Total Spend',   value: '$32,652', change: '+5.25%', up: true,  iconColor: '#E53935', iconBg: '#FDE8E8', icon: '$' },
  { label: 'Revenue',       value: '$87,453', change: '+5.25%', up: true,  iconColor: '#4CAF50', iconBg: '#E8F5E9', icon: '$' },
  { label: 'Unique reach',  value: '52.4K',   change: '+5.25%', up: true,  iconColor: '#888',    iconBg: '#F0F0F0', icon: '👁' },
  { label: 'CPA',           value: '$4.56',   change: '-7.85%', up: false, iconColor: '#888',    iconBg: '#F0F0F0', icon: '$' },
];

const PERIODS = ['Last 7 Days', 'Last 30 Days', 'Last 90 Days'];

export default function AnalyticsExecutiveSummaryScreen({ navigation }: any) {
  const [period, setPeriod] = useState('Last 30 Days');
  const [showPeriodMenu, setShowPeriodMenu] = useState(false);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#F2F4F7" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation?.goBack()} style={styles.backBtn}>
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Executive Summary</Text>
        <TouchableOpacity style={styles.infoBtn}>
          <Text style={styles.infoTxt}>ℹ</Text>
        </TouchableOpacity>
      </View>

      {/* Period selector + date range */}
      <View style={styles.filterRow}>
        <TouchableOpacity
          style={styles.periodChip}
          onPress={() => setShowPeriodMenu(!showPeriodMenu)}
          activeOpacity={0.8}
        >
          <Text style={styles.periodTxt}>{period}</Text>
          <Text style={styles.periodArrow}> ▾</Text>
        </TouchableOpacity>
        <Text style={styles.dateRange}>Sep 30 - Oct 30</Text>
      </View>

      {/* Period dropdown */}
      {showPeriodMenu && (
        <View style={styles.dropdown}>
          {PERIODS.map((p) => (
            <TouchableOpacity
              key={p}
              style={styles.dropdownItem}
              onPress={() => { setPeriod(p); setShowPeriodMenu(false); }}
            >
              <Text style={[styles.dropdownTxt, p === period && { color: PRIMARY, fontWeight: '700' }]}>{p}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Stats grid */}
      <View style={styles.grid}>
        {STATS.map((stat, i) => (
          <View key={i} style={styles.card}>
            <View style={styles.cardTop}>
              <Text style={styles.cardLabel}>{stat.label}</Text>
              <View style={[styles.iconBox, { backgroundColor: stat.iconBg }]}>
                <Text style={[styles.iconTxt, { color: stat.iconColor }]}>{stat.icon}</Text>
              </View>
            </View>
            <Text style={styles.cardValue}>{stat.value}</Text>
            <View style={styles.cardBottom}>
              <Text style={styles.fromTxt}>From last month</Text>
              <Text style={[styles.changeTxt, { color: stat.up ? '#4CAF50' : '#E53935' }]}>
                {stat.up ? '↑' : '↗'} {stat.change}
              </Text>
            </View>
          </View>
        ))}
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
  infoBtn: {
    width: 34, height: 34, borderRadius: 17,
    borderWidth: 1.5, borderColor: '#D0D0D0',
    alignItems: 'center', justifyContent: 'center',
  },
  infoTxt: { fontSize: 16, color: '#888' },

  filterRow: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 16, marginBottom: 14,
  },
  periodChip: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: '#EAE9FF', paddingHorizontal: 14, paddingVertical: 8, borderRadius: 20,
  },
  periodTxt: { fontSize: 13, color: PRIMARY, fontWeight: '600' },
  periodArrow: { fontSize: 12, color: PRIMARY },
  dateRange: { fontSize: 13, color: '#888' },

  dropdown: {
    marginHorizontal: 16, backgroundColor: '#fff', borderRadius: 12,
    borderWidth: 1.5, borderColor: '#E8E8F0', marginBottom: 8,
    overflow: 'hidden',
  },
  dropdownItem: { paddingHorizontal: 16, paddingVertical: 13, borderBottomWidth: 1, borderBottomColor: '#F5F5F5' },
  dropdownTxt: { fontSize: 14, color: '#555' },

  grid: {
    flexDirection: 'row', flexWrap: 'wrap',
    paddingHorizontal: 12, gap: 10,
  },
  card: {
    width: '47.5%', backgroundColor: '#fff',
    borderRadius: 14, padding: 14,
    borderWidth: 1.5, borderColor: '#F0F0F0',
  },
  cardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  cardLabel: { fontSize: 12, color: '#888', fontWeight: '500', flex: 1 },
  iconBox: {
    width: 32, height: 32, borderRadius: 16,
    alignItems: 'center', justifyContent: 'center',
    borderWidth: 1.5, borderColor: 'transparent',
  },
  iconTxt: { fontSize: 14, fontWeight: '700' },
  cardValue: { fontSize: 22, fontWeight: '800', color: '#1A1A2E', marginBottom: 8 },
  cardBottom: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  fromTxt: { fontSize: 10, color: '#aaa' },
  changeTxt: { fontSize: 11, fontWeight: '700' },
});