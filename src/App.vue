<template>
  <div
    class="app"
    :class="{'app--visible': appLoaded}"
  >
    <MainHeader />
    <ContactForm />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <MainFooter />
  </div>
</template>

<static-query>
  query {
    metadata {
      siteName
      siteDescription
    }
  }
</static-query>

<script>
import MainHeader from '~/components/layout/MainHeader'
import MainFooter from '~/components/layout/MainFooter'
import ContactForm from '~/components/contact/ContactForm'
import {mapState} from 'vuex'
export default {
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$static.metadata.siteDescription
        }
      ]
    }
  },
  computed: {
    ...mapState(['appLoaded'])
  },
  mounted() {
    setTimeout(() => {
      this.$store.commit('setState', ['appLoaded', true])
    }, 400)
  },
  components: {
    MainHeader,
    MainFooter,
    ContactForm
  },
}
</script>

<style lang="scss">
  .app {
    min-height: 100vh;
    overflow-x: hidden;
    opacity: 0;
    transition: .4s ease;
    &--visible {
      opacity: 1;
    }
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .55s ease-in-out;
  }
  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
</style>
