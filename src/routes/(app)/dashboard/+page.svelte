<script>
  import { onMount } from "svelte";
  import { getWords } from '../../../server/routes/words'
  import { updateAuthStore } from '../../../server/routes/usersAPI';
  import { authStore, wordsStore } from "../../../server/stores/stores";
  import LinkButton from "../../../components/LinkButton.svelte";

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
    }
  );
</script>

<div>
  <div>
    <LinkButton label="Word of the Day" route='/wordoftheday'/>
  </div>
  <div>
    <LinkButton label="Listahan ng mga salita" route='/words'/>
  </div>
</div>