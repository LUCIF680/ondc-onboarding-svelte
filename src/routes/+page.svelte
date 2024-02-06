<script>
  import "animate.css";
  import Button from "$lib/UI/Button.svelte";
  import SecButton from "$lib/UI/SecButton.svelte";
  import Card from "$lib/UI/Card.svelte";
</script>

<section class="bg-gray-100 sm:p-20 p-2 text-center place-items-center">
  <div
    class="sm:grid sm:grid-cols-2 place-items-center rounded-3xl shadow-lg h-auto"
  >
    <div
      class="sm:grid-cols-1 sm:p-20 p-5 animate__animated animate__fadeInLeft"
    >
      <img src="./cloud-network-unscreen.gif" class="h-16" alt="" />
      <h2 class="font-medium sm:text-5xl text-3xl mb-5 text-left">
        Entire Backend at your Fingertips.
      </h2>
      <p class="text-justify mb-10 text-gray-400 text-sm">
        Our Backend and your frontend lets you use the ONDC network to the
        fullest. Let us handle the backend, you focus on the application and
        business logic.
      </p>
      <Button href="/sign-up" content="Get Started for Free" />
    </div>
    <div class="sm:grid-cols-1 p-5 animate__animated animate__fadeInRight">
      <img src="./cart.svg" alt="" class="rounded-[30px]" srcset="" />
    </div>
  </div>
  <section class="my-10 sm:flex">
    <Card
      src="./customer-support.png"
      heading="Customer-first always"
      p="Tailor the API to seamlessly integrate with your business operations, enhancing efficiency and adaptability."
    />
    <Card
      src="./technology.png"
      heading="API Driven Ecosystem"
      p="Not just an app, but a whole ecosystem. Our investments of time is in 6+ applications, which offers you tailored services specific to your needs. "
    />
    <Card
      src="./stop.png"
      heading="One Stop Place"
      p="One Stop Place for ONDC Netwrok, Regardless of what aspect of business you are engaged in, We provides you opportunities to accelerate your growth. "
    />
  </section>
</section>
<section class="sm:grid sm:grid-cols-2 place-items-center bg-gray-100 h-auto">
  <div class="grid-cols-1">
    <img
      src="./network.avif"
      alt=""
      class="rounded-br-[60px] rounded-tr-[60px] p-5 sm:p-0"
      srcset=""
    />
  </div>
  <div class="sm:grid-cols-1 space-y-4 sm:m-20 m-5">
    <h3 class="sm:text-5xl text-3xl font-medium">
      Unbeatable Performance at Unbeatable Price
    </h3>
    <div>
      <p class="text-gray-400 mb-8">
        Our platform is meticulously crafted to streamline the ONDC services,
        offering a comprehensive suite of capabilities essential for developing
        applications in the near future. Our api system ensures a seamless
        experience, paving the way for efficient and innovative application
        development.
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
<section class="p-20 grid place-items-center text-center">
  <img
    src="./settings.png"
    class="place-items-center sm:h-16 h-12 animate-spin"
    style="animation-duration:2.5s"
    alt=""
    srcset=""
  />
  <h2 class="sm:text-7xl text-3xl m-5 font-medium">
    Focus on business,<br />not development.
  </h2>
</section>

<style>
</style>
