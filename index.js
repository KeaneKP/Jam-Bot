/* Setup

   1. Create a .env file (click add file then remane it to .env)

   2. Put "token=" (without quotes) into the .env file followed by your Discord Bot token (No spaces!)

*/

/* If you use uptimerobot to ping, delete this line and line 20

const express = require("express");
const app = express();

app.listen(() => console.log("Server started"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});

*/

const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  
});

client.on('message', message => {
  // Here is where you need to code
  let programmer = message.guild.roles.find(r => r.name === "Programmer");
  let artist = message.guild.roles.find(r => r.name === "Artist");
  let audio = message.guild.roles.find(r => r.name === "Audio");
  let admin = message.guild.roles.find(r => r.name === "admin");
  let writer = message.guild.roles.find(r => r.name === "Writer");
  if (message.content == "r!add programmer") {
    let member = message.member;
    member.addRole(programmer).catch(console.error);
    message.channel.send("The programmer role has been added");
  } else if (message.content == "r!remove programmer") {
    let member = message.member;
    member.removeRole(programmer).catch(console.error);
    message.channel.send("The programmer role has been removed");
  } else if (message.content == "r!add artist") {
    let member = message.member;
    member.addRole(artist).catch(console.error);
    message.channel.send("The artist role has been added");
  } else if (message.content == "r!add audio") {
    let member = message.member;
    member.addRole(audio).catch(console.error);
    message.channel.send("The audio role has been added");
  } else if (message.content == "r!remove artist") {
    let member = message.member;
    member.removeRole(artist).catch(console.error);
    message.channel.send("The artist role has been removed");
  } else if (message.content == "r!remove audio") {
    let member = message.member;
    member.removeRole(audio).catch(console.error);
    message.channel.send("The audio role has been removed");
  } else if (message.content == "Who's Joe?") {
    message.channel.send("JOE MAMMA");
  } else if (message.content == "creeper") {
    message.channel.send("AWWWWWWWWW MAN");
  } else if (message.content == "r!add writer") {
    let member = message.member;
    member.addRole(writer).catch(console.error);
    message.channel.send("The writer role has been added");
  } else if (message.content == "r!remove writer") {
    let member = message.member;
    member.removeRole(writer).catch(console.error);
    message.channel.send("The writer role has been removed");
  }
});
// General = <#600373758221484054>
client.on('guildMemberAdd', member => {
  let channel = member.guild.channels.find(r => r.name === "general");
  channel.fetchMessages({ limit: 1 }).then(messages => {
    let message = messages.first();
    message.react('👋');
  })
});
client.login(process.env.token);