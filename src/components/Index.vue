<template>
  <div class="">
    <nav-header></nav-header>
  </div>
</template>
<script>
import Header from '@/components/Header'
export default {
  name: 'Index',
  data () {
    return {
      content: [],
      params: {
        category: 'news_hot',
        count: 20,
        min_behot_time: '',
        last_refresh_sub_entrance_interval: '',
        language: 'zh'
      }
    }
  },
  components: {
    navHeader: Header
  },
  methods: {
    getData () {
      console.log('hh')
    }
  },
  mounted () {
    this.getData()
  }
}
</script>


