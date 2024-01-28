import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import Navbar from '../Navbar';
import axios from 'axios';
import { launchImageLibrary, ImagePickerResponse } from 'react-native-image-picker';

function ChatScreen() {
  const [uploadImage, setUploadImage] = useState(null);
  const [userQuestion, setUserQuestion] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello, how can I help you?", type: "bot" },
    // Add more initial chat messages as needed
  ]);

  const selectImage = () => {
    let options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 500,
      quality: 1,
      includeBase64: true,
    };
    launchImageLibrary(options, (response: ImagePickerResponse) => {
      if (response.didCancel) {
        console.log('Cancelled');
      } else if (response.error) {
        console.log(response.errorMessage);
      } else {
        console.log('Image', response.assets[0]);
        setUploadImage(response.assets[0]);
      }
    });
  };

// ... (other imports and code)

const handleSend = async () => {
  if (!uploadImage) {
    // Don't send without an image
    return;
  }

  // Clear setUploadImage
  setUploadImage(null);

  try {
    // Send the request to the server
    const formData = new FormData();
    formData.append('image', {
      uri: uploadImage.uri,
      type: uploadImage.type,
      name: 'image.jpg', // Keep this consistent with the backend
    });

    // Include user's text question
    formData.append('Question', userQuestion);

    const apiUrl = 'http://192.168.65.249:5001/gemini_llm_vision'; // Change this to your image upload URI

    const response = await axios.post(apiUrl, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      timeout:500000,
    });

    // Update the corresponding message with the bot's response
    if (response.status === 200 && response.data.response) {
      const newBotMessage = { id: messages.length+2, text: response.data.response, type: 'bot' };
      setMessages([...messages, newBotMessage]);
    } else {
      console.error('Unexpected server response:', response);
    }
  } catch (error) {
    console.error('Error sending or receiving messages:', error);
  }
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
      {uploadImage && (
        <Image
          source={{ uri: `data:${uploadImage.type};base64,${uploadImage.base64}` }}
          style={styles.uploadedImage}
        />
      )}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Type your question here..."
          value={userQuestion}
          onChangeText={(text) => setUserQuestion(text)}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send Image</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sendButton} onPress={selectImage}>
          <Text style={styles.sendButtonText}>Select Image</Text>
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
  sendButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 10,
  },
  sendButtonText: {
    color: 'white',
  },
  uploadedImage: {
    width: 200,
    height: 200,
    margin: 5,
    resizeMode: 'cover',
  },
});

export default ChatScreen;

