<template>
	<div class="homePage">
		<!-- 头部部分 -->
		<div class="homebg">
			<!-- 背景图 -->
			<img src="./img/bg1.png" alt="" class="homeTitlebg">
			<img src="./img/titleName.png" alt="" class="homeText">
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
				<div class="tableheader">
					<div>
						序号
					</div>
					<div>
						活动名称
					</div>
					<div>
						拟定举办时间
					</div>
				</div>
				<div class="tableBody" v-for="(item,index) in active" :key="index">
					<div>
						{{index+1}}
					</div>
					<div>
						{{item.name}}
					</div>
					<div>
						{{item.time}}
					</div>
				</div>
			</div>
			<!-- 组委会介绍 -->
			<div class="headlineleft" style="width:73.6%;margin-top:48px">
				· 组委会介绍 ·
			</div>
			<div class="committee">
				前海科控是深圳市前海管理局全资直属的三家平台公司之一，通过聚焦科创产业空间运营、高端科技专业服务、科创及文创产业投资等核心业务，努力打造前海科创产业投资运营服务平台，快速推动前海科技创新产业集聚发展。
				<br/><br/>
				第一路演是领先的人工智能路演平台，主要为新兴成长企业、VC/PE投后项目、产业园区项目、双创赛事项目提供融资路演服务，参与策划深圳金博会、高交会等大型活动，平台与主流投资机构紧密合作，基于大数据及人工智能算法对机构投资风格的精准画像，为路演企业精准匹配潜在投资者。
			</div>
			<div class="signup">
				<ul>
					<li>
						<span>路演项目</span>
						<span>报名 > </span>
					</li>
					<li>
						<span>嘉宾评委</span>
						<span>报名 > </span>
					</li>
					<li>
						<span>前海产业</span>
						<span>报名 > </span>
					</li>
					<li>
						<span>媒体/商务</span>
						<span>合作 > </span>
					</li>
				</ul>
			</div>
			<!-- 路演报名表单 -->
			<div class="singupFormContain">
				<div class="singupForm">
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import people from './people.js';
import active from './active.js';

export default {
	name: 'homePage', // 主页
	data () {
		return {
			people:people,
			active:active,
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
		background-color:#01040D;
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
			// min-height:3070px;
			background:url('./img/bg2.png');
			background-size:cover;
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
				color:rgba(132,189,255,1);
				line-height:16px;
				.tableheader{
					height:30px;
					width:100%;
					display:flex;
					margin-bottom:1px;
					div{
						height:100%;
						background:rgba(59,150,210,0.15);
						font-size:12px;
						display:flex;
						align-items: center;
						&:nth-child(1){
							width:44px;
							margin-right: 1px;
							justify-content: center;
						}
						&:nth-child(2){
							padding-left:10px;
							box-sizing: border-box;
							width:calc(100% - 140px);
							margin-right: 1px;
						}
						&:nth-child(3){
							width:92px;
							justify-content: center;
						}
					}
				}
				.tableBody{
					height:52px;
					width:100%;
					display:flex;
					margin-bottom:1px;
					div{
						height:100%;
						background:rgba(59,150,210,0.15);
						font-size:12px;
						display:flex;
						align-items: center;
						&:nth-child(1){
							width:44px;
							margin-right: 1px;
							justify-content: center;
						}
						&:nth-child(2){
							padding-left:10px;
							box-sizing: border-box;
							width:calc(100% - 140px);
							margin-right: 1px;
						}
						&:nth-child(3){
							width:92px;
							justify-content: center;
						}
					}
				}
			}
			.committee{
				width:100%;
				padding:32px 24px 0 24px;
				box-sizing: border-box;
				color:rgba(98,178,232,0.8);
				line-height:22px;
				font-size:14px;
			}
			.signup{
				width:100%;
				margin-top:50px;
				padding:0 24px;
				box-sizing: border-box;
				ul{
					width:100%;
					display:flex;
					align-items: center;
					justify-content: space-between;
					height:80px;
					li{
						width:70px;
						height:100%;
						background:url('./img/db.png');
						background-size: cover;
						display:flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;
						font-size:13px;
						color:rgba(255,255,255,1);
						line-height:18px;
					}
				}
			}
			.singupFormContain{
				width:100%;
				padding:0 16px;
				box-sizing: border-box;
				.singupForm{

				}
			}
			
		}
	}
</style>
