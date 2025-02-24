<!-- src\routes\+page.svelte -->
<script lang="ts">
	import { add, Greeter } from '../../../lib/rs_lib.js';

	const greeter = new Greeter('from Rust & WASM');
	const sum = add(1, 2);
	console.log('One plus two equals... (three, hopefully!)', sum);
</script>

<div class="mx-auto mt-16 w-full max-w-2xl space-y-6 px-8 md:px-16">
	<h3 class="text-lg">Just a simple Deno, Rust, WASM &amp; SvelteKit starter</h3>
	<p>
		If all went well, you should see a `Hello from Rust &amp; WASM` message below and a console log
		showing the result of <code class="inline-block bg-yellow-100 p-1 font-mono text-sm">1 + 2</code
		>!
	</p>
	<p class="bg-emerald-200 p-8 text-center">
		{greeter.greet()}
	</p>
</div>
<!--<button on:click={() => lib.greet()}>Greet</button>-->
