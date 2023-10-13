import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const staticInfo = {
  name: 'Pablo del Barrio',
  uri: 'https://res.cloudinary.com/getoutbcn/image/upload/v1689234993/portfolio/perfilCV_hrhsuk.jpg',
};

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}></View>
      <View style={styles.rightContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  leftContainer: {},
  rightContainer: {},
});

export default Header;
