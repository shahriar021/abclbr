import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, ScrollView, StatusBar,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PRIMARY = '#6C63FF';

const STEPS = ['Campaign\nDetails', 'Content\nDetails', 'Budget &\nTimeline'];

export default function CreateCampaignScreen({ navigation }: any) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [goal, setGoal] = useState('');

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* <View style={styles.handle} /> */}
      <Text style={styles.heading}>Create New Campaign</Text>

      {/* Stepper */}
      <View style={styles.stepper}>
        {STEPS.map((s, i) => (
          <React.Fragment key={i}>
            <View style={styles.stepCol}>
              <View style={[styles.stepCircle, i === 0 && styles.stepCircleActive]}>
                <Text style={styles.stepNum}>{i + 1}</Text>
              </View>
              <Text style={[styles.stepLabel, i === 0 && { color: PRIMARY }]}>{s}</Text>
            </View>
            {i < STEPS.length - 1 && (
  <Image
    source={require('../../../assets/alibaker/nextarror.png')}
    style={styles.stepArrow}
    resizeMode="contain"
  />
)}
          </React.Fragment>
        ))}
      </View>

      <ScrollView contentContainerStyle={styles.body} showsVerticalScrollIndicator={false}>

        <Text style={styles.label}><Text style={styles.required}>*</Text>Campaign Title</Text>
        <TextInput
          style={styles.input}
          placeholder="Write campaign title"
          placeholderTextColor="#bbb"
          value={title}
          onChangeText={setTitle}
        />

        <Text style={styles.label}><Text style={styles.required}>*</Text>Description</Text>
        <TextInput
          style={[styles.input, styles.textarea]}
          placeholder="Write brief description..."
          placeholderTextColor="#bbb"
          value={description}
          onChangeText={setDescription}
          multiline
          textAlignVertical="top"
        />

        <Text style={styles.label}>Goal</Text>
        <TextInput
          style={[styles.input, styles.textarea]}
          placeholder="Write campaign goal..."
          placeholderTextColor="#bbb"
          value={goal}
          onChangeText={setGoal}
          multiline
          textAlignVertical="top"
        />

        <Text style={styles.label}>Thumbnail</Text>
        <TouchableOpacity style={styles.uploadBox}>
          {/* Replace with your upload icon */}
          <Image source={require("../../../assets/alibaker/uploadCam.png")} style={{width:38,height:38}} resizeMode='contain'/>
          <Text style={styles.uploadTxt}>Upload a thumbnail</Text>
          <Text style={styles.uploadSub}>Supported format: <Text style={{ fontWeight: '700' }}>PNG, JPEG</Text></Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.nextBtn} // ✅ wrap in arrow function
onPress={() => navigation.goBack()}>
          <Text style={styles.nextTxt}>Next</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  handle: { width: 36, height: 4, borderRadius: 2, backgroundColor: '#E0E0E0', alignSelf: 'center', marginTop: 10 },
  heading: {marginTop:20, fontSize: 16, fontWeight: '700', color: '#1A1A2E', textAlign: 'center', marginVertical: 12 },

  stepper: { flexDirection: 'row', alignItems: 'flex-start', paddingHorizontal: 24, marginBottom: 16 },
  stepCol: { alignItems: 'center', flex: 1 },
  stepCircle: { width: 30, height: 30, borderRadius: 15, backgroundColor: '#2D2D4E', alignItems: 'center', justifyContent: 'center' },
  stepCircleActive: { backgroundColor: PRIMARY },
  stepNum: { color: '#fff', fontSize: 13, fontWeight: '600' },
  stepLabel: { fontSize: 10, color: '#888', textAlign: 'center', marginTop: 4, lineHeight: 14 },
  stepDash: { flex: 1, borderTopWidth: 2, borderColor: '#E0E0E0', borderStyle: 'dashed', marginTop: 14 },

  body: { paddingHorizontal: 16, paddingBottom: 40, gap: 6 },
  label: { fontSize: 13, fontWeight: '600', color: '#1A1A2E', marginBottom: 6, marginTop: 8 },
  required: { color: '#E53935' },
  input: {
    borderWidth: 1, borderColor: '#E8E8F0', borderRadius: 10,
    padding: 12, fontSize: 13, color: '#1A1A2E', backgroundColor: '#fff',
  },
  textarea: { height: 100, textAlignVertical: 'top' },

  uploadBox: {
    borderWidth: 1.5, borderColor: '#E8E8F0', borderStyle: 'dashed',
    borderRadius: 12, padding: 24, alignItems: 'center', gap: 6,
  },
  uploadTxt: { fontSize: 13, color: '#555' },
  uploadSub: { fontSize: 11, color: '#aaa' },

  nextBtn: { backgroundColor: PRIMARY, borderRadius: 30, paddingVertical: 16, alignItems: 'center', marginTop: 16 },
  nextTxt: { color: '#fff', fontSize: 15, fontWeight: '600' },
  stepArrow: { width: 32, height: 16, marginTop: 14 },
});