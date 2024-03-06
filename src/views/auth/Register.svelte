<script>
  import { link } from "svelte-routing";
  import Input from "components/Input/Input.svelte";
  import { validate, signUpSchema } from "utils/validation.js";
  import { writable } from "svelte/store";
  import { httpRequest } from "utils/api.js";

  export let value = [
    "pratik@gmail.com",
    "this is new password",
    "this is address",
    "22AAAAA0000A1Z5",
    "DHY7564Z",
    "This is business address",
    "ABCTY1234D",
    new Date().toISOString(),
    "This is business name",
    "this is personal address",
    9876543210,
  ];
  export let placeholder = [
    "Email Address",
    "Password",
    "Business Address",
    "GST Number",
    "Business Address",
    "Name as per Pan",
    "Pan Number",
    "Date of Incorporation",
    "Business Name",
    "Personal Address",
    "Personal Mobile Number",
  ];
  export let names = [
    "email",
    "password",
    "legal_entity_name",
    "gst_no",
    "business_address",
    "pan_name",
    "pan_no",
    "date_of_incorporation",
    "name_of_authorised_signatory",
    "address_of_authorised_signatory",
    "mobile_no",
  ];
  export let errors = writable({});
  async function handleSubmit(event) {
    const url = event.target.attributes[0].value;
    const formData = new FormData(event.target);

    const body = {};
    for (const key of formData.keys()) {
      if (body[key]) {
        body[key] = formData.getAll(key);
      } else {
        body[key] = formData.get(key);
      }
    }

    // Validate the data
    $errors = await validate(signUpSchema, body);
    console.log($errors);
    if ($errors !== null) {
      return;
    }

    const response = await httpRequest(url, body); // This will save cookie as httpOnly
    if (accessToken) localStorage.setItem("isLogin", true);
    window.location.href = "/admin/dashboard";
  }
  if (localStorage.getItem("isLogin"))
    window.location.href = "/admin/dashboard";
</script>

<div class="container mx-auto px-4 h-full">
  <div class="flex content-center items-center justify-center h-full">
    <div class="w-full lg:w-6/12 px-4">
      <div
        class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"
      >
        <!-- <div class="rounded-t mb-0 px-6 py-6">
          <div class="text-center mb-3">
            <h6 class="text-blueGray-500 text-sm font-bold">
              Sign up with
            </h6>
          </div>
          <div class="btn-wrapper text-center">
            <button
              class="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
              type="button"
            >
              <img alt="..." class="w-5 mr-1" src="{github}" />
              Github
            </button>
            <button
              class="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
              type="button"
            >
              <img alt="..." class="w-5 mr-1" src="{google}" />
              Google
            </button>
          </div>
          <hr class="mt-6 border-b-1 border-blueGray-300" />
        </div> -->
        <div class="flex-auto px-4 lg:px-10 py-10 pt-10">
          <div class="text-blueGray-400 text-center mb-3 font-bold">
            <small>Sign up with Credentials</small>
          </div>
          <form
            action={process.env.API_URL
              ? `${process.env.API_URL}user/register`
              : undefined}
            method="post"
            on:submit|preventDefault={handleSubmit}
          >
            <input type="hidden" name="select_service" value="BUYER:10" />
            {#each names as name, offset}
              <Input
                {name}
                value={value[offset]}
                placeholder={placeholder[offset]}
                errorMsg={$errors[name] || ""}
              />
            {/each}

            <!-- <div>
              <label class="inline-flex items-center cursor-pointer">
                <input
                  id="customCheckLogin"
                  type="checkbox"
                  class="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                />
                <span class="ml-2 text-sm font-semibold text-blueGray-600">
                  I agree with the
                  <a
                    href="#pablo"
                    on:click={(e) => e.preventDefault()}
                    class="text-red-500"
                  >
                    Privacy Policy
                  </a>
                </span>
              </label>
            </div> -->

            <div class="text-center mt-6">
              <button
                class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                type="submit"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="flex flex-wrap mt-6 relative">
        <div class="w-full text-right">
          <a use:link href="/auth/login" class="text-blueGray-200">
            <small>Have a account?</small>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
