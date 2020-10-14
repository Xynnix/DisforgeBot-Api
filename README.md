### 🏠 [Homepage](https://disforge.com)

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
