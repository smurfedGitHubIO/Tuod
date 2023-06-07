<script>
  import { goto } from '$app/navigation';
  import { getWordOfTheDay } from '../../../server/routes/wordoftheday'
  import WordOfTheDay from "../../../components/WordOfTheDay.svelte";
  import { authStore, wordsStore } from '../../../server/stores/stores'
  let word = '';
  (
    async () => {
      word = await getWordOfTheDay($authStore, $wordsStore);
    }
  )();

  const handleBack = () => {
    goto('/dashboard');
  }
</script>
<div>
  <button on:click={handleBack}>Back</button>
  <WordOfTheDay word={word.word} definition={word.definitions}/>
</div>