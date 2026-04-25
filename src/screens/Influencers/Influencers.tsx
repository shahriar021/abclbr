import { AntDesign, Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
  StatusBar, ScrollView, TextInput,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PRIMARY = '#6C63FF';
const INACTIVE = '#AAAAAA';

const INFLUENCERS = [
  { name: 'Sara Afrin', handle: '@sana_irfan043', location: 'Dhaka, Bangladesh', rating: 4.8, audience: 'Macro', price: '$120-150', badge: 'verified', liked: true },
  { name: 'Sara Afrin', handle: '@sana_irfan043', location: 'Dhaka, Bangladesh', rating: 4.8, audience: 'Macro', price: '$120-150', badge: 'shield', liked: true },
  { name: 'Sara Afrin', handle: '@sana_irfan043', location: 'Dhaka, Bangladesh', rating: 4.8, audience: 'Macro', price: '$120-150', badge: 'star', liked: true },
  { name: 'Sara Afrin', handle: '@sana_irfan043', location: 'Dhaka, Bangladesh', rating: 4.8, audience: 'Macro', price: '$120-150', badge: 'verified', liked: false },
  { name: 'Sara Afrin', handle: '@sana_irfan043', location: 'Dhaka, Bangladesh', rating: 4.8, audience: 'Macro', price: '$120-150', badge: 'shield', liked: false },
];

const FILTERS = [
  { label: 'All', icon: require('../../../assets/alibaker/orderAll.png') },
  { label: 'Primary Niche', icon: require('../../../assets/alibaker/orderRating.png') },
  { label: 'Budget', icon: require('../../../assets/alibaker/OrderDOllar.png') },
  { label: 'Ratings ', icon: require('../../../assets/alibaker/orderFav.png') },
];

const SOCIAL_ICONS = [
  require("../../../assets/alibaker/Group.png"),
  require("../../../assets/alibaker/music.png"),
  require("../../../assets/alibaker/play.png"),
  require("../../../assets/alibaker/sms.png"),
];

const BadgeIcon = ({ type }: { type: string }) => {
  if (type === 'verified') return <Image source={require("../../../assets/alibaker/homecertf2.png")} style={{ width: 15, height: 15 }} />;
  if (type === 'shield') return <Image source={require("../../../assets/alibaker/homecertf3.png")} style={{ width: 15, height: 15 }} />;
  if (type === 'star') return <Image source={require("../../../assets/alibaker/homecertf1.png")} style={{ width: 15, height: 15 }} />;
  return null;
};

const InfluencerCard = ({ item }: { item: any }) => {
  const [liked, setLiked] = useState(item.liked);
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.avatar} ><Image source={require("../../../assets/alibaker/ProfileImage.png")} style={{ width: "100%", height: "100%" }} /></View>
        <View style={styles.cardInfo}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
            <Text style={styles.cardName}>{item.name}</Text>
            <BadgeIcon type={item.badge} />
          </View>
          <Text style={styles.cardHandle}>{item.handle}</Text>
        </View>
        <TouchableOpacity onPress={() => setLiked(!liked)}>
          <AntDesign name="heart" size={24} color="#6366F1" />
        </TouchableOpacity>
      </View>

      <Text style={styles.cardLocation}>{item.location}</Text>

      <View style={styles.socialRow}>
        {SOCIAL_ICONS.map((src, i) => (
          <Text key={i} style={styles.socialChip}>
            <Image source={src} style={{ width: 15, height: 16, resizeMode: 'contain' }} />
          </Text>
        ))}
        <Text style={styles.ratingRight}><Image source={require("../../../assets/alibaker/homestart.png")} style={{ width: 15, height: 15 }} /> {item.rating}</Text>
      </View>

      <View style={styles.statsRow}>
        <Text style={styles.audienceLabel}>Audience <Text style={styles.audienceVal}>{item.audience}</Text></Text>
        <Text style={styles.priceLabel}>Per Post <Text style={styles.priceVal}>{item.price}</Text></Text>
      </View>
    </View>
  );
};

export default function InfluencerDirectoryScreen({ navigation }: any) {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('');

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Influencer Directory</Text>
      </View>

      {/* Filter chips */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filterScroll}
        contentContainerStyle={styles.filterContent}
      >
        {FILTERS.map((f) => (
          <TouchableOpacity
            key={f.label}
            style={[styles.filterChip, activeFilter === f.label && styles.filterChipActive]}
            onPress={() => setActiveFilter(f.label === activeFilter ? '' : f.label)}
          >
            <Image source={f.icon} style={{ width: 20, height: 20 }} resizeMode="contain" />
            <Text style={[styles.filterChipTxt, activeFilter === f.label && { color: PRIMARY }]}>{f.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Search */}
      <View style={styles.searchWrapper}>
        <Feather name="search" size={24} color="black" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search by influencer, category or tag"
          placeholderTextColor="#bbb"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* List */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100, paddingHorizontal: 16 }}>
        {INFLUENCERS.map((item, i) => (
          <InfluencerCard key={i} item={item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },

  header: { paddingHorizontal: 16, paddingVertical: 14, alignItems: 'center' },
  headerTitle: { fontSize: 20, fontWeight: '700', color: '#1A1A2E' },

  filterScroll: { paddingVertical: 4 },
  filterContent: { paddingHorizontal: 16, gap: 8, alignItems: 'center' },
  filterIconBtn: {
    width: 38, height: 38, borderRadius: 10,
    borderWidth: 1.5, borderColor: '#E8E8F0',
    alignItems: 'center', justifyContent: 'center',
  },
  filterIconTxt: { fontSize: 16, color: '#555' },
  filterChip: {
    flexDirection: 'row', alignItems: 'center', gap: 4,
    paddingHorizontal: 14, paddingVertical: 6,
    borderWidth: 1.5, borderColor: '#E8E8F0', borderRadius: 20,
    backgroundColor: '#fff',
  },
  filterChipActive: { borderColor: PRIMARY, backgroundColor: PRIMARY + '11' },
  filterChipTxt: { fontSize: 13, color: '#555', fontWeight: '500' },
  filterChipArrow: { fontSize: 10, color: '#999' },

  searchWrapper: {
    flexDirection: 'row', alignItems: 'center',
    marginHorizontal: 16, marginVertical: 14,
    borderWidth: 1.5, borderColor: '#E8E8F0', borderRadius: 12,
    paddingHorizontal: 12, height: 46, backgroundColor: '#FAFAFA',
  },
  searchIcon: { fontSize: 16, marginRight: 8 },
  searchInput: { flex: 1, fontSize: 13, color: '#1A1A2E' },

  card: {
    borderWidth: 1.5, borderColor: '#E8E8F0', borderRadius: 14,
    padding: 14, backgroundColor: '#fff', marginBottom: 14,
  },
  cardHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
  avatar: { width: 46, height: 46, borderRadius: 23, backgroundColor: '#D0D0D0', marginRight: 10 },
  cardInfo: { flex: 1 },
  cardName: { fontSize: 14, fontWeight: '700', color: '#1A1A2E' },
  cardHandle: { fontSize: 12, color: '#888', marginTop: 2 },
  heartIcon: { fontSize: 22, color: '#ccc' },
  badge: { width: 18, height: 18, borderRadius: 9, alignItems: 'center', justifyContent: 'center' },
  badgeTxt: { color: '#fff', fontSize: 9, fontWeight: '700' },
  cardLocation: { fontSize: 12, color: '#888', marginBottom: 10 },
  socialRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 10 },
  socialChip: { fontSize: 17 },
  ratingRight: { marginLeft: 'auto', fontSize: 13, color: '#555', fontWeight: '600' },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between' },
  audienceLabel: { fontSize: 12, color: '#888' },
  audienceVal: { color: '#1A1A2E', fontWeight: '600' },
  priceLabel: { fontSize: 12, color: '#888' },
  priceVal: { color: '#1A1A2E', fontWeight: '700' },
});