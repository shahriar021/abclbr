import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet
  , StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PRIMARY = '#6C63FF';

export default function AccountInfoScreen({ navigation }: any) {
  const [company, setCompany] = useState('');
  const [website, setWebsite] = useState('');
  const [category, setCategory] = useState('');

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation?.goBack()} style={styles.backBtn}>
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Account Info</Text>
        <View style={{ width: 36 }} />
      </View>

      <View style={styles.body}>
        <View style={styles.card}>
          <Text style={styles.label}>Comapany Logo</Text>
          <View style={styles.avatarWrapper}>
            <View style={styles.avatar}><Text style={styles.avatarLetter}>B</Text></View>
            <TouchableOpacity style={styles.cameraBtn}>
              <Text style={styles.cameraTxt}>📷</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.label}>Company Name</Text>
          <View style={styles.inputWrapper}>
            <TextInput style={styles.input} placeholder="Write company name" placeholderTextColor="#bbb" value={company} onChangeText={setCompany} />
          </View>

          <Text style={styles.label}>Website</Text>
          <View style={styles.inputWrapper}>
            <TextInput style={styles.input} placeholder="Write company website url" placeholderTextColor="#bbb" value={website} onChangeText={setWebsite} keyboardType="url" autoCapitalize="none" />
          </View>

          <Text style={styles.label}>Industry Category</Text>
          <TouchableOpacity style={styles.dropdown}>
            <Text style={[styles.dropdownTxt, !category && { color: '#bbb' }]}>{category || 'Select a category'}</Text>
            <Text style={styles.dropArrow}>▾</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.upgradeBtn}>
          <Text style={styles.upgradeTxt}>Upgrade Info</Text>
        </TouchableOpacity>
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
  body: { flex: 1, padding: 16 },
  card: { backgroundColor: '#fff', borderRadius: 14, padding: 20 },
  label: { fontSize: 14, fontWeight: '600', color: '#1A1A2E', marginBottom: 10, marginTop: 4 },
  avatarWrapper: { alignItems: 'center', marginBottom: 20, position: 'relative', alignSelf: 'flex-start', marginLeft: 10 },
  avatar: {
    width: 80, height: 80, borderRadius: 40,
    backgroundColor: '#E8E4FF', alignItems: 'center', justifyContent: 'center',
  },
  avatarLetter: { fontSize: 32, fontWeight: '700', color: PRIMARY },
  cameraBtn: {
    position: 'absolute', bottom: 0, right: -4,
    width: 28, height: 28, borderRadius: 14, backgroundColor: PRIMARY,
    alignItems: 'center', justifyContent: 'center',
  },
  cameraTxt: { fontSize: 14 },
  inputWrapper: {
    borderWidth: 1.5, borderColor: '#E8E8F0', borderRadius: 10,
    backgroundColor: '#FAFAFA', marginBottom: 14,
  },
  input: { height: 48, paddingHorizontal: 14, fontSize: 14, color: '#1A1A2E' },
  dropdown: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    borderWidth: 1.5, borderColor: '#E8E8F0', borderRadius: 10,
    paddingHorizontal: 14, height: 48, backgroundColor: '#FAFAFA',
  },
  dropdownTxt: { fontSize: 14, color: '#1A1A2E' },
  dropArrow: { fontSize: 14, color: '#999' },
  footer: { padding: 20 },
  upgradeBtn: { backgroundColor: PRIMARY, borderRadius: 30, paddingVertical: 16, alignItems: 'center' },
  upgradeTxt: { color: '#fff', fontSize: 16, fontWeight: '600' },
});