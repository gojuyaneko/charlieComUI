<template>
  <div class="truth-or-dare">
    <ul>
      <li v-for="item in tdItems" :key="item"></li>
    </ul>
  </div>
</template>

<script>
  export default {
    data (){
      return {
        tdItems: [
          {
            type:'truth',
            person:'charlie'
          },
          {
            type:'truth',
            person:'me'
          },
          {
            type:'dare',
            person:'charlie'
          },
          {
            type:'dare',
            person:'me'
          }
        ]
      }
    }
  }
</script>