export default {
  getCookie: function(name){
    var arr = document.cookie.split('; ');
    var i = 0;
    for(i = 0;i < arr.length;i++){
      var arr2 = arr[i].split('=');
      if(arr2[1] !== "" && arr2[0] === name){
        return decodeURIComponent(arr2[1]);
      }
    }
  },
  setCookie :function(name,value,iDay){
      var oDate = new Date();
      oDate.setDate(oDate.getDate()+iDay);
      document.cookie = name+'='+encodeURIComponent(value)+';expires='+oDate+';path=/'
  },
}
