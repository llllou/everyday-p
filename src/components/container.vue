<template>
  <div class="content">
    <div class="upper">
      <h3><a :href=""></a></h3>
    </div>
    <div class="mid">
      <img :src="imageList[0].url" alt="">
      <img :src="imageList[1].url" alt="">
      <img :src="imageList[2].url" alt="">
    </div>
    <div class="down">

    </div>
  </div>
</template>
<script>
  export default{
    name:"container",
    prop:[content],
    data(){
      return {
        imageList:this.content.image_list,
        title:this.content.title,
        link:this.content.article_url,
        author:this.content.user_info.name,
        count:this.content.read_count
      }
    },
    computed:{
      num:() =>{
        return this.imageList.length
      }
    }
  }
</script>
<style scoped>
  .content{
    width: 9.4rem;
    margin: 0 0.3rem;
    border-bottom: 1px solid #eee;
  }
  .upper
  {
    float: left;
    font-size: 0.7rem;
    font-weight: bold;
    color: #000;
  }
  .mid
  {
    float: left;
    display: flex;
  }
</style>
