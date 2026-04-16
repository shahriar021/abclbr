import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppDispatch } from '../../redux/hooks';
import { setToken, setUserType } from '../../redux/features/auth/authSlice';
import { Ionicons } from "@expo/vector-icons";

const PRIMARY = '#6C63FF';

export default function SignInScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const dispatch = useAppDispatch()

  const handleLogin = () => {
    if (email == "brand@gmail.com") {
      dispatch(setToken(1))
      dispatch(setUserType("brand"))
    } else {
      dispatch(setToken(1))
      dispatch(setUserType("influencer"))
    }
  }

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.container}>

        {/* Logo */}
        <View style={styles.logoWrapper}>
          {/* <View style={styles.logoBox}>
            <Text style={styles.logoIcon}>C</Text>
          </View> */}
          <Image source={require("../../../assets/alibaker/logoo.png")} style={{ width: 34, height: 34 }} />
          <Text style={styles.logoText}>Collabbr</Text>
        </View>

        {/* Headline */}
        <Text style={styles.title}>Welcome to Collabbr</Text>
        <Text style={styles.subtitle}>Please enter email or username and password</Text>

        {/* Email Field */}
        <Text style={styles.label}>Email or username</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Enter email or username"
            placeholderTextColor="#bbb"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>

        {/* Password Field */}
        <Text style={styles.label}>Password</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Enter password"
            placeholderTextColor="#bbb"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={22}
              color="#6B7280"
            />
          </TouchableOpacity>
        </View>

        {/* Remember Me + Forgot Password */}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.checkRow}
            onPress={() => setRememberMe(!rememberMe)}
            activeOpacity={0.8}
          >
            <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]}>
              {rememberMe && <Text style={styles.checkmark}>✓</Text>}
            </View>
            <Text style={styles.rememberText}>Remember Me</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation?.navigate('EmailVerificationScreen')}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        {/* Sign In Button */}
        <TouchableOpacity
          style={styles.btnPrimary}
          onPress={handleLogin}
          activeOpacity={0.85}
        >
          <Text style={styles.btnPrimaryText}>Sign In</Text>
        </TouchableOpacity>

        {/* Or continue with */}
        <Text style={styles.orText}>Or continue with</Text>

        <View style={styles.socialRow}>
          {/* Google */}
          <TouchableOpacity style={styles.socialBtn} activeOpacity={0.8}>
            <Text style={styles.socialIcon}>G</Text>
            <Text style={styles.socialText}>Google</Text>
          </TouchableOpacity>

          {/* Facebook */}
          <TouchableOpacity style={[styles.socialBtn, { marginLeft: 12 }]} activeOpacity={0.8}>
            <Text style={[styles.socialIcon, { color: '#1877F2' }]}>f</Text>
            <Text style={styles.socialText}>Facebook</Text>
          </TouchableOpacity>
        </View>

        {/* Sign Up */}
        <TouchableOpacity onPress={() => navigation?.navigate('SignUp')}>
          <Text style={styles.signUpText}>Sign Up</Text>
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
    paddingHorizontal: 24,
    paddingTop: 30,
  },

  // Logo
  logoWrapper: {
    alignItems: 'center',
    marginBottom: 16,
  },
  logoBox: {
    width: 54,
    height: 54,
    borderRadius: 14,
    backgroundColor: PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  logoIcon: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '800',
  },
  logoText: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: '700',
    color: PRIMARY,
  },

  // Headlines
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1A1A2E',
    textAlign: 'center',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 13,
    color: '#888',
    textAlign: 'center',
    marginBottom: 24,
  },

  // Labels
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1A1A2E',
    marginBottom: 6,
  },

  // Input
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#E8E8F0',
    borderRadius: 12,
    paddingHorizontal: 14,
    marginBottom: 16,
    backgroundColor: '#FAFAFA',
  },
  input: {
    height: 50,
    fontSize: 14,
    color: '#1A1A2E',
    flex: 1,
  },
  eyeBtn: {
    paddingLeft: 8,
  },
  eyeIcon: {
    fontSize: 18,
  },

  // Remember Me row
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  checkRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  checkboxChecked: {
    backgroundColor: PRIMARY,
  },
  checkmark: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
  },
  rememberText: {
    fontSize: 13,
    color: '#555',
  },
  forgotText: {
    fontSize: 13,
    color: PRIMARY,
    fontWeight: '600',
  },

  // Primary button
  btnPrimary: {
    width: '100%',
    backgroundColor: PRIMARY,
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 20,
  },
  btnPrimaryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  // Or text
  orText: {
    textAlign: 'center',
    color: '#aaa',
    fontSize: 13,
    marginBottom: 16,
  },

  // Social buttons
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 28,
  },
  socialBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: '#E8E8F0',
    borderRadius: 12,
    paddingVertical: 13,
    backgroundColor: '#fff',
  },
  socialIcon: {
    fontSize: 18,
    fontWeight: '800',
    color: '#EA4335',
    marginRight: 8,
  },
  socialText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1A1A2E',
  },

  // Sign Up
  signUpText: {
    textAlign: 'center',
    color: PRIMARY,
    fontSize: 15,
    fontWeight: '600',
  },
});