const Discord = require('discord.js');
const client = new Discord.Client();
let stopped = false;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

});

client.on('error', console.error);
client.on('uncaughtException', console.error);

let introMessages = 0;
client.on('message', message => {
  message.capContent = message.content; // To save in case anything ever needs capitalization to stay the same
  message.content = message.content.toLowerCase(); // prevents capitalization errors
  if (!stopped && message.author.id != "651610055816380442") { // If the failsafe is not active and the message is not sent by the bot
    let r = message.guild.roles;
    let roles = { // r.find(r => r.name === ""),      *for copy and paste
      programmer: r.find(r => r.name === "Programmer"),
      artist: r.find(r => r.name === "Artist"),
      audio: r.find(r => r.name === "Audio"),
      writer: r.find(r => r.name === "Writer"),
      admin: r.find(r => r.name === "admin"),
      mod: r.find(r => r.name === "Moderator"),
      op: r.find(r => r.name === "Bot Operator"),
      boring: r.find(r => r.name === "booring"),
      rp: r.find(r => r.name === "Roleplay"),
      english: r.find(r => r.name === "English"),
      french: r.find(r => r.name === "Français"),
      spanish: r.find(r => r.name === "Español"),
      german: r.find(r => r.name === "Deutsch")
    };
    let accessRoles = { // roles which can be added and removed by users
      // the variable name is what the user types to gain the role
      programmer: roles["programmer"],
      artist: roles["artist"],
      audio: roles["audio"],
      writer: roles["writer"],
      roleplay: roles["rp"],
      english: roles["english"],
      french: roles["french"],
      spanish: roles["spanish"],
      german: roles["german"]
    }
    let statRoles = [roles["audio"], roles["artist"], roles["programmer"], roles["writer"], roles["mod"], roles["french"], rolls["spanish"], rolls["english"], rolls["german"], rolls["rp"]]; // for !stats to cycle through roles
    
    if (message.channel.name == "introductions") { // auto moderate to keep introductions from getting off topic
      introMessages++; // this resets when someone joins
      if (introMessages == 20) {
        message.channel.send("Hey guys! You seem to have sent a lot of messages since the last person joined, perhaps move to <#600373758221484054> or a different channel? This is an automated message and just a suggestion, so don't take it personally.")
      }
    }
    if (message.channel.name == "server-suggestions") {
      message.react("👍", "👎"); // putting them in the same function means that they will always be in that order
    }
    if (message.content.includes("joe") && message.member.toString() != "<@651610055816380442>") {
      message.channel.send("JOE MAMMA");
    }
    if (message.content.includes("creeper")) {
      message.channel.send("AWWWWWWWWW MAN");
    }
    if (message.content == "!vote") {
      let member = message.member;

      // 16777215 == 0xffffff
      let token = Math.floor(Math.random()*16777215).toString(16);

      message.channel.send("I will send you your token via DM within the next 5 seconds.");
      member.send(token);
      client.channels.get("671686028032999436").send("Token for " + member.displayName + ": " + token);
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
        rp: 0,
        none: 0
      };

      // Iterate over all members
      member.guild.members.forEach(countRoles, [statCounter, statRoles, message]);

        // Print out the stats
        message.channel.send(
            "**Server Stats:**\n\nMembers: " + statCounter.members +
            "\nAudio Folks: " + statCounter.audio +
            "\nArtists: " + statCounter.artist +
            "\nProgrammers: " + statCounter.programmer +
            "\nWriters: " + statCounter.writer +
            "\nModerators: " + statCounter.mod +
            "\nEnglish: " + statCounter.english +
            "\nFrench: " + statCounter.french +
            "\nSpanish: " + statCounter.spanish +
            "\nGerman: " + statCounter.german +
            "\nRoleplayers: " + statCounter.rp +
            "\nWithout a role: " + statCounter.none
        );

        message.channel.sendCode('',
            '' + statCounter.members + ',' +
            statCounter.audio + ',' +
            statCounter.artist + ',' +
            statCounter.programmer + ',' +
            statCounter.writer + ',' +
            statCounter.mod + ',' +
            statCounter.english + ',' +
            statCounter.french + ',' +
            statCounter.spanish + ',' +
            statCounter.german + ',' +
            statCounter.rp + ',' +
            statCounter.none
        );
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
    } else if (message.content.startsWith("!cleanup ") && !message.member.roles.has(message.guild.roles.find(r => r.name === "Bot Operator"))) {
      message.channel.send("You're not my dad!");
    }
    if (message.content.startsWith("!say ") && message.member.roles.find(r => r.name === "Bot Operator")) {
      message.delete(1000);
      message.channel.send(message.content.slice(4, message.content.length));
    }
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
  let message = this[2];
  let noRoleFlag = 1;

  statCounter.members += 1;

  if (value.roles.has(statRoles[0].id)) {
    statCounter.audio += 1;
    noRoleFlag = 0;
  }
  if (value.roles.has(statRoles[1].id)) {
    statCounter.artist += 1;
    noRoleFlag = 0;
  }
  if (value.roles.has(statRoles[2].id)) {
    statCounter.programmer += 1;
    noRoleFlag = 0;
  }
  if (value.roles.has(statRoles[3].id)) {
    statCounter.writer += 1;
    noRoleFlag = 0;
  }
  if (value.roles.has(statRoles[4].id)) {
    statCounter.mod += 1;
    noRoleFlag = 0;
  }
  if (value.roles.has(statRoles[5].id)) {
    statCounter.french += 1;
    noRoleFlag = 0;
  }
  if (value.roles.has(statRoles[6].id)) {
    statCounter.spanish += 1;
    noRoleFlag = 0;
  }
  if (value.roles.has(statRoles[7].id)) {
    statCounter.english += 1;
    noRoleFlag = 0;
  }
  if (value.roles.has(statRoles[8].id)) {
    statCounter.german += 1;
    noRoleFlag = 0;
  }
  if (value.roles.has(statRoles[9].id)) {
    statCounter.rp += 1;
    noRoleFlag = 0;
  }
  statCounter.none += noRoleFlag;
  if (noRoleFlag != 0) {
    value.addRole(message.guild.roles.find(r => r.name === "booring"));
  } else if (value.roles.find(r => r.name === "booring")) {
    value.removeRole(message.guild.roles.find(r => r.name === "booring"));
  }
}
const add = (role, textRole, message) => {
  let member = message.member;
  member.addRole(role).catch(console.error);
  message.channel.send("The " + textRole + " role has been added");
  /*if (message.member.roles.find(r => r.name === "booring")) {
    value.removeRole(message.guild.roles.find(r => r.name === "booring"));
  }
  if (message.channel.name != "bot-use") {
    message.channel.send("Try using commands in <#651833116998238222>")
  }*/
}
const remove = (role, textRole, message) => {
  let member = message.member;

  member.removeRole(role).catch(console.error);
  message.channel.send("The " + textRole + " role has been removed");
  if (message.channel.name != "bot-use") {
    message.channel.send("Try using commands in <#651833116998238222>")
  }
}
//setInterval(() => { console.log("Online: " + !stopped) }, 1000)

