import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity
} from 'react-native';


export default (Tap,obj)=>{
  class Common extends Component {

    // 此处设置 Tab 的名称和一些样式，这里的会覆盖掉配置路由文件的样式，下面会讲
    static navigationOptions = {
      headerTitle: obj.headerTitle,
      tabBarLabel: obj.tabBarLabel,
      tabBarIcon:({tintColor,focused}) => (
        focused
          ?
          <Image
            source={obj.selectImg}
            style={{height: 20, width: 20}}
          />
          :
          <Image
            source={obj.Img}
            style={{height: 20, width: 20}}

          />
      ),
    };
    render() {

      const { navigate } = this.props.navigation;
      return (
            <Tap navigation={ this.props.navigation}></Tap>
      );
    }
  }
  return Common


}



