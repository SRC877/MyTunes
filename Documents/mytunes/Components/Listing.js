import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import Item from "./Item";

export default ({ items, onEndReached }) => (
  <View style={styles.container}>
    <FlatList
      data={items}
      renderItem={info => <Item item={info.item} />}
      numColumns={2}
      keyExtractor={item => item.id}
      onEndReached={onEndReached}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    margin: 5
  }
});
