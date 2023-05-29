<script>
  import {signUp} from '../../../server/index'
  export let data;
  let name = "";
  let email = "";
  let password = "";
  const handleSubmit = async () => {
    let wordsList = data.data.sort(() => Math.random() - 0.5);
    console.log(name, email, password)
    let response = await signUp(name, email, password, wordsList);
  }
</script>

<div>
  Sign Up
  <form>
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label>Name</label>
    <input type="text" bind:value={name}/>
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label>Email</label>
    <input type="email" bind:value={email}/>
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label>Password</label>
    <input type="password" bind:value={password}/>
    <button on:click={handleSubmit}>Submit</button>
  </form>
  
</div>