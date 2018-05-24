import React, { Component } from 'react';
import Card from '../../component/card'
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  FlatList,
  TextInput
} from 'react-native';
const list=[
  {
    title:"版本更新提示",
    centen:"当前已是版本最新",
    time:"2017/10/20 13:28"
  },
  {
    title:"消息通知设置",
    centen:"如果您收不到小心推送",
    time:"2017/10/20 13:28"
  },

]

export default  class newsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render(){
    const { navigate } = this.props.navigation;
    console.log(this.props.navigation.state);
    return (
      <View>

        <FlatList
          data={list}
          renderItem={({item,index}) =>
            <View style={styles.item}>
              <View style={{justifyContent:"center",flexDirection:"row",paddingBottom:scaleSize(24)}}>
              <Text style={{backgroundColor:"#d3d0d4",padding:2,}}>{item.time}</Text>
              </View>
            <Card title={item.title}>

            <Text>{item.centen}</Text>
          </Card>
            </View>
              }
        />
      </View>
    )
  }
}
const styles= StyleSheet.create({

  item:{
    padding:scaleSize(32),
    paddingBottom:0,
    // justifyContent:"center"
  }
})
