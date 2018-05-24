import React, { Component } from 'react';
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
import img from '../../assets/img/icon.png'
import seach from  '../../assets/img/seach.png'
const list=[{
      icon:img,
      title:"系统消息",
      content:"消息通知设置",
},
  {
    icon:img,
    title:"公文",
    content:"消息通知设置",
  },
  {
    icon:img,
    title:"审批",
    content:"和我有关的审批通知",
  }

]

export default class News extends Component {

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={{position:"relative"}}>
          <Image source={seach}  style={{position:"absolute",left:scaleSize(64),top:scaleSize(32),zIndex:scaleSize(99),height:scaleSize(32),width:scaleSize(32)}} />
        <TextInput
          style={{height:scaleSize(64),borderWidth:0,backgroundColor:"#fff",padding:0,paddingLeft:scaleSize(64),marginTop:scaleSize(16),marginBottom:scaleSize(16),margin:scaleSize(32)}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text} placeholder={"搜索"}  underlineColorAndroid='transparent'
        />
        </View>

        <FlatList
          data={list}
          renderItem={({item,index}) =><TouchableOpacity  style={styles.List}   onPress={() => {
            this.props.navigation.navigate('Detail', {headerTitle: item.title})}}>
            <Image source={item.icon} />
              <View  style={[styles.listRight,index==list.length-1?null:styles.bottomBorder]}>
                <Text style={styles.listRightTitle}>{item.title}</Text>
                <Text>{item.content}</Text>
              </View>
          </TouchableOpacity >}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.color,
  },
  bottomBorder:{
    borderBottomWidth:1,
    borderBottomColor:"#ccc",
  },
  List:{
    justifyContent:"flex-start",
    backgroundColor:'#fff',
    flexDirection:"row",
    padding:scaleSize(20)

  },
  listRight:{
    paddingLeft:scaleSize(20),
    justifyContent:"center",
    flex:1
  },
  listRightTitle:{
    color:"#333",
    fontSize:setSpText(16)
  }
});
