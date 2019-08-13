<template>
    <div class="media">
        <div class="singupFormContain">
            <div class="singupForm">
                <span class="signtitle">· 媒体/商务合作 ·</span>
                <div class="radioSingle" @click="changeRadio()">
                    <span v-if="radiodata">{{radiodata.roadShowName}}</span>
                    <span v-else>选择路演场次（单选）</span>
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
        <singleradio v-if="radioSingle" v-model="radioSingle" @radioMethods="radioMethods"></singleradio>
    </div>
</template>

<script>
    import singleradio from './singleradio';
    export default {
        data(){
            return{
                radioSingle:false,
                radiodata:'',
            }
        },
        created(){
            this.setScrollTop(0);
        },
        methods:{
            radioMethods(data){
                this.radiodata = data;
			    this.radioSingle = false;
            },
            changeRadio(){ // 
                this.radioSingle = true;
            },
            setScrollTop(scroll_top) {  
    　　　　　　 document.documentElement.scrollTop = scroll_top;  
    　　　　　　 window.pageYOffset = scroll_top;  
    　　　　　　 document.body.scrollTop = scroll_top;  
　　　　     }
        },
        components:{
            singleradio
        }
    }
</script>
<style>
    .media{
        width:100%;
        /* height: 100%; */
        padding-top: 68px;
        background:url('./img/bg3.png');
        background-size:cover;
        background-color:#01040D;
        box-sizing: border-box;
    }
</style>