<script lang="ts">
  import Input from "$lib/UI/Input.svelte";
  import { getEnv } from "$lib/utils/getEnv";
  import { validate, signUpSchema } from "$lib/utils/validation";
  import { writable, type Writable } from "svelte/store";

  export let errors: Writable<null | Record<string, string>> = writable({});
  export let placeholder = [
    "Email Address",
    "Business Address",
    "GST Number",
    "Pan Number",
    "Date of Incorporation",
    "Personal Address",
    "Personal Mobile Number",
  ];
  export let names = [
    "email_id",
    "business_address",
    "gst_no",
    "pan_no",
    "date_of_incorporation",
    "address_of_authorised_signatory",
    "mobile_no",
  ];

  // Global Error handling is done in +layout.svelte
  async function handleSubmit(event: Event) {
    const url: string = getEnv("VITE_API_URL").concat("sign-up");

    // Convert formData to Object, to validate it.
    const formData = new FormData(event.target as HTMLFormElement);

    const body: Record<string, any> = {};
    for (const key of formData.keys()) {
      if (body[key]) {
        body[key] = formData.getAll(key);
      } else {
        body[key] = formData.get(key);
      }
    }

    $errors = await validate(signUpSchema, body);
    if ($errors !== null) return;

    let response: Response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    response = await response.json();

    if (response.type === "error") {
      throw new Error(response.error.message);
    }
  }
</script>

<div
  class="flex justify-center text-gray-900 bg-gray-200 min-h-screen place-items-center"
>
  <div
    class=" w-full sm:w-1/2 p-6 sm:m-5 m-1 bg-gray-200 border border-spacing-0 border-gray-200 rounded-lg animate__animated animate__backInUp shadow-2xl"
  >
    <div class="flex">
      <img src="./support.png" class="h-8 mx-5 mb-5" alt="" srcset="" />
      <h5 class="text-xl font-medium">Backend API Services - Sign up</h5>
    </div>

    <!-- <div class="left-dash-animation bg-blue-500 mb-5"></div> -->

    <form
      class="space-y-6"
      method="post"
      on:submit|preventDefault={handleSubmit}
    >
      <span class="text-sm"
        >Start your website in seconds. Already have an account? Login <a
          href="/login"
          class="text-blue-500">here.</a
        ></span
      >
      <!--OPS-->
      <div>
        <label for="type" class="text-xs text-blue-500">Select Service</label>
        <select
          id="type"
          class="bg-gray-50 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600"
        >
          <option>Retail Buyer Api</option>
        </select>
      </div>
      <p>
        <span class="text-xs text-red-600 dark:text-red-400 font-medium"
          >{$errors.ops || ""}</span
        >
      </p>

      {#each names as name, offset}
        <Input
          {name}
          placeholder={placeholder[offset]}
          errorMsg={$errors[name] || ""}
        />
      {/each}

      <div class="text-center">
        <button
          type="submit"
          class="w-full text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >Submit</button
        >
      </div>

      <div class="text-sm font-medium text-gray-500">
        By Submiting, I Agree with
        <a href="#" class="text-blue-500 hover:underline">Terms and Condition</a
        >
      </div>
    </form>
  </div>
</div>

<style>
  .left-dash-animation {
    margin-left: 10px;
    height: 2px;
    width: 500px;
    animation: lls-login-width-animation 3.5s ease-in-out infinite;
  }
  @keyframes lls-login-width-animation {
    0% {
      width: 1px;
    }
    40% {
      width: 04px;
    }
    80% {
      width: 404px;
    }
    to {
      width: 1px;
    }
  }
</style>
