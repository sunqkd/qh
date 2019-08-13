<template>
    <div class="roadshow">
        <div class="roadTitleContain">
            <div class="roadTitle" style="margin-top:32px;">
                · 嘉宾团享有的权益 ·
            </div>
        </div>
        <!-- 权益 -->
        <div class="roadQyContain" style="margin-top:40px">
            <div class="roadQyitem">
                <div class="left">
                    <img src="./img/icon_01@2x.png" alt="">
                    <span>享有国务院批复的深港合作区的优惠政策</span>
                </div>
                <div class="right">
                    <img src="./img/icon_09@2x.png" alt="">
                    <span>加入国际路演中心科创联盟触碰全球优质资源</span>
                </div>
            </div>
            <div class="roadQyitem">
                <div class="left">
                    <img src="./img/icon_10@2x.png" alt="">
                    <span>链接前海优质项目和国内外顶尖母基金及政府引导基金</span>
                </div>
                <div class="right">
                    <img src="./img/icon_02@2x.png" alt="">
                    <span>入驻深圳市首批双创示范基地-前海梦工场 纳入所属领域的创投生态圈体系</span>
                </div>
            </div>
            <div class="roadQyitem">
                <div class="left">
                    <img src="./img/icon_07@2x.png" alt="">
                    <span>主流媒体采访报道传播机构品牌</span>
                </div>
                <div class="right">
                    
                </div>
            </div>
        </div>
        <!-- 报名 -->
        <div class="singupFormContain" style="margin-top:68px;">
            <div class="singupForm">
                <span class="signtitle">· 嘉宾团报名 ·</span>
                <div class="radioSingle">
                    <span>选择点评场次（多选）</span>
                    <span> > </span>
                </div>
                <input type="text" placeholder="姓名">
                <input type="text" placeholder="公司名称">
                <input type="text" placeholder="职位">
                <input type="text" placeholder="微信">
                <input type="text" placeholder="手机">
                <button>提交</button>
            </div>
        </div>
        <!-- 下载 -->
        <div class="download" style="margin-top:34px;">
            <span @click="download()">下载嘉宾评委登记表</span>
        </div>
    </div>
</template>
<script>
    import { Toast } from 'mint-ui';
    export default {
        data(){
            return {
                domain:'https://test1.dyly.com'
            }
        },
        methods:{
            download(){
                this.axios.post(this.domain + '/vc/qhRoadShow/downloadExcel',{
                    downloadExcelType:'0'
                }).then((res)=>{
                    if(res.data.status == 1){
                        window.open(res.data.data.downloadUrl)
                    }else{
                        Toast({
                            message: '下载失败',
                            iconClass: 'iconfont  icon-dingdanzhuangtaishibai'
					    })
                    }
                })
            }
        }
    }
</script>
<style lang="scss">
    .roadshow{
        width:100%;
        background:url('./img/bg3.png');
        background-size:cover;
        background-color:#01040D;
        padding-bottom:50px;
    }
</style>