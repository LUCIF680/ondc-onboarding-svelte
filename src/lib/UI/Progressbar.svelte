<script lang="ts">
	export let width: number = 0;
	import { onMount } from 'svelte';
	onMount(() => {
		window.onscroll = () => {
			if (document.documentElement.scrollTop < document.body.offsetHeight) {
				width =
					(document.documentElement.scrollTop / (document.body.offsetHeight - window.innerHeight)) *
					100;
			}
		};
	});
</script>

<div class="w-full bg-gray-200 rounded-full h-1.5 mb-4 z-10 fixed">
	<div class="bg-blue-500 h-1.5 rounded-full" style="width: {width}%"></div>
</div>
