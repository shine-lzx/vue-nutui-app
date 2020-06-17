<template>
  <div>login</div>
</template>

<script>
import Person from './choose'
export default {
  created() {
    const p = new Person({ active: 1 })
    console.log(p.activeToBoolean) // 输出 true
    setTimeout(() => {
      p.active = 0
      console.log(p.activeToBoolean) // 输出 false
    }, 3000)
  },
}
</script>

<style></style>
