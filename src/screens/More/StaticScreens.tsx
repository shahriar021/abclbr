import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PRIMARY = '#6C63FF';

const StaticScreen = ({ navigation, title, children }: any) => (
  <SafeAreaView style={styles.safe}>
    <StatusBar barStyle="dark-content" backgroundColor="#fff" />
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation?.goBack()} style={styles.backBtn}>
        <Text style={styles.backArrow}>‹</Text>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
      <View style={{ width: 36 }} />
    </View>
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 16, paddingBottom: 40 }}>
      <View style={styles.card}>{children}</View>
    </ScrollView>
  </SafeAreaView>
);

const P = ({ children }: any) => <Text style={styles.para}>{children}</Text>;
const H = ({ children }: any) => <Text style={styles.heading}>{children}</Text>;
const B = ({ children }: any) => <Text style={styles.bullet}>{'\u2022  '}{children}</Text>;

export function AboutUsScreen({ navigation }: any) {
  return (
    <StaticScreen navigation={navigation} title="About us">
      <P>Influencer Collab Hub is a smart platform that connects brands with the right influencers — all in one place.</P>
      <P>Whether you're a business looking to promote your products or an influencer ready to collaborate and grow your career, this app makes it effortless to connect, create, and earn.</P>
      <H>For Brands</H>
      <B>Discover verified influencers by category, audience, and location.</B>
      <B>Create and manage influencer campaigns in minutes.</B>
      <B>Handle all payments safely through escrow protection.</B>
      <B>Track performance, deliverables, and approvals — all in one dashboard.</B>
      <H>For Influencers</H>
      <B>Create your verified influencer profile with your social media insights.</B>
      <B>Get matched with campaigns that fit your niche and audience.</B>
      <B>Showcase your portfolio, set your pricing, and get paid securely.</B>
      <B>Grow your brand with authentic collaborations and transparent deals.</B>
      <H>Why You'll Love It</H>
      <B>AI-based influencer recommendations.</B>
      <B>Easy onboarding with social login.</B>
      <B>Safe & secure payment system.</B>
      <B>Real-time chat and notifications.</B>
      <B>Transparent campaign tracking.</B>
    </StaticScreen>
  );
}

export function HelpSupportScreen({ navigation }: any) {
  return (
    <StaticScreen navigation={navigation} title="Help & Support">
      <P>If you face any issue while using Influencer Collab Hub, our support team is always ready to assist you.</P>
      <P>Whether it's a login problem, payment delay, campaign setup confusion, or any technical error — just reach out and we'll help you as soon as possible.</P>
      <P>📧 For any kind of support, contact us at: support@influencercollabhub.com</P>
      <P>Our team usually responds within 24 hours (Priority users get faster support).</P>
      <P>Please include your registered email, issue details, and screenshots (if any) to help us resolve your request quickly.</P>
      <P>Thank you for being part of Influencer Collab Hub.</P>
      <P>We're here to make your collaboration experience smooth and secure.</P>
    </StaticScreen>
  );
}

export function PrivacyPolicyScreen({ navigation }: any) {
  return (
    <StaticScreen navigation={navigation} title="Privacy Policy">
      <P>Effective Date: 1st September 2025</P>
      <P>Welcome to Influencer Collab Hub. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our web platform and mobile applications ("Services"). By using our Services, you agree to the practices described in this policy.</P>
      <H>Information We Collect</H>
      <P>We collect different types of information to provide and improve our Services:</P>
      <P>(a) Personal Information</P>
      <B>Name, email address, and contact details.</B>
      <B>Social account information (e.g., Instagram, YouTube, TikTok handles).</B>
      <B>Business or influencer profile data (bio, niche, pricing, subscription details).</B>
      <P>(b) Verification & Financial Information</P>
      <B>Identity verification details (KYC documents).</B>
      <B>Payment and payout details via Stripe Connect or PayPal.</B>
      <P>(c) Usage Data</P>
      <B>App activity (pages visited, time spent).</B>
      <B>Device data (IP address, browser type, OS version).</B>
      <H>How We Use Your Information</H>
      <P>We use the collected data to:</P>
      <B>Create and manage your account.</B>
      <B>Match businesses with influencers using AI recommendations.</B>
      <B>Process payments and manage escrow transactions.</B>
      <B>Send notifications and campaign updates.</B>
    </StaticScreen>
  );
}

export function TermsConditionsScreen({ navigation }: any) {
  return (
    <StaticScreen navigation={navigation} title="Terms & Conditions">
      <P>Effective Date: 1st September 2025</P>
      <P>Welcome to Influencer Collab Hub. By accessing or using our web platform or mobile app ("Services"), you agree to be bound by these Terms & Conditions ("Terms"). If you do not agree, please do not use our Services.</P>
      <H>Account Registration</H>
      <B>You must be at least 18 years old to create an account.</B>
      <B>You agree to provide accurate, current, and complete information.</B>
      <B>You are responsible for maintaining the confidentiality of your login credentials.</B>
      <B>We reserve the right to suspend or terminate accounts that violate our terms or policies.</B>
      <H>Platform Roles</H>
      <P>There are two types of users:</P>
      <P>(a) Businesses / Brands</P>
      <P>Can create campaigns, hire influencers, deposit budgets to escrow, and manage deliverables.</P>
      <P>(b) Influencers</P>
      <P>Can receive offers, participate in campaigns, submit deliverables, and receive payments after approval.</P>
      <H>Campaigns & Agreements</H>
      <B>All campaign details (deliverables, deadlines, payment terms) must be clearly defined before confirming.</B>
      <B>Once both parties accept an offer, a binding agreement is formed on the platform.</B>
    </StaticScreen>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 16, paddingVertical: 14,
  },
  backBtn: { width: 36, justifyContent: 'center' },
  backArrow: { fontSize: 28, color: '#1A1A2E', marginTop: -2 },
  headerTitle: { fontSize: 18, fontWeight: '700', color: '#1A1A2E' },
  card: { backgroundColor: '#fff', borderRadius: 14, padding: 4 },
  para: { fontSize: 14, color: '#333', lineHeight: 22, marginBottom: 10 },
  heading: { fontSize: 14, fontWeight: '700', color: '#1A1A2E', marginTop: 10, marginBottom: 6 },
  bullet: { fontSize: 14, color: '#333', lineHeight: 22, marginBottom: 6, paddingLeft: 4 },
});