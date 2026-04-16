import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar,
} from 'react-native';

const PRIMARY = '#6C63FF';

export default function UserCredentialsScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [showRePass, setShowRePass] = useState(false);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#F2F4F7" />

      
      <View style={styles.body}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>User Credentials</Text>
          <Text style={styles.cardSubtitle}>Enter a unique username and secure password to continue</Text>

          {/* Username */}
          <Text style={styles.label}>Username</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Enter username"
              placeholderTextColor="#bbb"
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
            />
          </View>

          {/* Password */}
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={[styles.input, { flex: 1 }]}
              placeholder="Enter password"
              placeholderTextColor="#bbb"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPass}
            />
             <TouchableOpacity onPress={() => setShowRePass(!showRePass)}>
            <Ionicons
              name={showRePass ? "eye-off-outline" : "eye-outline"}
              size={22}
              color="#6B7280"
            />
          </TouchableOpacity>
          </View>

          {/* Re-type Password */}
          <Text style={styles.label}>Re-type Password</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={[styles.input, { flex: 1 }]}
              placeholder="Re-type password"
              placeholderTextColor="#bbb"
              value={rePassword}
              onChangeText={setRePassword}
              secureTextEntry={!showRePass}
            />
            
             <TouchableOpacity onPress={() => setShowRePass(!showRePass)}>
            <Ionicons
              name={showRePass ? "eye-off-outline" : "eye-outline"}
              size={22}
              color="#6B7280"
            />
          </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.signUpBtn}
          onPress={() => navigation?.navigate('SignUp')}
          activeOpacity={0.85}
        >
          <Text style={styles.signUpBtnText}>Sign Up</Text>
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
  backBtn: { width: 36, height: 36, alignItems: 'center', justifyContent: 'center' },
  backArrow: { fontSize: 28, color: '#1A1A2E', marginTop: -2 },
  headerTitle: { fontSize: 17, fontWeight: '600', color: '#1A1A2E' },
  body: { flex: 1, padding: 16 },
  card: { backgroundColor: '#fff', borderRadius: 16, padding: 20 },
  cardTitle: { fontSize: 17, fontWeight: '700', color: '#1A1A2E', marginBottom: 4 },
  cardSubtitle: { fontSize: 13, color: '#888', marginBottom: 20 },
  label: { fontSize: 14, fontWeight: '600', color: '#1A1A2E', marginBottom: 8 },
  inputWrapper: {
    flexDirection: 'row', alignItems: 'center',
    borderWidth: 1.5, borderColor: '#E8E8F0', borderRadius: 10,
    backgroundColor: '#FAFAFA', marginBottom: 16,
    paddingHorizontal: 14,
  },
  input: { height: 48, fontSize: 14, color: '#1A1A2E', flex: 1 },
  eyeBtn: { paddingLeft: 8 },
  eyeIcon: { fontSize: 18 },
  footer: { padding: 20 },
  signUpBtn: { backgroundColor: PRIMARY, borderRadius: 30, paddingVertical: 16, alignItems: 'center' },
  signUpBtnText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
