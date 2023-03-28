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
    <div class="type">{{ '[ ' + cards.type + ' ]' }}</div>
    <div class="image">
      <img :src="cards.card_images[0].image_url_cropped" alt="">
    </div>
    <div class="desc">{{ cards.desc }}</div>
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
    font-size: .9em;
    border: 3px outset #03937E80;
    color: white;
    text-transform: uppercase;
  }

  .type {
    text-align: right;
    text-transform: uppercase;
    font-size: .8em;
    font-weight: bold;
    margin: .5em 0;
  }

  .image {
    padding: .5em;

    img {
      width: 100%;
      border: 5px outset #546271;
    }
  }

  .desc {
    font-size: .8em;
    font-style: italic;
    padding: .2em;
    border: 5px groove rgb(124, 96, 60);


    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    display: block;
    line-height: 1em;
    max-height: 5em;
  }
}
</style>