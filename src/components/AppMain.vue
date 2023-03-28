<script>
import { store } from "../store.js";
import axios from 'axios';
import CardItem from "./CardItem.vue";

export default {
  name: 'AppMain',
  data() {
    return {
      store,
    }
  },
  components: {
    CardItem,
  },
  created() {
    axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=2000&offset=0').then((res) => {
      this.store.cards = res.data.data;
      this.store.isLoading = false;
    });
  }
}
</script>
<template>
  <div class="container" v-if="this.store.isLoading == false">
    <h1>YuGiOh Cards</h1>
    <div id="card-list">
      <CardItem v-for="card in store.cards" :cards="card"></CardItem>
    </div>
  </div>
</template>
<style lang="scss" scoped>
h1 {
  text-align: center;
  padding: 1em;
}

#card-list {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 1em;
}
</style>