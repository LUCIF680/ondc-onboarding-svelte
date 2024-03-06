<script>
  export let name = "email";
  export let placeholder = "Email";
  export let errorMsg = "";
  export let value = "";
</script>

<div class="relative w-full mb-3">
  <label
    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
    for="grid-name"
  >
    {placeholder}
  </label>
  <input
    id="grid-name"
    {name}
    {value}
    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
    {placeholder}
  />
  <span class="text-xs text-red-500">{errorMsg}</span>
</div>
