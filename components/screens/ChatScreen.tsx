import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image
} from 'react-native';

function ChatScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.Navbar}>
        <Image style={styles.uimage} source={require('../../static/th.jpeg')} />
        <Text style={styles.settingsText}>Settings</Text>
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>ChatBot</Text>
      </View>
      <ScrollView contentContainerStyle={styles.chatContainer}>
        <View style={styles.usertextview}>
          <Text style={styles.chatText}>Hello, how can I help you?</Text>
        </View>
        <View style={styles.bottextview}>
          <Text style={styles.chatText}>Hi there! I'm here to assist you.</Text>
        </View>
        {/* Add more chat messages as needed */}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
        />
        <TouchableOpacity style={styles.sendButton}>
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
  Navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10,
  },
  uimage: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  settingsText: {
    color: 'white',
    fontSize: 16,
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
  usertextview: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 8,
    alignSelf: 'flex-end',
    marginBottom: 10,
    maxWidth: '70%',
  },
  bottextview: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginBottom: 10,
    maxWidth: '70%',
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
