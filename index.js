const Discord = require('discord.js');
const client = new Discord.Client();
let stopped = false;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

});
let introMessages = 0;
client.on('message', message => {
  let programmer = message.guild.roles.find(r => r.name === "Programmer");
  let artist = message.guild.roles.find(r => r.name === "Artist");
  let audio = message.guild.roles.find(r => r.name === "Audio");
  let admin = message.guild.roles.find(r => r.name === "admin");
  let mod = message.guild.roles.find(r => r.name === "Moderator");
  let writer = message.guild.roles.find(r => r.name === "Writer");
  let french = message.guild.roles.find(r => r.name === "Français");
  let spanish = message.guild.roles.find(r => r.name === "Español");
  let english = message.guild.roles.find(r => r.name === "English");
  let german = message.guild.roles.find(r => r.name === "Deutsch");
  let rp = message.guild.roles.find(r => r.name === "Roleplay");
  //let botOp = message.guild.roles.find(r => r.name === "Bot Operator");

  // New helper array to pass through the role ids to the stat objects
  let statRoles = [audio, artist, programmer, writer, mod, french, spanish, english, german, rp];

  if (!stopped && message.member.toString() != "<@651610055816380442>") {
    if (message.channel.name == "introductions") {
      introMessages++;
      if (introMessages == 20) {
        message.channel.send("Hey guys! You seem to have sent a lot of messages since the last person joined, perhaps move to <#600373758221484054> or a different channel? This is an automated message and just a suggestion, so don't take it personally.")
      }
    }
    if (message.channel.name == "server-suggestions") {
      message.react("👍");
      message.react("👎");
    }
    //<#662059386100776963> <#651833116998238222> <#600373758221484054> <#662315416583929866>
    if (message.content.toLowerCase().startsWith("!welcome") && message.channel.name == "introductions") {
      let member = message.content.slice(8);
      message.channel.send("Welcome  "+ member +", please introduce yourself! Make sure to check out <#662059386100776963>, assign yourself some roles in <#651833116998238222> and share anything you've worked on in <#662315416583929866> We hope you enjoy your stay here and we're looking forward to getting to know you!" )

      //-Welcome "+member+"!\n-Check out <#662059386100776963>\n-Assign roles in <#651833116998238222>\n-Chat in <#600373758221484054>\n-Show off your work in <#662315416583929866> \n-*HAVE FUN!*")
    }
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
    if (message.content == "!add roleplay") {
      let member = message.member;
      member.addRole(rp).catch(console.error);
      message.channel.send("The roleplay role has been added");
    }
    if (message.content == "!remove roleplay") {
      let member = message.member;
      member.removeRole(rp).catch(console.error);
      message.channel.send("The roleplay role has been removed");
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
    if (message.content.toLowerCase() == "!add français" || message.content.toLowerCase() == "!add francais") {
      let member = message.member;
      member.addRole(french).catch(console.error);
      message.channel.send("The Français role has been added");
    }
    if (message.content.toLowerCase() == "!remove français" || message.content.toLowerCase() == "!remove francais") {
      let member = message.member;
      member.removeRole(french).catch(console.error);
      message.channel.send("The Français role has been removed");
    }
    if (message.content.toLowerCase() == "!add español" || message.content.toLowerCase() == "!add espanol") {
      let member = message.member;
      member.addRole(spanish).catch(console.error);
      message.channel.send("The Español role has been added");
    }
    if (message.content.toLowerCase() == "!remove español" || message.content.toLowerCase() == "!remove espanol") {
      let member = message.member;
      member.removeRole(spanish).catch(console.error);
      message.channel.send("The Español role has been removed");
    }
    if (message.content.toLowerCase() == "!add english" || message.content.toLowerCase() == "!add english") {
      let member = message.member;
      member.addRole(english).catch(console.error);
      message.channel.send("The English role has been added");
    }
    if (message.content.toLowerCase() == "!remove english" || message.content.toLowerCase() == "!remove english") {
      let member = message.member;
      member.removeRole(english).catch(console.error);
      message.channel.send("The English role has been removed");
    }
    if (message.content.toLowerCase() == "!add deutsch" || message.content.toLowerCase() == "!add deutsch") {
      let member = message.member;
      member.addRole(german).catch(console.error);
      message.channel.send("The Deutsch role has been added");
    }
    if (message.content.toLowerCase() == "!remove deutsch" || message.content.toLowerCase() == "!remove deutsch") {
      let member = message.member;
      member.removeRole(german).catch(console.error);
      message.channel.send("The Deutsch role has been removed");
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
    if (message.content == "!kill") {
      stopped = true;
      message.channel.send("MY BATTERY IS LOW AND IT'S GETTING DARK <@&657681013882880000>");
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
    if (message.content == "!stats") {
      let member = message.member;

        // Compile a quick statistic by iterating over all members and
        // increasing the respective role counter if user has the role

        // [audio, artist, programmer, writer, mod, french, spanish, english, german, rp]
        let statCounter = {
            members: 0,
            audio: 0,
            artist: 0,
            programmer: 0,
            writer: 0,
            mod: 0,
            french: 0,
            spanish: 0,
            english: 0,
            german: 0,
            rp: 0
        };

        // Iterate over all members
        member.guild.members.forEach(countRoles, [statCounter, statRoles]);

        // Print out the stats
        message.channel.send(
            "**Server Stats:**\n\nMembers: " + statCounter.members +
            "\nAudio Folks: " + statCounter.audio +
            "\nArtists: " + statCounter.artist +
            "\nProgrammers: " + statCounter.programmer +
            "\nWriters: " + statCounter.writer +
            "\nModerators: " + statCounter.mod +
            "\nFrench: " + statCounter.french +
            "\nSpanish: " + statCounter.spanish +
            "\nEnglish: " + statCounter.english +
            "\nGerman: " + statCounter.german +
            "\nRoleplayers: " + statCounter.rp
        );
    }

    if (message.content.toLowerCase().startsWith("!sacrifice ")) {
      message.channel.send("You have sacrificed " + message.content.slice(11) + sacrificeOutcome())
    } else if (message.content.toLowerCase().includes("x") && message.member.toString() != "<@651610055816380442>" && message.channel.name == "bot-use") {
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
    if (message.content.startsWith("!cleanup ") && message.member.roles.find(r => r.name === "Bot Operator")) {
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
    } else if (message.content.startsWith("!cleanup " && !message.member.roles.has(message.guild.roles.find(r => r.name === "Bot Operator")))) {
      message.channel.send("You're not my dad!");
    }
    if (message.content.startsWith("!say ") && message.member.roles.find(r => r.name === "Bot Operator")) {
      message.delete(1000);
      message.channel.send(message.content.slice(4, message.content.length));
    }
    if (message.content.startsWith("!cast ")) {
      let spell = message.content.slice(6);
      message.channel.send("You cast " + spell + "! It was " + randomEffect());
    }
  } else if (message.content == "!revive") {
    stopped = false;
    message.channel.send("Back up and at em!")
  }
})
// General = <#600373758221484054>
client.on('guildMemberAdd', member => {
  introMessages = 0;
  let channel = member.guild.channels.find(r => r.name === "introductions");
  channel.fetchMessages({ limit: 1 }).then(messages => {
    let message = messages.first();
    message.react('👋');
  })
});
client.login(process.env.token);

// [audio, artist, programmer, writer, mod, french, spanish, english, german, rp]
function countRoles(value, key, map) {
  let statCounter = this[0];
  let statRoles = this[1];

  statCounter.members += 1;

  if (value.roles.has(statRoles[0])) {
    statCounter.audio += 1;
  }
  if (value.roles.has(statRoles[1])) {
    statCounter.artist += 1;
  }
  if (value.roles.has(statRoles[2])) {
    statCounter.programmer += 1;
  }
  if (value.roles.has(statRoles[3])) {
    statCounter.writer += 1;
  }
  if (value.roles.has(statRoles[4])) {
    statCounter.mod += 1;
  }
  if (value.roles.has(statRoles[5])) {
    statCounter.french += 1;
  }
  if (value.roles.has(statRoles[6])) {
    statCounter.spanish += 1;
  }
  if (value.roles.has(statRoles[7])) {
    statCounter.english += 1;
  }
  if (value.roles.has(statRoles[8])) {
    statCounter.german += 1;
  }
  if (value.roles.has(statRoles[9])) {
    statCounter.rp += 1;
  }
}

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
function randomEffect() {
  x = Math.floor(Math.random() * 14);
  switch (x) {
    case 0:
      return "super effective!"
      break;
    case 1:
      return "very effect"
      break;
    case 2:
      return "not very effective"
      break;
    case 3:
      return "effective"
      break;
    case 4:
      return "shit"
      break;
    case 5:
      return "very effective"
      break;
    case 6:
      return "*ok*"
      break;
    case 7:
      return "a thing"
      break;
    case 8:
      return "super effective!"
      break;
    case 9:
      return "effective"
      break;
    case 10:
      return "not effective"
      break;
    case 11:
      return "kind of effective"
      break;
    case 12:
      return "effective"
      break;
    case 13:
      return "very effective"
      break;
    case 14:
      return "Subrscribe to Pewdiepie"
      break;

  }
}
setInterval(() => { console.log("Online: " + !stopped) }, 1000)

