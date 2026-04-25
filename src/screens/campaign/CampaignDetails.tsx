import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
  StatusBar, ScrollView,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PRIMARY = '#6C63FF';

export default function CampaignDetailsScreen({ navigation, route }: any) {
  const [expanded, setExpanded] = useState(false);

  const {who}=route?.params
  const description = "We're launching our new GlowLab Summer Sunscreen a lightweight, non-greasy SPF 50 formula designed for everyday use in hot and humid climates.";
  const goal = "Boost awareness of GlowLab's new sunscreen line across South Asia";

  const INFLUENCERS = [
    { name: 'Sana Irfan', handle: '@sana_irfan043', tags: 'Fashion • Makeup' },
    { name: 'Arooj Fatima', handle: '@arooj_342', tags: 'Fashion • Makeup' },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>

        {/* Hero image */}
        <View style={styles.heroImage}>
          <TouchableOpacity onPress={() => navigation?.goBack()} style={styles.backBtn}>
            <Text style={styles.backArrow}>‹</Text>
          </TouchableOpacity>
          {who!=="influence"&&<View style={styles.activeBadge}>
            <Text style={styles.activeTxt}>Active</Text>
          </View>}
        </View>

        <View style={styles.body}>
          <Text style={styles.campaignTitle}>Summer Glow Launch</Text>

          {/* Campaign Details */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Campaign Details</Text>
              <TouchableOpacity style={styles.editBtn}>
                 <Image source={require("../../../assets/alibaker/editpan.png")} style={{width:15,height:15}} resizeMode='contain'/><Text style={styles.editTxt}>  Edit</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.fieldLabel}>Description</Text>
            <Text style={styles.fieldValue}>
              {expanded ? description : description.slice(0, 70) + '... '}
              {!expanded && (
                <Text style={styles.seeMore} onPress={() => setExpanded(true)}>see more...</Text>
              )}
            </Text>

            {expanded && (
              <>
                <Text style={styles.fieldLabel}>Goal</Text>
                <Text style={styles.fieldValue}>{goal}</Text>
                <Text style={styles.seeMore} onPress={() => setExpanded(false)}>see less</Text>
              </>
            )}
          </View>

          <View style={styles.divider} />

          {/* Budget & Timeline */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Budget & Timeline</Text>
              <TouchableOpacity style={styles.editBtn}>
                 <Image source={require("../../../assets/alibaker/editpan.png")} style={{width:15,height:15}} resizeMode='contain'/><Text style={styles.editTxt}>  Edit</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.fieldLabel}>Budget</Text>
            <Text style={[styles.fieldValue, { color: PRIMARY, fontWeight: '700' }]}>$250</Text>

            <Text style={styles.fieldLabel}>Timeline</Text>
            <View style={styles.timelineRow}>
              <Text style={styles.fieldValue}>15 Sep 25 - 25 Sep 25</Text>
              <Text style={{ color: PRIMARY, marginHorizontal: 6 }}>●</Text>
              <Text style={styles.fieldValue}>11 Days</Text>
            </View>

            <Text style={styles.fieldLabel}>Assigned Influencers</Text>
            {INFLUENCERS.map((inf, i) => (
              <View key={i} style={styles.influencerRow}>
                <View style={styles.infAvatar} />
                <View>
                  <Text style={styles.infName}>{inf.name}</Text>
                  <Text style={styles.infHandle}>{expanded ? inf.tags : inf.handle}</Text>
                </View>
              </View>
            ))}
          </View>

          <View style={styles.divider} />

          {/* Content Details */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Content Details</Text>
              <TouchableOpacity style={styles.editBtn}>
                 <Image source={require("../../../assets/alibaker/editpan.png")} style={{width:15,height:15}} resizeMode='contain'/><Text style={styles.editTxt}> Edit</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.fieldLabel}>Deliverables</Text>
            <Text style={styles.fieldValue}>2 Reels & 3 Story Post for Instagram</Text>

            <Text style={styles.fieldLabel}>Creative Guidline</Text>
            <Text style={styles.fieldValue}>
              {expanded
                ? description
                : description.slice(0, 70) + '... '}
              {!expanded && (
                <Text style={styles.seeMore} onPress={() => setExpanded(true)}>see more...</Text>
              )}
            </Text>

            {/* Media thumbnails */}
            <View style={styles.mediaRow}>
              {[1, 2, 3].map((n) => (
                <View key={n} style={styles.mediaThumb} />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Footer buttons */}
     {who=="influence"?
     <View style={{padding:10}}><TouchableOpacity style={{backgroundColor:PRIMARY,borderRadius:10}}>
          <Text style={{fontSize:15,color:"white",textAlign:"center",padding:10}}>Apply Now</Text>
        </TouchableOpacity></View> :<View style={styles.footer}>
        <TouchableOpacity style={styles.inactiveBtn}>
          <Image source={require("../../../assets/alibaker/inactiveCamp.png")} style={{width:24,height:24}} resizeMode='contain'/><Text style={styles.inactiveTxt}>  Inactive</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sendBtn}>
          <Image source={require("../../../assets/alibaker/sendCamp.png")} style={{width:24,height:24}} resizeMode='contain'/><Text style={styles.sendTxt}> Send Offer</Text>
        </TouchableOpacity>
      </View>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },

  heroImage: {
    height: 220, backgroundColor: '#F0D0D0',
    justifyContent: 'space-between', padding: 16,
    paddingTop: 50,
  },
  backBtn: {
    width: 36, height: 36, borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.8)',
    alignItems: 'center', justifyContent: 'center',
  },
  backArrow: { fontSize: 24, color: '#1A1A2E', marginTop: -2 },
  activeBadge: {
    position: 'absolute', bottom: 12, right: 12,
    backgroundColor: '#fff', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 20,
  },
  activeTxt: { fontSize: 12, color: '#4CAF50', fontWeight: '600' },

  body: { padding: 16 },
  campaignTitle: { fontSize: 20, fontWeight: '800', color: '#1A1A2E', marginBottom: 16 },

  section: { marginBottom: 8 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: '#1A1A2E' },
  editBtn: { flexDirection: 'row', alignItems: 'center' },
  editTxt: { fontSize: 13, color: PRIMARY, fontWeight: '500' },

  fieldLabel: { fontSize: 12, color: '#aaa', marginBottom: 4, marginTop: 10 },
  fieldValue: { fontSize: 14, color: '#333', lineHeight: 22 },
  seeMore: { fontSize: 14, color: PRIMARY, fontWeight: '600' },

  timelineRow: { flexDirection: 'row', alignItems: 'center' },

  influencerRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 10 },
  infAvatar: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#C8C8C8' },
  infName: { fontSize: 14, fontWeight: '700', color: '#1A1A2E' },
  infHandle: { fontSize: 12, color: '#888', marginTop: 1 },

  mediaRow: { flexDirection: 'row', gap: 10, marginTop: 14 },
  mediaThumb: { width: 90, height: 80, borderRadius: 10, backgroundColor: '#3A3A3A' },

  divider: { height: 1, backgroundColor: '#F0F0F0', marginVertical: 16 },

  footer: {
    position: 'absolute', bottom: 0, left: 0, right: 0,
    flexDirection: 'row', gap: 12, padding: 16, paddingBottom: 28,
    backgroundColor: '#fff', borderTopWidth: 1, borderTopColor: '#F0F0F0',
  },
  inactiveBtn: {
    flex: 1,flexDirection:"row",gap:5, backgroundColor: '#EF4444', borderRadius: 30,
    paddingVertical: 14, alignItems: 'center',justifyContent:"center"
  },
  inactiveTxt: { color: '#fff', fontSize: 15, fontWeight: '600' },
  sendBtn: {
    flex: 1,flexDirection:"row",gap:5, backgroundColor: PRIMARY, borderRadius: 30,
    paddingVertical: 14, alignItems: 'center',justifyContent:"center"
  },
  sendTxt: { color: '#fff', fontSize: 15, fontWeight: '600' },
});