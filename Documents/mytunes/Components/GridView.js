import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';

import Separator from './Separator';
import Item from './Item';

export default ({ items, onEndReached }) => (
    <FlatList
    data={this.state.dataSource}
    renderItem={({ item }) => (
      <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
        <Image style={styles.imageThumbnail} source={{ uri: item.src }} />
      </View>
    )}
    //Setting the number of column
    numColumns={3}
    keyExtractor={(item, index) => index.toString()}
  />
);
