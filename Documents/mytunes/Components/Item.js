import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  container: {
   // flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'blue',
    margin: 5,
  },
  image: {
    width: 150,
    height: 100,
   // marginRight: 10,
    justifyContent: 'center',
    flex:1,
    alignItems: 'center',
    backgroundColor:'red'
  },
  text: {
    //width: 100,
    //height: 100,
   // marginRight: 10,
    justifyContent: 'center',
   // flex:1,
    alignItems: 'center',
    //color:'green',
    backgroundColor:'green'
  },
});

export default ({
  item: {
    imageUri,
    title,
  },
}) => (
  <View style={styles.container}>
      <Image
      source={{ uri: imageUri }}
      style={styles.image}
    />
    
   { /*<Text style={styles.text}>{title}</Text>*/}
  </View>
);
