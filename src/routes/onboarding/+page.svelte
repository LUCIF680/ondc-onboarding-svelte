<script lang="ts">
	import Input from '$lib/UI/Input.svelte';
	import { validate } from '$lib/utils/validation';
	import MultiselectDropdown from '$lib/UI/MultiselectDropdown.svelte';
	import { writable, type Writable } from 'svelte/store';

	export let errors: Writable<null | Record<string, string>> = writable({});

	export let placeholder = [
		'Legal Entity Name',
		'Business Address',
		'GST Number',
		'Name on Pan Card',
		'Pan Number',
		'Date of Incorporation',
		'Personal Address',
		'Personal Email',
		'Personal Mobile Number',
		'Your Subscriber Id',
		'Your Callback Url'
	];
	export let names = [
		'legal_entity_name',
		'business_address',
		'gst_no',
		'name_as_per_pan',
		'pan_no',
		'date_of_incorporation',
		'address_of_authorised_signatory',
		'email_id',
		'mobile_no',
		'subscriber_id',
		'subscriber_url'
	];

	// Global Error handling is done in +layout.svelte
	async function handleSubmit(event: Event) {
		const ACTION_URL = (event.target as HTMLFormElement).action;

		const formData = new FormData(event.target as HTMLFormElement);
		const body = Object.fromEntries(formData);
		$errors = await validate(body);
		if ($errors !== null) return;

		fetch(ACTION_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body)
		});
	}
</script>

<div class="flex justify-center bg-gray-200 min-h-screen place-items-center">
	<div class="w-1/2 p-6 m-5 bg-white border border-gray-200 rounded-3xl shadow-lg">
		<h5 class="text-xl font-medium text-gray-500">Start Onboarding Into ONDC</h5>
		<div class="left-dash-animation bg-blue-500 mb-5"></div>

		<form class="space-y-6" action="test-api" method="post" on:submit|preventDefault={handleSubmit}>
			<!--OPS-->
			<input type="radio" name="ops" id="buyer" value="1" />
			<label for="buyer" class="ml-0.5 mr-1 text-gray-400">Buyer</label>
			<input type="radio" name="ops" id="seller" value="2" />
			<label for="seller" class="ml-0.5 mr-1 text-gray-400">Seller</label>
			<input type="radio" name="ops" id="seller_buyer" value="3" />
			<label for="seller_buyer" class="ml-0.5 mr-1 text-gray-400">Buyer & Seller</label>
			<span class="text-xs text-red-600 dark:text-red-400 font-medium">{$errors.ops || ''}</span>

			{#each names as name, offset}
				<Input {name} placeholder={placeholder[offset]} errorMsg={$errors[name] || ''} />
			{/each}

			<MultiselectDropdown />
			<div class="text-center">
				<button
					type="submit"
					class="w-1/2 text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
					>SUBMIT</button
				>
			</div>

			<div class="text-sm font-medium text-gray-500">
				By Submiting, I agree with
				<a href="#" class="text-blue-500 hover:underline">Terms and Condition</a>
			</div>
		</form>
	</div>
</div>

<style>
	.left-dash-animation {
		margin-left: 1px;
		height: 2px;
		width: 104px;
		animation: lls-login-width-animation 3.5s ease-in-out infinite;
	}
	@keyframes lls-login-width-animation {
		0% {
			width: 1px;
		}
		40% {
			width: 104px;
		}
		80% {
			width: 104px;
		}
		to {
			width: 1px;
		}
	}
</style>
