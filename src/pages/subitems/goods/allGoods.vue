<template>
  <div class="all_goods">
    <div class="subTitle_search_subNav">
      <span class="subTitle">官方周边 > 总览</span>
      <div class="rightSection">
        <span class="search_btn">
          <input class="search" type="text" v-model="searchValue" />
          <input class="btn" type="button" @click="search" />
        </span>
        <div class="subNav">
          <span class="subNav_title">
            <a href="#">{{sortType.label}}</a>
          </span>
          <div class="subNavContent">
            <li v-for="item in sortList" :key="item.value">
              <span href="#" @click="getSortList(item)">{{item.label}}</span>
            </li>
          </div>
        </div>
      </div>
    </div>
    <div id="goods">
      <ul class="goods_contents">
        <li v-for="item in items" :key="item.id" class="item-container">
          <div class="image-wrapper">
            <!-- <el-image :src="url"></el-image> -->
            <el-image :src="item.file_path" alt="商品图片"></el-image>
          </div>
          <div class="details">
            <p class="item-name">名称：{{ item.name }}</p>
            <p class="item-price">售价：{{ item.price ? item.price : 0 }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import { getGuziList } from "@/request/api";
export default {
  // name: 'HelloWorld',
  props: {
    msg: String
  },
  el: "#all_goods",
  data() {
    return {
      fits: ["fill", "contain", "cover", "none", "scale-down"],
      //图片链接，名字，价格，详情，时间，种类
      items: [],
      searchValue: '',
      sortList: [
        { value: 'timeASC', label: '时间升序' },
        { value: 'timeDESC', label: '时间降序' },
        { value: 'priceASC', label: '价格升序' },
        { value: 'priceDESC', label: '价格降序' },
      ],
      sortType: {
        value: 'timeASC',
        label: '时间升序'
      },
    };
  },
  mounted() {
    // 当组件挂载时从API获取数据
    this.getAllGoodsList();
  },
  methods: {
    //接入周边数据
    getAllGoodsList(params) {
      getGuziList(params).then(res => {
        this.items = res;
      });
    },
    // 搜索
    search() {
      this.getAllGoodsList({ name: this.searchValue, sign: this.sortType?.value })
    },
    getSortList(val) {
      this.sortType = val
      this.getAllGoodsList({ name: this.searchValue, sign: val.value })
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
.all_goods {
  width: 100%;
  height: 100%;
  background: url("./images/background.png") center center no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
  overflow: scroll;
  user-select: none;
}
.subTitle_search_subNav {
  margin-top: 5%;
  height: 20%;
  margin-bottom: -3%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.subTitle {
  text-align: left;
  margin-left: 10%;
  font-weight: bold;
  font-size: 150%;
  font-family: "nansongshuju";
}
.search_btn {
  width: 100%;
}
.search {
  outline-style: none;
  background-color: transparent;
  border: 0px;
  border-bottom: 1px solid #d6b367;
  width: 80%;
  height: 100%;
  background-color: transparent;
}
.btn {
  background: url("images/search.png") no-repeat;
  /* background-position: right 100% bottom 100%; */
  background-size: 100%, 100%;
  width: 20%;
  height: 100%;
  border: none;
  outline: none;
  cursor: pointer;
}

.rightSection {
  display: flex;
  margin-right: 10%;
  align-items: center;
}
.subNav {
  width: 100%;
  background: url("./images/button.png") center center no-repeat;
  background-size: 100%, 100%;
  line-height: 50px;
  text-align: center;
  font-size: 15px;
  margin-left: 20px;
  position: relative;
  display: inline-block; /*让元素具有块级元素和行内元素的特性,即将块级元素转化为内联元素*/
}

a {
  color: #d6b367;
  text-decoration: none;
  font-family: "nansongshuju";
}
.subNavContent {
  display: none; /* 将某元素隐藏起来 */
  width: 70%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  background-color: rgba(103, 77, 151, 0.5);
}
/* .subNavContent li{
  height: 20px
} */
.subNavContent span {
  /* height: 50px; */
  text-shadow: -0.1em 0.2em 0.3em black;
  display: block;
  /* 将a标签设置为块级标签 */
}

.subNavContent span:hover {
  background-color: rgba(103, 77, 151);
}

.subNav:hover .subNavContent {
  display: block;
}

#goods {
  margin-top: 3%;
}
#goods ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  list-style: none;
  padding: 0;
}

#goods li {
  flex: 0 0 calc(16.6667% - 2px); /* 一行固定六个元素，考虑边框的宽度 */
  margin: 0 0 -1px -1px;
  padding: 10px;
  border: 1px solid #b99950;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* 图片靠下对齐 */
  background: linear-gradient(rgba(103, 77, 151, 0.3), transparent);
}

.image-wrapper {
  display: flex;
  /* align-items: center; */
  justify-content: center;
  height: 250px; /* 设置图片容器的高度 */
}

.image-wrapper el-image {
  max-height: 250px;
}

.details {
  text-align: left;
  padding-left: 20px;
  margin-top: 10px;
  font-size: 150%;
  font-family: "nansongshuju";
}
</style>
