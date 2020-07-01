var ghpages = require("gh-pages");

ghpages.publish("./.vuepress/dist", function(err) {
  console.log("error", err);
});
