<template>
    <div class="main" ref="refMain">
        <div class="nav" ref="refNav">
            <!--LOGO名称-->
            <div class="navLeft">
                <div class="navLeftLogo">
                    <img width=40px src="@/assets/logo.png">
                    <div>
                        <span>华微软件运营支撑平台</span><br>
                        <span>———华为业务板块</span>
                    </div>
                </div>
            </div>
            <!--导航栏-->
            <div class="navMid">
                <div class="navMidStyle">
                    <router-link  v-for="(item,index) in items"
                    :key="item.label"
                    :to="item.path" 
                    class="navMidOne" 
                    :class="{clickStyle:index === clickIndex}" 
                    @click.native="handItem(index)">{{item.value}}</router-link>
                </div>
            </div>
            <!--登录入口-->
            <div class="navRight">

            </div>
            
        </div>
        <!--面包屑-->
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
        <router-view></router-view>
        <!-- <div class="bread">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">行政</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/'}">考勤A</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/kaoqinA/threeOne'}">我的考勤</el-breadcrumb-item>
            </el-breadcrumb>
        </div> -->
        <!--左侧组件-->
        <!--这是没用的东西-->
    </div>
</template>
<script>
export default {
    data() {
        return {
            bodyHeight:'',
            tabPosition:'left',
            clickIndex:'',
            items:[{
                label:'xingzheng',
                path:'/',
                value:'行政'
            },
            {
                label:'renzi',
                path:'/renzi',
                value:'人资'
            },
            {
                label:'xiangmu',
                path:'/xiangmu',
                value:'项目'
            },
            {
                label:'xitong',
                path:'/xitong',
                value:'系统'
            },
            {
                label:'hezuo',
                path:'/hezuo',
                value:'合作'
            }],
        }
    },
    components: {
    },
    created() {

    },
    mounted() {
       
    },
    methods: {
        handItem(index) {
            this.clickIndex = index
        }
    }
}
</script>
<style lang="less" scoped>
.main {
    height: 100%;
    .nav {
        width: 100%;
        height: 65px;
        background-color: #acadb3;
        .navLeft {
            float: left;
            width: 250px;
            .navLeftLogo {
                margin-left:20px; 
                height: 65px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 14px;
                color: white;
            }
        }
        .navMid {
            float: left;
            width: 500px;
            height: 65px;
            .navMidStyle {
                height: 65px;
                position: relative;
                .navMidOne {
                    cursor: pointer;
                    float: left;
                    height: 65px;
                    line-height: 65px;
                    width: 100px;
                    text-align: center;
                    font-size: 20px;
                    color: aliceblue;
                    text-decoration: none;
                }
                .clickStyle {
                        color: rgb(14, 136, 243);
                        text-decoration: none;
                    }
                .navMidOne:hover {
                    cursor: pointer;
                    float: left;
                    height: 63px;
                    line-height: 63px;
                    width: 100px;
                    text-align: center;
                    font-size: 20px;
                    color: #007ACC;
                    border-bottom: 2px solid #007acc;
                }
            }
        }
    }
    .bread {
        height: 25px;
        background-color: #007ACC;
    }
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
    .aside {
        width: 100%;
    }
    /deep/.el-tabs__nav-scroll{
        width: 200px;
    }
}
</style>

