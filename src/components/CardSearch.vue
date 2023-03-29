<script>
import { store } from "../store.js";
export default {
  name: 'CardSearch',
  data() {
    return {
      store,
    }
  }
}
</script>
<template>
  <div class="search-container">
    <input type="text" v-model="store.cardName" @keyup.enter="$emit('filterCard')">

    <select name="type" id="type" v-model="this.store.cardType" @keyup.enter="$emit('filterCard')">
      <option value=""></option>
      <option value="normal%20monster">Normal Monster</option>
      <option value="effect%20monster">Effect Monster</option>
      <option value="synchro%20monster">Synchro Monster</option>
      <option value="spell%20card">Spell Card</option>
      <option value="trap%20card">Trap Card</option>
    </select>

    <button class="btn" @click="$emit('filterCard')">Search</button>
  </div>
</template>
<style lang="scss" scoped>
.search-container {
  display: flex;
  justify-content: center;
  gap: 2em;
  margin-bottom: 2em;

  input {
    width: 250px;
    border-radius: .5em;
    border: none;

    padding: 0 1em;

    &:focus-visible {
      outline: none
    }
  }

  .btn {
    padding: .5em 2em;
    border: none;
    border-radius: .5em;
    background-color: #efc726;
  }

}
</style>