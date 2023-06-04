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
            <div class="productCarousel">
              <!-- Placeholder for product carousel -->
              滚动滚动gundong滚动滚动gundong滚动滚动gundong滚动滚动gundong滚动滚动gundong滚动滚动gundong滚动滚动gundong滚动滚动gundong滚动滚动gundong滚动滚动gundong
            </div>
          </div>
          <div class="productInfo">
            <h2>商品名称</h2>
            <div class="details">
              <div class="leftColumn">
                <p>售价: </p>
                <p>名称: </p>
                <p>系列: </p>
                <p>尺寸: </p>
              </div>
              <div class="rightColumn">
                <p>材质: </p>
                <p>工艺: </p>
                <p>发售时间: </p>
                <p>获取方式: </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
  .badgeDetails {
    width: 100%;
    height: 100%;
    background: url('./images/background.png') center center no-repeat;
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
    text-align: left;
    font-weight: bold;
    font-size: 24px;
  }

  .productDetails {
    display: flex;
    align-items: center;
    /* background-color: rgb(84, 84, 150); */
  }
  .productPic{
    width: 60%;
    /* background-color: pink; */
    /* margin-right: 20px; */
  }

  .productImage {
    position: relative;
    background-image: url('./images/展示烟花特效.png');
    background-size: 70%;
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
    /* margin: 0 auto; */
    width: 250px;
    /* height: auto; */
  }
  .productCarousel {
    width: 100%;
    /* Add styles for product carousel */
  }
 

  .productInfo {
    display: flex;
    flex-direction: column;
    color: #d6b367;

    justify-content: right;
    align-items: flex-end;
  }

  h2 {
    
    font-size: 400%;
    font-weight: normal;
    text-align: right;
  }

  .details {
    display: flex;
    text-align: right;
    font-size: 150%;
    justify-content: space-between;
  }
  .leftColumn,.rightColumn {
    width: 50%;
  }


</style>
