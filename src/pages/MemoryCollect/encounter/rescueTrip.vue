<template>
  <div class="rescue_trip">
    <div class="major-title">
      <div class="content"></div>
    </div>
    <ul class="minor-titles">
      <li class="title1" tabindex="1" ></li>
      <li class="title2" tabindex="2"></li>
      <li class="title3" tabindex="3"></li>
    </ul>
    <div class="text-bg">
      <div class="text">
        <ul class="choice">
          <li class="choice1"></li>
          <li class="choice2"></li>
        </ul>
      </div>
    </div>

    <a class="video-btn" target="_blank" href="http://www.bilibili.com"></a>
  </div>
</template>

<script>
export default {
    data () {
    return {

    }
  },
}
</script>

<style scoped lang="scss">
.rescue_trip {
  text-align: center;
  width: 100%;
  height: 100%;
  background: url('./邂逅1/bg.png') no-repeat;
  background-size: cover;
  background-position: center;
}

.major-title {
  background: url("./邂逅1/title1.png") no-repeat;
  background-size: 95% 95%;
  height: 70px;
  width: 406px;
  position: relative;
  top:165px;
  left:145px;
}

.content {
  position: relative;
  top:100px;
  left: 100px;
}

.video-btn {
  background-image: url("./邂逅1/video.png");
  background-size: 100% 100%;
  cursor: pointer;
  position: relative;
  top: -120px;
  left: 1640px;
  width: 145px;
  height: 50px;
  display: inline-block;
}
.video-btn:hover {
  transform: scale(1.05);
}

.text-bg {
  background: url('./邂逅1/text.png') no-repeat;
  background-size: 100% 97%;
  height: 760px;
  width: 1630px;
  position: relative;
  float: right;
  top:120px;
}

.minor-titles {
  display: flex;
  flex-direction: column;
  position: relative;
  float: left;
  top:300px;
  left: 70px;
}

.title1 {
  background: url("./邂逅1/暗2-1.png");
  background-size: 100% 100%;
  height: 47px;
  width: 190px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  margin-bottom: 20px;
}
.title1:hover, .title1:focus {
  background: url("./邂逅1/title2-1.png");
  background-size: 100% 100%;
  cursor: pointer;
  margin-bottom: 20px;
}

.title2 {
  background: url("./邂逅1/暗2-2.png");
  background-size: 100% 100%;
  height: 47px;
  width: 190px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  margin-bottom: 20px;
}

.title2:hover, .title2:focus {
  background: url("./邂逅1/title2-2.png");
  background-size: 100% 100%;
  cursor: pointer;
  margin-bottom: 20px;
}

.title3 {
  background: url("./邂逅1/暗2-3.png");
  background-size: 100% 100%;
  height: 47px;
  width: 190px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  margin-bottom: 20px;
}

.title3:hover, .title3:focus {
  background: url("./邂逅1/title2-3.png");
  background-size: 100% 100%;
  cursor: pointer;
  margin-bottom: 20px;
}



.choice {
  display: flex;
  flex-direction: column;
  position: relative;
  float: left;
  top: 405px;
  left: 27px;
}

.choice1 {
  background: url("./邂逅1/goaway.png");
  background-size: 100% 100%;
  height: 132px;
  width: 46px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  margin-bottom: 25px;
}

.choice2 {
  background: url("./邂逅1/stay.png");
  background-size: 100% 100%;
  height: 132px;
  width: 46px;
  display: inline-block;
  position: relative;
  cursor: pointer;
}

</style>