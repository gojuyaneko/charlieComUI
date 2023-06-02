<template>
  <div class="badgeDetails">

    <div class="subTitle">徽章类 > 谷子详情</div><br>
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
    html, body {
      height: 100%;
      margin: 0;
      padding: 0;
  }
    .badgeDetails{    
      width: 100%;
      height: 100%;
      background: url('./images/background.png') center center no-repeat;
      background-attachment: fixed; 
      background-size: 100% 100%;
      overflow: scroll;
    }
    .subTitle {   
      margin-top: 5%;
      height: 20%;
      text-align: left;
      margin-left: 10%;
      font-weight: bold;
      font-size: 150%;
      font-family: "nansongshuju";
    }
    
    img{
      height: 1500px;
    }
    .firework{
      height: 100%;
      width: 100%;
      background: url('./images/展示烟花特效.png') center center no-repeat;
    }

  

  </style>
  