<script>
  import { goto } from '$app/navigation';

  const handleBack = () => {
    goto('/dashboard');
  }
</script>
<div>
  <button on:click={handleBack}>Back</button>
  List of Words
</div>