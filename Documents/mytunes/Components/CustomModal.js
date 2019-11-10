import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Modal,
  Text,
  Platform,
  TouchableHighlight,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';

const {height, width} = Dimensions.get('window');

// TODO: Don't rely on Dimensions for the actions footer layout
// TODO: Support custom actions
// TODO: Stacked full-width buttons

export default class CustomModal extends Component {

  render() {
    return (
      <Modal
        //style={{backgroundColor: 'blue'}}
        animationType={'none'}
        transparent
        hardwareAccelerated
        visible={this.props.visible}
        onRequestClose={this.props.onCancel}>
        
          <View style={styles.backgroundOverlay}>
          <Text style={{color:'black'}}>{this.props.title}</Text>
          <Image source={{uri:this.props.imageUri}} style={styles.backgroundImage} />
            <TouchableHighlight onPress={this.props.onCancel} >
                <Text style={{color:'black'}}>Close</Text>
            </TouchableHighlight>
          </View>
        
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  backgroundOverlay: {
   // flex: 1,
  //  flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height:300,
    width:250,
    marginTop:180,
    marginRight:50,
    marginLeft:50,
    borderRadius: 10,
    elevation:20
  },
  modalContainer: {
    marginHorizontal: 16,
    marginVertical: 106,
    paddingTop: 24,
    minWidth: 280,
    elevation: 24,
    overflow: 'hidden',
  },
  backgroundImage: {
   // flex: 1,
   justifyContent:'center',
   alignItems:'center',
   height:260,
    width:240,
    resizeMode: 'cover',
    borderRadius: 10,
  }
});

CustomModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
}

CustomModal.defaultProps = {
  okLabel: 'OK',
  cancelLabel: 'CANCEL',
 // titleColor: colors.androidPrimaryTextColor,
  backgroundColor: 'white',
//  colorAccent: colors.androidColorAccent,
  scrolled: false,
  customContainer:false
};