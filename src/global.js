import fetch from './util/fetch'
import {setSpText,scaleSize} from './util/pxFit'

(function () {
  global.ajax=fetch;
  global.setSpText=setSpText;
  global.scaleSize=scaleSize;
  //全局样式
  global.Color={
    color:"#F2F2F2",
  }
  global.FontSize={
    smallSize:setSpText(20)
  }
}())


