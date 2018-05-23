import React from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';
import config from './config'
import commenTab from '../component/common'
import organization from "../page/organization/organization";
import woke from "../page/woke/woke";
import my from "../page/my/my";
import news from "../page/new/news";

const Tabs = TabNavigator({
  New:{
    screen:commenTab(news,{
      eaderTitle: '消息',
      tabBarLabel: '消息',
      Img:require('../assets/img/news.png'),
      selectImg:require('../assets/img/news.png'),
    }),
  },
  Woke:{
    screen:commenTab(woke,{
      headerTitle: '工作',
      tabBarLabel: '工作',
      Img:require('../assets/img/woke.png'),
      selectImg:require('../assets/img/woke.png'),
    })
  },
  Organization:{
    screen:commenTab(organization,{
      headerTitle: '组织',
      tabBarLabel: '组织',
      Img:require('../assets/img/organization.png'),
      selectImg:require('../assets/img/organization.png'),
    })
  },
  My:{
    screen:commenTab(my,{
      headerTitle: '我的',
      tabBarLabel: '我的',
      Img:require('../assets/img/my.png'),
      selectImg:require('../assets/img/my.png'),
    })
  }


},config );
export  default  Tabs
