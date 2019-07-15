<template>
    <div class="dd">
        <!-- <leftAside class="kk">
            <span>我的考勤</span>
            <span>考勤电子流</span>
            <span>考勤数据</span>
            <span>考勤报表</span>
            
        </leftAside> -->
    </div>
</template>
<script>
import leftAside from '@/components/leftAside'
export default {
    data() {
        return {

        }
    },
    components :{
        leftAside
    }
}
</script>
<style lang="less" scoped>
.dd {
    height: 94%;
    .kk {
        width: 100%;
        height: 100%;
        .left {
            width: 100%;
            height: 80%;
            background-color: aqua;
        }
    }
    
}
</style>


