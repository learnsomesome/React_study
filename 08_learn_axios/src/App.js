import React, { PureComponent } from "react";

// import axios from "axios";
import request from "./service/request";

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      product: []
    }
  }

  async componentDidMount() {
    // 1.真实开发逻辑：发起网络请求 -> 更新数据 -> 拿到最新数据
    /* this.setState({
      product: [...this.state.product, ...res]
    }) */

    // 2.axios 发送基本网络请求
    /* axios({
      url: "https://httpbin.org/get",
      params: {
        name: "curry",
        age: 18
      }
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.error(err);
    });

    axios({
      url: "https://httpbin.org/post",
      data: {
        name: "stephen",
        age: 100
      },
      method: "post"
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.error(err);
    }); */

    // 3.axios 发送 get/post 请求
    /* axios.get("https://httpbin.org/get", {
      params: {
        name: "lilei",
        age: 40
      }
    }).then(console.log); */

    // 4.axios 的本质都是调用 axios.request()
    
    // 5.async await(通过try catch获取错误信息)
    /* try {
      const postRes = await axios.post("https://httpbin.org/post", {
        name: "hanmeimei",
        age: 22
      });

      console.log(postRes);
    } catch (error) {
      console.error(error);
    } */

    // 6.axios.all
    /* const request1 = axios.get("https://httpbin.org/get", {
      params: {
        name: "lilei",
        age: 40
      }
    });
    const request2 = axios.post("https://httpbin.org/post", {
      name: "mike",
      age: 50
    });
    
    axios.all([request1, request2]).then(([res1, res2]) => {
      console.log(res1, res2);
    }).catch(err => {
      console.error(err);
    }); */

    // 7.实例创建
    /* const instance = axios.create({
      baseURL: "",
      timeout: 5000
    }) */

    // 8.拦截器
    // 请求拦截
    /* axios.interceptors.request.use(config => {
      // 1.发送网络请求时，在界面的中间显示Loading组件
      // 2.某一些请求要求用户必须携带token，如果没有携带，直接跳转至登录页面
      // 3.params/data序列化操作
      return config;
    }, err => {
      return err;
    })
    // 响应拦截
    axios.interceptors.response.use(res => {
      return res.data;
    }, err => {
      if (err && err.response) {
        switch (err.response.status) {
          case 400:
            console.log("请求错误");
            break;
        
          case 401:
            console.log("未授权访问");
            break;

          default:
            console.log("其他错误信息");
        }
      }
      return err;
    }) */

    /* axios.get("https://httpbin.org/get", {
      params: {
        name: "lilei",
        age: 40
      }
    }).then(console.log); */

    request({
      url: "/get",
      params: { name: "test" }
    }).then(console.log);
  }

  render() {
    return (
      <div>
        App
      </div>
    )
  }
}
