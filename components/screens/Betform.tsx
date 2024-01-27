// import axios from 'axios';
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   SafeAreaView,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
// } from 'react-native';
// import { Button, Card } from 'react-native-paper';

// interface FormData {
//   name: string;
//   points: string;
//   activityStart: string;
//   activityEnd: string;
// }

// interface UserDetails {
//   // Define the structure based on the actual response from the server
//   username: string;
//   email: string;
//   // Add more fields as needed
// }

// function Ppa() {
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     points: '',
//     activityStart: '',
//     activityEnd: '',
//   });

//   const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

//   const handleChange = (field: keyof FormData, value: string) => {
//     setFormData({
//       ...formData,
//       [field]: value,
//     });
//   };

//   const handleSubmit = () => {
//     // Handle form submission logic here
//     console.log('Form submitted:', formData);

//     // Make a POST request to the server
//     axios.post('http://your-server-url', formData)
//       .then(response => {
//         // Assuming the response contains user details
//         setUserDetails(response.data);
//       })
//       .catch(error => {
//         console.error('Error:', error.message);
//       });
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.heading}>Bet Form</Text>
//       <Card style={styles.card}>
//         <TextInput
//           style={styles.input}
//           placeholder="Name"
//           value={formData.name}
//           onChangeText={value => handleChange('name', value)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Points"
//           keyboardType="numeric"
//           value={formData.points}
//           onChangeText={value => handleChange('points', value)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Activity Start"
//           value={formData.activityStart}
//           onChangeText={value => handleChange('activityStart', value)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Activity End"
//           value={formData.activityEnd}
//           onChangeText={value => handleChange('activityEnd', value)}
//         />
//         <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//           <Text style={styles.buttonText}>Submit</Text>
//         </TouchableOpacity>
//       </Card>

//       {userDetails && (
//         <Card style={styles.card}>
//           <Text>User Details:</Text>
//           <Text>Username: {userDetails.username}</Text>
//           <Text>Email: {userDetails.email}</Text>
//           {/* Add more fields as needed */}
//         </Card>
//       )}
//     </SafeAreaView>
//   );
// }
 
// interface BetformProps {
//   onSearchResult: (userDetails: any) => void;
// }

// const Betform: React.FC<BetformProps> = ({ onSearchResult }) => {
//   const [username, setUsername] = useState('');

//   const searchbar = () => {
//     // Make a POST request to search for user details
//     axios.post('http://192.168.65.84:9876/users/', { username })
//       .then(response => {
//         // Assuming the response contains user details
//         console.log('User Details:', response.data);
//         onSearchResult(response.data); // Pass the result to the parent component
//       })
//       .catch(error => {
//         console.error('Error:', error.message);
//       });
//   };

//   return (
//     <View>
//       <TextInput
//         style={styles.input}
//         placeholder="Username"
//         value={username}
//         onChangeText={value => setUsername(value)}
//       />
//       <TouchableOpacity onPress={searchbar} style={styles.button}>
//         <Text style={styles.buttonText}>Search</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }; 

// export default Betform;


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#ecf0f1',
//     padding: 16,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 16,
//   },
//   card: {
//     padding: 16,
//     borderRadius: 10,
//     elevation: 3,
//     marginVertical: 10,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 12,
//     paddingHorizontal: 10,
//     borderRadius: 5,
//   },
//   button: {
//     backgroundColor: '#3498db',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, FlatList } from 'react-native';
// import axios from 'axios';

// interface UserDetails {
//   username: string;
//   email: string;
// }

// interface UserListProps {
//   onUserSelected: (userDetails: UserDetails) => void;
// }

// const UserList: React.FC<UserListProps> = ({ onUserSelected }) => {
//   const [users, setUsers] = useState<UserDetails[]>([]);

//   useEffect(() => {
//     // Fetch all users when the component mounts
//     axios.get('http://192.168.65.84:9876/users/all')
//       .then(response => {
//         // Assuming the response contains an array of user details
//         setUsers(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching users:', error.message);
//       });
//   }, []);

//   const renderItem = ({ item }: { item: UserDetails }) => (
//     <View style={styles.userItem}>
//       <Text onPress={() => onUserSelected(item)}>
//         Username: {item.username}, Email: {item.email}
//       </Text>
//     </View>
//   );

//   return (
//     <View style={styles.userListContainer}>
//       <FlatList
//         data={users}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.username}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   userListContainer: {
//     flex: 1,
//     padding: 16,
//   },
//   userItem: {
//     marginBottom: 10,
//   },
// });

// export default UserList;
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

interface UserDetails {
  username: string;
  email: string;
}

interface UserListProps {
  onUserSelected: (userDetails: UserDetails) => void;
}

const UserList: React.FC<UserListProps> = ({ onUserSelected }) => {
  const [users, setUsers] = useState<UserDetails[]>([]);

  useEffect(() => {
    // Fetch all users when the component mounts
    axios.get('http://192.168.65.84:9876/users')
      .then(response => {
        // Assuming the response contains an array of user details
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error.message);
      });
  }, []);

  const renderItem = ({ item }: { item: UserDetails }) => (
    <View style={styles.userItem}>
      <Text onPress={() => onUserSelected(item)}>
        Username: {item.username}, Email: {item.email}
      </Text>
    </View>
  );

  return (
    <View style={styles.userListContainer}>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.username}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  userListContainer: {
    flex: 1,
    padding: 16,
  },
  userItem: {
    marginBottom: 10,
  },
});

export default UserList;


