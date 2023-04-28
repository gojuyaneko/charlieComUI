<template>
  <header class="charlie-nav">
    <div data-device='pc'>
        <div class="pc-nav">
            <div class="pc-nav-theme">
                网页主题
            </div>
            <div class="pc-nav-itembar">
                <ul class="pc-nav-items">
                    <li class="pc-nav-single" v-for="item in navItems" :key="item" @click="goTo(item.nextUrl)">
                        <span>{{item.name}}</span> 
                        <ul class="pc-nav-schild">
                          <li v-for="childitem in item.childItems" :key="childitem">
                            {{childitem.name}}
                          </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- <div data-device='mobile' style="display:none;">移动端标题适配暂时搁置</div> -->
  </header>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
        navItems:[
            {
                name:'首页',
                nextUrl:'/',
                childItems:[]
            },
            {
                name:'Charlie档案',
                nextUrl:'/archive',
                childItems:[]
            },
            {
                name:'活动回顾',
                nextUrl:'/review',
                childItems:[
                  {
                    name:'个人活动',
                    nextUrl:'',
                  },
                  {
                    name:'全体活动',
                    nextUrl:'',
                  }
                ]
            },
            {
                name:'甜蜜互动',
                nextUrl:'/interaction',
                childItems:[]
            },
            {
                name:'工作室',
                nextUrl:'/studio',
                childItems:[]
            }
            
        ]
            
        
    }
  },
  mounted () {},
  methods: {
    goTo(url){
      this.$router.push(url)
    }
  }
}
</script>

<style scoped lang="scss">
.charlie-nav {
  height: 2.5rem;
  background-color: purple;
  .pc{
    height: 2.5rem;
  }
}
.pc-nav-theme {
  height: inherit;
  display: flex;
  align-items: center;
}
.pc-nav {
  display: grid;
  height: 2.5rem;
  grid-template-columns:auto auto ;
  max-width: 1600px;
  -webkit-user-select: none;
}
.pc-nav-itembar {
  display: grid;
  height: 100%;
  align-items: center;
  .pc-nav-items{
    display: flex;
    height: 100%;
  }
}
.pc-nav-single{
  cursor: pointer;
  text-align: center;
  height: inherit;
  position: relative;
  display: flex;
  align-items: center;
  padding-right: 1rem;
  .pc-nav-schild{
    display: none;
    position: absolute;
    top:100%;
    overflow: hidden;
    li{
      border-bottom: 1px dashed white;
      padding: 1rem 0.5rem;
      background-color: pink;
    }
  }
}
.pc-nav-single:hover{
  .pc-nav-schild{
  display: block;
}
}

</style>
