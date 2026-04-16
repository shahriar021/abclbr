import React, { useState, useRef } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar,
} from 'react-native';

const PRIMARY = '#6C63FF';
const OTP_LENGTH = 6;

export default function VerificationCodeScreen({ navigation }) {
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(''));
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    if (text && index < OTP_LENGTH - 1) inputs.current[index + 1]?.focus();
  };

  const handleKeyPress = ({ nativeEvent }, index) => {
    if (nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#F2F4F7" />

      

      <View style={styles.body}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Verify Your Identity</Text>
          <Text style={styles.cardSubtitle}>Enter the OTP sent to your email</Text>

          <Text style={styles.label}>One Time Password (OTP)</Text>

          <View style={styles.otpRow}>
            {otp.map((digit, i) => (
              <TextInput
                key={i}
                ref={el => (inputs.current[i] = el)}
                style={[styles.otpBox, digit ? styles.otpBoxFilled : null]}
                value={digit}
                onChangeText={text => handleChange(text.slice(-1), i)}
                onKeyPress={e => handleKeyPress(e, i)}
                keyboardType="number-pad"
                maxLength={1}
                textAlign="center"
              />
            ))}
          </View>

          <View style={styles.resendRow}>
            <Text style={styles.resendLabel}>Didn't get OTP? </Text>
            <TouchableOpacity><Text style={styles.resendLink}>Resend</Text></TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.nextBtn}
          onPress={() => navigation?.navigate('UserCredentialsScreen')}
          activeOpacity={0.85}
        >
          <Text style={styles.nextBtnText}>Next</Text>
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
  label: { fontSize: 14, fontWeight: '600', color: '#1A1A2E', marginBottom: 14 },
  otpRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  otpBox: {
    width: 46, height: 52, borderRadius: 10,
    borderWidth: 1.5, borderColor: '#E8E8F0',
    fontSize: 20, fontWeight: '600', color: '#1A1A2E',
    backgroundColor: '#FAFAFA', textAlign: 'center',
  },
  otpBoxFilled: { borderColor: PRIMARY },
  resendRow: { flexDirection: 'row', alignItems: 'center' },
  resendLabel: { fontSize: 13, color: '#888' },
  resendLink: { fontSize: 13, color: PRIMARY, fontWeight: '600' },
  footer: { padding: 20 },
  nextBtn: { backgroundColor: PRIMARY, borderRadius: 30, paddingVertical: 16, alignItems: 'center' },
  nextBtnText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});