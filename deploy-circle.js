var ghpages = require("gh-pages");

ghpages.publish("./dist", "master", function(err) {
  if (err) {
    console.error(err);
  }
  console.log("deploy success");
});
