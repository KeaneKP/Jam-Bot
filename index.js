const Discord = require('discord.js');
const client = new Discord.Client();
let stopped = false;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

});

client.on('message', message => {
  let programmer = message.guild.roles.find(r => r.name === "Programmer");
  let artist = message.guild.roles.find(r => r.name === "Artist");
  let audio = message.guild.roles.find(r => r.name === "Audio");
  let admin = message.guild.roles.find(r => r.name === "admin");
  let writer = message.guild.roles.find(r => r.name === "Writer");
  if (!stopped) {
    if (message.content == "!add programmer") {
      let member = message.member;
      member.addRole(programmer).catch(console.error);
      message.channel.send("The programmer role has been added");
    }
    if (message.content == "!remove programmer") {
      let member = message.member;
      member.removeRole(programmer).catch(console.error);
      message.channel.send("The programmer role has been removed");
    }
    if (message.content == "!add artist") {
      let member = message.member;
      member.addRole(artist).catch(console.error);
      message.channel.send("The artist role has been added");
    }
    if (message.content == "!add audio") {
      let member = message.member;
      member.addRole(audio).catch(console.error);
      message.channel.send("The audio role has been added");
    }
    if (message.content == "!remove artist") {
      let member = message.member;
      member.removeRole(artist).catch(console.error);
      message.channel.send("The artist role has been removed");
    }
    if (message.content == "!remove audio") {
      let member = message.member;
      member.removeRole(audio).catch(console.error);
      message.channel.send("The audio role has been removed");
    }
    if (message.content.toLowerCase().includes("joe") && message.member.toString() != "<@651610055816380442>") {
      message.channel.send("JOE MAMMA");
    }
    if (message.content.toLowerCase().includes("creeper")) {
      message.channel.send("AWWWWWWWWW MAN");
    }
    if (message.content == "!stop") {
      stopped = true;
    }
    if (message.content == "!add writer") {
      let member = message.member;
      member.addRole(writer).catch(console.error);
      message.channel.send("The writer role has been added");
    }
    if (message.content == "!remove writer") {
      let member = message.member;
      member.removeRole(writer).catch(console.error);
      message.channel.send("The writer role has been removed");
    }

    if (message.content.toLowerCase().startsWith("!sacrifice ")) {
      message.channel.send("You have sacrificed " + message.content.slice(11) + sacrificeOutcome())
    } else if (message.content.toLowerCase().includes("x") && message.member.toString() != "<@651610055816380442>" && message.channel == "botavis-use") {
      message.channel.send(message.member.toString() + "  YOU HAVE ANGERED THE SPIRITS! Quick! use !sacrifice *sacrifice* to please them again!");
    }
    if (message.content == "Is plague a female") {
      message.channel.send("Yes, of course.");
    }
    if (message.content.startsWith("!roll d")) {
      if (message.content.includes("+")) {
        const mod = message.content.indexOf("+");
        console.log("Mod index: " + mod)
        let roll = Math.floor(Math.random() * +message.content.slice(7, mod)) + +message.content.slice(mod + 1) + 1;
        console.log("roll: " + roll)
        message.channel.send("🎲 You have rolled a " + roll + " 🎲");
        console.log("output: 🎲 You have rolled a " + roll + " 🎲")
      } else if (message.content.includes("-")) {
        const mod = message.content.indexOf("-");
        let roll = Math.floor(Math.random() * +message.content.slice(7, mod)) - +message.content.slice(mod + 1) + 1;
        message.channel.send("🎲 You have rolled a " + roll + " 🎲")
      } else {
        try {
          message.channel.send("🎲 You have rolled a " + (Math.floor(Math.random() * +message.content.slice(7)) + 1) + " 🎲")
        } catch {
          message.channel.send("The command has failed, make sure you are rolling an integer die.")
        }
      }
    }
    if (message.content.toLowerCase().startsWith("!summon ")) {
      message.channel.send(message.content.slice(7))
      message.channel.send(message.content.slice(7))
      message.channel.send(message.content.slice(7))
    }
    if (message.content.startsWith("!cleanup ")) {
      try {
        for (let i = 0; i < +message.content.slice(8); i++) {
          message.channel.fetchMessages({ limit: +message.content.slice(7) }).then(messages => {
            let toDelete = messages.first();
            toDelete.delete();
          })
        }
      } catch {
        message.channel.send("nope");
      }
    }
    if (message.content.startsWith("!say ")) {
      message.delete(1000);
      message.channel.send(message.content.slice(4, message.content.length));
    }
  }
  if (message.content == "!start") {
    stopped = false;
  }
})
// General = <#600373758221484054>
client.on('guildMemberAdd', member => {
  let channel = member.guild.channels.find(r => r.name === "general");
  channel.fetchMessages({ limit: 1 }).then(messages => {
    let message = messages.first();
    message.react('👋');
  })
});
client.login(process.env.token);

function sacrificeOutcome() {
  x = Math.floor(Math.random() * 4);
  switch (x) {
    case 0:
      return ". The spirits are pleased"
      break;
    case 1:
      return ". The spirits are neutral"
      break;
    case 2:
      return ". The spirits are not impressed"
      break;
    case 3:
      return ". The spirits are displeased"
      break;
  }
}