<script>
  import { getWordOfTheDay } from '../../../server/routes/wordoftheday'
  import { getWords } from '../../../server/routes/words'
  import { updateAuthStore } from '../../../server/routes/usersAPI';
  import { authStore, wordsStore } from '../../../server/stores/stores'
  let word = '';
  (
    async () => {
      console.log($authStore);
      let uid = $authStore.user.uid;
      let newAuthStore = await updateAuthStore($authStore);
      newAuthStore['uid'] = uid;
      let words = await getWords(newAuthStore);
      authStore.update(x => newAuthStore);
      console.log($authStore, "wah");
      console.log($authStore.day, "neh");
      console.log(words);
      word = await getWordOfTheDay($authStore, $wordsStore);
    }
  )();
</script>
<div>
  {word}
</div>