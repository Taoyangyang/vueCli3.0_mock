<template>
    <div>
        <p>------------childDom-------------</p>
        <p>coo:{{coo}}</p>
        <button @click="startUpRocket">我要发射火箭</button>
        <p>------------childDom-------------</p>
    </div>
</template>

<script>
    export default {
        name: "childDom",
        props: ["coo"],
        methods: {
            startUpRocket() {
                this.$emit("upRocket");
                console.log("我要发射火箭了。");
            }
        }
    };
</script>