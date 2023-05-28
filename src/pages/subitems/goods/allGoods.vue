<template>
    <div class="all_goods">
      <div class="subTitle_search_subNav">
        <span class="subTitle">官方周边 > 总览</span>
        <div class="rightSection">
          <span class="search_btn">
            <input class="search" type="text">
            <input class="btn" type="button">
          </span>
          <div class="subNav">
            <a href="#">时间顺序</a>
            <div class="subNavContent">
              <a href="#">时间顺序</a>
              <a href="#">时间倒序</a>
              <a href="#">价格升序</a>
              <a href="#">价格降序</a>
              <a href="#">名称</a>
              <a href="#">种类</a>
            </div>
          </div>
        </div>
      </div>
      <div id="goods">
        <ul>
          <li v-for="(v, index) in json.list" :key="index">
            <div class="image-wrapper">
              <img src='./images/goods/满赠透卡.png' alt="">
              <!-- <img :src="v.src" alt=""> -->
            </div>
            <h4>{{ v.des }}</h4>
            <p>{{ v.price }}</p>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    el:"#all_goods",
  
    data() {
      return {
        json: {
          list: [
            {
              src: './images/button.png',
              des: '满赠透卡',
              price: 198
            },
            {
              src: '../images/goods/满赠透卡.png',
              des: 'name',
              price: 200
            },
            {
              src: '../images/goods/满赠透卡.png',
              des: 'name',
              price: 212
            },          {
              src: '../images/goods/满赠透卡.png',
              des: '这是第三个描述',
              price: 222
            },          {
              src: '../images/goods/满赠透卡.png',
              des: '这是第三个描述',
              price: 112
            },          {
              src: '../images/goods/满赠透卡.png',
              des: '这是第三个描述',
              price: 12
            },          {
              src: '../images/goods/满赠透卡.png',
              des: '这是第三个描述',
              price: 20
            },          {
              src: '../images/goods/满赠透卡.png',
              des: '这是第三个描述',
              price: 43
            },
  
          ]
        }
      };
    }
  }
  </script>
  
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    html, body {
      height: 100%;
      margin: 0;
      padding: 0;
    }
    .all_goods {
      background: url('./images/background.png') center center no-repeat;
      background-attachment: fixed;
      /* width: 1200px; */
      justify-content: center;
      align-items: center;
      background-size: 100% 100%;
      overflow: hidden;
    }
    .subTitle_search_subNav {
      /* width: 1200px; */
      display: flex;
      align-items: center;
      justify-content: space-between; 
    }
  
    .subTitle {
      text-align: left;
      text-indent: 2em;
      font-weight: bold;
      margin-right: 10px;
    }
    .search {
      outline-style: none;
      background-color: transparent;
      border: 0px;
      border-bottom: 1px solid #d6b367;
      width: 100px;
      height: 30px;
      background-color: transparent;
    }
    .btn {
      background: url("images/search.png") no-repeat ;
      /* background-position: right 100% bottom 100%; */
      background-size: 25px,25px;
      width: 25px;
      height: 25px; 
      border: none;
      outline: none;
      cursor: pointer;
      }
  
    .rightSection {
      display: flex;
      align-items: center;
  }
    .subNav{
      width: 137px;
      height: 45px;
      background: url('./images/button.png') center center no-repeat;
      line-height: 45px;
      text-align: center;
      font-size: 15px;
      margin-left: 10px;
      position: relative;
      /* overflow: hidden; */
      /* 设置相对定位 */
      display: inline-block;/* 让元素具有块级元素和行内元素的特性,即将块级元素转化为内联元素 */
  }
  a{
      color: #d6b367;
      padding: 20px;
      margin: 0px;
      text-decoration: none;
  }
  .subNavContent {
      display: none;/* 将某元素隐藏起来 */  
      width: 70%;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      background-color: rgba(103,77,151,0.5);
  
  }
  
  .subNavContent a {
      color: #d6b367;
      text-shadow: -0.1em 0.2em 0.3em black;
      padding: 12px 16px;
      display: block;
      /* 将a标签设置为块级标签 */
  }
  
  .subNavContent a:hover {
    background-color: rgba(103,77,151);
  }
  
  .subNav:hover .subNavContent {
      display: block;
  }
  
  #goods ul{
          display: flex;
          flex-wrap: wrap;
      width:1200px;
      overflow: hidden;
      }
  #goods li {
    width: 180px;
    padding: 5px;
    list-style:none;
    /* margin-right: 15px; */
    border: 1px solid #b99950;
    margin:0 0 -1px -1px;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: flex-end; /* 图片靠下对齐 */
    /* text-align: center; */
    background: linear-gradient(rgba(103,77,151,0.3), transparent);
  }
  
  .image-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px; /* 设置图片容器的高度 */
  }
  
  .image-wrapper img {
    max-height: 100%; /* 图片最大高度为容器高度的百分之百 */
    max-width: 100%; /* 图片最大宽度为容器宽度的百分之百 */
  }
  #goods li h4{
    text-align: left;
    padding-left: 20px;
  }
  #goods li p{
    text-align: left;
    padding-left: 20px;
    
  }
  </style>
  