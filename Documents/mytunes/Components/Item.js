import React, { Component } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import CustomModal from "./CustomModal";

export default class Item extends Component {
  constructor() {
    super();
    this.state = { visible: false };
  }

  onPressHandler = () => {
    this.setState({ visible: true });
  };

  closeModal = () => {
    this.setState({ visible: false });
  };

  render() {
    let { item } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={{ flex: 1 }} onPress={this.onPressHandler}>
          <Image source={{ uri: item.imageUri }} style={styles.image} />
        </TouchableOpacity>
        <CustomModal
          visible={this.state.visible}
          onCancel={this.closeModal}
          imageUri={item.imageUri}
          title={item.title}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    margin: 5
  },
  image: {
    width: 150,
    height: 100,
    justifyContent: "center",
    flex: 1,
    alignItems: "center"
  },
  text: {
    justifyContent: "center",
    alignItems: "center"
  }
});
