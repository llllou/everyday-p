<template>
  <div>
    <header>
      <div class="banner">
        <span class="icon-mail"></span>
        <span class="icon-refresh"></span>
        <span class="icon-search"></span>
        <h2>今日头条</h2>
      </div>
      <div class="web-map">
        <ul>
          <li v-for="item in items">{{item}}</li>
        </ul>
        <span class="icon-plus"></span>
      </div>
    </header>
  </div>
</template>
<script type="text/javascript">

  export default{
    name: 'navHeader',
    data () {
      return {
        items: ['推荐', '热点', '社会', '娱乐', '军事', '科技', '汽车', '体育', '财经', '国际', '时尚']
      }
    },
    mounted () {
      console.log(this.items.length)
      $('.web-map ul').css('width', (this.items.length + 1) * 1.9 + 'rem')
    }
  }
</script>
