import { reactive } from 'vue';
export const store = reactive({
  cards: [],
  isLoading: true,
  cardName: '',
  cardType: '',
  stringAPI: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=500&offset=0',
  error: '',
})