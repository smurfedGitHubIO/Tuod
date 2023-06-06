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
    {listOfWords[0].word}
    {listOfWords[0].definitions}
  {:else}
    Loading...
  {/if}
</div>