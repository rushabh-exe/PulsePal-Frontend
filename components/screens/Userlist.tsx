// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, FlatList } from 'react-native';
// import axios from 'axios';
// import UserBet from './UserBet'; // Import the UserBet component

// interface HealthInfo {
//   pedometer: number;
//   calorie_burn: number;
//   water_count: number;
//   heart_rate: number;
// }

// interface UserDetails {
//   user_id: number;
//   name: string;
//   email: string;
//   points: number;
//   wins: number;
//   healthInfo: HealthInfo;
// }

// interface UserListProps {
//   onUserSelected: (userDetails: UserDetails) => void;
// }

// const UserList: React.FC<UserListProps> = ({ onUserSelected }) => {
//   const [users, setUsers] = useState<UserDetails[]>([]);

//   useEffect(() => {
//     // Fetch all users when the component mounts
//     axios.get('http://192.168.65.84:9876/users')
//       .then(response => {
//         // Assuming the response contains an array of user details
//         setUsers(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching users:', error.message);
//       });
//   }, []);

//   const renderItem = ({ item }: { item: UserDetails }) => (
//     <UserBet
//       name={item.name}
//       email={item.email}
//       points={item.points}
//       onStartBet={() => onUserSelected(item)} // Pass the user details to the callback
//     />
//   );

//   return (
//     <View style={styles.userListContainer}>
//       {users.length > 0 ? (
//         <FlatList
//           data={users}
//           renderItem={renderItem}
//           keyExtractor={(item) => item.user_id.toString()}
//         />
//       ) : (
//         <Text>No users available.</Text>
        
//       )}
      
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   userListContainer: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: 'white',
//   },
// });

// export default UserList;
