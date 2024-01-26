import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';


function ChatScreen() {
  return (
    <View>
      <View>
        <Text style={styles.DefaultText}>Home</Text>
      </View>
      <View style={styles.Chatcontainer}>
        <View style={styles.usertextview}>
          <Text style={styles.DefaultText}>Home</Text>
        </View>
        <View style={styles.bottextview}>
          <Text style={styles.DefaultText}>Home</Text>
        </View>
      </View>
      <View style={styles.Inputcontainer}>
        <Text style={styles.DefaultText}>Home</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  DefaultText: {
    color: 'black',
    textAlign: 'left',
  },
  Chatcontainer: {
    backgroundColor: 'green',
    width: '100%',
    height: '100%',
    flexDirection : 'column',
    padding : 10,
    gap : 10,
    justifyContent : 'flex-start'
  },
  Inputcontainer: {
    backgroundColor: 'grey',
  },
  usertextview: {
    backgroundColor: 'cyan',
    padding : 3,
    position : 'relative',
    maxWidth : '100%',
  },
  bottextview:{
    backgroundColor: 'yellow',
    padding : 3,
  }
});

export default ChatScreen;
