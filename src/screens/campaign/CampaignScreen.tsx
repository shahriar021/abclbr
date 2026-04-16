import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
  StatusBar, ScrollView,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PRIMARY = '#6C63FF';

const CAMPAIGNS = [
  {
    id: 1, title: 'Summer Glow Launch',
    dates: '15 Sep 25 - 25 Sep 25', days: '11 Days',
    influencers: 1, budget: '$100', status: 'Active', statusColor: '#4CAF50',
    bg: '#F5D0D0',
  },
  {
    id: 2, title: 'Eid Feast Moments',
    dates: '07 Aug 25 - 13 Aug 25', days: '05 Days',
    influencers: 3, budget: '$250', status: 'Inactive', statusColor: '#E53935',
    bg: '#1A1A2E',
  },
  {
    id: 3, title: 'Morning Chai Stories',
    dates: '03 Sep 25 - 10 Sep 25', days: '07 Days',
    influencers: 2, budget: null, status: 'Active', statusColor: '#4CAF50',
    bg: '#2D1B69',
  },
];

export default function CampaignScreen({ navigation }: any) {
  const [activeFilter, setActiveFilter] = useState('');

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation?.goBack()} style={styles.backBtn}>
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Campaign</Text>
        <View style={{ width: 36 }} />
      </View>

      {/* Filters */}
      <View style={styles.filterRow}>
        <TouchableOpacity style={styles.filterIconBtn}>
          <Text style={styles.filterIconTxt}>⚙</Text>
        </TouchableOpacity>
        {['Niche Tag', 'Budget'].map((f) => (
          <TouchableOpacity
            key={f}
            style={[styles.filterChip, activeFilter === f && styles.filterChipActive]}
            onPress={() => setActiveFilter(f === activeFilter ? '' : f)}
          >
            <Text style={[styles.filterChipTxt, activeFilter === f && { color: PRIMARY }]}>{f}</Text>
            <Text style={styles.filterArrow}>▾</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* List */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 16, gap: 16, paddingBottom: 100 }}>
        {CAMPAIGNS.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            activeOpacity={0.85}
            onPress={() => navigation?.navigate('CampaignDetailsScreen', { campaign: item })}
          >
            {/* Image area */}
            <View style={[styles.cardImage, { backgroundColor: item.bg }]}>
              <Image source={require("../../../assets/alibaker/img.png")} style={{width:"100%",height:"100%"}}/>
              <View style={[styles.statusBadge, { backgroundColor: item.statusColor }]}>
                <Text style={styles.statusTxt}>{item.status}</Text>
              </View>
            </View>

            {/* Info */}
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <View style={styles.cardRow}>
                <Text style={styles.cardDates}>{item.dates}</Text>
                <Text style={styles.cardDot}> • </Text>
                <Text style={styles.cardDays}>{item.days}</Text>
              </View>
              <View style={styles.cardFooter}>
                <View style={styles.influencerAvatars}>
                  {Array.from({ length: Math.min(item.influencers, 3) }).map((_, i) => (
                    <View key={i} style={[styles.miniAvatar, { marginLeft: i === 0 ? 0 : -8 }]} />
                  ))}
                  <Text style={styles.influencerCount}>  {item.influencers} Influencer(s)</Text>
                </View>
                {item.budget && <Text style={styles.budgetTxt}>{item.budget}</Text>}
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* FAB */}
      {/* <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabTxt}>+</Text>
      </TouchableOpacity> */}
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

  filterRow: { flexDirection: 'row', gap: 8, paddingHorizontal: 16, marginBottom: 8, alignItems: 'center' },
  filterIconBtn: {
    width: 36, height: 36, borderRadius: 8,
    borderWidth: 1.5, borderColor: '#E8E8F0', alignItems: 'center', justifyContent: 'center',
  },
  filterIconTxt: { fontSize: 16, color: '#555' },
  filterChip: {
    flexDirection: 'row', alignItems: 'center', gap: 4,
    paddingHorizontal: 14, paddingVertical: 8,
    borderWidth: 1.5, borderColor: '#E8E8F0', borderRadius: 20, backgroundColor: '#fff',
  },
  filterChipActive: { borderColor: PRIMARY, backgroundColor: PRIMARY + '11' },
  filterChipTxt: { fontSize: 13, color: '#555', fontWeight: '500' },
  filterArrow: { fontSize: 10, color: '#999' },

  card: { borderRadius: 16, overflow: 'hidden', borderWidth: 1.5, borderColor: '#F0F0F0' },
  cardImage: { height: 170, justifyContent: 'flex-end', padding: 10 },
  statusBadge: {
    alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20,
  },
  statusTxt: { color: '#fff', fontSize: 12, fontWeight: '600' },
  cardBody: { padding: 14, backgroundColor: '#fff' },
  cardTitle: { fontSize: 16, fontWeight: '700', color: '#1A1A2E', marginBottom: 6 },
  cardRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  cardDates: { fontSize: 12, color: '#888' },
  cardDot: { fontSize: 12, color: PRIMARY },
  cardDays: { fontSize: 12, color: '#888' },
  cardFooter: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  influencerAvatars: { flexDirection: 'row', alignItems: 'center' },
  miniAvatar: { width: 24, height: 24, borderRadius: 12, backgroundColor: '#C8C8C8', borderWidth: 2, borderColor: '#fff' },
  influencerCount: { fontSize: 12, color: '#888', marginLeft: 4 },
  budgetTxt: { fontSize: 14, fontWeight: '700', color: PRIMARY },

  fab: {
    position: 'absolute', bottom: 90, right: 20,
    width: 52, height: 52, borderRadius: 26,
    backgroundColor: PRIMARY, alignItems: 'center', justifyContent: 'center',
    elevation: 6, shadowColor: PRIMARY, shadowOpacity: 0.4, shadowOffset: { width: 0, height: 4 }, shadowRadius: 8,
  },
  fabTxt: { color: '#fff', fontSize: 26, fontWeight: '300', marginTop: -2 },
});