<template>
    <div>
        <div class="form-check">
            <input id="disabled" type="checkbox" v-model="enabled" class="form-check-input" />
            <label class="form-check-label" for="disabled">DnD enabled</label>
        </div>
        <draggable v-model="colors" @start="datadragStart" @update="datadragUpdate" @end="datadragEnd" :disabled="!enabled" :move="datadragMove" :options="{animation:500}" >
            <transition-group>
                <div v-for="element in colors" :key="element.text" class="drag-item" >{{element.text}}</div>
            </transition-group>
        </draggable>
    </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
    data() {
        return {
            msg: "这是测试组件",
            enabled: true,
            colors: [
                {
                    text: "Aquamarine"
                },
                {
                    text: "Hotpink"
                },
                {
                    text: "Gold（不可拖动元素）"
                },
                {
                    text: "Crimson"
                },
                {
                    text: "Blueviolet"
                },
                {
                    text: "Lightblue"
                },
                {
                    text: "Cornflowerblue"
                },
                {
                    text: "Skyblue"
                },
                {
                    text: "Burlywood"
                }
            ],
        };
    },
    components: {
        draggable
    },
    methods: {
        datadragStart(e) {
            console.log(e, "拖动开始");
        },
        datadragUpdate(e) {
            console.log(e, "拖动更新");
            e.preventDefault();
            console.log(`拖动前的索引 : ${e.oldIndex}, 拖动后的索引 : ${e.newIndex}`);
            console.log(this.colors);
        },
        datadragEnd(e) {
            console.log(e, "拖动结束");
        },
        datadragMove(e, originalEve) {
            console.log(e, originalEve, "拖动移动");
            console.log(`拖动前的索引 : ${e.draggedContext.index}, 拖动后的索引 : ${e.draggedContext.futureIndex}, 拖拽前-上次数据：`, e.relatedContext.list);
            return (e.draggedContext.element.text!=='Gold（不可拖动元素）');
        },
    },
    mounted() {
        //为了防止火狐浏览器拖拽的时候以新标签打开，此代码真实有效
        document.body.ondrop = function(event) {
            event.preventDefault();
            event.stopPropagation();
        };
    }
};
</script>

<style lang="less" scoped>
.drag-item {
    width: 200px;
    height: 50px;
    line-height: 50px;
    margin: auto;
    position: relative;
    background: #ddd;
    margin-top: 20px;
}
</style>