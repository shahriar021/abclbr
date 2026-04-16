import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const PRIMARY = '#6C63FF';

export default function InfluencerProfileCard() {
  return (
    <View style={styles.card}>

      {/* Top row: avatar + stats */}
      <View style={styles.topRow}>
        <View style={styles.avatar} ><Image source={require("../../../assets/alibaker/ProfileImage.png")} style={{width:"100%",height:"100%",borderRadius:50}}/></View>
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statVal}>92%</Text>
            <Text style={styles.statLabel}>Engagement Rate</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statVal}>74/100</Text>
            <Text style={styles.statLabel}>Fraud score</Text>
          </View>
        </View>
      </View>

      {/* Social stats */}
      <View style={styles.socialRow}>
        <View style={styles.socialItem}>
          <Text style={styles.igIcon}>📷</Text>
          <Text style={styles.socialCount}>32.3K</Text>
        </View>
        <View style={styles.socialItem}>
          <Text style={styles.ttIcon}>♪</Text>
          <Text style={styles.socialCount}>32.3K</Text>
        </View>
        <View style={styles.socialItem}>
          <Text style={styles.ytIcon}>▶</Text>
          <Text style={styles.socialCount}>148K</Text>
        </View>
        <View style={styles.socialItem}>
          <Text style={styles.twIcon}>💬</Text>
          <Text style={styles.socialCount}>2.1M</Text>
        </View>
      </View>

      {/* Name + handle */}
      <Text style={styles.name}>Imran Mahmud Siddiq</Text>
      <Text style={styles.handle}>@sana_beauty</Text>

      {/* Bio */}
      <Text style={styles.bio}>
        Passionate about skincare and clean beauty{'\n'}
        Sharing real product experiences and everyday glow moments.{'\n'}
        Partnered with 20+ local and international beauty brands.
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
  },

  // Top row
  topRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 16, gap: 16 },
  avatar: { width: 70, height: 70, borderRadius: 35, backgroundColor: '#555' },
  statsRow: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' },
  statItem: { alignItems: 'center' },
  statVal: { fontSize: 18, fontWeight: '800', color: '#000' },
  statLabel: { fontSize: 11, color: '#aaa', marginTop: 2 },
  statDivider: { width: 1, height: 32, backgroundColor: '#444' },

  // Social row
  socialRow: {
    flexDirection: 'row', gap: 16, marginBottom: 14,
    paddingVertical: 10,
   
  },
  socialItem: { flexDirection: 'row', alignItems: 'center', gap: 5 },
  igIcon: { fontSize: 15 },
  ttIcon: { fontSize: 15 },
  ytIcon: { fontSize: 14, color: '#FF0000' },
  twIcon: { fontSize: 14, color: '#9146FF' },
  socialCount: { fontSize: 13, fontWeight: '600', color: '#000' },

  // Name
  name: { fontSize: 16, fontWeight: '700', color: '#000', marginBottom: 2 },
  handle: { fontSize: 13, color: '#00', marginBottom: 10 },

  // Bio
  bio: { fontSize: 13, color: '#000', lineHeight: 20 },
});