<template>
    <div>
        <father-dom :foo="foo" :coo="foo" @upRocket="reciveRocket"></father-dom>
    </div>
</template>

<script>
    import fatherDom from "./fatherDom.vue";
    export default {
        data() {
            return {
                foo: "Hello, world",
                coo: "Hello,rui"
            };
        },
        components: { fatherDom },
        methods: {
            reciveRocket() {
                window.console.log("火箭发射成功！");
            }
        }
    };
</script>