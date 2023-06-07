<script>
  import {logIn} from '../../../server/routes/usersAPI'
  import { authStore } from '../../../server/stores/stores';

  let email = "";
  let password = "";
  const handleSubmit = async () => {
    await logIn(email, password).then(val => val);
  }
</script>

<div class="container">
	<a href="/">
		<div class="mx-7 w-12 h-12 bg-primary mb-8 rounded-full">
			<img
				class="w-12 h-12 transition ease-in-out hover:-translate-x-0.5 duration-100"
				src="/ArrowLeftShortWhite.svg"
				alt="background"
			/>
		</div>
	</a>
	<div class="text-header2 text-agray-700 mx-7 font-semibold font-primary mb-5">Log In</div>
	<form class="login text-base">
		<div class="mx-7 mb-2">
      <div class="text-field">
        <!-- svelte-ignore a11y-label-has-associated-control -->
			  <label for={"email"}>Email</label>
        <input type="email" name="email" bind:value={email}/>
      </div>
		</div>
		<div class="mx-7 mb-32 text-field">
      <div class="text-field">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label for={"password"}>Password</label>
        <input type="password" name="password" bind:value={password}/>
      </div>
		</div>

		<div class="flex flex-col items-center mb-5">
			<button
				on:click={handleSubmit}
				class="text-header5 bg-primary w-11/12 py-3 font-semibold rounded-lg font-primary hover:opacity-90"
			>
				Log In
			</button>
		</div>
	</form>

	<div class="mx-7 flex">
		<div class="text-xs text-agray-500 font-semibold">Don't have an account yet?</div>
		<a href="/signup" class="text-xs mx-1 text-primary font-semibold hover:underline">Sign Up</a>
	</div>
</div>


<style>
	.text-field {
		position: relative;
		margin-top: 1.2rem;
	}

  .text-field input {
		width: 100%;
		border: 1.5px solid gray;
		-webkit-transition: 0.5s;
		transition: 0.5s;
		padding: 12px 20px 10px 10px;
		border-radius: 5px;
	}

	.text-field label {
		content: '';
		position: relative;
		color: gray;
		font-size: 17px;
		pointer-events: none;
	}

</style>