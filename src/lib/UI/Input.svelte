<script lang="ts">
	export let name: string = 'email';
	export let placeholder: string = 'Email';
	export let errorMsg: string = '';
</script>

<div class="relative z-0">
	<input
		type="text"
		{name}
		class="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
		placeholder=""
	/>
	<label
		for={name}
		class="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
		>{placeholder}</label
	>
	<p id="standard_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">
		<span class="font-medium">{errorMsg}</span>
	</p>
</div>
