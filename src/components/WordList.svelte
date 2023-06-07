<script>
  import Word from "./Word.svelte";
  import { authStore, wordsStore } from "../server/stores/stores";
  let listOfWords = [];
  (() => {
    for(let i=$authStore.index; i>$authStore.index-10 && i >= 0; i--){
      listOfWords.push($wordsStore[i]);
    }
  })();
</script>

<div class="max-h-80 flex flex-col overflow-y-auto">
	{#if listOfWords.length != 0}
    {#each listOfWords as currentWord}
      <Word word={currentWord.word} definitions={currentWord.definitions}/>
    {/each}
  {:else}
    Loading...
  {/if}
</div>