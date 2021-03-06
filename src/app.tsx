/*
 * @Author: donghua.wei
 * @Date: 2020-10-17 14:02:41
 * @Description:
 */
import { Component } from "react";
import "./app.scss";
import "src/assets/styles/common.scss";
import "src/assets/iconfont/iconfont.css";
import 'animate.css'

import { getSystemInfo } from "./helper/systemInfo";
import wxp from "./helper/promisify";

import "./helper/permission";
import { View } from "@tarojs/components";
import { RubickStorage } from "./components/rubick";
import React from "react";

class App extends Component {
  componentDidMount = async () => {
    await getSystemInfo();

    const { data: openidCache } = await wxp
      .getStorage({ key: "openid" })
      .catch((err) => {
        console.info("无登录记录...");
        return { data: null };
      });
    if (!openidCache) {
    }
  };

  componentWillUnmount = () => {};

  componentDidHide() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return <View>
      <RubickStorage></RubickStorage>
      {this.props.children}
    </View>;
  }
}

export default App;
