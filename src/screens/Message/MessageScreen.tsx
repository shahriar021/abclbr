import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
  StatusBar, ScrollView, TextInput,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PRIMARY = '#6C63FF';

const MESSAGES = [
  { id: 1, name: 'safir_984', preview: 'Hi, good afternoon. Are y...', time: '3:45 PM', unread: 3 },
  { id: 2, name: 'safir_984', preview: 'Hi, good afternoon. Are y...', time: '3:45 PM', unread: 3 },
  { id: 3, name: 'safir_984', preview: "Hi! We love your content style...", time: '3:45 PM', unread: 0 },
  { id: 4, name: 'safir_984', preview: 'Hi, good afternoon. Are y...', time: '3:45 PM', unread: 0 },
  { id: 5, name: 'safir_984', preview: 'Hi, good afternoon. Are y...', time: '3:45 PM', unread: 3 },
];

const FILTERS = ['All messages', 'Unread', 'Unanswered'];

export default function MessagesScreen({ navigation }: any) {
  const [activeFilter, setActiveFilter] = useState('All messages');
  const [search, setSearch] = useState('');

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation?.goBack()} style={styles.backBtn}>
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Messages</Text>
        <View style={{ width: 36 }} />
      </View>

      {/* Filter tabs */}
      <View style={styles.filterRow}>
        {FILTERS.map((f) => (
          <TouchableOpacity
            key={f}
            style={[styles.filterChip, activeFilter === f && styles.filterChipActive]}
            onPress={() => setActiveFilter(f)}
          >
            <Text style={[styles.filterTxt, activeFilter === f && styles.filterTxtActive]}>{f}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Search */}
      <View style={styles.searchWrapper}>
        <Feather name="search" size={24} color="black" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search here..."
          placeholderTextColor="#bbb"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* List */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        {MESSAGES.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.row}
            activeOpacity={0.7}
            onPress={() => navigation?.navigate('ChatScreen', { name: item.name })}
          >
            {/* Avatar */}
            <View style={styles.avatar} ><Image source={require("../../../assets/alibaker/ProfileImage.png")} style={{width:"100%",height:"100%"}}/></View>

            {/* Text */}
            <View style={styles.rowInfo}>
              <View style={styles.rowTop}>
                <Text style={styles.rowName}>{item.name}</Text>
                <Text style={styles.rowTime}>{item.time}</Text>
              </View>
              <View style={styles.rowBottom}>
                <Text style={styles.rowPreview} numberOfLines={1}>{item.preview}</Text>
                {item.unread > 0 && (
                  <View style={styles.badge}>
                    <Text style={styles.badgeTxt}>{item.unread}</Text>
                  </View>
                )}
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
  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 16, paddingVertical: 14,
  },
  backBtn: { width: 36, height: 36, justifyContent: 'center' },
  backArrow: { fontSize: 28, color: '#1A1A2E', marginTop: -2 },
  headerTitle: { fontSize: 18, fontWeight: '700', color: '#1A1A2E' },

  filterRow: { flexDirection: 'row', gap: 10, paddingHorizontal: 16, marginBottom: 14 },
  filterChip: {
    paddingHorizontal: 16, paddingVertical: 8,
    borderRadius: 20, borderWidth: 1.5, borderColor: '#E8E8F0', backgroundColor: '#fff',
  },
  filterChipActive: { backgroundColor: PRIMARY, borderColor: PRIMARY },
  filterTxt: { fontSize: 13, color: '#888', fontWeight: '500' },
  filterTxtActive: { color: '#fff', fontWeight: '600' },

  searchWrapper: {
    flexDirection: 'row', alignItems: 'center',
    marginHorizontal: 16, marginBottom: 16,
    borderWidth: 1.5, borderColor: '#E8E8F0', borderRadius: 12,
    paddingHorizontal: 12, height: 46, backgroundColor: '#FAFAFA',
  },
  searchIcon: { fontSize: 16, marginRight: 8 },
  searchInput: { flex: 1, fontSize: 13, color: '#1A1A2E' },

  row: {
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: 16, paddingVertical: 14,
    borderBottomWidth: 1, borderBottomColor: '#F5F5F5',
  },
  avatar: { width: 50, height: 50, borderRadius: 25, backgroundColor: '#C8C8C8', marginRight: 12 },
  rowInfo: { flex: 1 },
  rowTop: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 },
  rowName: { fontSize: 14, fontWeight: '700', color: '#1A1A2E' },
  rowTime: { fontSize: 12, color: '#aaa' },
  rowBottom: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  rowPreview: { fontSize: 13, color: '#888', flex: 1 },
  badge: {
    width: 22, height: 22, borderRadius: 11,
    backgroundColor: PRIMARY, alignItems: 'center', justifyContent: 'center', marginLeft: 8,
  },
  badgeTxt: { color: '#fff', fontSize: 11, fontWeight: '700' },
});