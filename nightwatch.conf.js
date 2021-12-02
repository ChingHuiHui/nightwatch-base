module.exports = {
  // where the tests are loacted
  src_folders: ["tests"],

  webdriver: {
    //啟動後 Webdriver server會在child proccess的背景運行並自動啟動/停止
    start_process: true,
    server_path: "node_modules/.bin/chromedriver",
    port: 9515,
  },

  // 用來定義測試環境
  test_settings: {
    // 必須有一個default
    default: {
      desiredCapabilities: {
        browserName: "chrome",
      },
    },
  },
};
