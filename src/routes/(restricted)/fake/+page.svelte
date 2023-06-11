<script>
  import { page } from '$app/stores';
  import "https://www.w3schools.com/w3css/4/w3.css";
  const isBeta = $page.url.searchParams.get("svm");
  const isAlpha = $page.url.searchParams.get("logistic_regression");
</script>

<div class="bgimg w3-display-container w3-animate-opacity w3-text-white">
  <div class="w3-display-topleft w3-padding-large w3-xlarge">
    Filipino Fake News Detector
  </div>
  <div class="w3-display-middle">
    <h1 class="w3-jumbo w3-animate-top result">Trustworthy</h1>
    <hr class="w3-border-grey" style="margin:auto;width:40%">
    <p class="w3-large w3-center">The highlighted text is NOT fake according to our model.</p>
  </div>
  <div class="w3-display-bottomleft w3-padding-large">
    Project by Frongoso - Devilleres - Samonte - Sarmiento
  </div>
</div>

{#if isBeta}
  <p>This is {isBeta}!</p>
{:else}
  <p>This is not beta.</p>
{/if}