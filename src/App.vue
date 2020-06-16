<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mockapi, list } from '@/api'
export default {
  data() {
    return {}
  },

  created() {
    this.list()
  },

  methods: {
    async mockapi() {
      await mockapi().then((res) => {
        console.log(res)
      })
    },

    async list() {
      await list().then((res) => {
        console.log(res)
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
