import React, { useEffect } from 'react';
import { FlatList, Text, StyleSheet, StatusBar } from 'react-native';
import _ from 'lodash';
import GroceryItem from './GroceryItem';

const GroceryList = ({ groceryProducts }) => {
  const groupedGroceryProducts = _.groupBy(groceryProducts, 'category');

  const GroceryItems = ({product}) => (
    <FlatList 
      data={product}
      style={styles.item}
      renderItem={({ item })=> <GroceryItem name={item.name} category={item.category} image={item.image}/>}
      keyExtractor={(item) => item.id}
      horizontal={true}
    />
  );

  return (
    <FlatList
      data={Object.entries(groupedGroceryProducts)}
      keyExtractor={(item) => item[1].id}
      renderItem={({ item }) => (
        <>
          <Text style={[styles.title]}>{item[0]}</Text>
          <GroceryItems product={item[1]}/>
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
  },
});

export default GroceryList;