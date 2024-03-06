<script>
  import { link } from "svelte-routing";
  import { writable } from "svelte/store";
  import { validate, loginSchema } from "utils/validation.js";
  import { httpRequest } from "utils/api.js";

  export const placeholder = ["Enter Email Address", "Enter Password"];
  export const names = ["email", "password"];
  export let errors = writable({});

  if (localStorage.getItem("isLogin"))
    window.location.href = "/admin/dashboard";

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
    $errors = await validate(loginSchema, body);
    if ($errors !== null) return;

    const { access_token: accessToken } = await httpRequest(url, body); // This will save cookie as httpOnly

    if (accessToken) localStorage.setItem("isLogin", true);
    window.location.href = "/admin/dashboard";
  }
</script>

<div class="container mx-auto px-4 h-full">
  <div class="flex content-center items-center justify-center h-full">
    <div class="w-full lg:w-4/12 px-4">
      <div
        class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"
      >
        <div class="flex-auto px-4 lg:px-10 py-10 pt-10">
          <div class="text-blueGray-400 text-center mb-3 font-bold">
            <small>Sign in with credentials</small>
          </div>
          <form
            action={process.env.API_URL
              ? `${process.env.API_URL}user/login`
              : undefined}
            method="post"
            on:submit|preventDefault={handleSubmit}
          >
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                for="grid-email"
              >
                Email
              </label>
              <input
                id="grid-email"
                type="text"
                name="email"
                value="pratik@gmail.com"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Email"
              />
              <span class="text-xs text-red-500">{$errors?.email || ""}</span>
            </div>

            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                for="grid-password"
              >
                Password
              </label>
              <input
                id="grid-password"
                type="password"
                name="password"
                value="this is new password"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Password"
              />
              <span class="text-xs text-red-500">{$errors?.password || ""}</span
              >
            </div>

            <div class="text-center mt-6">
              <button
                type="submit"
                class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="flex flex-wrap mt-6 relative">
        <div class="w-1/2">
          <a
            href="#pablo"
            on:click={(e) => e.preventDefault()}
            class="text-blueGray-200"
          >
            <small>Forgot password?</small>
          </a>
        </div>
        <div class="w-1/2 text-right">
          <a use:link href="/auth/register" class="text-blueGray-200">
            <small>Create new account</small>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
