<template>
  <div class="page">
    <div class="pc-homepage-background2-l">
      <div class="pc-homepage-background2">
        <div class="text">
          <p class="item">微博：CharlieLove频道</p>
          <p class="item">邮箱： CharlieLovesU@163.com</p>
          <p class="item">哔哩哔哩：CharlieLove频道</p>
          <p class="item">小红书：伪装现充</p>
        </div>
        <div class="bg">
          <img src="./../assets/HomePage/剪影.png" />
        </div>
        <div class="title">
          <img src="./../assets/HomePage/标题.png" />
        </div>

        <div class="table">
          <div class="line"></div>

          <div class="row" style="width: 362px">
            <div
              class="cell right-align"
              style="color: #f2d79c; text-align: right; width: 150px"
            >
              出品人<br />
              Executive Producer
            </div>
            <div class="cell left-align" style="color: #b6a1dc">伪装现充</div>
          </div>
          <div class="row">
            <div
              class="cell right-align"
              style="color: #f2d79c; text-align: right; width: 150px"
            >
              视觉设计师<br />
              Visual Designers
            </div>

            <div class="cell-group">
              <div class="cell left-align" style="color: #b6a1dc">伪装现充</div>
              <div class="cell left-align">曲渚澜生</div>
              <div class="cell left-align">Annie</div>
            </div>
            <div class="cell-group">
              <div class="cell left-align" style="color: #b6a1dc">Fiona</div>
              <div class="cell left-align">咕咕</div>
              <div class="cell left-align">马哈哈</div>
            </div>
            <div class="cell-group">
              <div class="cell left-align">三戊</div>
              <div class="cell left-align">Yana Yang</div>
            </div>
          </div>
          <div class="row" style="margin-top: 60px">
            <div
              class="cell right-align"
              style="color: #f2d79c; text-align: right; width: 150px"
            >
              前端开发者<br />
              Front-end Developers
            </div>
            <div class="cell-group">
              <div class="cell left-align" style="color: #b6a1dc">Siven</div>
              <div class="cell left-align">Zon</div>
            </div>
            <div class="cell-group">
              <div class="cell left-align">去码头整点海苔</div>
              <div class="cell left-align">苏格曼</div>
            </div>
            <div class="cell-group">
              <div class="cell left-align">陈高兴</div>
              <div class="cell left-align">KAISXXI</div>
            </div>
          </div>
          <div class="row">
            <div
              class="cell right-align"
              style="color: #f2d79c; text-align: right; width: 150px"
            >
              后端开发者<br />
              Back-end Developers
            </div>
            <div class="cell-group">
              <div class="cell left-align" style="color: #b6a1dc">Sammy</div>
              <div class="cell left-align">Zon</div>
            </div>
            <div class="cell-group">
              <div class="cell left-align" style="color: #b6a1dc">wqr_冉</div>
              <div class="cell left-align">苏格曼</div>
            </div>
            <div class="cell-group">
              <div class="cell left-align">Winnie</div>
              <div class="cell left-align">KAISXXI</div>
            </div>
          </div>
          <div class="row">
            <div
              class="cell right-align"
              style="color: #f2d79c; text-align: right; width: 150px"
            >
              素材整理<br />
              Data Collectors
            </div>
            <div class="cell-group">
              <div class="cell left-align" style="color: #b6a1dc">伪装现充</div>
              <div class="cell left-align">鸡蛋饼</div>
              <div class="cell left-align">热苏打9256</div>
              <div class="cell left-align">叶子</div>
              <div class="cell left-align">KAISXXI</div>
            </div>
            <div class="cell-group">
              <div class="cell left-align">小郑</div>
              <div class="cell left-align">七哇</div>
              <div class="cell left-align">冬日吃烤红薯的</div>
              <div class="cell left-align">查宥礼</div>
            </div>
            <div class="cell-group">
              <div class="cell left-align">狮狮</div>
              <div class="cell left-align">啊啵</div>
              <div class="cell left-align">ppjing</div>
              <div class="cell left-align">马哈哈</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "aboutUs",
  data() {
    return {};
  },
};
</script>

<style>
.page {
  width: 100%;
  height: 100%;
  overflow: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
::-webkit-scrollbar {
  display: none;
}
.pc-homepage-background2 {
  position: relative;
  background-image: url(@/assets/HomePage/首页2.jpg);
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.pc-homepage-background2-l {
  position: relative;
  background-image: url(@/assets/HomePage/首页2l.jpg);
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.bg img {
  position: absolute;
  top: 170px;
  left: 195px;
  width: 1726px;
  height: 739px;
  background: transparent !important;
}
.title img {
  position: absolute;
  top: 146px;
  left: 195px;
  width: 288px;
  height: 59px;
}

.item {
  margin-right: 10px;
}
.text {
  display: flex;
  position: absolute;
  top: 230px;
  left: 245px;
  color: #f2d79c;
  text-align: center;
  font-size: 15px;
  font-family: "nansongshuju";
  letter-spacing: 2px;
}

.text p {
  margin-right: 30px;
}

.table {
  display: flex;
  position: absolute;
  font-size: 16px;
  font-family: "nansongshuju";
  top: 300px;
  left: 260px;
  width: 800px;
  flex-direction: column;
  text-align: right;
}

.row {
  display: flex;
  justify-content: space-between;
  margin-top: 35px;
  height: 50px;
  width: 700px;
  color: #f2d79c;
}

.cell {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 6px;
  width: 120px;
  color: white;
}

.cell-group {
  display: flex;
  flex-direction: column;
  text-align: left !important;
}

.right-align {
  justify-content: flex-end;
}
.left-align {
  justify-content: flex-start;
}
.line {
  position: absolute;
  top: 40px;
  left: 180px;
  height: 490px;
  width: 10px;
  border-right: solid #f2d79c 3px;
}
</style>
