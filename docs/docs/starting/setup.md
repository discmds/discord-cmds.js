### 📜 | setup

```js
const { Client } = require("discord.js")
const discmd = require("discord-cmds.js")
const client = Client()

const dcjs = new discmd(client,{
cmdDir: "./commands",
port: 3000, //for starting express app!
slash: true, //your commands can be runned as slash commands!
normal: true, //your commands can be runned as normal commands!
prefix: "!",
notOwnerMsg: "You are not my owner",
ownerID: "", //bot owner id!
notHavingPermsMsg: "You don't have {PERMISSION} perms!,
clientNotHavingPermsMsg: "I have have {PERMISSION} perms!
})

client.on("ready", () => {
    console.log("bot ready")
})

client.login("token")
```
