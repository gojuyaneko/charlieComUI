<template>
  <div class="pc-footer">
    <div class="name">
      <img src="./../assets/HomePage/CharlieLove.png" />
    </div>
    <div class="aboutus">
      <div class="title">关于我们</div>
      <div
        style="
          font-family: 'nansongshuju';
          color: #848484;
          text-align: center;
          font-size: 18px;
          margin-top: 20px;
          letter-spacing: 3px;
        "
      >
        本站部分素材来源于北极光工作室-《光与夜之恋》，<br />

        仅供交流学习使用，不用于任何商业用途
      </div>
    </div>

    <div class="email">
      <div class="title">反馈邮箱</div>
      <div
        style="
          font-family: 'nansongshuju';
          color: #848484;
          text-align: center;
          font-size: 18px;
          margin-top: 35px;
          letter-spacing: 4px;
        "
      >
        CharlieLovesU.163.com
      </div>
    </div>

    <div class="icon">
      <div class="title">关注我们</div>
      <a target="_blank" :href="page1Link">
        <img
          src="@/assets/HomePage/wb拷贝.png"
          @mouseover="image1 = hoverImage1"
          @mouseout="image1 = normalImage1"
          class="icon-image"
        />
      </a>
      <a target="_blank" :href="page2Link">
        <img
          src="@/assets/HomePage/b拷贝.png"
          @mouseover="src = hoverImage2"
          @mouseout="image2 = normalImage2"
          class="icon-image"
        />
      </a>
      <a target="_blank" :href="page3Link">
        <img
          src="@/assets/HomePage/red拷贝.png"
          @mouseover="image3 = hoverImage3"
          @mouseout="image3 = normalImage3"
          class="icon-image"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "navBar",
  data() {
    return {
      normalImage1: "@/assets/HomePage/wb拷贝.png",
      hoverImage1: "@/assets/HomePage/wb.png",
      image1: "@/assets/HomePage/wb拷贝.png",

      normalImage2: "@/assets/HomePage/red拷贝.png",
      hoverImage2: "@/assets/HomePage/red.png",
      image2: "@/assets/HomePage/red拷贝.png",

      normalImage3: "@/assets/HomePage/b拷贝.png",
      hoverImage3: "@/assets/HomePage/b.png",
      image3: "@/assets/HomePage/b拷贝.png",

      // 其他数据...
    };
  },
  computed: {
    page1Link() {
      return "https://weibo.com/u/7847997743";
    },
    page2Link() {
      return "https://space.bilibili.com/6725189?spm_id_from=333.1007.0.0";
    },
    page3Link() {
      return "https://www.xiaohongshu.com/user/profile/5ac8e151e8ac2b7691170160";
    },
  },
};
</script>

<style scoped>
.icon-image {
  backface-visibility: hidden;
}
::-webkit-scrollbar {
  display: none;
}
.pc-footer {
  position: relative;
  background: url("./../assets/HomePage/图层0.png") no-repeat;
  background-size: 100% 100%;
  width: 1920px;
  height: 229px;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.name {
  position: absolute;
  top: 10px;
  left: 40%;
}
.name img {
  width: 322px;
  height: 34px;
}
.aboutus {
  position: absolute;
  top: 80px;
  left: 0px;
  width: 740px;
  height: 100px;
}
.email {
  position: absolute;
  top: 80px;

  left: 850px;
  width: 290px;
  height: 100px;
}
.icon {
  position: absolute;
  top: 80px;

  left: 1400px;
}
.icon img {
  margin: 10px;
  margin-top: 20px;
  width: 53px;
  height: 53px;
}
.title {
  color: #d5b265;
  text-align: center;
  font-size: 20px;
  font-family: "nansongshuju";
  letter-spacing: 2px;
}
.text {
  font-family: "nansongshuju";
}
</style>
