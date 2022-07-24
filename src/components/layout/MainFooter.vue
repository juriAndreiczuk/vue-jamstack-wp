<template>
  <footer class="main-footer">
    <p>FollowVision {{currentYear}}. All right reserved &copy;</p>
  </footer>
</template>

<script>
export default {
  computed: {
    currentYear() {
      const currentDate = new Date()
      return currentDate.getFullYear()
    }
  }
}
</script>
