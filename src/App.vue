<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
export default {
  	name: 'App'
}
</script>

<style>
#app {
	width:100%;
	max-width:750px;
	margin:0 auto;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
/* 靠左标题 */
.headlineleft{
	height:36px;
	padding-left:24px;
	box-sizing: border-box;
	background:linear-gradient(135deg,rgba(65,179,243,0.7) 0%,rgba(96,120,234,0) 100%);
	font-weight: bold;
	display:flex;
	align-items: center;
    color:rgba(255,255,255,1);
}
/* 靠右标题 */
.headlineright{
	float:right;
	height:36px;
	padding-right:31px;
	box-sizing: border-box;
	background:linear-gradient(135deg,rgba(96,120,234,0) 0%, rgba(65,179,243,0.7) 100%);
	font-weight: bold;
	display:flex;
	justify-content: flex-end;
	align-items: center;
    color:rgba(255,255,255,1);
}
/* 文字颜色 */
.activityBg{
	width:100%;
	padding:25px 24px 0 24px;
	box-sizing: border-box;
	font-size: 14px;
	color:rgba(98,178,232,0.8);
	line-height:22px;
}
</style>
