import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Navbar from '../Navbar';
import axios from 'axios';

function ChatScreen() {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello, how can I help you?", type: "bot" },
    // Add more initial chat messages as needed
  ]);

  const handleSend = async () => {
    if (inputText.trim() === '') {
      // Don't send empty messages
      return;
    }

    const newUserMessage = { id: messages.length + 1, text: inputText, type: 'user' };
    setMessages([...messages, newUserMessage]);

    try {
      const response = await axios.post('http://192.168.65.249:5000/ai/questions', {
        Pedometer: 2000,
        CalorieBurnt: 500,
        WaterCount: 12,
        HeartRate: 96,
        currWgt: 100,
        tgWgt: 80,
        Question: inputText,
      }
      
      );

      if (response.status === 200 && response.data.response) {
        const newBotMessage = { id: messages.length + 2, text: response.data.response, type: 'bot' };
        setMessages([...messages, newBotMessage]);
      } else {
        console.error('Unexpected server response:', response);
      }
    } catch (error) {
      console.error('Error sending or receiving messages:', error);
    }

    setInputText('');
  };

  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>ChatBot</Text>
      </View>
      <ScrollView contentContainerStyle={styles.chatContainer}>
        {messages.map((message) => (
          <View
            key={message.id}
            style={[
              styles.messageView,
              message.type === 'user' ? styles.userMessage : styles.botMessage,
            ]}
          >
            <Text style={styles.chatText}>{message.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={inputText}
          onChangeText={(text) => setInputText(text)}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 24,
    color: 'black',
  },
  chatContainer: {
    flexGrow: 1,
    padding: 10,
  },
  messageView: {
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    maxWidth: '70%',
  },
  userMessage: {
    backgroundColor: 'orange',
    alignSelf: 'flex-end',
  },
  botMessage: {
    backgroundColor: '#2196F3',
    alignSelf: 'flex-start',
  },
  chatText: {
    color: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
    color: 'black',
  },
  sendButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  sendButtonText: {
    color: 'white',
  },
});

export default ChatScreen;
