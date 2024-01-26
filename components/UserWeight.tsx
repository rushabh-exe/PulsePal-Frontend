// components/UserWeight.tsx
import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import GoogleFit from 'react-native-google-fit';

const UserWeight = ({isAuthorized}: {isAuthorized: boolean}) => {
  const [userWeight, setUserWeight] = useState<number | null>(null);

  const fetchUserWeight = async () => {
    try {
      const opt = {
        unit: 'kg',
        startDate: '2017-01-01T00:00:17.971Z',
        endDate: new Date().toISOString(),
        bucketUnit: 'DAY',
        bucketInterval: 1,
        ascending: false,
      };

      const res = await GoogleFit.getWeightSamples(opt);
      console.log('Weight data:', res);

      if (res.length > 0) {
        setUserWeight(res[res.length - 1].value);
      } else {
        console.log('No weight data found.');
      }
    } catch (error) {
      console.log('Error fetching user weight: ', error);
    }
  };

  useEffect(() => {
    if (isAuthorized) {
      fetchUserWeight();
    }
  }, [isAuthorized]);

  return (
    <View>
      <Text style={styles.homeText}>Your Weight</Text>
      <Text style={[styles.homeText, styles.weightstyle]}>
        {' '}
        {userWeight !== null ? userWeight.toFixed(2) + ' kg' : 'N/A'}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  homeText: {
    color: 'black',
    textAlign: 'center',
    // You can add more styles here if needed
  },
  weightstyle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
export default UserWeight;
