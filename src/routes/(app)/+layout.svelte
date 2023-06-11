<script>
  import { goto } from '$app/navigation';
  const handleLogout = () => {
    goto('/');
  }
</script>

<div class="container">
  <div class="flex flex-col h-screen m-auto max-w-md">
    <slot /> 
  </div>
</div>

<style>
  .container {
    padding-top: 25px;
  }
</style>