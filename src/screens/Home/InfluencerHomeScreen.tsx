import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
  StatusBar, ScrollView,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PRIMARY = '#6C63FF';

const CAMPAIGNS = [
  { title: 'Summer Glow Launch', dates: '15 Sep 25 - 25 Sep 25', days: '11 Days', applied: 34, budget: '$100', bg: '#F5D0D0' },
  { title: 'Spring Vibes',       dates: '15 Oct 25 - 25 Oct 25', days: '10 Days', applied: 18, budget: '$80',  bg: '#D0E8F5' },
];

export default function InfluencerHomeScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Top bar */}
      <View style={styles.topBar}>
        <Text style={styles.logo}>Collabbr</Text>
        <TouchableOpacity style={styles.bellBtn}>
          <Text style={styles.bellIcon}><Ionicons name="notifications-outline" size={24} color="black" /></Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>

        {/* Welcome row */}
        <View style={styles.welcomeRow}>
          <View style={styles.userAvatar} ><Image source={require("../../../assets/alibaker/img.png")} style={{width:"100%",height:"100%",borderRadius:50}}/></View>
          <View>
            <Text style={styles.welcomeTxt}>Welcome Back!</Text>
            <Text style={styles.userName}>Imran Mahmud Siddiq</Text>
          </View>
        </View>

        {/* Stats cards */}
        <View style={styles.statsSection}>
          {/* Verified badge */}
          <View style={styles.verifiedCard}>
            <View>
              <Text style={styles.verifiedTitle}>Verified</Text>
              <Text style={styles.verifiedSub}>Badge</Text>
            </View>
            <Image source={require("../../../assets/alibaker/verifiedBadge.png")} style={{width:30,height:30}}/>
          </View>

          {/* Fraud + Rating row */}
          <View style={styles.twoCol}>
            <View style={styles.halfCard}>
              <Text style={styles.halfVal}>45/100</Text>
              <Text style={styles.halfLabel}>Fraud Score</Text>
            </View>
            <View style={styles.halfCard}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                <Text style={styles.halfVal}>4.8/5</Text>
                <Text style={{ color: '#6366F1', fontSize: 26 }}>★</Text>
              </View>
              <Text style={styles.halfLabel}>Rating</Text>
            </View>
          </View>
        </View>

        {/* Earnings */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Earnings</Text>
          <TouchableOpacity><Text style={styles.seeAll}>See all</Text></TouchableOpacity>
        </View>
        <View style={styles.earningsGrid}>
          {[
            { val: '$560', label: 'Available balance' },
            { val: '$235', label: 'Earnings this month' },
            { val: '$650', label: 'Active Orders' },
            { val: '$0',   label: 'Canceled orders' },
          ].map((e, i) => (
            <View key={i} style={styles.earningCard}>
              <Text style={styles.earningVal}>{e.val}</Text>
              <Text style={styles.earningLabel}>{e.label}</Text>
            </View>
          ))}
        </View>

        {/* Campaigns */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Campaigns</Text>
          <TouchableOpacity onPress={() => navigation?.navigate('Campaigns')}>
            <Text style={styles.seeAll}>Explore more</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16, gap: 14 }}>
          {CAMPAIGNS.map((c, i) => (
            <TouchableOpacity key={i} style={styles.campaignCard} activeOpacity={0.85} onPress={()=>navigation.navigate("CampaignDetails Screen",{who:"influence"})}>
              <View style={[styles.campaignImage, { backgroundColor: c.bg }]} ><Image source={require("../../../assets/alibaker/img.png")} style={{width:"100%",height:"100%"}}/></View>
              <Text style={styles.campaignTitle}>{c.title}</Text>
              <View style={styles.campaignRow}>
                <Text style={styles.campaignDates}>{c.dates}</Text>
                <Text style={{ color: PRIMARY }}> • </Text>
                <Text style={styles.campaignDates}>{c.days}</Text>
              </View>
              <View style={styles.campaignFooter}>
                <View style={styles.appliedRow}>
                  {[0, 1, 2].map(j => (
                    <View key={j} style={[styles.miniAvatar, { marginLeft: j === 0 ? 0 : -8 }]} />
                  ))}
                  <Text style={styles.appliedTxt}>  {c.applied} applied</Text>
                </View>
                <Text style={styles.budgetTxt}>Budget: <Text style={{ color: PRIMARY, fontWeight: '700' }}>{c.budget}</Text></Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },

  topBar: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 16, paddingVertical: 12,
  },
  logo: { fontSize: 26, fontWeight: '800', color: PRIMARY },
  bellBtn: {
    width: 38, height: 38,
    alignItems: 'center', justifyContent: 'center',
  },
  bellIcon: { fontSize: 16 },

  welcomeRow: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 16, marginBottom: 16 },
  userAvatar: { width: 48, height: 48, borderRadius: 24, backgroundColor: '#C8C8C8' },
  welcomeTxt: { fontSize: 13, color: '#888' },
  userName: { fontSize: 16, fontWeight: '700', color: '#1A1A2E' },

  statsSection: { paddingHorizontal: 16, gap: 10, marginBottom: 20 },

  verifiedCard: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    borderWidth: 1.5, borderColor: '#E8E8F0', borderRadius: 14, padding: 16,
  },
  verifiedTitle: { fontSize: 16, fontWeight: '700', color: '#1A1A2E' },
  verifiedSub: { fontSize: 12, color: '#888', marginTop: 2 },
  verifiedBadge: {
    width: 36, height: 36, borderRadius: 18,
    backgroundColor: PRIMARY, alignItems: 'center', justifyContent: 'center',
  },
  verifiedCheck: { color: '#fff', fontSize: 16, fontWeight: '700' },

  twoCol: { flexDirection: 'row', gap: 10 },
  halfCard: {
    flex: 1, borderWidth: 1.5, borderColor: '#E8E8F0', borderRadius: 14, padding: 16,
  },
  halfVal: { fontSize: 26, fontWeight: '800', color: '#1A1A2E', marginBottom: 4 },
  halfLabel: { fontSize: 12, color: '#888' },

  sectionHeader: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingHorizontal: 16, marginBottom: 12,
  },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: '#1A1A2E' },
  seeAll: { fontSize: 13, color: PRIMARY, fontWeight: '600' },

  earningsGrid: {
    flexDirection: 'row', flexWrap: 'wrap',
    paddingHorizontal: 12, gap: 10, marginBottom: 24,
  },
  earningCard: {
    width: '47.5%', borderWidth: 1.5, borderColor: '#E8E8F0',
    borderRadius: 14, padding: 14,
  },
  earningVal: { fontSize: 20, fontWeight: '800', color: '#1A1A2E', marginBottom: 4 },
  earningLabel: { fontSize: 12, color: '#888' },

  campaignCard: {
    width: 260, borderWidth: 1.5, borderColor: '#F0F0F0',
    borderRadius: 14, overflow: 'hidden', marginBottom: 4,
  },
  campaignImage: { height: 150, width: '100%' },
  campaignTitle: { fontSize: 15, fontWeight: '700', color: '#1A1A2E', padding: 12, paddingBottom: 4 },
  campaignRow: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, marginBottom: 8 },
  campaignDates: { fontSize: 12, color: '#888' },
  campaignFooter: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingHorizontal: 12, paddingBottom: 12,
  },
  appliedRow: { flexDirection: 'row', alignItems: 'center' },
  miniAvatar: { width: 22, height: 22, borderRadius: 11, backgroundColor: '#C8C8C8', borderWidth: 2, borderColor: '#fff' },
  appliedTxt: { fontSize: 12, color: '#888', marginLeft: 4 },
  budgetTxt: { fontSize: 12, color: '#888' },
});