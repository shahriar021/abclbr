import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
  StatusBar, ScrollView, TextInput, KeyboardAvoidingView, Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PRIMARY = '#6C63FF';

const INITIAL_MESSAGES = [
  {
    id: 1, from: 'me',
    text: "Hi! We love your content style. We're running a winter campaign and think you'd be a great fit. Are you available for a product-review promo next week?",
  },
  {
    id: 2, from: 'them',
    text: "Hi! Thank you so much 😊\nYes, I'm available. Could you share the campaign details?",
  },
  {
    id: 3, from: 'me',
    text: "Sure. We need:\n\n1 Instagram Reel, 3 Story posts,\nDeliverable deadline: within 5 days,\nBudget: $150\n\nLet me know if that works.",
  },
  {
    id: 4, from: 'them',
    text: "This looks good. I can accept the offer. Please send the campaign request — I'll review and confirm from the dashboard.",
  },
];

export default function ChatScreen({ navigation, route }: any) {
  const name = route?.params?.name ?? 'safir_984';
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState('');

  const send = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { id: Date.now(), from: 'me', text: input.trim() }]);
    setInput('');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation?.goBack()} style={styles.backBtn}>
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>
        <View style={styles.headerInfo}>
          <View style={styles.headerAvatar} />
          <View>
            <Text style={styles.headerName}>{name}</Text>
            <Text style={styles.headerStatus}>Last seen 34 minutes ago</Text>
          </View>
        </View>
        <View style={{ width: 36 }} />
      </View>

      {/* Messages */}
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={90}
      >
        <ScrollView
          style={styles.messageList}
          contentContainerStyle={{ padding: 16, gap: 12 }}
          showsVerticalScrollIndicator={false}
        >
          {messages.map((msg) => (
            <View
              key={msg.id}
              style={[
                styles.bubble,
                msg.from === 'me' ? styles.bubbleMe : styles.bubbleThem,
              ]}
            >
              <Text style={[
                styles.bubbleTxt,
                msg.from === 'me' ? styles.bubbleTxtMe : styles.bubbleTxtThem,
              ]}>
                {msg.text}
              </Text>
            </View>
          ))}
        </ScrollView>

        {/* Input bar */}
        <View style={styles.inputBar}>
          <TouchableOpacity style={styles.attachBtn}>
            <Text style={styles.attachIcon}>⊕</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.textInput}
            placeholder="Type message here..."
            placeholderTextColor="#bbb"
            value={input}
            onChangeText={setInput}
            multiline
          />
          <TouchableOpacity style={styles.sendBtn} onPress={send}>
            <Text style={styles.sendIcon}>↑</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },

  header: {
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: 16, paddingVertical: 12,
    borderBottomWidth: 1, borderBottomColor: '#F0F0F0',
  },
  backBtn: { width: 36, justifyContent: 'center' },
  backArrow: { fontSize: 28, color: '#1A1A2E', marginTop: -2 },
  headerInfo: { flex: 1, flexDirection: 'row', alignItems: 'center', gap: 10 },
  headerAvatar: { width: 42, height: 42, borderRadius: 21, backgroundColor: '#C8C8C8' },
  headerName: { fontSize: 15, fontWeight: '700', color: '#1A1A2E' },
  headerStatus: { fontSize: 12, color: '#aaa', marginTop: 1 },

  messageList: { flex: 1 },

  bubble: {
    maxWidth: '80%', borderRadius: 18, padding: 14,
  },
  bubbleMe: {
    backgroundColor: PRIMARY, alignSelf: 'flex-end',
    borderBottomRightRadius: 4,
  },
  bubbleThem: {
    backgroundColor: '#F0F0F6', alignSelf: 'flex-start',
    borderBottomLeftRadius: 4,
  },
  bubbleTxt: { fontSize: 14, lineHeight: 21 },
  bubbleTxtMe: { color: '#fff' },
  bubbleTxtThem: { color: '#1A1A2E' },

  inputBar: {
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: 16, paddingVertical: 10,
    borderTopWidth: 1, borderTopColor: '#F0F0F0',
    backgroundColor: '#fff', gap: 10,
  },
  attachBtn: {
    width: 40, height: 40, borderRadius: 20,
    borderWidth: 1.5, borderColor: '#E8E8F0',
    alignItems: 'center', justifyContent: 'center',
  },
  attachIcon: { fontSize: 20, color: '#aaa' },
  textInput: {
    flex: 1, fontSize: 14, color: '#1A1A2E',
    paddingVertical: 8,
  },
  sendBtn: {
    width: 40, height: 40, borderRadius: 20,
    backgroundColor: PRIMARY, alignItems: 'center', justifyContent: 'center',
  },
  sendIcon: { color: '#fff', fontSize: 18, fontWeight: '700' },
});