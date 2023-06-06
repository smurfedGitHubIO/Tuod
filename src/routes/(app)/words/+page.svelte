<script>
  import { goto } from '$app/navigation';
  import WordList from '../../../components/WordList.svelte';

  const handleBack = () => {
    goto('/dashboard');
  }
</script>
<div>
  <button on:click={handleBack}>Back</button>
  Listahan ng mga Salita
  <WordList />
</div>