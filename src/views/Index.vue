<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <vantTest msg="vant 框架试用"/>
        <img :src="imgUrl" alt="logo" width="40">
        <p>当前环境：{{nodeEnv}}</p>
        <p>baseUrl: {{baseUrl}}</p>
        <van-button type="primary" @click="clickDialog({state: 1})">点击查看状态{{showDialog}}</van-button>
        <van-button type="info" @click="changeData({showDialog: true})">点击查看状态{{showDialog}}</van-button>
    </div>
</template>

<script>
import { mapState , mapGetters , mapMutations , mapActions } from 'vuex';
// @ is an alias to /src
import vantTest from "@/components/vantTest.vue";
import types from "store/mutations_types"
import assets from "assets/logo.png"

export default {
    name: "home",
    components: { vantTest },
    data (){
        return {
            nodeEnv : process.env.NODE_ENV,
            baseUrl : process.env.BASE_URL,
            imgUrl  : assets,
        }
    },
    computed:{
        ...mapState({
            showDialog  : state => state.INDEX.showDialog,				
        })
    },
    created () {
        console.log(types, "==types==")
        console.log("ENV=>", process.env, process.env.VUE_APP_CURRENTMODE, "==process==")
    },
    methods:{
        ...mapMutations({
            changeData : 'INDEX_DATA_CHANGE'
        }),
        ...mapActions({
            clickDialog: 'CLICK_DIALOG_TOGGLE',
        }),
    }
};
</script>
