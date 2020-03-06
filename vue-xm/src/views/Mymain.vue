<template>
	<div class="con">
		<h2>首页</h2>
		<!-- 首页轮播图 -->
		<div class="swiper-container">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide" v-for="(item,index) in swiperArr" :key="index">
		            <img :src="item.adlist_img" :alt="item.adtitle" />
		        </div>
		    </div>
			<!-- 如果需要分页器 -->
			<div class="swiper-pagination"></div>
			
			<!-- 如果需要导航按钮 -->
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>
		</div>
		<!-- 精选 -->
		<div class="jingxuanCon">
			<h2>为您精选</h2>
			<ul>
				<li v-for="(item,index) in jingxuanArr" :key="index">
					<div><img :src="item.pro_img[0].url" :alt="item.pro_name" /></div>
					<div>{{item.pro_name}}</div>
					<div>{{item.pro_Joiner}}</div>
				</li>
			</ul>
		</div>
		
		<div class="top5Con">
			<h2>本周最受欢迎TOP5</h2>
			<ul class="top5list">
				<li v-for="(item,index) in top5Arr" :key="index">
					<router-link :to="'/item/'+item.pro_id">
						<div class="top5_img"><img :src="item.pro_img[0].url" /></div>
						<div class="top5_text">
							<div>{{item.pro_name}}</div>
							<div>{{item.pro_Joiner}}人已参加</div>
						</div>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	//引入axios
	import axios from 'axios';
	//引入swiper
	import swiper from 'swiper';
	//引入swiper的css
	import 'swiper/dist/css/swiper.css';
	export default {
		name: 'Mymain',
		data: function() {
			return {
				top5Arr: [],
				swiperArr:[],
				jingxuanArr:[]
			}
		},
		//挂载的函数
		mounted: function() {
			//获取数据
			axios.post("https://www.jvhv.com/siteindex.php/Index/Index.html").then((res) => {
				console.log(res);
				this.top5Arr = res.data.data.CourseTop5;
				this.swiperArr = res.data.data.top_ad.list;
				this.jingxuanArr = res.data.data.CourseforYou;
			})
			//轮播图的初始化操作
			var mySwiper = new Swiper ('.swiper-container',{
				direction:'horizontal',
			    loop:true,
			    autoplay:1000,
			    speed:1000,
			    observer:true,
			    observeParents:true,
			    // 如果需要分页器
			        pagination: {
			          el: '.swiper-pagination',
			        },
			        
			        // 如果需要前进后退按钮
			        navigation: {
			          nextEl: '.swiper-button-next',
			          prevEl: '.swiper-button-prev',
			        },
			})
		}
	}
</script>
<!--lang="scss" 以下使用的是 scss语法
scoped="scoped" 该样式只在本页面起作用
-->
<style lang="scss" scoped="scoped">
	.top5Con {
		width: 90%;
		height: 400px;
		background: #004b9e;
		border-radius: 10px;
		margin: auto;
		margin-top: 20px;
		margin-bottom: 50px;
	}

	.top5Con h2 {
		color: #fff;
		padding: 20px;
	}

	.top5list {
		background: #fff;
		margin: 10px;
		height: 300px;
		border-radius: 10px;
	}

	.top5list li a {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		height: 60px;
		padding: 6px;
		border-bottom: 1px solid #ddd;
	}

	.top5list li a .top5_img {
		width: 30%;
	}

	.top5list li a .top5_img img {
		width: 80%;
		height: 50px;
	}

	.top5list li a .top5_text {
		width: 70%;
	}
	.swiper-container{
		height: 170px;
		.swiper-wrapper{
			.swiper-slide{
				img{width: 100%;height: 170px;}
			}
		}
	}
	
	.jingxuanCon{
		width: 100%;
		ul{
			width: 100%;
			display: flex;flex-wrap: wrap;flex-direction: row;justify-content: space-around;
		}
		li{
			width: 40%;
			height: 160px;
			div{
				img{
					width: 100%;
					height: 110px;
					border-radius: 5px;
				}
			}
		}
	}
</style>
