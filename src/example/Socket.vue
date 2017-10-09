<template>
    <div>
        <p>123</p>
    </div>
</template>
<style>

</style>
<script>
    import { socket } from 'sunshine-intimate-package';

    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{

        },
        mounted(){
            //连接socket
            socket.connect({
                path : config.api.websocket,
                message : function(event, getData){

                    //登录成功后,进入房间
                    if(getData.content.type == 'login_success'){
                        socket.send('enter_the_room',{data:31})
                    }



                },
                close : function(){

                },
                error : function(){

                },
                onopen : function(){

                },
                loginApi : '/api/websocket/get_token',
                loginType :'player_login'
            });
        }
    }
</script>
