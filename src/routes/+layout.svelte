<script>
  import "../app.css";
  import Progressbar from "$lib/UI/Progressbar.svelte";
  import Header from "$lib/UI/Header.svelte";
  import Footer from "$lib/UI/Footer.svelte";
  import Toast from "$lib/UI/Toast.svelte";
  import { onMount } from "svelte";

  export let msg = "";
  onMount(() => {
    addEventListener("unhandledrejection", (event) => {
      const toast = document.getElementById("toast");
      toast.classList.remove("hidden");
      setTimeout(() => {
        toast.classList.add("hidden");
      }, 5000);
      msg = event.reason;
    });
    addEventListener("error", (event) => {
      const toast = document.getElementById("toast");
      toast.classList.remove("hidden");
      setTimeout(() => {
        toast.classList.add("hidden");
      }, 5000);
      msg = event.message;
    });
  });
</script>

<Progressbar />
<Header />
<Toast {msg} me={this} />
<slot />

<Footer />
