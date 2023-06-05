<template>
    <div class="charlie-furniture">
        <div class="furniture-nav">
            <span>工作室</span>
            <span>></span>
            <span>家具</span>
        </div>
        <div class="furniture-title bkg"></div>
        <div class="furnitre-body bkg">
            <div class="record bkg" @click="showDeatil('record')"></div>
            <div 
                class="btn bkg" 
                v-for="item in btnList" 
                :key="item.key"
                :style="item.style"
                @click="showDeatil(item.key)"
            >{{item.name}}</div>
        </div>
    </div>
</template>

<script>
import btnList from './components/btnList'
export default {
    mixins: [btnList],
    data() {
       return {
       } 
    },
    methods: {
        showDeatil(e) {
            console.log('event type:',e);
        }
    }
}
</script>

<style lang="scss" scoped>
.charlie-furniture {
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    background-image: url('./image/furniture-bkg.png');
    .furniture-nav {
        top: 200px;
        left: 150px;
        font-size: 18px;
        font-size: 18px;
        position: absolute;
        font-family: nansongshuju;
        color: rgb(206, 172, 99);
        span {
            margin-left: 10px;
            &:first-child {
                cursor: pointer;
            }
        }
    }
    .furniture-title {
        left: 150px;
        width: 430px;
        height: 79px;
        bottom: 350px;
        position: absolute;
        background-image: url('./image/title.png');
        &::after {
            content: "";
            top: 50px;
            width: 517px;
            height: 53px;
            position: absolute;
            background: url('./image/dark-title.png') no-repeat center/100%;
            background-size: 100% 100%;
        }
    }
    .furnitre-body {
        bottom: 0;
        right: 100px;
        width: 810px;
        height: 770px;
        position: absolute;
        background-image: url('./image/furnitures.png');
        .record {
            top: 280px;
            left: 145px;
            width: 38px;
            height: 153px;
            cursor: pointer;
            position: absolute;
            background-image: url('./image/record.png');
        }
        .btn {
            width: 120px;
            height: 38px;
            font-size: 20px;
            cursor: pointer;
            font-weight: 500;
            line-height: 38px;
            text-align: center;
            position: absolute;
            font-family: nansongshuju;
            color: rgb(206, 172, 99);
            background-image: url('./image/btn-bkg.png');
        }
    }
}
.bkg {
    background-size: 100% 100%;
}
</style>

