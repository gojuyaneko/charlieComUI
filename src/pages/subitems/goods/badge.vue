<template>
  <div class="badgeDetails">

    <span class="subTitle">徽章类 > 谷子详情</span><br>
    <img class="underShow" src="./images/展示烟花特效.png" alt="">
      <span class="firework">1</span>
      <span>2</span>
  </div>
</template>
  
  <script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    .badgeDetails{
      margin-top: 65px;
      background: url('./images/background.png') center center no-repeat;
      background-attachment: fixed;
      /* width: 1200px; */
      justify-content: center;
      align-items: center;
      background-size: 100% 100%;
      overflow: hidden;
    }
    .subTitle {
      text-align: center;
      text-indent: 2em;
      font-weight: bold;
      margin-right: 10px;
    }
    
    img{
      height: 1500px;
    }
    .firework{
      height: 699px;
      width: 699px;
      background: url('./images/展示烟花特效.png') center center no-repeat;
    }

  

  </style>
  