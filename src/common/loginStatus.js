/* 登录状态 */
export default {

    /*验证是否登录*/
    /**
     * 在main.js中使用
     *
     router.beforeEach((to, from, next) = > {
            LoginStatus.check({
                type: 'wechatOauth',
                redirectUrl: '/api/wechat/auth'
            }, next);
        })
     * */
    check: function (option,next) {
        var that = this;
        var option = option || {};

        var data = {
            type: option.type || 'wechatOauth',  // wechatOauth:微信授权; login:普通登录
            isRedirect: option.isRedirect || 1,    //1 or 0
            redirectUrl: option.redirectUrl || '/login'
        };

        //没有签名
      console.log(tools.isEmpty(tools.localCache.get('Authorization')));
        if (tools.isEmpty(tools.localCache.get('Authorization')) && window.canauthinit == 1) {
            //that.getSign(option,next);
          next()
        }
        else if (!tools.isEmpty(tools.cache.get('Authorization'))){

            //判断是否已登录(没登录或初次)
            if (tools.localCache.get('isLogin') == 0 || tools.localCache.get('isLogin') == undefined ) {
                if (data.isRedirect === 1 && location.pathname != '/login' && data.type == 'login') {
                    var url = location.pathname + location.search;
                    next();
                    //tools.router.replace({path: data.redirectUrl, query: {callback: encodeURIComponent(url)}});
                }
                else if (data.type == 'wechatOauth') {
                  //var callback = location.origin + option.url + location.search;
                  //var callback = 'http://zhiyang.han-zi.cn' + option.url + location.search;
                  var callback = location.origin + option.url + location.search;
                  var url = window.config.api.url + data.redirectUrl +
                      '?callback=' + (encodeURIComponent(callback)) +
                      '&token=' + (tools.localCache.get('Authorization'));

                     // var url = window.config.api.url + data.redirectUrl +
                     //  '?callback=' + (encodeURIComponent(callback)) +
                     //    '&token=' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXNzaW9uX2tleSI6IjE4NjVhM2QyLTcxZGItMjA4NC1hOGM5LTUwOWY3MTQ5OWMwYiJ9.adKVbKF0FHPY70aVuJTh_flVJ6TZ4sGKtX_rLNrw7JM';

                    if(!tools.isEmpty(tools.url.params('testuser'))){
                        url += '&testuser='+tools.url.params('testuser');
                    }

                    tools.cache.set('isLogin',1);
                    window.location.href = url;
                }
                else if(location.pathname == '/login'){
                    if(typeof next == 'function'){
                        next();
                    }
                }

                return false
            }
            //授权中
            else if(tools.localCache.get('isLogin') == 2){
                //请求是否登录
                that.isLogin('/api/users',option,next);
            }
            //通过
            else{
                if(typeof next == 'function'){
                    next();
                }
            }
        }
    },

    /* 获取签名 */
    getSign: function (option,next) {
        var that = this;
        log.debug('开始获取签名');

        window.canauthinit = 0;

        tools.ajax({
            url: '/api/init',
            ajaxData: {},
            successFun: function (response) {
                log.debug('获取到签名:', response);
                tools.localCache.set('Authorization', response.token);
                //重新check
                that.check(option,next);
                window.canauthinit = 1;
            },
            errorFun: function (error) {
                log.error('获取签名失败');
                window.canauthinit = 1;
            },
            type: 'GET'
        });
    },

    /* 获取是否登录 */
    isLogin: function (url,option,next) {
        var that = this;
        log.debug('获取是否登录');

        tools.ajax({
            url: url,
            ajaxData: {},
            successFun: function (response) {
                tools.cache.set('isLogin',1);
                //重新check
                that.check(option,next);
            },
            errorFun: function (error) {
                log.error('登录失败!');
                tools.alert.error('登录失败!');
                tools.localCache.set('isLogin',0);
                //重新check
                that.check(option,next);
            },
            type: 'GET'
        });
    }
}
