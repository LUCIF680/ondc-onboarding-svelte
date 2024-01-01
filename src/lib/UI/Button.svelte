<script lang="ts">
	import NextArrow from '$lib/svg/NextArrow.svg.svelte';

	export let content: string;
	export let href: string;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	on:click={() => (document.location.href = href)}
	class="bg-blue-500 w-1/2 text-white py-3 m-5 px-4 rounded-3xl hover:bg-blue-600 hover:shadow-lg cursor-pointer"
>
	<div class="flex">
		<span>{content}</span>
		<NextArrow />
	</div>
</div>
