<script>
  import WordOfTheDay from "../../../components/WordOfTheDay.svelte";
  import { goto } from '$app/navigation';

  const handleBack = () => {
    goto('/dashboard');
  }
</script>
<div>
  <button on:click={handleBack}>Back</button>
  Word of the Day

  <WordOfTheDay word="something"/>
</div>