import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, ScrollView, Switch, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setToken } from '../../redux/features/auth/authSlice';
import InfluencerProfileCard from './InfluenceProfileCard';


const PRIMARY = '#6C63FF';

const Section = ({ title, items, navigation, routes }: any) => (
  <View style={styles.section}>
    <Text style={styles.sectionLabel}>{title}</Text>
    <View style={styles.card}>
      {items.map((item: string, i: number) => (
        <TouchableOpacity
          key={item}
          style={[styles.row, i < items.length - 1 && styles.rowBorder]}
          onPress={() => navigation?.navigate(routes[i])}
          activeOpacity={0.7}
        >
          <Text style={styles.rowTxt}>{item}</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>
);

export default function MoreScreen({ navigation }: any) {
  const dispatch = useAppDispatch()
  const userType = useAppSelector((state)=>state.auth.userType)

  const handleLogout=()=>{
    dispatch(setToken(0))
  }
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.header}><Text style={styles.headerTitle}>More Tools</Text></View>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 16, paddingBottom: 100, gap: 20 }}>

        {/* Profile banner */}
       {userType=="brand"&& <TouchableOpacity style={styles.profileBanner} activeOpacity={0.85}>
          <View style={styles.profileAvatar} ><Image source={require("../../../assets/alibaker/ProfileImage.png")} style={{width:"100%",height:"100%",borderRadius:50}}/></View>
          <View style={{ flex: 1 }}>
            <Text style={styles.profileName}>Imran Mahmud Siddiq</Text>
            <View style={styles.freeBadge}><Text style={styles.freeTxt}>Free</Text></View>
          </View>
          <Text style={[styles.arrow, { color: '#fff' }]}>›</Text>
        </TouchableOpacity>}


        {userType=="influencer"&&<InfluencerProfileCard/>}

        <Section
          title="More Tools"
          items={['Analytics', 'Subscription', 'Payment & Billing', 'Saved List', 'Account Settings','Badge','Order']}
          routes={['AnalyticsScreen', 'SubscriptionScreen', 'PaymentBillingScreen', 'SavedListScreen', 'AccountSettingsScreen','BadgeScreen','OrdersScreen']}
          navigation={navigation}
        />
        <Section
          title="More Info & Support"
          items={['Help & Support', 'About Us', 'Rate this App']}
          routes={['HelpSupport', 'AboutUs', 'MyReviewsScreen']}
          navigation={navigation}
        />
        <Section
          title="Others"
          items={['Privacy Policy', 'Terms & Conditions']}
          routes={['PrivacyPolicy', 'TermsConditions']}
          navigation={navigation}
        />
        <TouchableOpacity style={{padding:10,alignItems:"center"}} onPress={handleLogout}>
          <Text style={{fontWeight:"bold",color:"red"}}>
            Log out
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F2F4F7' },
  header: { paddingHorizontal: 16, paddingVertical: 14, alignItems: 'center', backgroundColor: '#fff' },
  headerTitle: { fontSize: 18, fontWeight: '700', color: '#1A1A2E' },
  profileBanner: {
    backgroundColor: PRIMARY, borderRadius: 14, padding: 16,
    flexDirection: 'row', alignItems: 'center', gap: 12,
  },
  profileAvatar: { width: 52, height: 52, borderRadius: 26, backgroundColor: 'rgba(255,255,255,0.3)' },
  profileName: { fontSize: 16, fontWeight: '700', color: '#fff', marginBottom: 6 },
  freeBadge: {
    alignSelf: 'flex-start', backgroundColor: 'rgba(255,255,255,0.25)',
    paddingHorizontal: 12, paddingVertical: 3, borderRadius: 12,
  },
  freeTxt: { color: '#fff', fontSize: 12, fontWeight: '600' },
  section: { gap: 8 },
  sectionLabel: { fontSize: 13, color: '#888', fontWeight: '600', paddingHorizontal: 4 },
  card: { backgroundColor: '#fff', borderRadius: 14, overflow: 'hidden' },
  row: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 16 },
  rowBorder: { borderBottomWidth: 1, borderBottomColor: '#F5F5F5' },
  rowTxt: { flex: 1, fontSize: 15, color: '#1A1A2E' },
  arrow: { fontSize: 20, color: '#C0C0C0' },
});