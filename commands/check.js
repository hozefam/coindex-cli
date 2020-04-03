const KeyManager = require('../lib/KeyManager');
const CryptoAPI = require('../lib/CryptoAPI');
const colors = require('colors');

const check = {
  async price(cmd) {
    try {
      const keyManager = new KeyManager();
      const key = keyManager.getKey();

      const api = new CryptoAPI(key);

      const priceOutputData = await api.getPriceData(cmd.coin, cmd.cur);

      console.log(priceOutputData);
    } catch (err) {
      console.log(err.message.red);
    }
  },
};

module.exports = check;
