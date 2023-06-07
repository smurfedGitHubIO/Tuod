<script>
  export let word;
  export let definitions;
</script>
<div class="RecordCard px-5 pt-3 pb-3 border-b border-agray-400">
	<div class="flex justify-between">
		<div class="font-semibold text-header5 font-primary text-agray-700">{word}</div>
	</div>
  <div class="flex justify-between">
    {definitions}
	</div>
</div>