import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import GoogleFit from 'react-native-google-fit';

const StepCounter = ({ isAuthorized }: { isAuthorized: boolean }) => {
  const [dailySteps, setDailySteps] = useState(0);

  const fetchDailySteps = async () => {
    try {
      const today = new Date();
      const opt = {
        startDate: new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate(),
        ).toISOString(),
        endDate: today.toISOString(),
        bucketUnit: 'DAY',
        bucketInterval: 1,
      };

      const res = await GoogleFit.getDailyStepCountSamples(opt);
      console.log('Daily steps:', res);

      let totalSteps = 0;

      if (res.length > 0) {
        for (const source of res) {
          if (source.steps && source.steps.length > 0) {
            totalSteps += source.steps[0].value;
          }
        }

        setDailySteps(totalSteps);
      } else {
        console.log('No step count data found for today.');
      }
    } catch (error) {
      console.log('Error fetching daily steps: ', error);
    }
  };

  useEffect(() => {
    if (isAuthorized) {
      fetchDailySteps();
      // const intervalId = setInterval(fetchDailySteps, 2000);
      // return () => clearInterval(intervalId);
    }
  }, [isAuthorized]);

  return (
      <Text>{dailySteps}</Text>
  );
};


export default StepCounter;
