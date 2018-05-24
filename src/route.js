import React from 'react';
import NewDetail from './page/newsDetai/newsDetai'
import {StackNavigator, TabNavigator} from 'react-navigation';

import Tabs from './tab/home'
import commenTab from "./component/common";

export default StackNavigator({
    Main: {
      screen: Tabs
    },
    Detail: { // 详情页
      screen :commenTab(NewDetail,{
  headerTitle: '系统消息',
  tabBarLabel: '消息',
}),


    },
  },
  {
    headerMode: 'screen',  // 标题导航
    initialRouteName: 'Main', // 默认先加载的页面组件
    mode: 'modal'       // 定义跳转风格(card、modal)
  });
