const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    proxy(
      "https://testnets-api.opensea.io/assets?asset_contract_address=0xbf6134EbD8669F996A1E925fc3ae93cA1711803e&order_direction=asc",
      {
        target:
          "https://testnets-api.opensea.io/assets?asset_contract_address=0xbf6134EbD8669F996A1E925fc3ae93cA1711803e&order_direction=asc",
        changeOrigin: true,
      }
    )
  );
};
