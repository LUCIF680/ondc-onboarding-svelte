<!-- App.svelte -->
<script>
  import { Router, Route } from "svelte-routing";
  import Admin from "./layouts/Admin.svelte";
  import Auth from "./layouts/Auth.svelte";
  import Landing from "./views/Landing.svelte";
  import Profile from "./views/Profile.svelte";
  import Index from "./views/Index.svelte";

  export let url = "";
</script>

<Router {url}>
  <Route path="admin/*admin" component={Admin} />
  <Route path="auth/*auth" component={Auth} />
  <Route path="profile" component={Profile} />
  <Route path="/" component={Landing} />
  <Route path="/sample" component={Index} />
</Router>
