<script>
import { store } from "./store.js";
import AppMain from "./components/AppMain.vue";
import AppLoader from "./components/AppLoader.vue";
export default {
  data() {
    return {
      store,
    }
  },
  components: {
    AppMain,
    AppLoader,
  }
}
</script>

<template>
  <AppLoader v-if="this.store.isLoading"></AppLoader>
  <AppMain></AppMain>
</template>

<style lang="scss">
body {
  background-color: antiquewhite;
}
</style>
