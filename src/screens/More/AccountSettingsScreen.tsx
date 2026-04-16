import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PRIMARY = '#6C63FF';

const ITEMS = [
  { label: 'Account Info', route: 'AccountInfoScreen' },
  { label: 'Appearance', route: 'Appearance' },
  { label: 'Change Password', route: 'ChangePassword' },
  { label: 'Contact Person', route: 'ContactPerson' },
];

export default function AccountSettingsScreen({ navigation }: any) {
  const [online, setOnline] = useState(true);
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation?.goBack()} style={styles.backBtn}>
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Account Settings</Text>
        <View style={{ width: 36 }} />
      </View>

      <View style={styles.body}>
        <View style={styles.card}>
          {/* Online Status toggle */}
          <View style={[styles.row, styles.rowBorder]}>
            <Text style={styles.rowTxt}>Online Status</Text>
            <Switch
              value={online} onValueChange={setOnline}
              trackColor={{ false: '#E0E0E0', true: PRIMARY }}
              thumbColor="#fff"
            />
          </View>
          {ITEMS.map((item, i) => (
            <TouchableOpacity
              key={item.label}
              style={[styles.row, i < ITEMS.length - 1 && styles.rowBorder]}
              onPress={() => navigation?.navigate(item.route)}
              activeOpacity={0.7}
            >
              <Text style={styles.rowTxt}>{item.label}</Text>
              <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F2F4F7' },
  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 16, paddingVertical: 14, backgroundColor: '#fff',
  },
  backBtn: { width: 36, justifyContent: 'center' },
  backArrow: { fontSize: 28, color: '#1A1A2E', marginTop: -2 },
  headerTitle: { fontSize: 18, fontWeight: '700', color: '#1A1A2E' },
  body: { padding: 16 },
  card: { backgroundColor: '#fff', borderRadius: 14, overflow: 'hidden' },
  row: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 16 },
  rowBorder: { borderBottomWidth: 1, borderBottomColor: '#F5F5F5' },
  rowTxt: { flex: 1, fontSize: 15, color: '#1A1A2E' },
  arrow: { fontSize: 20, color: '#C0C0C0' },
});