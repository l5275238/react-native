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


export default (Tap,obj)=>{
  class Common extends Component {

    // 此处设置 Tab 的名称和一些样式，这里的会覆盖掉配置路由文件的样式，下面会讲
    static navigationOptions =  ({navigation}) => {


     return {

        headerTitle:navigation.state.params&&navigation.state.params.headerTitle?navigation.state.params.headerTitle:obj.headerTitle,
          tabBarLabel: obj.tabBarLabel,
        headerLeft:({ })=>{
        return !obj.Left?<View><Text style={{paddingLeft: 14, color: '#000', fontSize: 18}} onPress={()=>{navigation.pop();}}>返回</Text></View>:null

      },
        headerTitleStyle:{
        fontSize:18,
          fontWeight:'400',
          alignSelf:'center'
      },
        headerStyle: {height: 65, backgroundColor: 'red'},
        headerRight:obj.Right?<View><Text style={{paddingRight: 14, color: '#000', fontSize: 18}} onPress={()=>{this.go()}}>编辑</Text></View>:null,
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
      }

    }


    ;
    render() {

      const { navigate } = this.props.navigation;
      return (
        <View style={styles.container}>
            <Tap navigation={ this.props.navigation}></Tap>
        </View>
      );
    }
  }
  return Common


}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.color,
  },
});




