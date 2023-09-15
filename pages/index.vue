<template>
  <div v-if="pageLoaded">
    <PageA v-if="selectedPage === 'a'" />
    <PageB v-else-if="selectedPage === 'b'" />
  </div>
</template>

<script>
import nuxtStorage from 'nuxt-storage';

export default {
  name: 'IndexPage',
  data: () => ({
    pageVariants: ['a', 'b'],
    selectedPage: '',
    pageLoaded: false
  }),
  created () {
    this.initPage()
  },
  methods: {
    initPage () {
      const abctest = this.$route.query.abctest

      if (abctest && this.pageVariants.includes(abctest)) {
        this.selectedPage = abctest
      } else {
        if (nuxtStorage.localStorage.getData('selectedPage')) {
          this.selectedPage = nuxtStorage.localStorage.getData('selectedPage')
        } else {
          const randomPage = this.pageVariants[Math.floor(Math.random() * this.pageVariants.length)]
          this.selectedPage = randomPage
          nuxtStorage.localStorage.setData('selectedPage', randomPage)
        }
      }
      this.pageLoaded = true
    }
  }
}
</script>
