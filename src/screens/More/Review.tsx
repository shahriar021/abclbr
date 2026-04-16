import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
  ScrollView, TextInput, Modal,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PRIMARY = '#6C63FF';

const REVIEWS = [
  { name: 'Sara Afrin', handle: '@sana_afrin03', sub: '23 Oct 2025, 11:32 PM', rating: 4, text: 'Incredible work, I really loved it.', hasReply: true },
  { name: 'Sara Afrin', handle: '@sana_afrin03', sub: '23 Oct 2025, 11:32 PM', rating: 4, text: 'Super work!', hasReply: false },
  { name: 'Sara Afrin', handle: '@sana_afrin03', sub: 'Dhaka, Bangladesh',     rating: 4, text: 'Super smooth collaboration! The influencer delivered exactly what we needed and was very responsive throughout the campaign.', hasReply: false },
  { name: 'Sara Afrin', handle: '@sana_afrin03', sub: 'Dhaka, Bangladesh',     rating: 4, text: 'Super smooth collaboration!', hasReply: false },
];

const Stars = ({ count, size = 16 }: { count: number; size?: number }) => (
  <View style={{ flexDirection: 'row', gap: 2 }}>
    {[1, 2, 3, 4, 5].map(i => (
      <Text key={i} style={{ fontSize: size, color: i <= count ? PRIMARY : '#D0D0D0' }}>★</Text>
    ))}
  </View>
);

function ReplyModal({ visible, review, onClose }: { visible: boolean; review: any; onClose: () => void }) {
  const [reply, setReply] = useState('Thanks for your review, I\'m very grateful to you.');

  return (
    <Modal visible={visible} transparent animationType="slide">
      <TouchableOpacity style={styles.modalOverlay} activeOpacity={1} onPress={onClose} />
      <View style={styles.sheet}>
        <View style={styles.sheetHandle} />
        <Text style={styles.sheetTitle}>Reply Review</Text>

        {/* Review stars */}
        <View style={{ alignItems: 'center', marginBottom: 14 }}>
          <Stars count={review?.rating ?? 5} size={28} />
        </View>

        {/* Original review */}
        <View style={styles.originalReview}>
          <Text style={styles.originalTxt}>{review?.text}</Text>
        </View>

        {/* Reply input */}
        <Text style={styles.replyLabel}>You reply</Text>
        <View style={styles.replyInputWrapper}>
          <TextInput
            style={styles.replyInput}
            value={reply}
            onChangeText={setReply}
            multiline
            textAlignVertical="top"
          />
        </View>

        <TouchableOpacity style={styles.submitBtn} onPress={onClose}>
          <Text style={styles.submitTxt}>Submit Reply</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

export default function MyReviewsScreen({ navigation }: any) {
  const [activeFilter, setActiveFilter] = useState('Ratings');
  const [selectedReview, setSelectedReview] = useState<any>(null);

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation?.goBack()} style={styles.backBtn}>
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Reviews</Text>
        <View style={{ width: 36 }} />
      </View>

      {/* Filter tabs */}
      <View style={styles.filterRow}>
        {['Ratings', 'Status'].map((f) => (
          <TouchableOpacity
            key={f}
            style={styles.filterChip}
            onPress={() => setActiveFilter(f)}
          >
            <Text style={styles.filterIcon}>{f === 'Ratings' ? '☆' : '$'}</Text>
            <Text style={[styles.filterTxt, activeFilter === f && { color: PRIMARY, fontWeight: '600' }]}>{f}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Reviews list */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 16, gap: 12, paddingBottom: 40 }}>
        {REVIEWS.map((review, i) => (
          <View key={i} style={styles.card}>
            {/* Header row */}
            <View style={styles.cardHeader}>
              <View style={styles.avatar} />
              <View style={styles.cardInfo}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                  <Text style={styles.reviewerName}>{review.name}</Text>
                  <Text style={styles.reviewerHandle}>{review.handle}</Text>
                </View>
                <Text style={styles.reviewSub}>{review.sub}</Text>
              </View>
              <TouchableOpacity onPress={() => setSelectedReview(review)}>
                <Text style={styles.actionIcon}>{review.hasReply ? '✎' : '↩'}</Text>
              </TouchableOpacity>
            </View>

            <Stars count={review.rating} />
            <Text style={styles.reviewText}>{review.text}</Text>

            {review.hasReply && (
              <TouchableOpacity style={styles.viewReplyBtn}>
                <Text style={styles.viewReplyTxt}>View Reply</Text>
                <Text style={styles.viewReplyArrow}> ▾</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </ScrollView>

      <ReplyModal
        visible={!!selectedReview}
        review={selectedReview}
        onClose={() => setSelectedReview(null)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F2F4F7' },

  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 16, paddingVertical: 14, backgroundColor: '#F2F4F7',
  },
  backBtn: { width: 36, justifyContent: 'center' },
  backArrow: { fontSize: 28, color: '#1A1A2E', marginTop: -2 },
  headerTitle: { fontSize: 18, fontWeight: '700', color: '#1A1A2E' },

  filterRow: { flexDirection: 'row', gap: 16, paddingHorizontal: 16, marginBottom: 8 },
  filterChip: { flexDirection: 'row', alignItems: 'center', gap: 5 },
  filterIcon: { fontSize: 14, color: '#888' },
  filterTxt: { fontSize: 14, color: '#888' },

  card: { backgroundColor: '#fff', borderRadius: 14, padding: 14 },
  cardHeader: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 10, gap: 10 },
  avatar: { width: 42, height: 42, borderRadius: 21, backgroundColor: '#C8C8C8' },
  cardInfo: { flex: 1 },
  reviewerName: { fontSize: 14, fontWeight: '700', color: '#1A1A2E' },
  reviewerHandle: { fontSize: 12, color: '#888' },
  reviewSub: { fontSize: 12, color: '#aaa', marginTop: 2 },
  actionIcon: { fontSize: 18, color: '#aaa' },
  reviewText: { fontSize: 13, color: '#444', lineHeight: 20, marginTop: 8 },
  viewReplyBtn: {
    flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start',
    marginTop: 10, backgroundColor: '#F0F0FF',
    paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20,
  },
  viewReplyTxt: { fontSize: 13, color: PRIMARY, fontWeight: '500' },
  viewReplyArrow: { fontSize: 12, color: PRIMARY },

  // Modal
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.3)' },
  sheet: {
    backgroundColor: '#fff', borderTopLeftRadius: 24, borderTopRightRadius: 24,
    paddingHorizontal: 20, paddingBottom: 34, paddingTop: 12,
  },
  sheetHandle: { width: 40, height: 4, borderRadius: 2, backgroundColor: '#E0E0E0', alignSelf: 'center', marginBottom: 16 },
  sheetTitle: { fontSize: 17, fontWeight: '700', color: '#1A1A2E', textAlign: 'center', marginBottom: 16 },
  originalReview: {
    backgroundColor: '#F2F4F7', borderRadius: 10, padding: 14, marginBottom: 16,
  },
  originalTxt: { fontSize: 14, color: '#555' },
  replyLabel: { fontSize: 14, fontWeight: '600', color: '#1A1A2E', marginBottom: 8 },
  replyInputWrapper: {
    borderWidth: 1.5, borderColor: '#E8E8F0', borderRadius: 12,
    padding: 12, marginBottom: 20, minHeight: 90,
  },
  replyInput: { fontSize: 14, color: '#1A1A2E', lineHeight: 22 },
  submitBtn: { backgroundColor: PRIMARY, borderRadius: 30, paddingVertical: 16, alignItems: 'center' },
  submitTxt: { color: '#fff', fontSize: 16, fontWeight: '600' },
});