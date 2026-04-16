import React from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, StatusBar,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PRIMARY = '#6C63FF';

export default function SignUpScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" translucent={false} />
      <View style={styles.container}>

        <View style={styles.logoWrapper}>
          <Image source={require("../../../assets/alibaker/logoo.png")} style={{width:34,height:34}}/>
          <Text style={styles.logoText}>Collabbr</Text>
        </View>

        <Text style={styles.title}>Sign Up Collabbr</Text>
        <Text style={styles.subtitle}>Create a new account from here</Text>

        <View style={styles.btnGroup}>

          <TouchableOpacity style={styles.socialBtn} activeOpacity={0.8}>
            <Text style={[styles.socialIcon, { color: '#EA4335' }]}>G</Text>
            <Text style={styles.socialLabel}>Continue with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialBtn} activeOpacity={0.8}>
            <View style={styles.appleBox}>
              <Text style={styles.appleText}>A</Text>
            </View>
            <Text style={styles.socialLabel}>Continue with Apple</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialBtn} activeOpacity={0.8}>
            <View style={styles.linkedInBox}>
              <Text style={styles.linkedInText}>in</Text>
            </View>
            <Text style={styles.socialLabel}>Continue with LinkedIn</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.socialBtn}
            activeOpacity={0.8}
            onPress={() => navigation?.navigate('EmailVerificationScreen')}
          >
            <Text style={styles.emailIcon}>@</Text>
            <Text style={styles.socialLabel}>Continue with Email</Text>
          </TouchableOpacity>

        </View>

        <Text style={styles.termsText}>By joining, you agree to our</Text>
        <TouchableOpacity>
          <Text style={styles.termsLink}>Terms &amp; Conditions</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signInBtn}
          onPress={() => navigation?.navigate('SignIn')}
        >
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 28 },
  logoWrapper: { alignItems: 'center', marginBottom: 20 },
  logoBox: {
    width: 54, height: 54, borderRadius: 14, backgroundColor: PRIMARY,
    alignItems: 'center', justifyContent: 'center', marginBottom: 8,
  },
  logoIcon: { color: '#fff', fontSize: 26, fontWeight: '800' },
  logoText: { marginTop:10,fontSize: 24, fontWeight: '700', color: PRIMARY },
  title: { fontSize: 20, fontWeight: '700', color: '#1A1A2E', marginBottom: 6 },
  subtitle: { fontSize: 13, color: '#888', marginBottom: 30 },
  btnGroup: { width: '100%', gap: 12 },
  socialBtn: {
    flexDirection: 'row', alignItems: 'center',
    borderWidth: 1.5, borderColor: '#E8E8F0', borderRadius: 14,
    paddingVertical: 14, paddingHorizontal: 20, backgroundColor: '#fff',
  },
  socialIcon: { fontSize: 20, fontWeight: '800', marginRight: 12, width: 26, textAlign: 'center' },
  emailIcon: { fontSize: 18, marginRight: 12, width: 26, textAlign: 'center', color: '#555', fontWeight: '700' },
  socialLabel: { fontSize: 15, fontWeight: '500', color: '#1A1A2E' },
  appleBox: {
    width: 26, height: 26, borderRadius: 5, backgroundColor: '#000',
    alignItems: 'center', justifyContent: 'center', marginRight: 12,
  },
  appleText: { color: '#fff', fontWeight: '800', fontSize: 14 },
  linkedInBox: {
    width: 26, height: 26, borderRadius: 5, backgroundColor: '#0A66C2',
    alignItems: 'center', justifyContent: 'center', marginRight: 12,
  },
  linkedInText: { color: '#fff', fontWeight: '800', fontSize: 14 },
  termsText: { marginTop: 28, fontSize: 13, color: '#888' },
  termsLink: { fontSize: 13, color: PRIMARY, fontWeight: '600', marginTop: 2 },
  signInBtn: { marginTop: 24 },
  signInText: { fontSize: 15, color: PRIMARY, fontWeight: '600' },
});