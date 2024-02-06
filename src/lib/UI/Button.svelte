<script lang="ts">
  export let content: string;
  export let href: string;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  on:click={() => (document.location.href = href)}
  class="bg-blue-500 sm:w-1/2 w-full text-white sm:text-base my-2 text-sm py-4 rounded-3xl hover:bg-blue-600 hover:shadow-lg cursor-pointer"
>
  <span class="text-center p-5 font-bold">{content}</span>
</div>
