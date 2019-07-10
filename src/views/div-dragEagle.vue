/*
 * @Author: TaoYe 
 * @Date: 2019-05-07 14:13:30 
 * @Last Modified by: TaoYe
 * @Last Modified time: 2019-05-08 09:39:29
 */

<template>
    <div>
        <div class="outBox" ref="outBox">
            <div id="eagleMapContainer" v-dragMove="{setPosition: setPosition, outBoxSize: {w: 800, h:600}}" ref="dragBox" 
            :style="{left: boxInfoOutput.boxTLPoint.x+'px', top: boxInfoOutput.boxTLPoint.y+'px'}">
                <!-- <div id="eagleMap">@mousedown.stop="dragEagle"
                    <l-map></l-map>
                </div> -->
                <div id="tz" v-dragEagle="{getPosition:getPosition}"  >
                    <div title="拖动调整大小" id="move_tz"></div>
                </div>
            </div>
        </div>
        <p>宽度：{{boxInfoOutput.boxWidth}}---高度：{{boxInfoOutput.boxHeight}}</p>
        <p>左上点坐标：{{boxInfoOutput.boxTLPoint}}</p>
    </div>
</template>
 
<script>
import { log } from 'util';
export default {
    name: "eagleMap",
    components: {},

    data() {
        return {
            boxInfoOutput  : {
                boxHeight : 200,
                boxWidth  : 200,
                boxTLPoint: {
                    x: 200, 
                    y: 200
                },
            },
        };
    },

    methods: {
        // dragEagle: function(e) {
        //     let that = this;
        //     var targetDiv = document.getElementById("eagleMapContainer"); //e.target.parentNode.parentNode;.children[0]

        //     //得到点击时该地图容器的宽高：
        //     var targetDivWidth = targetDiv.offsetWidth;
        //     var targetDivHeight = targetDiv.offsetHeight;

        //     var startX = e.clientX;
        //     var startY = e.clientY;

        //     document.onmousemove = function(e) {
        //         e.preventDefault();
        //         //得到鼠标拖动的宽高距离：取绝对值
        //         var distX = Math.abs(e.clientX - startX);
        //         var distY = Math.abs(e.clientY - startY);

        //         //往右上方拖动：
        //         if (e.clientX > startX && e.clientY > startY) {
        //             targetDiv.style.width = targetDivWidth + distX + "px";
        //             targetDiv.style.height = targetDivHeight + distY + "px";
        //         }
        //         //往左下方拖动：
        //         if (e.clientX < startX && e.clientY < startY) {
        //             targetDiv.style.width = targetDivWidth - distX + "px";
        //             targetDiv.style.height = targetDivHeight - distY + "px";
        //         }

        //         //设置最大最小范围：不能无限制缩放，影响体验
        //         if (parseInt(targetDiv.style.width) >= 500) {
        //             targetDiv.style.width = 500 + "px";
        //         }
        //         if (parseInt(targetDiv.style.width) <= 50) {
        //             targetDiv.style.width = 50 + "px";
        //         }

        //         if (parseInt(targetDiv.style.height) >= 500) {
        //             targetDiv.style.height = 500 + "px";
        //         }
        //         if (parseInt(targetDiv.style.height) <= 50) {
        //             targetDiv.style.height = 50 + "px";
        //         }
        //         // console.log(that.$refs.dragBox.getBoundingClientRect(), "数据")   
                
        //         let boxInfoData = that.$refs.dragBox.getBoundingClientRect();
        //         that.$set(that.boxInfoOutput, 'boxHeight', boxInfoData.height);
        //         that.$set(that.boxInfoOutput, 'boxWidth', boxInfoData.width);
        //         // that.$set(that.boxInfoOutput, 'boxTLPoint', {x: boxInfoData.left, y: boxInfoData.top});
        //     };

        //     document.onmouseup = function() {
        //         document.onmousemove = null;
        //     };
        // },
        setPosition(x,y){
            let that = this;
            that.$set(that.boxInfoOutput, 'boxTLPoint', {x: x, y: y});
        },
        getPosition(){
            let that = this;
            let boxInfoData = that.$refs.dragBox.getBoundingClientRect();
            that.$set(that.boxInfoOutput, 'boxHeight', boxInfoData.height);
            that.$set(that.boxInfoOutput, 'boxWidth', boxInfoData.width);
        }
    },
};
</script>

<style lang="less" scoped>
.outBox{
    position: relative;
    width: 800px;
    height: 600px;
    border: 1px solid #ccc;
}
#eagleMapContainer {
    position: absolute;
    z-index: 200;
    overflow: hidden;
    visibility: visible;
    width: 200px;
    height: 200px;
    background: #f1f1f1;
    cursor: move;
    #eagleMap {
        width: 100%;
        height: 100%;
        top: 0px;
        right: 0px;
        position: absolute;
        z-index: 1000;
    }
    #tz {
        position: absolute;
        right: 1px;
        bottom: 1px;
        width: 28px;
        height: 28px;
        cursor: se-resize;
        z-index: 200001;
        background-image: url("");
        #move_tz {
            position: absolute;
            right: 0px;
            bottom: 0px;
            width: 27px;
            height: 27px;
            cursor: se-resize;
            z-index: 100;
            background-image: url("");
            background: #cccccc;
            background-position: 0px 0px;
            &:hover{
                background: #696969;
            }
        }
    }
}
</style>