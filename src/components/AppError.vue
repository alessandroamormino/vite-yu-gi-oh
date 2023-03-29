<script>
import { store } from "../store.js";
export default {
  name: 'AppError',
  data() {
    return {
      store,
    }
  }
}
</script>
<template>
  <div class="error-container">
    <h1>Error {{ store.error }}</h1>
    <p>Non sono state trovate carte con i parametri impostati</p>
  </div>
</template>
<style lang="scss" scoped>
.error-container {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  margin: 1em 0;

  h1 {
    color: rgb(255, 0, 0);
  }

  p {
    font-style: italic;
  }
}
</style>