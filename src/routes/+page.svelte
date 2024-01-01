<script>
	import 'animate.css';
	import Button from '$lib/UI/Button.svelte';
	import SecButton from '$lib/UI/SecButton.svelte';
	import Process from '$lib/svg/Process.svg.svelte';
	import Book from '$lib/svg/Book.svg.svelte';
	import Bell from '$lib/svg/Bell.svg.svelte';
	import Clock from '$lib/svg/Clock.svg.svelte';
	import Scholar from '$lib/svg/Scholar.svg.svelte';
</script>

<section class="bg-gray-100 p-20 text-center place-items-center">
	<div class="grid grid-cols-2 place-items-center rounded-3xl shadow-lg h-auto">
		<div class="grid-cols-1 m-20 animate__animated animate__fadeInLeft">
			<h2 class="font-medium text-5xl mb-5 text-left">India's Largest ONDC Onboarding Platform</h2>
			<p class="text-justify mb-10 text-gray-400">
				Joining ONDC opens the gateway to a vibrant ecosystem, fostering innovation and growth for
				businesses across the nation. Seamlessly integrate into the pulse of India's digital
				landscape with ONDC's unparalleled onboarding experience.
			</p>
			<Button href="/onboarding" content="Get Started at Just ₹499" />
		</div>
		<div class="grid-cols-1">
			<img
				src="./cart.svg"
				alt=""
				class="h-full w-full rounded-bl-[60px] rounded-tl-[60px]"
				srcset=""
			/>
		</div>
	</div>

	<!-- Timeline -->
	<div
		class="bg-blue-500 py-2 mt-10 mb-10 flex flex-col rounded-3xl shadow-sm place-items-center sm:py-12"
	>
		<h3 class="text-5xl text-white mb-8">How Our Platform Gets You Onboarded.</h3>
		<div class="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">
			<div class="relative text-gray-700 antialiased text-sm font-semibold">
				<div
					class="hidden sm:block w-1 bg-blue-300 absolute h-full left-1/2 transform -translate-x-1/2"
				></div>

				<div class="mt-4 sm:mt-0 sm:mb-12">
					<div class="flex flex-col sm:flex-row items-center">
						<div class="flex justify-start w-full mx-auto items-center">
							<div class="w-full sm:w-1/2 sm:pr-8">
								<div class="p-4 bg-white rounded shadow">
									Getting Your Subscriber Id Whitelisted Into ONDC Registry
								</div>
							</div>
						</div>
						<div
							class="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"
						>
							<Book />
						</div>
					</div>
				</div>

				<div class="mt-6 sm:mt-0 sm:mb-12">
					<div class="flex flex-col sm:flex-row items-center">
						<div class="flex justify-end w-full mx-auto items-center">
							<div class="w-full sm:w-1/2 sm:pl-8">
								<div class="p-4 bg-white rounded shadow">Generating Keys, Request ID, UKID</div>
							</div>
						</div>
						<div
							class="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"
						>
							<Process />
						</div>
					</div>
				</div>

				<div class="mt-6 sm:mt-0 sm:mb-12">
					<div class="flex flex-col sm:flex-row items-center">
						<div class="flex justify-start w-full mx-auto items-center">
							<div class="w-full sm:w-1/2 sm:pr-8">
								<div class="p-4 bg-white rounded shadow">Validation of Domain(Subscriber Id)</div>
							</div>
						</div>
						<div
							class="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"
						>
							<Clock />
						</div>
					</div>
				</div>

				<div class="mt-6 sm:mt-0">
					<div class="flex flex-col sm:flex-row items-center">
						<div class="flex justify-end w-full mx-auto items-center">
							<div class="w-full sm:w-1/2 sm:pl-8">
								<div class="p-4 bg-white rounded shadow">Subscribing You Into ONDC Registry</div>
							</div>
						</div>
						<div
							class="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"
						>
							<Bell />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<section class="p-20 w-full">
		<Scholar />
		<h2 class="text-7xl m-5 font-medium">Onboarding simplified,<br />just in seconds.</h2>
	</section>
</section>

<section class="grid grid-cols-2 place-items-center bg-gray-100 h-auto">
	<div class="grid-cols-1">
		<img src="./network.avif" alt="" class="rounded-br-[60px] rounded-tr-[60px]" srcset="" />
	</div>
	<div class="grid-cols-1 space-y-4 m-20">
		<h1 class="text-7xl font-medium">Indian markets at your fingertips.</h1>
		<div>
			<p class="text-gray-400 mb-8">
				Our platform is meticulously crafted to streamline the ONDC onboarding process, offering a
				comprehensive suite of capabilities essential for developing applications in the near
				future. Our automated system ensures a seamless experience, paving the way for efficient and
				innovative application development.
			</p>

			<Button
				href="https://github.com/ONDC-Official/developer-docs/blob/main/registry/Onboarding%20of%20Participants.md"
				content="Manual Onboarding Docs "
			/>
			<SecButton
				href="https://github.com/ONDC-Official/reference-implementations/tree/main/utilities/signing_and_verification"
				content="Keys Generation Docs"
			/>
		</div>
	</div>
</section>

<style>
</style>
