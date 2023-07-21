<template>
  <div>
    <div class="zzp">
      <img
        src="@/assets/aboutCharlie/查兆澎.png"
        @click="setSelectedCharacter('查兆澎')"
        alt="查兆澎"
      />
      <div class="popup" v-show="showPopup" @click="showPopup = false">
        <myShip
          :characterName="selectedCharacter.name"
          :characterImg="selectedCharacter.img"
          :characterDetail="selectedCharacter.detail"
        ></myShip>
      </div>
    </div>

    <div class="xh">
      <img
        src="@/assets/aboutCharlie/羲和.png"
        @click="setSelectedCharacter('羲和')"
        alt="查兆澎"
      />
      <div class="popup" v-show="showPopup" @click="showPopup = false">
        <myShip
          :characterName="selectedCharacter.name"
          :characterImg="selectedCharacter.img"
          :characterDetail="selectedCharacter.detail"
        ></myShip>
      </div>
    </div>

    <div class="js">
      <img
        src="@/assets/aboutCharlie/吉叔.png"
        @click="setSelectedCharacter('吉叔（吉修）')"
        alt="吉叔"
      />
      <div class="popup" v-show="showPopup" @click="showPopup = false">
        <myShip
          :characterName="selectedCharacter.name"
          :characterImg="selectedCharacter.img"
          :characterDetail="selectedCharacter.detail"
        ></myShip>
      </div>
    </div>

    <div class="zlf">
      <img
        src="@/assets/aboutCharlie/查理芬.png"
        @click="setSelectedCharacter('查理芬')"
        alt="查理芬"
      />
      <div class="popup" v-show="showPopup" @click="showPopup = false">
        <myShip
          :characterName="selectedCharacter.name"
          :characterImg="selectedCharacter.img"
          :characterDetail="selectedCharacter.detail"
        ></myShip>
      </div>
    </div>

    <div class="alan">
      <img
        src="@/assets/aboutCharlie/alan.png"
        @click="setSelectedCharacter('Alan')"
        alt="查理芬"
      />
      <div class="popup" v-show="showPopup" @click="showPopup = false">
        <myShip
          :characterName="selectedCharacter.name"
          :characterImg="selectedCharacter.img"
          :characterDetail="selectedCharacter.detail"
        ></myShip>
      </div>
    </div>

    <div class="mk">
      <img
        src="@/assets/aboutCharlie/马克.png"
        @click="setSelectedCharacter('马克（Mark Alexander）')"
        alt="羲和"
      />
      <div class="popup" v-show="showPopup" @click="showPopup = false">
        <myShip
          :characterName="selectedCharacter.name"
          :characterImg="selectedCharacter.img"
          :characterDetail="selectedCharacter.detail"
        ></myShip>
      </div>
    </div>
    <div class="stz">
      <img
        src="@/assets/aboutCharlie/孙泰中.png"
        @click="setSelectedCharacter('孙泰中（已故）')"
        alt="孙泰中"
      />
      <div class="popup" v-show="showPopup" @click="showPopup = false">
        <myShip
          :characterName="selectedCharacter.name"
          :characterImg="selectedCharacter.img"
          :characterDetail="selectedCharacter.detail"
        ></myShip>
      </div>
    </div>
    <div class="axn">
      <img
        src="@/assets/aboutCharlie/埃西诺.png"
        @click="setSelectedCharacter('埃西诺')"
        alt="羲和"
      />
      <div class="popup" v-show="showPopup" @click="showPopup = false">
        <myShip
          :characterName="selectedCharacter.name"
          :characterImg="selectedCharacter.img"
          :characterDetail="selectedCharacter.detail"
        ></myShip>
      </div>
    </div>
    <div class="hgh">
      <img
        src="@/assets/aboutCharlie/何国恒.png"
        @click="setSelectedCharacter('何国恒（老何）')"
        alt="羲和"
      />
      <div class="popup" v-show="showPopup" @click="showPopup = false">
        <myShip
          :characterName="selectedCharacter.name"
          :characterImg="selectedCharacter.img"
          :characterDetail="selectedCharacter.detail"
        ></myShip>
      </div>
    </div>

    <div class="shy">
      <img
        src="@/assets/aboutCharlie/时晏.png"
        @click="setSelectedCharacter('时晏')"
        alt="羲和"
      />
      <div class="popup" v-show="showPopup" @click="showPopup = false">
        <myShip
          :characterName="selectedCharacter.name"
          :characterImg="selectedCharacter.img"
          :characterDetail="selectedCharacter.detail"
        ></myShip>
      </div>
    </div>

    <div class="sy" :class="{ 'gold-border': showPopup }">
      <img
        src="@/assets/aboutCharlie/舒云.png"
        @click="setSelectedCharacter('舒云')"
        alt="羲和"
      />
      <div class="popup" v-show="showPopup" @click="showPopup = false">
        <myShip
          :characterName="selectedCharacter.name"
          :characterImg="selectedCharacter.img"
          :characterDetail="selectedCharacter.detail"
        ></myShip>
      </div>
    </div>
    <div class="dl" :class="{ 'gold-border': showPopup }">
      <img
        src="@/assets/aboutCharlie/迪伦.png"
        @click="setSelectedCharacter('迪伦')"
        alt="羲和"
      />
      <div class="popup" v-show="showPopup" @click="showPopup = false">
        <myShip
          :characterName="selectedCharacter.name"
          :characterImg="selectedCharacter.img"
          :characterDetail="selectedCharacter.detail"
        ></myShip>
      </div>
    </div>
    <div class="ow">
      <img
        src="@/assets/aboutCharlie/欧文.png"
        @click="setSelectedCharacter('欧文')"
        alt="羲和"
      />
      <div class="popup" v-show="showPopup" @click="showPopup = false">
        <myShip
          :characterName="selectedCharacter.name"
          :characterImg="selectedCharacter.img"
          :characterDetail="selectedCharacter.detail"
        ></myShip>
      </div>
    </div>

    <div class="la">
      <img
        src="@/assets/aboutCharlie/莱昂.png"
        @click="setSelectedCharacter('莱昂')"
        alt="羲和"
      />
      <div class="popup" v-show="showPopup" @click="showPopup = false">
        <myShip
          :characterName="selectedCharacter.name"
          :characterImg="selectedCharacter.img"
          :characterDetail="selectedCharacter.detail"
        ></myShip>
      </div>
    </div>

    <div class="xlj">
      <img
        src="@/assets/aboutCharlie/雪莉酒.png"
        @click="setSelectedCharacter('雪莉酒')"
        alt="雪莉酒"
      />
      <div class="popup" v-show="showPopup" @click="showPopup = false">
        <myShip
          :characterName="selectedCharacter.name"
          :characterImg="selectedCharacter.img"
          :characterDetail="selectedCharacter.detail"
        ></myShip>
      </div>
    </div>
    <div class="dnns">
      <img
        src="@/assets/aboutCharlie/丹尼医生.png"
        @click="setSelectedCharacter('丹尼医生')"
        alt="丹尼医生"
      />
      <div class="popup" v-show="showPopup" @click="showPopup = false">
        <myShip
          :characterName="selectedCharacter.name"
          :characterImg="selectedCharacter.img"
          :characterDetail="selectedCharacter.detail"
        ></myShip>
      </div>
    </div>
    <div class="klm">
      <img
        src="@/assets/aboutCharlie/克勒曼.png"
        @click="setSelectedCharacter('克勒曼')"
        alt="克勒曼"
      />
      <div class="popup" v-show="showPopup" @click="showPopup = false">
        <myShip
          :characterName="selectedCharacter.name"
          :characterImg="selectedCharacter.img"
          :characterDetail="selectedCharacter.detail"
        ></myShip>
      </div>
    </div>
    <div class="bs">
      <img
        src="@/assets/aboutCharlie/BensonSteven.png"
        @click="setSelectedCharacter('Benson Steven')"
        alt="克勒曼"
      />
      <div class="popup" v-show="showPopup" @click="showPopup = false">
        <myShip
          :characterName="selectedCharacter.name"
          :characterImg="selectedCharacter.img"
          :characterDetail="selectedCharacter.detail"
        ></myShip>
      </div>
    </div>

    <div class="mzy">
      <img
        src="@/assets/aboutCharlie/孟泽洋.png"
        @click="setSelectedCharacter('孟泽洋 Katy')"
        alt="孟泽洋"
      />
      <div class="popup" v-show="showPopup" @click="showPopup = false">
        <myShip
          :characterName="selectedCharacter.name"
          :characterImg="selectedCharacter.img"
          :characterDetail="selectedCharacter.detail"
        ></myShip>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      showPopup: false,
      selectedCharacter: {
        name: "",
        img: "",
        detail: {},
      },
    };
  },
  methods: {
    closePopup() {
      this.showPopup = false;
    },
    setSelectedCharacter(name) {
      this.selectedCharacter.name = name;
      this.selectedCharacter.img = "";
      this.showPopup = true;
      this.getcontent(this.selectedCharacter.name);
    },

    getcontent(name) {
      const params = {
        name: encodeURIComponent(name),
      };
      const url = `http://47.243.195.59:8080/characters?name=${params.name}`;
      axios
        .get(url)
        .then((res) => {
          const characterData = {
            name: res.data.name,
            detail: res.data.details,
            img: res.data.img,
          };
          this.selectedCharacter = characterData;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
<style>
.zzp img:hover {
  background-color: #513c74;
  border: 5px solid #ba9c58;
  border-radius: 50%;
}
.zzp img {
  position: absolute;
  height: 246px;
  width: 246px;
  top: 320px;
  left: 470px;
  cursor: pointer;
}
.xh img {
  position: absolute;
  height: 230px;
  width: 230px;
  top: 780px;
  left: 570px;
  cursor: pointer;
}
.xh img:hover {
  background-color: #513c74;
  border: 5px solid #ba9c58;
  border-radius: 50%;
}

.bs img {
  position: absolute;
  height: 150px;
  width: 150px;
  top: 200px;
  right: 120px;
  cursor: pointer;
}
.bs img:hover {
  background-color: #513c74;
  border: 5px solid #ba9c58;
  border-radius: 50%;
}

.js img {
  position: absolute;
  height: 206px;
  width: 206px;
  top: 850px;
  left: 850px;
  cursor: pointer;
}
.js img:hover {
  background-color: #513c74;
  border: 5px solid #ba9c58;
  border-radius: 50%;
}

.zlf img {
  position: absolute;
  height: 178px;
  width: 178px;
  top: 300px;
  left: 200px;
  cursor: pointer;
}

.zlf img:hover {
  background-color: #513c74;
  border: 5px solid #ba9c58;
  border-radius: 50%;
}
.xlj img {
  position: absolute;
  height: 178px;
  width: 178px;
  top: 580px;
  left: 400px;
  cursor: pointer;
}

.xlj img:hover {
  background-color: #513c74;
  border: 5px solid #ba9c58;
  border-radius: 50%;
}

.klm img {
  position: absolute;
  height: 138px;
  width: 138px;
  top: 710px;
  left: 220px;
  cursor: pointer;
}

.klm img:hover {
  background-color: #513c74;
  border: 5px solid #ba9c58;
  border-radius: 50%;
}

.dnns img {
  position: absolute;
  height: 148px;
  width: 148px;
  top: 500px;
  left: 130px;
  cursor: pointer;
}

.dnns img:hover {
  background-color: #513c74;
  border: 5px solid #ba9c58;
  border-radius: 50%;
}
.mzy img {
  position: absolute;
  height: 133px;
  width: 133px;
  top: 870px;
  left: 80px;
  cursor: pointer;
}

.mzy img:hover {
  background-color: #513c74;
  border: 5px solid #ba9c58;
  border-radius: 50%;
}

.sy img {
  position: absolute;
  height: 157px;
  width: 157px;
  top: 880px;
  left: 310px;
  cursor: pointer;
}
.sy img:hover {
  background-color: #513c74;
  border: 5px solid #ba9c58;
  border-radius: 50%;
}
.alan img {
  position: absolute;
  height: 140px;
  width: 140px;
  bottom: 80px;
  right: 670px;
  cursor: pointer;
}

.alan img:hover {
  background-color: #513c74;
  border: 5px solid #ba9c58;
  border-radius: 50%;
}
.hgh img {
  position: absolute;
  height: 210px;
  width: 210px;
  top: 410px;
  right: 500px;
  cursor: pointer;
}
.hgh img:hover {
  background-color: #513c74;
  border: 5px solid #ba9c58;
  border-radius: 50%;
}
.axn img {
  position: absolute;
  height: 188px;
  width: 188px;
  bottom: 200px;
  right: 500px;
  cursor: pointer;
}

.axn img:hover {
  background-color: #513c74;
  border: 5px solid #ba9c58;
  border-radius: 50%;
}
.mk img {
  position: absolute;
  height: 188px;
  width: 188px;
  top: 180px;
  right: 650px;
  cursor: pointer;
}
.mk img:hover {
  background-color: #513c74;
  border: 5px solid #ba9c58;
  border-radius: 50%;
}
.la img {
  position: absolute;
  height: 117px;
  width: 117px;
  bottom: 130px;
  right: 350px;
  cursor: pointer;
}
.la img:hover {
  background-color: #513c74;
  border: 5px solid #ba9c58;
  border-radius: 50%;
}
.stz img {
  position: absolute;
  height: 175px;
  width: 175px;
  bottom: 350px;
  right: 250px;
  cursor: pointer;
}
.stz img:hover {
  background-color: #513c74;
  border: 5px solid #ba9c58;
  border-radius: 50%;
}
.shy img {
  position: absolute;
  height: 157px;
  width: 157px;
  top: 400px;
  right: 120px;
  cursor: pointer;
}
.shy img:hover {
  background-color: #513c74;
  border: 5px solid #ba9c58;
  border-radius: 50%;
}
.dl img {
  position: absolute;
  height: 152px;
  width: 152px;
  top: 250px;
  right: 350px;
  cursor: pointer;
}
.dl img:hover {
  background-color: #513c74;
  border: 5px solid #ba9c58;
  border-radius: 50%;
}
.ow img {
  position: absolute;
  height: 125px;
  width: 125px;
  bottom: 100px;
  right: 170px;
  cursor: pointer;
}
.ow img:hover {
  background-color: #513c74;
  border: 5px solid #ba9c58;
  border-radius: 50%;
}
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup {
  width: 1272px;
  height: 540px;
}
</style>
