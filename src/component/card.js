import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  TouchableOpacity
} from 'react-native';
import {scaleSize} from "../util/pxFit";
export default class Card extends Component {

  render(){
    return <View  style={styles.main} >

      <Text  style={styles.title} >{this.props.title}</Text>
      <View style={styles.centen}>
        {this.props.children}
      </View>
      <View style={styles.bottom}>
        <Text>查看详情</Text>
      </View>

    </View>

  }

}
const styles= StyleSheet.create({

  main:{
      backgroundColor:"#fff"
  },
  title:{
    padding:scaleSize(32),
    paddingBottom:scaleSize(24),
    fontSize:scaleSize(32),
    color:'#333'
  },
  centen:{
    padding:scaleSize(32),
    paddingTop:scaleSize(0),
    fontSize:scaleSize(28),
    color:'#999' ,
  },
  bottom:{
    padding:scaleSize(32),
    borderTopWidth:1,
    borderTopColor:'#999',
    color:'#333'
  }

})
