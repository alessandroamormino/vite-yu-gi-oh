<script>
import { store } from "../store.js";
export default {
  name: 'CardCount',
  data() {
    return {
      store,
    }
  }
}
</script>
<template>
  <div class="count">
    <h2>Sono state caricate {{ this.store.cards.length }} carte!</h2>
  </div>
</template>
<style lang="scss" scoped>
.count {
  display: flex;
  justify-content: center;

  margin-bottom: 2em;
  font-style: italic;
}
</style>