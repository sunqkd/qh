<template>
    <div class="roadshow" style="padding-top:36px;">
        <div class="headlineleft" style="width:73.6%;">· 创新创业 ·</div>
        <div class="numContain">
            <div class="numItem">
                <div class="numImg">
                    <img src="./img/01@2x.png" alt="" style="width:44px;">
                </div>
                <div class="numText">
                    入驻前海创业园区首年可获80%租金和物管费资助
                </div>
            </div>
            <div class="numItem">
                <div class="numImg">
                    <img src="./img/02@2x.png" alt="">
                </div>
                <div class="numText">
                    创业团队入选“孔雀计划”等最高可获1000万元资助
                </div>
            </div>
            <div class="numItem">
                <div class="numImg">
                    <img src="./img/03@2x.png" alt="">
                </div>
                <div class="numText">
                    在深圳金融机构申请贷款最高可获100万元/年贷款贴息
                </div>
            </div>
        </div>
        <div class="headlineright" style="width:73.6%;">· 平台发展 ·</div>
        <div class="numContain" >
            <div class="numItem">
                <div class="numImg">
                    <img src="./img/01@2x.png" alt="" style="width:44px;">
                </div>
                <div class="numText">
                    设立港澳青年创新创业加速器可获100万元开办资助
                </div>
            </div>
            <div class="numItem">
                <div class="numImg">
                    <img src="./img/02@2x.png" alt="">
                </div>
                <div class="numText">
                    创新载体承接国家级科创平台可获1000万元资助
                </div>
            </div>
            <div class="numItem">
                <div class="numImg">
                    <img src="./img/03@2x.png" alt="">
                </div>
                <div class="numText">
                    港澳青年社团与前海共同举办活动最高可获200万元资助
                </div>
            </div>
        </div>
        <div class="headlineleft" style="width:73.6%;">· 生活保障 ·</div>
        <div class="numContain" >
            <div class="numItem">
                <div class="numImg">
                    <img src="./img/01@2x.png" alt="" style="width:44px;">
                </div>
                <div class="numText">
                    港澳青年在前海发展一次性最高可获3万元租房资助
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        
    }
</script>
<style lang="scss">
    .roadshow{
        width:100%;
        background:url('./img/bg3.png');
        background-size:cover;
        background-color:#01040D;
        padding-bottom:50px;
        .numContain{
            width:100%;
            padding:28px;
            box-sizing: border-box;
            clear: both;
            .numItem{
                display:flex;
                align-items: center;
                margin-bottom:28px;
                .numImg{
                    width:53px;
                    height:44px;
                    margin-right:16px;
                    img{
                        width:100%;
                        height:auto;
                    }
                }
                .numText{
                    color:rgba(65,179,243,1);
                    line-height:22px;
                    font-size: 14px;
                }
            }
        }
    }
</style>