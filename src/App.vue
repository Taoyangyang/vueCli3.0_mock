<template>
    <div id="app">
        <div class="nav nav1">
            <router-link to="/">Home</router-link>|
            <router-link to="/about">About</router-link> |
            <router-link to="/vue-draggable">draggable</router-link> | 
            <router-link to="/vue-draggable-twoList">draggable-twoList</router-link> |
            <router-link to="/vue-draggable-clone">draggable-clone</router-link> |
            <router-link to="/div-dragEagle">div-dragEagle</router-link> |
        </div>
        <div class="nav nav2">
            <router-link to="/attrs_listeners">attrs & listeners</router-link>|
        </div>
        <router-view/>
    </div>
</template>

<style lang="less">
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
.nav {
    padding: 30px;
    a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
.flex_start{display: flex; justify-content: flex-start;}
.flex_start_v{display: flex; justify-content: flex-start; align-items: center;}
.flex_end{display: flex; justify-content: flex-end;}               
.flex_end_v{display: flex; justify-content: flex-end; align-items: center;}  
.flex_between{display: flex; justify-content: space-between;}
.flex_between_v{display: flex; justify-content: space-between; align-items: center;}
.flex_around{display: flex; justify-content: space-around;}
.flex_around_v{display: flex; justify-content: space-around; align-items: center;}
.vertical_v{display: flex; align-items: center;}
</style>
