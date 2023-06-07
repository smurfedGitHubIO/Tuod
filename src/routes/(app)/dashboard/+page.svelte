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

  import { goto } from '$app/navigation';
  const handleLogout = () => {
    goto('/');
  }
</script>

<div class="flex justify-between mx-3 my-4 db-nav">
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
  <div class="shadow hover:shadow-lg main-box text-center">
    <LinkButton label="Word of the Day" route='/wordoftheday'/>
  </div>
  <div class="shadow hover:shadow-lg main-box text-center">
    <LinkButton label="Listahan ng mga salita" route='/words'/>
  </div>
</div>

<style>
  .main-box {
    padding: 25px;
    margin: 10px 25px 10px 25px;
  }
</style>