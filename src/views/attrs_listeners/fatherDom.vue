<template>
    <div>
        <p>------------fatherDom-------------</p>
        <p>attrs:{{$attrs}}</p>
        <p>foo:{{foo}}</p>
        <p>------------fatherDom-------------</p>
        <child-dom v-bind="$attrs" v-on="$listeners"></child-dom>
    </div>
</template>

<script>
    import childDom from "./childDom.vue";
    export default {
        name: "father-dom",
        props: ["foo"],
        components: { childDom }
    };
</script>