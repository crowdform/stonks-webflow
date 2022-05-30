// import external dependencies
import "jquery";

// import local dependencies
import Router from "./util/Router";
import common from "./routes/common";

import exchange from "./routes/exchange";

/** Populate Router instance with DOM routes */
const routes = new Router({
  // All pages
  common,
  // Home page
  exchange,
});

// Load Events
jQuery(document).ready(() => routes.loadEvents());
