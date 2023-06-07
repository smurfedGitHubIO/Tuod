<script>
  import { goto } from '$app/navigation';
  const handleLogout = () => {
    goto('/');
  }
</script>

<div>
  <button on:click={() => handleLogout()}>logout</button>
</div>
<slot />