import {Image, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {ProductPodt} from '../viewmodel/HomeViewModel';
import {colours} from '../values/colours';

const Card = (props: any) => {
  const list: ProductPodt = props.list.item;

  // console.log(list);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.heading}>Name :</Text>
      <Text>{list.title}</Text>
      <Text>{''}</Text>
      <Text style={styles.heading}>Description :</Text>
      <Text numberOfLines={4}>{list.description}</Text>
      <Text>{''}</Text>
      <Text style={styles.heading}>Rating :</Text>
      <Text>{list.rating.rate}</Text>
      <Text>{''}</Text>
      <Text style={styles.heading}>Price :</Text>
      <Text style={styles.priceText}>{list.price}</Text>
      <View style={styles.imageContainer}>
        <Text style={styles.heading}>Image :</Text>
        <Image
          source={{uri: list.image}}
          style={styles.image}
          resizeMode="center"
        />
      </View>
    </SafeAreaView>
  );
};

export default Card;

const styles = StyleSheet.create({
  mainContainer: {
    alignSelf: 'center',
    width: '90%',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 10,
    borderWidth: 0.5,
    borderRadius: 5,
  },
  image: {
    marginTop: 5,
    width: 80,
    height: 80,
  },
  imageContainer: {
    position: 'absolute',
    bottom: 5,
    right: 20,
  },
  heading: {
    fontWeight: '800',
    color: colours.Black,
  },
  priceText: {
    color: colours.Black,
    fontWeight: '400',
  },
});
