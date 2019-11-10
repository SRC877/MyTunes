import React, { Component } from 'react';
import { FlatList, Text,View,StyleSheet } from 'react-native';

import Separator from './Separator';
import Item from './Item';
import CustomModal from './CustomModal';
export default ({ items, onEndReached }) => (
  <View style={styles.container}>
  <FlatList
    data={items}
    renderItem={(info) => (
      <Item item={info.item} />
    )}
    numColumns={2}
   // ItemSeparatorComponent={() => <Separator />}
    keyExtractor={item => item.id}
    onEndReached={onEndReached}
  />
  {/* <CustomModal
    visible={true}
  /> */}

  </View>
);

const styles = StyleSheet.create({
  container: {
   // flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'blue',
    margin: 5,
  },
  image: {
    width: 100,
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
