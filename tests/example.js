module.exports = {
  Demo(browser) {
    browser
      .url("https://github.com/ChingHuiHui/nightwatch-base")
      .assert.containsText("h1", "nightwatch");
  },
};
