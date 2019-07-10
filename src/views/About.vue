<template>
    <div class="about">
        <h1>This is an about page</h1>
        <div class="list">
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                <van-cell v-for="item in list" :key="item" :title="item"/>
            </van-list>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: [],
            loading: false,
            finished: false
        };
    },
    methods: {
        onLoad() {
            // 异步更新数据
            setTimeout(() => {
                for (let i = 0; i < 10; i++) {
                    this.list.push(this.list.length + 1);
                }
                // 加载状态结束
                this.loading = false;

                // 数据全部加载完成
                if (this.list.length >= 40) {
                    this.finished = true;
                }
            }, 500);
        }
    }
};
</script>
<style lang="less" scope="scope">
    .about{
        .list{
            height: 500px;
            overflow-y: scroll;
            border: 1px solid #ccc;
        }
    }
</style>
