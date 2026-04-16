import React from 'react';
import { Image } from 'react-native';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PRIMARY = '#6C63FF';

export default function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.container}>

        {/* Logo */}
        <View style={styles.logoWrapper}>
          <Image source={require("../../../assets/alibaker/logoo.png")} style={{width:34,height:34}}/>
          <Text style={styles.logoText}>Collabbr</Text>
        </View>

        {/* Headline */}
        <Text style={styles.title}>Welcome to Collabbr</Text>
        <Text style={styles.subtitle}>
          AI-powered influencer discovery, secure escrow,{'\n'}
          and transparent performance tracking
        </Text>

        {/* CTA Buttons */}
        <TouchableOpacity
          style={styles.btnPrimary}
          onPress={() => navigation?.navigate('HireInfluencer')}
          activeOpacity={0.85}
        >
          <Text style={styles.btnPrimaryText}>Hire an Influencer</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btnPrimary, { marginTop: 14 }]}
          onPress={() => navigation?.navigate('BecomeInfluencer')}
          activeOpacity={0.85}
        >
          <Text style={styles.btnPrimaryText}>Become an Influencer</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerRow}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* Sign In */}
        <TouchableOpacity
          style={styles.btnOutline}
          onPress={() => navigation?.navigate('SignIn')}
          activeOpacity={0.85}
        >
          <Text style={styles.btnOutlineText}>Sign In</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 28,
  },

  // Logo
  logoWrapper: {
    alignItems: 'center',
    marginBottom: 36,
  },
  logoBox: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  logoIcon: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '800',
  },
  logoText: {
    fontSize: 26,
    fontWeight: '700',
    color: PRIMARY,
    letterSpacing: 0.3,
  },

  // Text
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1A1A2E',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    lineHeight: 21,
    marginBottom: 36,
  },

  // Primary button
  btnPrimary: {
    width: '100%',
    backgroundColor: PRIMARY,
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
  },
  btnPrimaryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  // Divider
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 22,
    width: '100%',
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  dividerText: {
    marginHorizontal: 12,
    color: '#aaa',
    fontSize: 14,
  },

  // Outline button
  btnOutline: {
    width: '100%',
    borderWidth: 1.5,
    borderColor: '#E0E0E0',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
  },
  btnOutlineText: {
    color: PRIMARY,
    fontSize: 16,
    fontWeight: '600',
  },
});