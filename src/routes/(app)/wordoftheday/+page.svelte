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
  <a href="/dashboard">
		<div class="mx-7 w-12 h-12 bg-primary mb-8 rounded-full">
			<img
				class="w-12 h-12 transition ease-in-out hover:-translate-x-0.5 duration-100"
				src="/ArrowLeftShortWhite.svg"
				alt="background"
			/>
		</div>
	</a>
  {#if word !== ''}
    <WordOfTheDay word={word.word} definition={word.definitions}/>
  {:else}
    Loading...
  {/if}
  
</div>