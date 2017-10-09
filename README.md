# sunshine-model
vue模板
Vue 移动端项目  

一、项目准备

1、拉取完项目后运行CMD

若nodejs无7.2.0版本或以上，请下载最新版登录网站https://nodejs.org/en/下载或直接复制https://nodejs.org/dist/v7.6.0/node-v7.6.0- x64.msi该地址到迅雷新建下载任务即可

若无安装淘宝镜像 http://npm.taobao.org/ 输入命令：npm install -g cnpm --registry = https://registry.npm.taobao.org 成功后如图 





2、进入项目所在目录
   例如D：\ www \ test \ vue-admin

3、输入cnpm安装
  cnpm install

4、修改配置文件
  打开.config.js修改url为当前域名配置


5、以开发模式运行项目
npm  run  dev

注意：
1、设置为ES6语法支持
2、设置VUE模板










二、开发规范

1.1层级缩进
使用制表符缩进
使用Javascript：
相同缩进可以清晰看到函数的范围
function doSomething(){
    var human = {
        sex : "male" ,
        name : "Alex",
        say : function(){
            alert("Hello!");
        }
    };
    human.say();
}

HTML：相同缩进可以清晰看到同级元素和父子元素
<body>
    <h1>这是一个标题</h1>
    <ul>
        <li>
            <p>这是列表项中的一个<span>文字段</span></p>
        </li>
</ul>
</body>

1.2代码命名规范
禁止使用拼音！
禁止使用拼音！
禁止使用拼音！
重要的事情说3遍
如有困难请使用---翻译
HTML命名
不建议是ID
建议使用类命名，除非很有必要，才用ID
类名 [样式中的]使用小写字母+横杠
Eg：<div i="good-list"></div>
属性元素使用小写字母+横杠
Eg	：<div data-id="12"></div>

JavaScript的命名
变量
使用下划线隔开每个命名的相关资料，尽量使用名词。

函数名
使用驼峰式命名，尽量以动词开头，可参照动词约定：
动词	约定
能够	函数返回布尔值，true：能 - 假：不能
具有	函数返回布尔值，true：有 - false：没有
是	函数返回布尔值，true：是 - false：否
得到	函数返回非布尔值
组	函数无返回值或返回布尔值，true：设置成功 - false：设置失败

1.3文件命名规范

框架中文件目录结构及文件命名
文件夹命名使用小写字母+下划线的命名方式
文件命名使用驼峰写法，
首字母必须大写！
首字母必须大写！
首字母必须大写！
重要的事情说3遍






三、引用文件

1、引用样式
@import加上文件路经（相对路径）
例：@import“../assets/sass/common/tool ”;

引用JS
进口加上文件路经（相对路径）
1）import“../static/ueditor/ueditor.all.js ” 
2）从“../lib/” 导入md5 MD5' ;

2、引用组件
import加上文件路经（相对路径）
例：import baseTable from '../../../components/Table.vue'







四、存放

1、样式目录
src /assets /sass/
注：sass中module放组件样式
    common有写入的公共样式(base)---前端应该看得懂

tool.scss中

此处为 设计稿宽度/10。

2、图片目录
src /assets / images
如若画页面是请在images中新建test文件夹存放临时图片，
数据绑定结束后请自行删除
3、icon目录
static/font

4、插件目录
static

五、路由

自动生成路由
在page中添加vue文件，运行一下命令则会自动在route/base.js中生成对应页面的路由

npm  run  route

动态路由
src/routes/dynamic.js （在这里你可以自己写路由）
当你要手写路由时，按规则：对应的vue文件路径。 最后对应的vue文件以小写开头。 例：
'admin/add': resolve => require(['../page/admin/Add.vue'], resolve)

示例路由
      src/routes/example.js 

不懂问百度
不懂问百度
不懂问百度

六、sunshine-package用法解释
1、Alert（不能更改样式的哦）
1）info
用法：tools.alert.info("我是info")
效果：

2）message
用法：tools.alert.message("我是message")
效果：

3）success
用法：tools.alert.success("我是success")
效果：

4）Error
用法：tools.alert.error("我是error")
效果：



5）Confirm
用法：

效果：


6）Prompt
用法：（抱歉我没用过）
效果：

7）Loading
用法：tools.alert.loading(‘’ || ‘加载中’)
效果:
 					
8）closeLoading

用法：tools.alert.closeLoading()
作用：
关闭Loading



2、Tools


1）Ajax
用法：

注：请求方式必须大写

2）trim
用法：tools.trim.(******)
作用：修剪空字符
3）date（变换时间）
  用法：tools.date('Y-m-d H:i:s',时间戳);

可变化格式

4）now
用法：tools.now()
作用：返回当前时间
5）isEmpty
用法：tools.isEmpty(判断内容)
作用：判断是否为空--返回布尔
6）localCache
用法：tools.localCache.get(‘name’)
作用：本地localStorage取
用法：tools.localCache.del(‘name’)
作用：本地localStorage删
用法：tools.localCache.set(‘name‘,‘val’)
作用：本地localStorage存

7）sessionCache
用法：tools.sessionStorage.get(‘name’)
作用：本地sessionStorage取
用法：tools.sessionStorage.del(‘name’)
作用：本地sessionStorage删
用法：toolssessionStorage.set(‘name‘,‘val’)
作用：本地sessionStorage存

8）priceFormat
用法：tools.priceFormat(val)
作用：将分换成含有两位小数的元
9）toast
用法：tools.toast(val)
作用：红色背景提示语

3、Verify

1）Test
用法：verify.test.reg(判断条件，判断内容)
作用：返回布尔
2）mobile
用法：verify.test.mobile(手机号码)
作用：返回布尔
3）email
用法：verify.test.email(邮箱)
作用：返回布尔
4）idCart
用法：verify.test.idCart(身份证号码)
作用：返回布尔
七、目录结构
文件/目录	说明
auto	这里存放自动编译路由得到js，需要命令运行的可以存放在此目录。
build	这里存放webpack的配置，基本配置、开发环境配置、生产环境配置等
config	配置目录，路径端口值等的配置，其中index.js可修改路径端口值
node_modules	这个目录是存放我们项目开发依赖的一些模块，这里面有很多很多内容，不过高兴的是，我们也不用管。
src	我们的开发目录，基本上绝大多数工作都是在这里开展的。里面的目录解析请看下表。
static	资源目录，我们可以把一些图片啊，字体啊，第三方插件啊，放在这里。
index.html	文件入口
.config.js	请求接口域名配置文件。
package.json	项目配置文件。





src中
文件/目录	说明
assets	这里存放样式和图片，此目录会被压缩
common	这里存放一下全局模块
components	组件存放位置
example	这里存放一些示例
lib	这里可以存放一些插件或者自己封装得函数
page	所有页面存放目录
routes	路由存放目录
App.vue	主组件，所有页面都是在App.vue下进行切换的。其实你也可以理解为所有的路由也是App.vue的子组件。
error_handle.js	全局错误拦截，主要作用是接口ajax请求错误全局处理
main.js	入口文件，主要作用是初始化vue实例并使用需要的插件




注意事项

1、当你input使用checkbox的时候，若你使用true or false,点击时v-model已经改变值，需要用@change来监听
<input type="checkbox" class="my-checkbox" v-model="is_select" 
@change="select">

2、当你使用定时器setInterval时，或与生命周期没有直接关系时，你需要在vue示例销毁后（destroyed）手动关闭你的方法。

3、由于页面跳转后样式残留，vue 文件html部分用div起个i类名包裹,样式以i类名包裹，避免样式冲突影响其它页面，例如：
  <div i="xxx">
    <div class="bb"></div>
  </div>
  <style rel="stylesheet/scss" lang="scss">
      /* body{}  严禁在此写影响到全局的样式 */
      [i="xxx"]{
        .bb{
        }
      }
  </style>

4、手机端权限控制，需要配合LoginStatus:
   LoginStatus.check({
             type: 'wechatOauth',              // wechatOauth验证
             redirectUrl: '/api/wechat/auth',  //验证不通过跳转的地址
             url: to.path,                     //需要验证的地址（不带参数）
             callbackUrl: to.fullPath          //授权返回的地址（带参数）
         }, next);

     }else {
         LoginStatus.check({
             type: 'login',                    // login 不验证
             redirectUrl: '/login',            //验证不通过跳转的地址
             url: to.path,                     //需要验证的地址（不带参数）
             callbackUrl: to.fullPath          //授权返回的地址（带参数）
         }, next);
     }



各位大佬，本人能力有限，若有不足，敬请指正。

以上文档最终解释权归Sunshine所有
