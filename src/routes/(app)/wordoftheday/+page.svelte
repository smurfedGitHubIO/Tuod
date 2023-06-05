<script>
  import { getWordOfTheDay } from '../../../server/routes/wordoftheday'
  import { updateAuthStore } from '../../../server/routes/usersAPI';
  import { authStore, wordsStore } from '../../../server/stores/stores'
  let word = '';
  (
    async () => {
      console.log($authStore);
      let words = await getWords($authStore);
      let uid = $authStore.user.uid;
      let newAuthStore = await updateAuthStore($authStore);
      newAuthStore[uid] = uid;
      authStore.update(x => newAuthStore);
      console.log($authStore, "wah");
      console.log($authStore.day, "neh");
      word = await getWordOfTheDay($authStore, $wordsStore);
    }
  )();
</script>
<div>
  {word}
</div>