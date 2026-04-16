import { AntDesign, EvilIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
  StatusBar, ScrollView, Switch,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PRIMARY = '#6C63FF';

const PLANS = {
  Free: {
    price: '$0',
    features: [
      { label: 'Orders',        value: 'Unlimited',   highlight: false },
      { label: 'Search',        value: 'Basic',        highlight: false },
      { label: 'Analytics',     value: 'Basic',        highlight: false },
      { label: 'Fraud',         value: '--',           highlight: false },
      { label: 'Overlap',       value: '--',           highlight: false },
      { label: 'AI Matching',   value: '--',           highlight: false },
      { label: 'Team Accounts', value: 'Single',       highlight: false },
      { label: 'Alerts',        value: 'Standard',     highlight: false },
      { label: 'Support',       value: 'Email',        highlight: false },
    ],
  },
  Pro: {
    price: '$199',
    features: [
      { label: 'Orders',        value: 'Unlimited',        highlight: false },
      { label: 'Search',        value: 'Advanced Filters',  highlight: true },
      { label: 'Analytics',     value: 'ROI Reports',       highlight: true },
      { label: 'Fraud',         value: 'Basic Checks',      highlight: true },
      { label: 'Overlap',       value: 'Basic',             highlight: true },
      { label: 'AI Matching',   value: 'Available',         highlight: true },
      { label: 'Team Accounts', value: 'Single',            highlight: false },
      { label: 'Alerts',        value: 'Priority',          highlight: true },
      { label: 'Support',       value: 'Priority',          highlight: true },
    ],
  },
  Enterprise: {
    price: '$499',
    features: [
      { label: 'Orders',        value: 'Unlimited',              highlight: false },
      { label: 'Search',        value: 'AI Matching + Full Filters', highlight: true },
      { label: 'Analytics',     value: 'Conversion + Heatmaps',  highlight: true },
      { label: 'Fraud',         value: 'Full Engine',            highlight: true },
      { label: 'Overlap',       value: 'Advanced',               highlight: true },
      { label: 'AI Matching',   value: 'ROI-Based',              highlight: true },
      { label: 'Team Accounts', value: 'Multi-User',             highlight: true },
      { label: 'Alerts',        value: 'Custom',                 highlight: true },
      { label: 'Support',       value: 'Dedicated Manager',      highlight: true },
    ],
  },
};

type PlanKey = keyof typeof PLANS;

export default function SubscriptionScreen({ navigation }: any) {
  const [activeTab, setActiveTab] = useState<PlanKey>('Free');
  const [autoRenew, setAutoRenew] = useState(true);
  const plan = PLANS[activeTab];

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#F2F4F7" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation?.goBack()} style={styles.backBtn}>
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Subscription</Text>
        <View style={{ width: 36 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 16, paddingBottom: 110 }}>

        {/* Current plan banner */}
        <View style={styles.banner}>
          <View style={styles.bannerTop}>
            <View>
              <Text style={styles.bannerPlan}>Free Plan</Text>
              <Text style={styles.bannerSub}>Currently You're Using</Text>
            </View>
            <View style={styles.activeBadge}>
              <Text style={styles.activeTxt}>Active</Text>
            </View>
          </View>
          <View style={styles.bannerBottom}>
            <View style={styles.expireRow}>
              <Text style={styles.expireLabel}>Will expire on</Text>
              <View>
                <Text style={{marginBottom:5,color:'white'}}>pause N play</Text>
              <Switch
                value={autoRenew}
                onValueChange={setAutoRenew}
                trackColor={{ false: 'rgba(255,255,255,0.3)', true: 'rgba(255,255,255,0.9)' }}
                thumbColor={autoRenew ? '#fff' : '#ddd'}
                style={{ transform: [{ scaleX: 0.85 }, { scaleY: 0.85 }] }}
              />
              </View>
            </View>
            <View style={styles.expireDates}>
              <Text style={styles.expireTxt}><EvilIcons name="calendar" size={16} color="white" />  05 Nov 2025</Text>
              <Text style={styles.expireTxt}>  <AntDesign name="clock-circle" size={16} color="white" />  11:45 PM</Text>
            </View>
          </View>
        </View>

        {/* Tab switcher */}
        <View style={styles.tabRow}>
          {(Object.keys(PLANS) as PlanKey[]).map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, activeTab === tab && styles.tabActive]}
              onPress={() => setActiveTab(tab)}
              activeOpacity={0.8}
            >
              <Text style={[styles.tabTxt, activeTab === tab && styles.tabTxtActive]}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Price */}
        <Text style={styles.price}>{plan.price}<Text style={styles.perMonth}>/month</Text></Text>

        {/* Feature rows */}
        <View style={styles.featureList}>
          {plan.features.map((f, i) => (
            <View key={f.label} style={[styles.featureRow, i < plan.features.length - 1 && styles.featureBorder]}>
              <Text style={styles.featureLabel}>{f.label}</Text>
              <Text style={[styles.featureValue, f.highlight && styles.featureHighlight]}>{f.value}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Upgrade button */}
      {activeTab !== 'Free' && (
        <View style={styles.footer}>
          <TouchableOpacity style={styles.upgradeBtn} activeOpacity={0.85}>
            <Text style={styles.upgradeTxt}>Upgrade Now</Text>
          </TouchableOpacity>
        </View>
      )}
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

  // Banner
  banner: {
    borderRadius: 16, padding: 18, marginBottom: 16,
    backgroundColor: PRIMARY,
  },
  bannerTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 },
  bannerPlan: { fontSize: 20, fontWeight: '800', color: '#fff', marginBottom: 4 },
  bannerSub: { fontSize: 13, color: 'rgba(255,255,255,0.8)' },
  activeBadge: {
    backgroundColor: 'rgba(255,255,255,0.2)', paddingHorizontal: 12,
    paddingVertical: 4, borderRadius: 20, borderWidth: 1, borderColor: 'rgba(255,255,255,0.4)',
  },
  activeTxt: { color: '#fff', fontSize: 12, fontWeight: '600' },
  bannerBottom: {},
  expireRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 },
  expireLabel: { fontSize: 13, color: 'rgba(255,255,255,0.8)', fontWeight: '500' },
  expireDates: { flexDirection: 'row' },
  expireTxt: { fontSize: 13, color: '#fff', fontWeight: '500' },

  // Tabs
  tabRow: {
    flexDirection: 'row', backgroundColor: '#fff',
    borderRadius: 30, padding: 4, marginBottom: 20,
  },
  tab: { flex: 1, paddingVertical: 10, alignItems: 'center', borderRadius: 26 },
  tabActive: { backgroundColor: PRIMARY },
  tabTxt: { fontSize: 14, color: '#888', fontWeight: '500' },
  tabTxtActive: { color: '#fff', fontWeight: '700' },

  // Price
  price: { fontSize: 28, fontWeight: '800', color: '#1A1A2E', marginBottom: 16 },
  perMonth: { fontSize: 16, fontWeight: '400', color: '#888' },

  // Features
  featureList: { backgroundColor: '#fff', borderRadius: 14, overflow: 'hidden' },
  featureRow: {
    flexDirection: 'row', justifyContent: 'space-between',
    paddingHorizontal: 16, paddingVertical: 14,
  },
  featureBorder: { borderBottomWidth: 1, borderBottomColor: '#F5F5F5' },
  featureLabel: { fontSize: 14, color: '#888' },
  featureValue: { fontSize: 14, color: '#1A1A2E', fontWeight: '500' },
  featureHighlight: { color: PRIMARY, fontWeight: '600' },

  // Footer
  footer: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: 20, paddingBottom: 28, backgroundColor: '#F2F4F7' },
  upgradeBtn: { backgroundColor: PRIMARY, borderRadius: 30, paddingVertical: 16, alignItems: 'center' },
  upgradeTxt: { color: '#fff', fontSize: 16, fontWeight: '600' },
});