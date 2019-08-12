<template>
	<div class="homePage">
		<!-- 头部部分 -->
		<div class="homebg">
			<!-- 背景图 -->
			<img src="/static/img/bg1.png" alt="" class="homeTitlebg">
			<img src="/static/img/titleName.png" alt="" class="homeText">
			<!-- 单位 -->
			<div class="unit">
				<span>指导单位：前海管理局</span>
				<span>主办单位：前海科创投控股有限公司</span>
				<span>承办单位：前海深港青年梦工厂、第一路演</span>
			</div>
		</div>
		<div class="homeBody">
			<div class="headlineleft" style="width:73.6%;">· 活动背景 ·</div>
			<div class="activityBg" style="margin-bottom:50px;">
				粤港澳大湾区建设是习近平总书记亲自谋划、亲自部署、亲自推动的国家战略，是新时代推动形成全面开放新格局的新尝试，是推动“一国两制”事业发展的新实践，也是前海新时期开发开放重大战略机遇。前海立足先天政策优势和厚积薄发之力，汇聚全球创新能量，建设“一带一路”国际路演中心，为全球科技创新企业提供资本及产业资源支持，搭建路演展示舞台，推动粤港澳大湾区建设。
			</div>
			<div class="headlineright" style="width:89.3%;">· 新一代信息技术专场路演介绍 ·</div>
			<div class="activityBg" style="margin-bottom:50px;clear:both;margin-bottom:55px;">
				新一代信息技术是国家“十二五”规划中明确重点扶持的战略新兴产业，也是粤港澳大湾区重点支持的支柱产业、优势产业，本次路演重点为国内及港澳地区5G、物联网、芯片、云计算等领域科技创新项目，由合作科研院所、高校、投资机构、产业资本联合推选，嘉宾评委团提前甄选，面向全球知名投资机构举行“一带一路”国际路演中心首场路演，并支持同步在线视频路演。
			</div>
			<div class="headlineleft" style="width:73.6%;">
				· 活动流程 ·
			</div>
			<!-- 时间轴 -->
			<div class="timeShaft">
				<ul>
					<li>
						<span>
							<i></i>
						</span>
						<span>9:00-9:30</span>
						<span>签到</span>
					</li>
					<li>
						<span>
							<i></i>
						</span>
						<span>9:30-9:35</span>
						<span>主持人开场，介绍贵宾</span>
					</li>
					<li>
						<span>
							<i></i>
						</span>
						<span>9:35-9:40</span>
						<span>领导致辞</span>
					</li>
					<li>
						<span>
							<i></i>
						</span>
						<span>9:40-9:45</span>
						<span>启动仪式</span>
					</li>
					<li>
						<span>
							<i></i>
						</span>
						<span>9:45-9:50</span>
						<span>嘉宾评委团签约仪式</span>
					</li>
					<li>
						<span>
							<i></i>
						</span>
						<span>9:50-11:30</span>
						<span>项目路演</span>
					</li>
					<li>
						<span>
							<i></i>
						</span>
						<span>11:30-11:50</span>
						<span>自由交流</span>
					</li>
				</ul>
			</div>
			<!-- 路演项目 -->
			<div class="headlineright" style="width:73.6%;margin-top:10px">
				· 路演项目 ·
			</div>
			<!-- 路演项目列表 -->
			<div class="roadProject">
				<ul>
					<li>视觉智能芯片研发商</li>
					<li>4G射频解决方案提供商</li>
					<li>半导体芯片研发商</li>
					<li>物联网通信芯片开发商</li>
					<li>计算机视觉技术解决方案提供商</li>
					<li>集成电路引线框架制造商</li>
					<li>全球领先的AI感知芯片设计商</li>
					<li>固态存储控制芯片研发商</li>
					<li>物联网及云计算的解决方案提供商</li>
				</ul>
			</div>
			<!-- 嘉宾评委团 -->
			<div class="headlineleft" style="width:73.6%;margin-top:52px">
				· 嘉宾评委团 ·
			</div>
			<div class="judge">
				<ul>
					<li class="judgeItem" v-for="(item,index) in people" :key="index">
						<!--头像 -->
						<div class="judgeImg">
							<div class="imgContain">
								<img :src="item.logo" alt="" />
							</div>
						</div>
						<!-- 姓名 -->
						<div class="judgeName">
							{{item.name}}
						</div>
						<!-- 公司名称 -->
						<div class="judgeCompany">
							{{item.company}}
						</div>
						<!-- 职位 -->
						<div class="judgePosition">
							{{item.position}}
						</div>
					</li>
				</ul>
				<div class="judgetext">嘉宾评委团 持续邀约中...</div>
			</div>
			<div class="headlineright" style="width:73.6%;margin-top:46px">· 系列路演日程 ·</div>
			<div class="series" style="clear:both">
				<div class="">

				</div>
			</div>
		</div>
	</div>
</template>

<script>
import people from './people.js';

export default {
	name: 'homePage', // 主页
	data () {
		return {
			people:people,
			msg: 'Welcome to Your homePage'
		}
	},
	methods:{
		change(){ // 中英文切换
			let locale = this.$i18n.locale;
			locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh'
		}
	},
	
}
</script>
<style lang="scss">
	.homePage{
		width:100%;
		height:auto;
		.homebg{
			width:100%;
			position:relative;
			.homeTitlebg{
				display:block;
				width:100%;
				height:auto;
			}
			.homeText{
				width:100%;
				height:auto;
				display:block;
				position:absolute;
				top:118px;
				z-index:1;
			}
			.unit{
				width:100%;
				position:absolute;
				left:0;
				bottom:164px;
				z-index:1;
				padding-left:26px;
				box-sizing: border-box;
				span{
					display:block;
					color:rgba(98,178,232,0.8);
					font-size:13px;
					line-height:22px;
				}
			}
		}
		.homeBody{
			width:100%;
			height:3070px;
			background:url('/static/img/bg2.png') no-repeat;
			background-size: cover;
			background-color:#01040D;
			position:relative;
			top:-85px;
			.timeShaft{
				width:100%;
				padding:37px 0 0 19px;
				box-sizing: border-box;
				ul{
					width:100%;
					li{
						position:relative;
						display:flex;
						width:100%;
						height:44px;
						box-sizing: border-box;
						span:nth-child(1){
							width:16px;
							height:16px;
							border:1px dashed rgba(65,179,243,1);
							border-radius: 50%;
							display:flex;
							align-items: center;
							justify-content: center;
							i{
								width:8px;
								height:8px;
								display:inline-block;
								border-radius: 50%;
								background:rgba(65,179,243,1);
							}
						}
						span:nth-child(2){
							width:74px;
							color:rgba(65,179,243,1);
							font-size:14px;
							margin-left:16px;
							display:inline-block;
							margin-top:2px;
						}
						span:nth-child(3){
							color:rgba(217,240,249,1);
							font-size:14px;
							margin-left:16px;
							display:inline-block;
						}
						&:after{
							content:'';
							display:block;
							position:absolute;
							border-left:1px dashed rgba(65,179,243,1);
							width:2px;
							height:22px;
							top: 21px;
    						left: 8px;
						}
						&:last-child{
							&:after{
								height:0px;
							}
						}
					}
				}
			}
			.roadProject{
				width:100%;
				padding:23px 16px 0 16px;
				box-sizing: border-box;
				clear: both;
				ul{
					width:100%;
					li{
						width:100%;
						padding:12px 0 12px 10px;
						box-sizing: border-box;
						background:rgba(59,150,210,0.15);
						margin-bottom:2px;
						color:rgba(98,178,232,1);
						font-size: 13px;
					}
				}
			}
			.judge{
				width:100%;
				height:auto;
				padding:24px 20px 0px 20px;
				box-sizing: border-box;
				ul{
					width:100%;
					display:flex;
					flex-warp:warp; /*CSS3样式，支持webkit，ms*/
					-ms-flex-wrap: wrap;/*IE9以及一下不支持*/
					-webkit-flex-wrap: wrap;
					li{
						width:25%;
						display:flex;
						flex-direction: column;
						align-items: center;
						margin-bottom:20px;
						.judgeImg{
							width:70px;
							height:70px;
							border:1px dashed rgba(65,179,243,1);
							border-radius: 50%;
							display: flex;
							align-items: center;
							justify-content: center;
							.imgContain{
								width:60px;
								height:60px;
								border-radius: 50%;
								background:rgba(65,179,243,1);
								display:flex;
								align-items: center;
								justify-content: center;
								img{
									width:100%;
									height:auto;
									display:block;
									border-radius: 50%;
								}
							}
						}
						.judgeName{
							font-size: 14px;
							font-weight:bold;
							color:rgba(65,179,243,1);
							margin-top:10px;
						}
						.judgeCompany{
							font-size:12px;
							color:rgba(255,255,255,0.6);
							margin-top:2px;
						}
						.judgePosition{
							font-size:12px;
							color:rgba(255,255,255,0.6);
							margin-top:2px;
						}
					}
				}
				.judgetext{
					width:100%;
					text-align: center;
					font-size:14px;
					color:rgba(98,178,232,1);
					margin-top:10px;
				}
			}
			.series{
				width:100%;
				padding:25px 16px 0 16px;
				box-sizing: border-box;
				height:20px;
				background:pink;
			}
		}
	}
</style>
