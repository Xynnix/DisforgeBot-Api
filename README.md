<h1 align="center">Welcome to bbl-api 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/bbl-api" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/bbl-api.svg">
  </a>
  <a href="https://docs.bladebotlist.xyz" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/bladebotlist/bbl-api/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/bladebotlist/bbl-api/blob/master/LICENSE" target="_blank">
    <img alt="License: mit" src="https://img.shields.io/github/license/hiizun/bbl-api" />
  </a>
  <a href="https://twitter.com/bladebotlist" target="_blank">
    <img alt="Twitter: bladebotlist" src="https://img.shields.io/twitter/follow/bladebotlist.svg?style=social" />
  </a>
</p>

> The official bladebotlist.xyz's api to post your server count easly and interact with the bladebotlist api

### 🏠 [Homepage](https://docs.bladebotlist.xyz)

## Install

```sh
npm install disforgebot-api
```

## Usage

```js
const Disforge = require("disforgebot-api");
const client = new Disforge(
    "BOT ID", // BOT_ID
    "THE API KEY",
    {
        server_count: "2",
    });


client.on("ready", () => console.log("Bot has started!"));

client.on("debug", (log) => console.log(log))

client.on("update", () => console.log("Stats updated !"));

client.on("error", (error) => console.log(`Something was wrong when the module has posted stats: ${error}`));
```

## **Disforge**

* List Website: http://disforge.com

## 📝 License

Copyright © 2020 [HiiZun](https://github.com/hiizun).<br />
This project is [MIT](https://github.com/bladebotlist/bbl-api/blob/master/LICENSE) licensed.
# DisforgeBot-Api
