import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import GoogleFit from 'react-native-google-fit';

const HeartRateMonitor = ({ isAuthorized }: { isAuthorized: boolean }) => {
  const [heartRate, setHeartRate] = useState('Not Found');

  const fetchHeartRate = async () => {
    try {
      const today = new Date();
      const opt = {
        startDate: new Date(today.getFullYear(), today.getMonth(), today.getDate()).toISOString(),
        endDate: today.toISOString(),
        bucketUnit: 'DAY',
        bucketInterval: 1,
      };

      const res = await GoogleFit.getHeartRateSamples(opt);
      console.log('Heart rate data:', res);

      let data = res.reverse();

      if (data.length === 0) {
        setHeartRate('No data');
      } else {
        setHeartRate(data[0].value.toString());
      }
    } catch (error) {
      console.log('Error fetching heart rate: ', error);
    }
  };

  useEffect(() => {
    if (isAuthorized) {
      fetchHeartRate();
      const intervalId = setInterval(fetchHeartRate, 2000);
      return () => clearInterval(intervalId);
    }
  }, [isAuthorized]);

  return (
      <Text style={styles.heartRateText}>{heartRate}</Text>
  );
};

const styles = StyleSheet.create({
  heartRateText: {
    fontSize: 20,
    color:'black',
  },
});

export default HeartRateMonitor;
