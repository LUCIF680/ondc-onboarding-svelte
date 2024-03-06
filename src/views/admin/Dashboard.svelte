<script>
  // core components
  import CardLineChart from "components/Cards/CardLineChart.svelte";
  import CardBarChart from "components/Cards/CardBarChart.svelte";
  import CardPageVisits from "components/Cards/CardPageVisits.svelte";
  import CardSocialTraffic from "components/Cards/CardSocialTraffic.svelte";
  import { httpRequest } from "utils/api.js";
  export let devKey, prodKey;
  (async () => {
    const response = await httpRequest(
      `${process.env.API_URL}user/jwt-secret-key`,
      undefined,
      "GET"
    );
    devKey = response.dev_key;
    prodKey = response.prod_key;
  })();
</script>

<div>
  <div class="flex flex-wrap">
    <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
      <CardPageVisits {devKey} {prodKey} />
    </div>
    <div class="w-full xl:w-4/12 px-4">
      <CardSocialTraffic />
    </div>
  </div>
  <div class="flex flex-wrap mt-4">
    <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
      <CardLineChart />
    </div>
    <div class="w-full xl:w-4/12 px-4">
      <CardBarChart />
    </div>
  </div>
</div>
