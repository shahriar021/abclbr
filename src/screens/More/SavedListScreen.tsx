import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar, ScrollView } from 'react-native';

const PRIMARY = '#6C63FF';

const DATA = Array(6).fill({
  name: 'Sana Irfan', tags: 'Fashion • Makeup', location: 'Dhaka, Bangladesh',
  audience: 'Micro', price: '$120-150',
});

export default function SavedListScreen({ navigation }: any) {
  const [saved, setSaved] = useState(DATA.map(() => true));

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation?.goBack()} style={styles.backBtn}>
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Saved List</Text>
        <View style={{ width: 36 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 16, gap: 12, paddingBottom: 40 }}>
        {DATA.map((item, i) => (
          <View key={i} style={styles.card}>
            <View style={styles.cardTop}>
              <View style={styles.avatar} />
              <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.tags}>{item.tags}</Text>
                <Text style={styles.location}>{item.location}</Text>
              </View>
              <TouchableOpacity onPress={() => setSaved(s => s.map((v, idx) => idx === i ? !v : v))}>
                <Text style={[styles.heart, { color: saved[i] ? PRIMARY : '#ddd' }]}>♥</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.divider} />
            <View style={styles.cardBottom}>
              <Text style={styles.audienceTxt}>Audience <Text style={styles.audienceVal}>{item.audience}</Text></Text>
              <Text style={styles.priceTxt}>Per Post <Text style={styles.priceVal}>{item.price}</Text></Text>
            </View>
          </View>
        ))}
      </ScrollView>
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
  card: { borderWidth: 1.5, borderColor: '#F0F0F0', borderRadius: 14, padding: 14 },
  cardTop: { flexDirection: 'row', alignItems: 'flex-start', gap: 12 },
  avatar: { width: 52, height: 52, borderRadius: 26, backgroundColor: '#C8C8C8' },
  info: { flex: 1 },
  name: { fontSize: 15, fontWeight: '700', color: '#1A1A2E', marginBottom: 2 },
  tags: { fontSize: 12, color: '#888', marginBottom: 2 },
  location: { fontSize: 12, color: '#888' },
  heart: { fontSize: 22 },
  divider: { height: 1, backgroundColor: '#F5F5F5', marginVertical: 10 },
  cardBottom: { flexDirection: 'row', justifyContent: 'space-between' },
  audienceTxt: { fontSize: 12, color: '#888' },
  audienceVal: { color: '#1A1A2E', fontWeight: '600' },
  priceTxt: { fontSize: 12, color: '#888' },
  priceVal: { color: '#1A1A2E', fontWeight: '700' },
});