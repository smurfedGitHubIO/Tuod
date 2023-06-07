<script>
  import { goto } from '$app/navigation';
  import "../../app.css";
  const handleLogout = () => {
    goto('/');
  }
</script>

<div>
  <button on:click={() => handleLogout()}>logout</button>
</div>
<slot />