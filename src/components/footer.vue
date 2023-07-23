<template>
  <div class="pc-footer">
    <div class="name">
      <img src="./../assets/HomePage/CharlieLove.png" />
    </div>
    <div class="aboutus">
      <div class="title">关于我们</div>
      <div class="content">
        本站部分素材来源于北极光工作室-《光与夜之恋》，<br />

        仅供交流学习使用，不用于任何商业用途
      </div>
    </div>

    <div class="email">
      <div class="title">反馈邮箱</div>
      <div class="content">CharlieLovesU@163.com</div>
    </div>

    <div class="icon">
      <div class="title">关注我们</div>
      <a target="_blank" :href="page1Link">
        <img
          :src="image1"
          @mouseover="image1 = hoverImage1"
          @mouseout="image1 = normalImage1"
          class="icon-image"
        />
      </a>
      <a target="_blank" :href="page2Link">
        <img
          :src="image2"
          @mouseover="image2 = hoverImage2"
          @mouseout="image2 = normalImage2"
          class="icon-image"
        />
      </a>
      <a target="_blank" :href="page3Link">
        <img
          :src="image3"
          @mouseover="image3 = hoverImage3"
          @mouseout="image3 = normalImage3"
          class="icon-image"
        />
      </a>
    </div>
  </div>
</template>

<script>
import normalImage1 from "@/assets/HomePage/wb拷贝.png";
import hoverImage1 from "@/assets/HomePage/wb.png";
import normalImage2 from "@/assets/HomePage/red拷贝.png";
import hoverImage2 from "@/assets/HomePage/red.png";
import normalImage3 from "@/assets/HomePage/b拷贝.png";
import hoverImage3 from "@/assets/HomePage/b.png";

export default {
  name: "navBar",
  data() {
    return {
      normalImage1: normalImage1,
      hoverImage1: hoverImage1,
      image1: normalImage1,
      normalImage2: normalImage2,
      hoverImage2: hoverImage2,
      image2: normalImage2,
      normalImage3: normalImage3,
      hoverImage3: hoverImage3,
      image3: normalImage3,

      // 其他数据...
    };
  },
  computed: {
    page1Link() {
      return "https://weibo.com/u/7847997743";
    },
    page2Link() {
      return "https://www.xiaohongshu.com/user/profile/5ac8e151e8ac2b7691170160";
    },
    page3Link() {
      return "https://space.bilibili.com/6725189?spm_id_from=333.1007.0.0";
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
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-bottom: 30px;

  top: 10px;
}
.name img {
  width: 322px;
  height: 34px;
}
.aboutus {
  position: absolute;
  transform: translate(-50%, -50%);
  padding-top: 50px;
  top: 90px;
  left: 20%;
  width: 740px;
  height: 100px;
}
.email {
  position: absolute;
  top: 90px;

  left: 50%;
  transform: translate(-50%, -50%);
  padding-top: 50px;
  width: 290px;
  height: 100px;
}
.icon {
  position: absolute;
  left: 78%;
  transform: translate(-50%, -50%);
  padding-top: 50px;
  top: 90px;

  cursor: pointer;
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

.content {
  font-family: "nansongshuju";
  color: #848484;
  text-align: center;
  font-size: 15px;
  margin-top: 20px;
  letter-spacing: 3px;
}
.pc-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.aboutus {
  flex: 1;
  text-align: center;
}

.email {
  flex: 1;
  text-align: center;
}

.icon {
  flex: 1;
  text-align: center;
}
</style>
