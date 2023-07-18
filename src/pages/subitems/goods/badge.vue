<template>
  <div class="badgeDetails">
    <div class="contentWrapper">
        <div class="subTitle">徽章类 > 谷子详情</div>
        <div class="productDetails">
          <div class="productPic">
            <div class="productImage">
              <div class="badgeImage">
                <img src="./images/goods/长梦烬余痕徽章.png" alt="">
              </div>
            </div>
            
            <div class="productSlider">
              <div class="slider-container">
                <ul></ul>
                <img src="./images/goods/满赠透卡.png" alt="Image 1">
                <img src="./images/goods/满赠透卡.png" alt="Image 2">
                <img src="./images/goods/满赠透卡.png" alt="Image 3">
                <img src="./images/goods/满赠透卡.png" alt="Image 3">
                <img src="./images/goods/满赠透卡.png" alt="Image 3">
                <img src="./images/goods/满赠透卡.png" alt="Image 3">
                <img src="./images/goods/满赠透卡.png" alt="Image 3">
                <img src="./images/goods/满赠透卡.png" alt="Image 3">
                <img src="./images/goods/满赠透卡.png" alt="Image 3">
                <img src="./images/goods/满赠透卡.png" alt="Image 3">
                <img src="./images/goods/满赠透卡.png" alt="Image 3">
                <img src="./images/goods/满赠透卡.png" alt="Image 3">
                <img src="./images/goods/满赠透卡.png" alt="Image 3">
                <img src="./images/goods/满赠透卡.png" alt="Image 3">
                <!-- 添加更多图片 -->
              </div>
            </div>
          </div>
          <!-- <div class="productSlider"> -->
            <!-- Placeholder for product carousel -->
            <!-- <div class="slider-container"> -->
              <!-- <img v-for="(item, index) in goodsContent" :key="item.id" :src="item.file_path" :alt="item.name" @click="handle(index)" /> -->
              <!-- <img src="./images/goods/满赠透卡.png" alt="Image 2" /> -->
              <!-- 添加更多图片 -->
            <!-- </div> -->
          <!-- </div> -->
        
        <div class="productInfo">
          <h2>{{ goodsContent[index].name }}</h2>
          <div class="details">
            <div class="leftColumn">
              <p>售价: {{ goodsContent[index].price }}元</p>
              <p>名称: {{ goodsContent[index].name }}</p>
              <p>系列: {{ goodsContent[index].series }}</p>
              <p>尺寸: {{ goodsContent[index].size }}</p>
            </div>
            <div class="rightColumn">
              <p>材质: {{ goodsContent[index].texture }}</p>
              <p>工艺: {{ goodsContent[index].craft }}</p>
              <p>发售时间: {{ goodsContent[index].release_time }}</p>
              <p>获取方式: {{ goodsContent[index].access }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { getGoodsList } from "@/request/api";
export default {
  el: "#bagdeDetails",
  // components:{encounterContent},
  data() {
    return {
      index: 0,
      goodsContent: [
        {
          src: "./images/goods/长梦烬余痕徽章.png",
          name: "长梦烬余痕徽章",
          price: 15,
          series: "长梦烬余痕系列",
          size: "40*70mm",
          material: "马口铁",
          craft: "拉丝银葱底",
          time: "2022/08/10",
          resource: "淘宝"
        }
      ]
    };
  },
    watch: {
    // 深度监听路由改变事件
    '$route': {
      handler (a, b) {
      	// 这里的this.initData()就是自己项目接口调用的方法，可以根据自己的项目修改成对应的方法
        this.getList(a.query.type)
      },
      deep: true,
      immediate: true,
    }
  },
  methods: {
    getList(type) {
      getGoodsList({ type }).then(res => {
        // console.log(res);
        this.goodsContent = res
        this.index = 0;
      });
    },
    handle(index) {
      this.index = index
    }
  }
};
</script>

<style scoped>
.badgeDetails {
  width: 100%;
  height: 100%;
  background: url("./images/background.png") center center no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
  overflow: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "nansongshuju";
}

.contentWrapper {
  width: 1500px;
  /* height: 1000px; */
  /* height:50% */
}

.subTitle {
  margin-top: 5%;
  text-align: left;
  font-weight: bold;
  font-size: 24px;
}

.productDetails {
  display: flex;
  align-items: center;
  /* background-color: rgb(84, 84, 150); */
}
.productPic {
  width: 60%;
}

.productImage {
  position: relative;
  background-image: url("./images/展示烟花特效.png");
  background-size: 80%;
  background-position: center center;
  background-repeat: no-repeat;
  background-position: center;
  height: 700px;
}

  .badgeImage {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    height: 100%;
  }
  .badgeImage img {
    display: block;
    width: 250px;
  }
  .productSlider {
    width: 100%;
    display: flex; /* 使用 Flexbox 布局 */
    justify-content: space-between; /* 左右对齐，两端对齐 */
    align-items: center; /* 垂直居中元素 */
    overflow-x: auto; /* 启用水平滚动条 */
    white-space: nowrap; /* 禁止换行 */
    scroll-snap-type: x mandatory; /* 强制横向滚动 */
  }
  .left-btn,.right-btn {
    color: #674d97;
    font-size: 24px;
    flex: 0 0 auto; /* 固定宽度，不可伸缩 */
  /* 其他样式 */
  }

.productSlider::-webkit-scrollbar {
  border-top: 1px solid #d8c28c;
  border-bottom: 1px solid #d8c28c;
  background-color: transparent; /* 设置滚动条背景色 */
}

.productSlider::-webkit-scrollbar-thumb {
  /* 设置滚动块 */
  border: 4px solid transparent;
  background-clip: content-box;
  background-image: linear-gradient(black, #674d97);
}

.slider-container {
  width: 100%; /* 图片宽度填充容器 */
  height: auto; /* 根据宽度等比缩放高度 */
  scroll-snap-stop: always; /* 停止滚动在每个图片的位置 */
}

.slider-container img {
  max-height: 100px;
  /* margin: 20px; */
  padding: 20px;
}

.productInfo {
  display: flex;
  flex-direction: column;
  color: #b49a60;
  width: 50%;
  justify-content: right;
  align-items: flex-end;
}

h2 {
  font-size: 400%;
  font-weight: normal;
  text-align: right;
  margin-bottom: 100px;
}

.details {
  display: flex;
  text-align: right;
  font-size: 150%;
  justify-content: space-between;
}
.details p {
  margin: 10px;
}
.leftColumn,
.rightColumn {
  width: 375px; /**左半边宽度取半 */
}
</style>
