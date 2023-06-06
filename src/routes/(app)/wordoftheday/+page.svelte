<script>
  import { getWordOfTheDay } from '../../../server/routes/wordoftheday'
  import { getWords } from '../../../server/routes/words'
  import { updateAuthStore } from '../../../server/routes/usersAPI';
  import { authStore, wordsStore } from '../../../server/stores/stores'
  let word = '';
  (
    async () => {
      if ($authStore.user !== undefined) {
        let uid = $authStore.user.uid;
        let newAuthStore = await updateAuthStore($authStore);
        newAuthStore['uid'] = uid;
        authStore.update(x => newAuthStore);
      }
      let words = await getWords($authStore);
      wordsStore.update(x => words);
      word = await getWordOfTheDay($authStore, $wordsStore);
    }
  )();
</script>
<div>
  {word}
</div>