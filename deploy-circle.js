var ghpages = require("gh-pages");

ghpages.publish("./dist", function (err) {
  if (err) {
    console.error(err);
  }
  console.log("deploy success");
});
