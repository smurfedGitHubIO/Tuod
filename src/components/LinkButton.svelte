<script>
  import { goto } from '$app/navigation';

  export let label;
  export let route;

  const handleOnClick = () => {
    goto(route);
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={() => handleOnClick()}>
  {label}
</div>