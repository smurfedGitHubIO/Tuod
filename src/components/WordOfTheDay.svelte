<script>
  export let word;
  export let definition;
</script>
<div class="flex justify-between font-semibold font-primary text-agray-700 text-center word">
  {word}
</div>
<div class="flex justify-between shadow-lg definition text-justify">
  {definition}
</div>

<style>
  .word {
    padding: 25px;
    text-align: center;
    width: 100%;
  }
  .definition {
    padding: 25px
  }
</style>