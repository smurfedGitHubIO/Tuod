<script>
  import { page } from '$app/stores';
  import "https://www.w3schools.com/w3css/4/w3.css";
  const isBeta = $page.url.searchParams.get("svm");
  const isAlpha = $page.url.searchParams.get("logistic_regression");
</script>

{#if isBeta}
  <p>This is {isBeta}!</p>
{:else}
  <p>This is not beta.</p>
{/if}