<template>
  <div class="truth-or-dare">
    <div class="td-l-n">
      LIGHT AND NIGHT
    </div>
    <div>
      <h3 class="td-h3-text">
        真心话大冒险
      </h3>
      <h4 class="td-h4-text">
        Truth or dare
      </h4>
    </div>
   <div class="td-com-card">
      <td-card></td-card> 
        </div>
    
  </div>
</template>

<script>
import tdCard from '@/pages/subitems/sweet/truthOrDare/components/tdCard'
export default {
  components:{ tdCard }
}
</script>

<style scoped lang="scss">
.truth-or-dare {
  width: 100%;
  height: 100%;
  background: url('./img/tdbg.png') no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
}

.td-items {
  display: flex;
  position: absolute;
  top: 260px;
  left: 210px;
}

.td-item-li {
  margin-right: 60px;
  cursor: pointer;
}

.td-item-img {
  width: 337px;
  height: 513px;
}

.td-l-n {
  writing-mode: vertical-lr;
  font-size: 50px;
  font-family: "Branch";
  color: rgba(0, 0, 0, 0.478);
  line-height: 0.226;
  -moz-transform: matrix(0.81091601581285, 0, 0, 0.81091601581285, 0, 0);
  -webkit-transform: matrix(0.81091601581285, 0, 0, 0.81091601581285, 0, 0);
  -ms-transform: matrix(0.81091601581285, 0, 0, 0.81091601581285, 0, 0);
  position: absolute;
  left: 135px;
  top: 225px;
  width: 76px;
  z-index: 18;

}

.td-h3-text {
  font-size: 86px;
  font-family: "nansongshuju";
  color: rgb(10, 5, 4);
  line-height: 1.2;
  -moz-transform: scale(1.07, 1);
  -webkit-transform: scale(1.07, 1);
  -ms-transform: scale(1.07, 1);
  position: relative;
  left: 1232px;
  top: 748px;
  width: 542.413px;
  height: 79.867px;
  z-index: 21;

}

.td-h4-text {
  font-size: 70px;
  font-family: "Branch";
  color: rgba(65, 32, 128, 0.502);
  line-height: 1.2;
  -moz-transform: matrix(1.09559805446257, 0, 0, 1.02392341538558, 0, 0);
  -webkit-transform: matrix(1.09559805446257, 0, 0, 1.02392341538558, 0, 0);
  -ms-transform: matrix(1.09559805446257, 0, 0, 1.02392341538558, 0, 0);
  position: relative;
  left: 1440px;
  top: 712px;
  z-index: 20;
}
.td-com-card {
  position: relative;
  top: 40px;
  left:110px;
  z-index: 99;
}

</style>
