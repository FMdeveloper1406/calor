import React, {useCallback, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button, Icon} from '@rneui/themed';

import Header from '../../components/Header';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Meal, RootStackParamList} from '../../types';
import useFoodStorage from '../../hooks/useFoodStorage';
import TodayCalories from '../../components/TodayCalories';

const totalCaloriesPerDay = 2000;

const Home = () => {
  const [todayFood, setTodayFood] = useState<Meal[]>([]);
  const [todayStatistics, setTodayStatistics] = useState<any>();
  const {onGetTodayFood} = useFoodStorage();
  const {navigate} =
    useNavigation<StackNavigationProp<RootStackParamList, 'Home'>>();

  const calculateTodayStatistics = (meals: Meal[]) => {
    try {
      const caloriesConsumed = meals.reduce(
        (acc, curr) => acc + Number(curr.calories),
        0,
      );
      const remainingCalories = totalCaloriesPerDay - caloriesConsumed;
      const percentage = (caloriesConsumed / totalCaloriesPerDay) * 100;

      setTodayStatistics({
        consumed: caloriesConsumed,
        percentage,
        remaining: remainingCalories,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const loadTodayFood = useCallback(async () => {
    try {
      const todayFoodResponse = (await onGetTodayFood()) as Meal[];

      calculateTodayStatistics(todayFoodResponse);
      setTodayFood(todayFoodResponse); //info is already parsed
    } catch (error) {
      setTodayFood([]);
      console.error(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadTodayFood().catch(null);
    }, [loadTodayFood]),
  );

  const handleAddCaloriesPress = () => {
    navigate('AddFood');
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.caloriesContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.caloriesLegend}>Calories</Text>
        </View>
        <View style={styles.rightContainer}>
          <Button
            icon={<Icon name="add-circle-outline" color="#fff" />}
            radius="lg"
            color="#4ecb71"
            onPress={handleAddCaloriesPress}
          />
        </View>
      </View>
      <TodayCalories {...todayStatistics} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#fff',
    flex: 1,
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  caloriesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  caloriesLegend: {
    fontSize: 20,
  },
});

export default Home;
