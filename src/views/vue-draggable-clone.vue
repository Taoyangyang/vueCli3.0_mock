/*
 * @Author: TaoYe 
 * @Date: 2019-05-07 10:56:27 
 * @Last Modified by: TaoYe
 * @Last Modified time: 2019-05-07 11:00:02
 */
    
<template>
    <div class="row">
        <div class="col-3">
            <h3>Draggable 1</h3>
            <draggable class="dragArea list-group" :list="list1" :group="{ name: 'people', pull: 'clone', put: false }" @change="log" >
                <div class="list-group-item" v-for="element in list1" :key="element.name" >{{ element.name }}</div>
            </draggable>
        </div>

        <div class="col-3">
            <h3>Draggable 2</h3>
            <draggable class="dragArea list-group" :list="list2" group="people" @change="log">
                <div class="list-group-item" v-for="element in list2" :key="element.name" >{{ element.name }}</div>
            </draggable>
        </div>
    </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
    components: { draggable },
    data() {
        return {
            list1: [
                { name: "John", id: 1 },
                { name: "Joao", id: 2 },
                { name: "Jean", id: 3 },
                { name: "Gerard", id: 4 }
            ],
            list2: [
                { name: "Juan", id: 5 },
                { name: "Edgard", id: 6 },
                { name: "Johnson", id: 7 }
            ]
        };
    },
    methods: {
        log: function(evt) {
            window.console.log(evt);
        }
    }
};
</script>
<style lang="less" scoped>

</style>