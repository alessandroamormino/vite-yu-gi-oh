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
    axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0').then((res) => {
      this.store.cards = res.data.data;
      console.log(this.store.cards);
    });
  }
}
</script>
<template>
  <div id="card-list">
    <CardItem v-for="card in store.cards" :cards="card"></CardItem>
  </div>
</template>
<style lang="scss" scoped></style>