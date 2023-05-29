<script>
  import {logIn} from '../../../server/routes/usersAPI'
  import { authStore } from '../../../server/stores/stores';

  let email = "";
  let password = "";
  const handleSubmit = async () => {
    await logIn(email, password).then(val => val);
  }
</script>

<div>
  Login
  <form>
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label>Email</label>
    <input type="email" bind:value={email}/>
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label>Password</label>
    <input type="password" bind:value={password}/>
    <button on:click={() => handleSubmit()}>Submit</button>
  </form>
  
</div>