<script lang="ts">
  export let heading;
  export let p;
  export let src;
</script>

<div
  class="animate__animated animate__fadeInRight shadow-lg sm:max-w-sm p-6 sm:mx-5 mr-5 mb-5 bg-white border border-gray-300 rounded-lg dark:bg-gray-100"
>
  <img class="mb-5 sm:w-1/2 w-1/3 inline rounded-2xl" {src} alt="" srcset="" />
  <!-- <svelte:component this={svg}></svelte:component> -->
  <a href="#">
    <h5 class="mb-2 sm:text-xl text-l text-gray-700">
      {heading}
    </h5>
  </a>
  <p class="text-gray-400 sm:text-base text-sm">
    {p}
  </p>
</div>
