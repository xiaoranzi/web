<template>
    <div class="all">
        <div class="left" ref="refLeft" :height="leftHeight" v-show="isHidden">
            <div class="cont">

            </div>
        </div>
        <div class="btnIcon">
            <div class="turn">
                <div class="el-icon-caret-left" :class="{'el-icon-caret-right':!isHidden}" @click="handBtn">

                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            leftHeight: '0',
            isHidden: true
        }
    },
    mounted() {
    },
    methods: {
        handBtn() {
            this.isHidden = !this.isHidden
        }
    }
}
</script>
<style lang="less" scoped>
.all {
    width: 100%;
    height: 100%;
    .left {
        float: left;
        width: 250px;
        height: 100%;
        // background-color: rgb(217, 235, 235);
        .cont {
            float: left;
            width: 100%;
            height: 100%;
        }
    }
    .btnIcon {
        position: relative;
        float: left;
        width: 10px;
        height: 100%;
        background-color: rgb(187, 176, 176);
        .turn {
            position: absolute;
            top: 50%;
            width: 10px;
            height: 40px;
            background-color: rgb(179, 139, 139);
            border-radius: 5px;
            .el-icon-caret-left {
                transform: translate(-25%);
                margin-top: 7px;
                font-size: 25px;
            }
        }
    }
}

</style>
