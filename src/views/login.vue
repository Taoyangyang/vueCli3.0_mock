<template>
    <div class='login'>
        <van-cell-group>
            <van-field v-model="username" required clearable label="用户名" right-icon="question-o" placeholder="请输入用户名" @click-right-icon="$toast('question')" />
            <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
        </van-cell-group>
        <van-button type="default" @click="login">登录</van-button>
        <P>登录状态： {{loginStatus}}</P>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <van-button type="primary" @click="getProject">获取project信息</van-button> &nbsp;&nbsp;&nbsp;
        <van-button type="default" @click="clearProject">清空project信息</van-button>
        <p>
            ===================================
            {{loadStatus==-1?'***':loadStatus==0?'加载中。。。':loadStatus==1?'加载完成':'加载失败'}}
            =====================================
        </p>
        <ul>
            <li v-for="item in projectData" :key="item.id">
                <img :src="item.cover" width="100" alt="">
                <h3>{{item.title}}</h3>
                <div>{{item.description}}</div>
                <p>{{item.updatedAt}}</p>
            </li>
        </ul>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <van-button type="primary" @click="getTest">获取test数据</van-button> &nbsp;&nbsp;&nbsp;
        <van-button type="default" @click="delTest">删除test数据</van-button>
        <p>=======================================</p>
        <van-panel v-for="(item,index) in testData" :key="index" :title="item.title" :desc="item.description" :status="item.owner">
            <div v-for="(it,ind) in item.members" :key="ind">
                <span>{{it.id}}</span>  <img :src="it.avatar" width="60" alt="">
                <p>{{item.name}}</p>
            </div>
        </van-panel>
    </div>
</template>

<script>
import md5 from 'md5'
import { mapState , mapGetters , mapMutations , mapActions } from 'vuex';

export default {
    components: {},
    data() {
        return {
            username: '',
            password: '',
            deletId : 0
        };
    },
    computed: {
        ...mapState({
            loginStatus: state => state.LOGIN.loginStatus,
            projectData: state => state.LOGIN.projectData,
            loadStatus : state => state.LOGIN.loadStatus,
            testData   : state => state.LOGIN.testData,
        })
    },
    created() {},
    mounted() {},
    methods: {
        ...mapMutations({ UPDATE_DATA: 'LOGIN_DATA_CHANGE' }),
        ...mapActions([ 'LOGIN', 'GETPROJECT', 'GETTEST', 'GETTESTDEL' ]),
        login(){
            let that = this;
            that.LOGIN({
                username: that.username,
                password: md5(that.password)
            }).then(res=>{
                console.log(res)
            }).catch(err=>{
                console.log(err, "===>err")
            })
        },
        // ----------------------------------------------------
        getProject(){
            let that = this;
            that.GETPROJECT().then(res=>{
                console.log(res)
            })
        },
        clearProject(){
            let that = this;
            that.UPDATE_DATA({projectData: []})
        },
        // ----------------------------------------------------
        getTest(){
            let that = this;
            that.GETTEST().then(res=>{
                console.log(res)
            })
        },
        delTest(){
            this.deletId ++;
            this.GETTESTDEL({id: this.deletId}).then(res=>{
                console.log(res)
            })
        }
    },
    watch: {}
};
</script>
<style lang='less' scoped>
</style>