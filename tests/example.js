module.exports = {
  Demo(browser) {
    browser
      .url('https://github.com/ChingHuiHui/nightwatch-base')
      .expect.element('h1')
      .text.to.contains('nightwatch-base')
  },
}
