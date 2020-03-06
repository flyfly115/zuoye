<template>
  <div id="app">
	  <!-- 路由出口 -->
	  <router-view></router-view>
    <div id="nav">
		<!--相当于a标签的路由信息-->
      <router-link to="/">
		  <img src="https://www.jvhv.com/wap/static/images/footer_1_red.png" />
		  <div>首页</div>
	  </router-link>
      <router-link to="/myfind">
		  <img src="https://www.jvhv.com/wap/static/images/footer_6_red.png" />
		  <div>发现</div>
	  </router-link>
	  <router-link to="/mymessage">
	  	  <img src="https://www.jvhv.com/wap/static/images/footer_8_red.png" />
	  	  <div>消息</div>
	  	  </router-link>
	  <router-link to="/myme">
	  	  <img src="https://www.jvhv.com/wap/static/images/footer_5_red.png" />
	  	  <div>我的</div>	  
	  </router-link>
    </div>  
  </div>
</template>

<style lang="scss">
ul,li{list-style: none;}
a{text-decoration: none;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
   background: #fff;
   font-size: 12px;
   position: fixed;
   bottom: 0px;
   right: 0px;
   left: 0px;
   height: 50px;
   // line-height: 50px;
   border-top: 1px solid #ccc;
   display: flex;
   flex-wrap: nowrap;
   justify-content: space-around;
   a{
	   color:#000;
	   img{width: 27px;height: 27px;}
	   div{height: 23px;}
   }
   a:hover{color:#000;text-decoration: none;}
}
</style>
