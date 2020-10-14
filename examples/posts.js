const Disforge = require("../app");
const client = new Disforge(
    "", // BOT_ID
    "", // Api Key for your bot.
    {
        server_count: "3000",
        shard_count: "20",
        interval: 3600000,
    });

client.on("ready", () => console.log("Client is started !")); // when the module is loaded and ready to post data

client.login("T0K3N+He.rE")