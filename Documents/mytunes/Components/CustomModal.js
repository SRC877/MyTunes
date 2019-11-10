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
        hardwareAccelerated
        visible={this.props.visible}
        onRequestClose={this.props.onCancel}
      >
        <View style={styles.bOverlay}>
          <Image
            source={{ uri: this.props.imageUri }}
            style={styles.backgroundImage}
          />
          <Text style={styles.titleText}>{this.props.title}</Text>
          <TouchableHighlight onPress={this.props.onCancel}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableHighlight>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  bOverlay: {
    flex: 1,
    flexDirection: "column"
    // backgroundColor:'red',
  },
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
    flex: 1,
    marginHorizontal: 30,
    marginBottom: 100,
    marginTop: 20,
    resizeMode: "contain"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "orange",
    marginBottom: 40
  },
  closeText: {
    fontSize: 15,
    marginBottom: 20,
    textAlign: "center",
    color: "grey"
  }
});

CustomModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired
};
