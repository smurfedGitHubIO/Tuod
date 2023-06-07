<script>
  import { goto } from '$app/navigation';
  import WordList from '../../../components/WordList.svelte';

  const handleBack = () => {
    goto('/dashboard');
  }
</script>
<div>
  <a href="/dashboard">
		<div class="mx-7 w-12 h-12 bg-primary mb-8 rounded-full">
			<img
				class="w-12 h-12 transition ease-in-out hover:-translate-x-0.5 duration-100"
				src="/ArrowLeftShortWhite.svg"
				alt="background"
			/>
		</div>
	</a>
  Listahan ng mga Salita
  <WordList />
</div>