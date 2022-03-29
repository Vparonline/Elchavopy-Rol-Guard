const set = require("../helpers/elchavopyy.json");
const fs = require("fs");
const moment = require("moment");
const ms = require("ms");
const {MessageEmbed} = require("discord.js");
const Discord = require("discord.js");
const MessageAttachment = require("discord.js");
const client = global.client;
const Database = require("./datacenter.js");

module.exports = async (msg) => {
  let prefix = set.Class.Prefix.find((x) => msg.content.toLowerCase().startsWith(x));
  if (msg.author.bot || !msg.guild || !prefix) return;
  let args = msg.content.substring(prefix.length).trim().split(" ");
  let commandName = args[0].toLowerCase();
  
  const guild = msg.guild.id
  args = args.splice(1);
  let cmd = client.commands.has(commandName) ? client.commands.get(commandName) : client.commands.get(client.aliases.get(commandName));

  if (cmd) {
    let author = msg.guild.member(msg.author);
    let uye = msg.guild.member(msg.mentions.users.first()) || msg.guild.members.cache.get(args[0]);
    if (cmd.conf.owner && !set.helpers.nobodybaşedemez.includes(msg.author.id)) return;
    if (cmd.conf.serverowner && !msg.guild.owner.user.id.includes(msg.author.id) && !set.helpers.nobodybaşedemez.includes(msg.author.id)) return;
    cmd.run({client: client, msg: msg, args: args, prefix: prefix, guild: guild, author: author, uye: uye, cfg: cfg, fs: fs, MessageEmbed: MessageEmbed, Discord: Discord, moment: moment, Database: Database, MessageAttachment: MessageAttachment, ms: ms});
  }
};

module.exports.conf = {
  name: "message",
};
