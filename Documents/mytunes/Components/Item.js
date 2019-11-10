import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import CustomModal from './CustomModal';
//import console = require('console');

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

export default class Item extends Component{
  constructor () {
    super();
    this.state = { visible: false };
   // this.onPressHandler = Throttle(this.onPressHandler.bind(this),1000,{leading:true,trailing:false})
  }

  onPressHandler = () => {
   // console.log("touchableopacity called")
    this.setState({visible:true});
  };


  closeModal = () => {
    this.setState({visible:false});
  };
  
  render(){
    let { item } = this.props;
    return(
      <View style={styles.container}>
    <TouchableOpacity style={{flex:1}} onPress={this.onPressHandler}>
      <Image
      source={{ uri: item.imageUri }}
      style={styles.image}
    />
    </TouchableOpacity>
    <CustomModal
    visible={this.state.visible}
    onCancel={this.closeModal}
    imageUri={item.imageUri}
    title={item.title}

  />
    
   { /*<Text style={styles.text}>{title}</Text>*/}
  </View>
    )
}
};