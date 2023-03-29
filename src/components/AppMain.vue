<script>
import { store } from "../store.js";
import axios from 'axios';
import CardItem from "./CardItem.vue";
import CardSearch from "./CardSearch.vue";
import CardCount from "./CardCount.vue";
import AppError from "./AppError.vue";

export default {
  name: 'AppMain',
  data() {
    return {
      store,
    }
  },
  components: {
    CardItem,
    CardSearch,
    CardCount,
    AppError,
  },
  methods: {
    filter() {
      let newAPIStrin = `${this.store.stringAPI}`;

      if (this.store.cardName != '') {
        newAPIStrin += `&fname=${this.store.cardName}`;
      }
      if (this.store.cardType != '') {
        newAPIStrin += `&type=${this.store.cardType}`;
      }

      axios.get(newAPIStrin).then((res) => {
        this.store.cards = res.data.data;
        this.store.isLoading = false;
        this.store.error = '';
      }).catch((error) => {
        this.store.error = error.response.status;
      });
    }
  },

  created() {
    axios.get(this.store.stringAPI).then((res) => {
      this.store.cards = res.data.data;
      this.store.isLoading = false;
    });
  }
}
</script>
<template>
  <div class="container" v-if="this.store.isLoading == false">
    <h1>YuGiOh Cards - API</h1>
    <CardSearch @filterCard="filter()"></CardSearch>
    <CardCount></CardCount>
    <AppError v-if="this.store.error != ''"></AppError>
    <div id="card-list">
      <CardItem v-for="card in store.cards" :cards="card"></CardItem>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
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

}
</style>