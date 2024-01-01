<script lang="ts">
	let options = [
		'nic2004:60232',
		'ONDC:RET10',
		'ONDC:RET11',
		'ONDC:RET12',
		'ONDC:RET13',
		'ONDC:RET14',
		'ONDC:RET15',
		'ONDC:RET16',
		'ONDC:RET17',
		'ONDC:RET18',
		'ONDC:RET19',
		'ONDC:RET20',
		'ONDC:NTS10',
		'ONDC:NTS11',
		'ONDC:TRV10',
		'ONDC:TRV11',
		'ONDC:TRV12',
		'ONDC:FIS10',
		'ONDC:FIS11',
		'ONDC:FIS12',
		'ONDC:FIS13',
		'ONDC:FIS14',
		'ONDC:AGR10',
		'ONDC:AGR11',
		'ONDC:AGR12'
	];
	let dropdown;
	function handleClick() {
		dropdown.classList.toggle('hidden');
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:click={handleClick} class="relative z-0">
	<input
		type="text"
		id="domain"
		class="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
		placeholder=""
	/>
	<label
		for="domain"
		class="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
		>Domains</label
	>
</div>

<!-- Dropdown menu -->
<div bind:this={dropdown} id="dropdown" class="z-10 hidden bg-gray-200 rounded-lg shadow">
	<ul class="h-48 px-3 py-3 overflow-y-auto text-sm text-gray-200" aria-labelledby="dropdownButton">
		{#each options as option, offset}
			<li>
				<div class="flex items-center ps-2 rounded hover:bg-white">
					<input
						id={offset.toString()}
						type="checkbox"
						value={option}
						class="h-4 text-blue-500 bg-blue-500 border-blue-500 rounded focus:ring-blue-500 focus:ring-2"
					/>
					<label
						for={offset.toString()}
						class="w-full py-2 m-1 text-sm font-medium text-blue-500 rounded hover:text-blue-500 hover:bg-white"
						>{option}</label
					>
				</div>
			</li>
		{/each}
	</ul>
</div>
