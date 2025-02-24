<!-- src\routes\+page.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	let lib: typeof import('../../../lib/rs_lib.js');  

	onMount(async () => {
		lib = await import('../../../lib/rs_lib.js');

		await lib;

    console.log(lib);
		
    const { Greeter } = lib;

    // greets
    const greeter = new Greeter("world");
    console.log(greeter.greet());
	});
</script>

<!--<button on:click={() => lib.greet()}>Greet</button>-->
