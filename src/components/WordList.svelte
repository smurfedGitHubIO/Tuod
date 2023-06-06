<script>
  import Word from "./Word.svelte";
  import { authStore, wordsStore } from "../server/stores/stores";
  let listOfWords = [];
  (() => {
    for(let i=0; i<$wordsStore.length; i++){
      if(i <= $authStore.index) {
        listOfWords.push($wordsStore[i]);
      } else {
        break;
      }
    }
  })();
</script>

<div>
  {#if listOfWords.length != 0}
    {#each listOfWords as currentWord}
      <Word word={currentWord.word} definitions={currentWord.definitions}/>
    {/each}
  {:else}
    Loading...
  {/if}
</div>