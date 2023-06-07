<script>
  import { goto } from '$app/navigation';
  const handleLogout = () => {
    goto('/');
  }
</script>

<div class="flex flex-col h-screen m-auto max-w-md">
	<slot /> 
</div>