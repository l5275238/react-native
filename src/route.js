import React from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';

import Tabs from './tab/home'

export default StackNavigator({
    Main: {
      screen: Tabs
    },
    // DetailsPage: { // 详情页
    //   screen: DetailsPage
    // },
  },
  {
    headerMode: 'screen',  // 标题导航
    initialRouteName: 'Main', // 默认先加载的页面组件
    mode: 'modal'       // 定义跳转风格(card、modal)
  });
