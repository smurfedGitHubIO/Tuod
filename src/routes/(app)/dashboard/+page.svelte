<script>
  import { getWords } from '../../../server/routes/words'
  import {getWordOfTheDay} from '../../../server/routes/wordoftheday'
  import { updateAuthStore } from '../../../server/routes/usersAPI';
  import { authStore, wordsStore } from "../../../server/stores/stores";
  import {onMount} from 'svelte';
  let word = '';
  let listOfWords = [];
  onMount(
    async () => {
      if ($authStore.user !== undefined) {
        let uid = $authStore.user.uid;
        let newAuthStore = await updateAuthStore($authStore).then(val => val);
        newAuthStore['uid'] = uid;
        authStore.update(x => newAuthStore);
      }
      let words = await getWords($authStore).then(val => val);
      wordsStore.update(x => words);
      word = await getWordOfTheDay($authStore, $wordsStore);
      for(let i=$authStore.index; i>=$authStore.index-10 && i >= 0; i--){
        listOfWords = [...listOfWords, words[i]];
      }
    }
  );

  import { goto } from '$app/navigation';
  const handleLogout = () => {
    goto('/');
  }
</script>

<div class="flex justify-between mx-3 my-3 db-nav">
  <div class="flex items-center text-primary">
    <div class="rounded mr-4">
      <img src="./Logo.png" alt="profile" class="w-10 h-10" />
    </div>
    <div class="font-primary font-semibold text-header5">
      Tuod
    </div>
  </div>
  <div class="flex items-center text-primary">
    <button on:click={() => handleLogout()}>Logout</button>
  </div>
</div>
<div>
  <div class="border-b main-box text-center">
    {#if word !== ''}
      <div class="mx-4 mb-6 text-2xl font-bold text-gdark font-sans">
        Salita ng Araw
      </div>
      <div class="flex justify-between font-bold font-primary text-gdark font-sans text-center text-lg mx-5 mb-4">
        {word.word}
      </div>
      <div class="flex flex-col font-sans">
        {#each word.definitions as def}
            <div class="text-justify text-sm">
              - {def}
            </div>
          {/each}
      </div>
    {:else}
      Loading...
    {/if}
    
  </div>
  <div class="text-center main-box">
    {#if listOfWords.length !== 0}
      <div class="mx-4 mb-6 text-2xl font-bold text-gdark font-sans">
        Listahan ng mga Salitang Nalikom
      </div>
      <div class="max-h-80 flex flex-col overflow-y-auto walletscroll font-sans">
        {#each listOfWords as currentWord, ind}
        <div class="px-5 pt-3 pb-3 border-b border-agray-400 hover:shadow-lg">
          <div class="flex justify-between">
            <div class="font-semibold text-header5 font-primary text-agray-700 text-agray-600">{currentWord.word}</div>
          </div>
          {#each currentWord.definitions as def}
            <div class="text-justify text-sm">
              - {def}
            </div>
          {/each}
        </div>
        {/each}
      </div>
    {:else}
      Loading...
    {/if}
  </div>
</div>

<style>
  .main-box {
    padding: 15px;
    margin: 5px 15px 5px 15px;
  }

  .walletscroll::-webkit-scrollbar {
	  display: none;
	}
	
	/* Hide scrollbar for IE, Edge and Firefox */
	.walletscroll {
	  -ms-overflow-style: none;  /* IE and Edge */
	  scrollbar-width: none;  /* Firefox */
	}
</style>