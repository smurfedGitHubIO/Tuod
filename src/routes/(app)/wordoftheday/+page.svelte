<script>
  import { getWordOfTheDay } from '../../../server/routes/wordoftheday'
  import { authStore, wordsStore } from '../../../server/stores/stores'
  let word = '';
  (
    async () => {
      console.log($authStore.day, $wordsStore);
      word = await getWordOfTheDay($authStore, $wordsStore);
    }
  )();
</script>
<div>
  {word}
</div>