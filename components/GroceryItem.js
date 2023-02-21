import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const GroceryItem = ({ name, category, imageUri }) => {

  return (
    <View style={styles.item}>
      <Image source={imageUri} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  category: {
    fontSize: 14,
    color: '#888',
  },
});

export default GroceryItem;