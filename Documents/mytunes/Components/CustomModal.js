import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  StyleSheet,
  Modal,
  Text,
  TouchableHighlight,
  View,
  Image
} from "react-native";

export default class CustomModal extends Component {
  render() {
    return (
      <Modal
        animationType={"none"}
        transparent
        hardwareAccelerated
        visible={this.props.visible}
        onRequestClose={this.props.onCancel}
      >
        <View style={styles.backgroundOverlay}>
          <Text style={{ color: "black" }}>{this.props.title}</Text>
          <Image
            source={{ uri: this.props.imageUri }}
            style={styles.backgroundImage}
          />
          <TouchableHighlight onPress={this.props.onCancel}>
            <Text style={{ color: "black" }}>Close</Text>
          </TouchableHighlight>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  backgroundOverlay: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: 300,
    width: 250,
    marginTop: 180,
    marginRight: 50,
    marginLeft: 50,
    borderRadius: 10,
    elevation: 20
  },
  backgroundImage: {
    justifyContent: "center",
    alignItems: "center",
    height: 260,
    width: 240,
    resizeMode: "cover",
    borderRadius: 10
  }
});

CustomModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired
};
