import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Config from '../.config.js';
import LoginStatus from './common/loginStatus';
import jquery from 'jquery';

//加载错误操作设置
import ErrorData from './error_handle.js';


//加载本地路由
import BaseRoute from './routes/base';
import DynamicRoute from './routes/dynamic';
import SystemRoute from './routes/system';
import ExampleRoute from './routes/example';


//cookie时间
import cookie from './cookie';


//加载汉子package
import {Tools,Route,Log,Alert} from 'sunshine-intimate-package';
console.log(Tools);
console.log(Tools.isEmpty());
console.log(Route);

//弹出框类
import { MessageBox, Toast, Indicator } from 'mint-ui';

var messageBox = MessageBox;
var toast = Toast;
var indicator = Indicator;
Alert.ui.messageBox = messageBox;
Alert.ui.toast = toast;
Alert.ui.indicator = indicator;

import Promise from 'bluebird';

import './assets/sass/common/base.scss';

var tools = Tools;
var log = Log;
var alert = Alert;
var loginStatus = LoginStatus;

//定义错误操作数组
tools.errorData = ErrorData.data;
tools.loginStatus = loginStatus;

//初始化路由
Route.data.baseRoute = BaseRoute;
Route.data.dynamicRoute = DynamicRoute;
Route.data.systemRoute = SystemRoute;
Route.data.exampleRoute = ExampleRoute;

var app = window;

Tools.vue = Vue;
Tools.alert = alert;

app.tools = tools;
app.config = Config;
app.log = log;
app.Promise = Promise;
app.$ = jquery;

Vue.use(VueRouter);
/* 定义路由 */
const routes = Route.routes();

const router = new VueRouter({
    mode: 'history',
    routes
});

/* 初次打开,检查权限 */
// router.beforeEach((to, from, next) => {
//   LoginStatus.check({
//     type: 'wechatOauth',  // login
//     redirectUrl: '/api/wechat/auth',
//     url: to.path,
//   }, next);
// });
/* 初次打开,检查权限 */
router.beforeEach((to, from, next) => {
  LoginStatus.check({
    type: 'login',  // wechatOauth
    redirectUrl: '/api/wechat/auth',
    url: to.path,
  }, next);
});

/* 定义路由示例 */
app.tools.router = router;

/* 定义路由数组 */
app.tools.routes = routes;

//定义是否可以初始化签名
app.canauthinit = 1;

tools.cookie = cookie;



//中转站
window.HubBus = new tools.vue();

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    components: {App},
    router
});
