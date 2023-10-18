import React, {useState} from 'react';

import {View, Text, StyleSheet, Alert} from 'react-native';
import Header from '../../components/Header';
import {Button, Icon, Input} from '@rneui/themed';
import AddFoodModal from '../../components/AddFoodModal';
import useFoodStorage from '../../hooks/useFoodStorage';

const AddFood = () => {
  const [visible, setIsVisible] = useState<boolean>(false);
  const {onGetFoods} = useFoodStorage();

  const handleModalClose = async (shouldUpdate?: boolean) => {
    if (shouldUpdate) {
      Alert.alert('Food successfully stored');
      try {
        const foodsResponse = await onGetFoods();
        console.log(foodsResponse);
      } catch (error) {
        console.error(error);
      }
    }
    setIsVisible(false);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.addFoodContainer}>
        <View style={styles.legendContainer}>
          <Text style={styles.addFoodLegend}>Add Food</Text>
        </View>
        <View style={styles.addFoodBtnContainer}>
          <Button
            icon={<Icon name="add-circle-outline" color="#fff" />}
            radius="lg"
            color="#4ecb71"
            onPress={() => setIsVisible(true)}
          />
        </View>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.inputContainer}>
          <Input placeholder="juice, hamburguer, bread" />
        </View>

        <Button
          title="Search"
          color="#ade8af"
          titleStyle={styles.searchBtnTitle}
          radius="lg"
        />
      </View>
      <AddFoodModal visible={visible} onClose={handleModalClose} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#fff',
    flex: 1,
  },
  addFoodContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  legendContainer: {
    flex: 1,
  },
  addFoodBtnContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  addFoodLegend: {
    fontSize: 20,
  },
  searchContainer: {
    flexDirection: 'row',
  },
  inputContainer: {
    flex: 1,
    marginLeft: -12,
  },
  searchBtnTitle: {
    color: '#000',
    fontSize: 14,
  },
});

export default AddFood;
