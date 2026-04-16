import { Feather, FontAwesome5, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image } from 'react-native';
import {
  View, Text, TouchableOpacity, StyleSheet,
  StatusBar, ScrollView, TextInput, FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const PRIMARY = '#6C63FF';

const NICHES = [
  { icon: require("../../../assets/alibaker/health.png"), label: 'Health &\nFitness' },
  { icon: require("../../../assets/alibaker/paint.png"), label: 'Beauty &\nFashion' },
  { icon: require("../../../assets/alibaker/bevarage.png"), label: 'Food &\nBeverage' },
  
  { icon: require("../../../assets/alibaker/techno.png"), label: 'Gaming' },
];

const INFLUENCERS = [
  { name: 'Sara Afrin', handle: '@sana_irfan043', location: 'Dhaka, Bangladesh', rating: 4.8, audience: 'Macro', price: '$120-150', badge: '✦', liked: true },
  { name: 'Rafi Khan', handle: '@rafi.creates', location: 'Dhaka, Bangladesh', rating: 4.6, audience: 'Micro', price: '$80-100', badge: null, liked: false },
];

const InfluencerCard = ({ item, star = false, verified = false }) => (
  <View style={styles.card}>
    {/* Avatar + name row */}
    <View style={styles.cardHeader}>
      <View style={styles.avatar} ><Image source={require("../../../assets/alibaker/ProfileImage.png")} style={{width:"100%",height:"100%"}}/></View>
      <View style={styles.cardInfo}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
          <Text style={styles.cardName}>{item.name}</Text>
          {star && <Text style={{ fontSize: 14 }}>⭐</Text>}
          {verified && <Text style={{ fontSize: 14, color: PRIMARY }}>✔</Text>}
          {!star && !verified && <View style={styles.badgePurple}><Text style={styles.badgeStar}>✦</Text></View>}
        </View>
        <Text style={styles.cardHandle}>{item.handle}</Text>
      </View>
      <TouchableOpacity style={styles.heartBtn}>
        <Text style={[styles.heartIcon, item.liked && { color: PRIMARY }]}>♥</Text>
      </TouchableOpacity>
    </View>

    <Text style={styles.cardLocation}>{item.location}</Text>

    {/* Social icons */}
    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
    <View style={styles.socialRow}>
      <Text style={styles.socialChip}><Image source={require("../../../assets/alibaker/Group.png")} style={{width:15,height:16,resizeMode:'contain'}}/></Text>
      <Text style={styles.socialChip}><Image source={require("../../../assets/alibaker/music.png")} style={{width:15,height:16,resizeMode:'contain'}}/></Text>
      <Text style={styles.socialChip}><Image source={require("../../../assets/alibaker/play.png")} style={{width:15,height:16,resizeMode:'contain'}}/></Text>
      <Text style={styles.socialChip}><Image source={require("../../../assets/alibaker/sms.png")} style={{width:15,height:16,resizeMode:'contain'}}/></Text>
      
    </View>
    <Text style={styles.statText}>☆ {item.rating}</Text>
    </View>

      <View style={styles.statRight}>
        <Text style={styles.audienceLabel}>Audience <Text style={styles.audienceVal}>{item.audience}</Text></Text>
        <Text style={styles.priceLabel}>Per Post <Text style={styles.priceVal}>{item.price}</Text></Text>
      </View>
    </View>
  
);

const SectionHeader = ({ title }) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <TouchableOpacity><Text style={styles.seeAll}>See all</Text></TouchableOpacity>
  </View>
);

export default function HomeScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Top Bar */}
      <View style={styles.topBar}>
        <Text style={styles.logo}>Collabbr</Text>
        <View style={styles.topIcons}>
          <TouchableOpacity style={styles.iconBtn}><Text style={styles.iconTxt}><FontAwesome5 name="heart" size={24} color="black" /></Text></TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}><Text style={styles.iconTxt}><Ionicons name="notifications-outline" size={24} color="black" /></Text></TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 90 }}>

        {/* Search */}
        <View style={styles.searchWrapper}>
          <Feather name="search" size={24} color="black" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search by influencer, category or tag"
            placeholderTextColor="#bbb"
          />
        </View>

        {/* Niches */}
        <SectionHeader title="Niches" />
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.nichesScroll} contentContainerStyle={{ paddingHorizontal: 16, gap: 10 }}>
          {NICHES.map((n, i) => (
  <TouchableOpacity key={i} style={styles.nicheCard}>
    <Image source={n.icon} style={styles.nicheIcon} />
    <Text style={styles.nicheLabel}>{n.label}</Text>
  </TouchableOpacity>
))}
        </ScrollView>

        {/* Perfect Match */}
        <SectionHeader title="Perfect Match for Your Brand" />
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16, gap: 12 }}>
          {INFLUENCERS.map((item, i) => (
            <InfluencerCard key={i} item={item} />
          ))}
        </ScrollView>

        {/* Top Rated */}
        <SectionHeader title="Top Rated Influencers" />
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16, gap: 12 }}>
          {INFLUENCERS.map((item, i) => (
            <InfluencerCard key={i} item={item} star />
          ))}
        </ScrollView>

        {/* Verified & Trusted */}
        <SectionHeader title="Verified & Trusted" />
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16, gap: 12 }}>
          {INFLUENCERS.map((item, i) => (
            <InfluencerCard key={i} item={item} verified />
          ))}
        </ScrollView>

      </ScrollView>

      {/* Bottom Tab Bar */}
      <View style={styles.tabBar}>
        {[
          { icon: '🏠', label: 'Home', active: true },
          { icon: '👤', label: 'Influencers' },
          { icon: '💬', label: 'Messages' },
          { icon: '💼', label: 'Campaigns' },
          { icon: '⊞',  label: 'More' },
        ].map((tab, i) => (
          <TouchableOpacity key={i} style={styles.tabItem}>
            <Text style={styles.tabIcon}>{tab.icon}</Text>
            <Text style={[styles.tabLabel, tab.active && { color: PRIMARY }]}>{tab.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },

  // Top bar
  topBar: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 16, paddingVertical: 12,
  },
  logo: { fontSize: 24, fontWeight: '800', color: PRIMARY },
  topIcons: { flexDirection: 'row', gap: 8 },
  iconBtn: { width: 38, height: 38,  alignItems: 'center', justifyContent: 'center' },
  iconTxt: { fontSize: 16 },

  // Search
  searchWrapper: {
    flexDirection: 'row', alignItems: 'center',
    marginHorizontal: 16, marginBottom: 20,
    borderWidth: 1.5, borderColor: '#E8E8F0', borderRadius: 12,
    paddingHorizontal: 12, height: 46, backgroundColor: '#FAFAFA',
  },
  searchIcon: { fontSize: 16, marginRight: 8 },
  searchInput: { flex: 1, fontSize: 13, color: '#1A1A2E' },

  // Section header
  sectionHeader: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingHorizontal: 16, marginBottom: 12,
  },
  sectionTitle: { fontSize: 15, fontWeight: '700', color: '#1A1A2E' },
  seeAll: { fontSize: 13, color: PRIMARY, fontWeight: '600' },

  // Niches
  nichesScroll: { marginBottom: 24 },
  nicheCard: {
    width: 80, borderWidth: 1.5, borderColor: '#E8E8F0', borderRadius: 12,
    padding: 10, alignItems: 'center', backgroundColor: '#fff',
  },
 nicheIcon: {
  width: 40,
  height: 40,
},
  nicheLabel: { fontSize: 11, color: '#555', textAlign: 'center', lineHeight: 15 },

  // Influencer card
  card: {
    width: 260, borderWidth: 1.5, borderColor: '#E8E8F0', borderRadius: 14,
    padding: 14, backgroundColor: '#fff', marginBottom: 20,
  },
  cardHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
  avatar: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#D0D0D0', marginRight: 10 },
  cardInfo: { flex: 1 },
  cardName: { fontSize: 14, fontWeight: '700', color: '#1A1A2E' },
  cardHandle: { fontSize: 12, color: '#888', marginTop: 2 },
  heartBtn: { padding: 4 },
  heartIcon: { fontSize: 20, color: '#ccc' },
  badgePurple: {
    width: 18, height: 18, borderRadius: 9, backgroundColor: PRIMARY,
    alignItems: 'center', justifyContent: 'center',
  },
  badgeStar: { color: '#fff', fontSize: 10 },
  cardLocation: { fontSize: 12, color: '#888', marginBottom: 8 },
  socialRow: { flexDirection: 'row', gap: 8, marginBottom: 10 },
  socialChip: { fontSize: 16,marginTop:2 },
  statsRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  statText: { fontSize: 13, color: '#555', fontWeight: '600' },
  statRight: { flexDirection: 'row', justifyContent:"space-between" },
  audienceLabel: { fontSize: 11, color: '#888' },
  audienceVal: { color: '#1A1A2E', fontWeight: '600' },
  priceLabel: { fontSize: 11, color: '#888' },
  priceVal: { color: '#1A1A2E', fontWeight: '700' },

  // Tab bar
  tabBar: {
    position: 'absolute', bottom: 0, left: 0, right: 0,
    flexDirection: 'row', backgroundColor: '#fff',
    borderTopWidth: 1, borderTopColor: '#F0F0F0',
    paddingVertical: 10, paddingBottom: 20,
  },
  tabItem: { flex: 1, alignItems: 'center' },
  tabIcon: { fontSize: 20, marginBottom: 2 },
  tabLabel: { fontSize: 10, color: '#aaa', fontWeight: '500' },
});