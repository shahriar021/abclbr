import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
  StatusBar, ScrollView,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppSelector } from '../../redux/hooks';

const PRIMARY = '#6C63FF';

const ORDERS = [
  { id: '56466SD556JH', name: 'Sana Irfan', tags: 'Fashion • Makeup', deliverables: '3 Reels + 2 Story Post', budget: '$155', status: 'Pending',     statusColor: '#888',    statusBg: '#F0F0F0' },
  { id: '56466SD556JH', name: 'Sana Irfan', tags: 'Fashion • Makeup', deliverables: '3 Reels + 2 Story Post', budget: '$155', status: 'In Progress',  statusColor: PRIMARY,   statusBg: '#EAE9FF' },
  { id: '56466SD556JH', name: 'Sana Irfan', tags: 'Fashion • Makeup', deliverables: '3 Reels + 2 Story Post', budget: '$155', status: 'Submitted',    statusColor: PRIMARY,   statusBg: '#fff',   statusBorder: PRIMARY },
  { id: '56466SD556JH', name: 'Sana Irfan', tags: 'Fashion • Makeup', deliverables: '3 Reels + 2 Story Post', budget: '$155', status: 'Approved',     statusColor: '#4CAF50', statusBg: '#fff',   statusBorder: '#4CAF50' },
  { id: '56466SD556JH', name: 'Sana Irfan', tags: 'Fashion • Makeup', deliverables: '3 Reels + 2 Story Post', budget: '$155', status: 'Rejected',     statusColor: '#E53935', statusBg: '#fff',   statusBorder: undefined },
];

const FILTERS = [
  { label: 'All', icon: require('../../../assets/alibaker/orderAll.png') },
  { label: 'Ratings 4.0+', icon: require('../../../assets/alibaker/orderRating.png') },
  { label: 'Budget', icon: require('../../../assets/alibaker/OrderDOllar.png') },
  { label: 'Favo...', icon: require('../../../assets/alibaker/orderFav.png') },
];

export default function OrdersScreen({ navigation }: any) {
  const [activeFilter, setActiveFilter] = useState('All');
  const userType = useAppSelector((state)=>state.auth.userType)
  console.log(userType)

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Orders</Text>
      </View>

      {/* Filter chips */}
      <ScrollView
        horizontal showsHorizontalScrollIndicator={false}
        style={styles.filterScroll}
        contentContainerStyle={styles.filterContent}
      >
        {FILTERS.map((f) => (
          <TouchableOpacity
            key={f.label}
            style={[styles.filterChip, activeFilter === f.label && styles.filterChipActive]}
            onPress={() => setActiveFilter(f.label)}
            activeOpacity={0.8}
          >
            <Image source={f.icon} style={{ height: 14, width: 14 }} resizeMode={'contain'}/>
            <Text style={[styles.filterTxt, activeFilter === f.label && { color: PRIMARY, fontWeight: '600' }]}>{f.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Orders list */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 16, gap: 12, paddingBottom: 100 }}>
        {ORDERS.map((order, i) => (
          <TouchableOpacity key={i} style={styles.card} onPress={() => navigation?.navigate(userType!=="influencer"?'OrderDetails':'OrderNext Screen')}>
            {/* Order ID */}
            <View style={styles.idRow}>
              <Text style={styles.idLabel}>Order ID: </Text>
              <Text style={styles.idVal}>{order.id}</Text>
              <TouchableOpacity style={styles.copyBtn}>
                <Text style={styles.copyIcon}>⧉</Text>
              </TouchableOpacity>
            </View>

            {/* Influencer row */}
            <View style={styles.influencerRow}>
              <View style={styles.avatar} ><Image source={require("../../../assets/alibaker/img.png")} style={{width:"100%",height:"100%",borderRadius:50}}/></View>
              <View>
                <Text style={styles.infName}>{order.name}</Text>
                <Text style={styles.infTags}>{order.tags}</Text>
              </View>
            </View>

            {/* Deliverables */}
            <Text style={styles.deliverables}>
              Deliverables: <Text style={{ color: PRIMARY }}>{order.deliverables}</Text>
            </Text>

            {/* Budget + Status */}
            <View style={styles.cardBottom}>
              <Text style={styles.budget}>Budget: <Text style={styles.budgetVal}>{order.budget}</Text></Text>
              <View style={[
                styles.statusBadge,
                { backgroundColor: order.statusBg },
                order.statusBorder ? { borderWidth: 1.5, borderColor: order.statusBorder } : null,
              ]}>
                <Text style={[styles.statusTxt, { color: order.statusColor }]}>{order.status}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  header: { paddingHorizontal: 16, paddingVertical: 14, alignItems: 'center' },
  headerTitle: { fontSize: 18, fontWeight: '700', color: '#1A1A2E' },

 filterScroll: { marginBottom: 8 },
filterContent: { paddingHorizontal: 16, gap: 8, alignItems: 'center' },
  filterChip: {
  flexDirection: 'row', alignItems: 'center', gap: 5,
  paddingHorizontal: 14, paddingVertical: 6,  // reduced from 8
  borderRadius: 20, borderWidth: 1.5, borderColor: '#E8E8F0', backgroundColor: '#fff',
},
  filterChipActive: { borderColor: PRIMARY, backgroundColor: PRIMARY + '11' },
  filterIcon: { fontSize: 13, color: '#888' },
  filterTxt: { fontSize: 13, color: '#555' },

  card: {
    borderWidth: 1.5, borderColor: '#E8E8F0', borderRadius: 14,
    padding: 14, backgroundColor: '#fff',
  },
  idRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  idLabel: { fontSize: 12, color: '#888' },
  idVal: { fontSize: 12, fontWeight: '700', color: '#1A1A2E' },
  copyBtn: { marginLeft: 6 },
  copyIcon: { fontSize: 14, color: '#aaa' },

  influencerRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 10 },
  avatar: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#C8C8C8' },
  infName: { fontSize: 14, fontWeight: '700', color: '#1A1A2E' },
  infTags: { fontSize: 12, color: '#888', marginTop: 2 },

  deliverables: { fontSize: 13, color: '#888', marginBottom: 10 },

  cardBottom: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  budget: { fontSize: 13, color: '#888' },
  budgetVal: { fontSize: 14, fontWeight: '800', color: '#1A1A2E' },
  statusBadge: { paddingHorizontal: 14, paddingVertical: 5, borderRadius: 20 },
  statusTxt: { fontSize: 13, fontWeight: '600' },
});