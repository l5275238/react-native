import React, { Component } from 'react';
import common from '../../component/common'
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity
} from 'react-native';
  export default  class My extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text onPress={()=>navigate('DetailsPage',{ title: '详情页',des:'回到上一页' })}>我是我的</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
