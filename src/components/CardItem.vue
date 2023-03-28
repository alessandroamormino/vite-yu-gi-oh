<script>

export default {
  name: 'CardItem',
  data() {
    return {

    }
  },
  props: {
    cards: Object,
  }

}
</script>
<template>
  <div class="card"
    :class="cards.type.includes('Monster') ? 'monster' : cards.type.includes('Spell') ? 'spell' : cards.type.includes('Trap') ? 'trap' : ''">
    <div class=" name">{{ cards.name }}</div>
    <div class="type">{{ cards.type }}</div>
    <div class="desc">{{ cards.desc }}</div>
    <div class="image">
      <img :src="cards.card_images[0].image_url_cropped" alt="">
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card {
  width: 300px;
  padding: .5em;

  border: 10px solid #00000090;

  &.spell {
    background-color: #03937E;
  }

  &.monster {
    background-color: #A15F30;
  }

  &.trap {
    background-color: #AC5091;
  }

  .name {
    border: 5px outset white;
  }

  img {
    width: 100%;
  }
}
</style>