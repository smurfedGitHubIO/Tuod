<script>
  import { goto } from '$app/navigation';

  export let label;
  export let route;

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<a href={route}>
  {label}
</a>