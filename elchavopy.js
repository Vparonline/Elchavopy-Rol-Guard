const Discord = require("discord.js");
const client = new Discord.Client();
const ms = require("ms")
const { MessageEmbed } = require("discord.js");
const set = require("./Internal/helpers/elchavopyy.json");
const mongoose = require("mongoose");
const userRoles = require('./userRoles.js');
const fs = require('fs');
const client1 = global.client;
mongoose.connect(set.Class.Mongo, {  useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false, });

//////////////////////////LİMİT////////////////////////////////////////////////////////////////////////////////////////////////
client.nobodybaşedemez = ["838931132581281813"] //////////////////// OWNERS
client.banLimit = new Map()
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on("ready", () => {
    client.user.setActivity(set.Class.Activity);
    //client.channels.cache.get(set.Channels.Voice).join();
    console.log(client.user.tag)
})
//////////////////////////WEB LOGİN GUARD////////////////////////////////////////////////////////////////////////////////////////////////
client.on("presenceUpdate", async (eski, pc) => {
    const elchavopy = Object.keys(pc.user.presence.clientStatus);
    const embed = new MessageEmbed();
    const kanal = client.channels.cache.find((chavo) => chavo.id === set.Logger.WebLogger);
    const roller = pc.member.roles.cache.filter((chavo) => chavo.editable && chavo.name !== "@everyone" && [8, 4, 2, 32, 128, 16, 1073741824, 268435456].some((a) => chavo.permissions.has(a)));
    if (!pc.user.bot && pc.guild.id === set.Data.GuildID && [8, 4, 2, 32, 128, 16, 1073741824, 268435456].some((chavo) => pc.member.permissions.has(chavo)) ) {
      const sunucu = client.guilds.cache.get(set.Data.GuildID);
      if (sunucu.ownerID === pc.user.id) return;
      if (elchavopy.find(chavo => chavo === "web")) {
        await userRoles.findOneAndUpdate({ GuildID: set.Data.GuildID, userID: pc.user.id }, { $set: { roles: roller.map((chavo) => chavo.id) } }, { upsert: true });
        await pc.member.roles.remove(roller.map((chavo) => chavo.id), "Tarayıcıdan Giriş Yaptı Orospu Çocuğu.");
        if (kanal) kanal.send(embed.setDescription(`${pc.user.toString()} bu orospu çocuğu webe girmiş koruma amacı ile rollerini aldım! \n\n**Alınan Rol(ler):** \n${roller.map((chavo) => `<@&${chavo.id}>`).join("\n")}`).setAuthor(pc.member.displayName, pc.user.avatarURL({ dynamic: true })).setFooter(set.Class.Activity, client.guilds.cache.get(set.Data.GuildID).iconURL({ dynamic: true })).setTimestamp().setColor(pc.member.displayHexColor));
      } 
    }
    if (!elchavopy.find(chavo => chavo === "web")) {
      const veri = await userRoles.findOne({ GuildID: set.Data.GuildID, userID: pc.user.id });
      if (!veri) return;
      if (veri.roles || veri.roles.length) {
        await veri.roles.map(chavo => pc.member.roles.add(chavo, "Tarayıcıdan Çıkış Yaptı rollerini geri verdim.").then(async () => {
          await userRoles.findOneAndDelete({ GuildID: set.Data.GuildID, userID: pc.user.id });
          if (kanal) kanal.send(embed.setDescription(`${pc.user.toString()} bu orospu çocuğu pcye geçmiş rollerini geri verdim! \n\n**Alınan Rol(ler):** \n${veri.roles.map((chavo) => `<@&${chavo}>`).join("\n")}`).setAuthor(pc.member.displayName, pc.user.avatarURL({ dynamic: true })).setFooter(set.Class.Activity, client.guilds.cache.get(set.Data.GuildID).iconURL({ dynamic: true })).setTimestamp().setColor(pc.member.displayHexColor));
        }).catch(() => {}));
      }
    }
  });
//////////////////////////ROL SİLME GUARD////////////////////////////////////////////////////////////////////////////////////////////////
client.on("roleDelete", async (Lubluaghaujlwm) => {
    await Lubluaghaujlwm.guild.fetchAuditLogs({
        type: "ROLE_DELETE"
    }).then(async (Kevtshuajxyuas) => {
    let  Kevkho = Kevtshuajxyuas.entries.first()
    let Kuazaubntsuab = Kevkho.executor
    if (Date.now() - Kevkho.createdTimestamp > 10000 || client.nobodybaşedemez.includes(Kuazaubntsuab.id) ) return; ////|| set.Safe.GuardSafe.includes(Kuazaubntsuab.id)
    anasınısik(Kevkho.executor.id, "ban");
    client.channels.cache.get(set.Logger.GLogger).send(`**${Lubluaghaujlwm.name}** (\`${Lubluaghaujlwm.id}\`) isimli rolü ${Kuazaubntsuab} - (\`${Kuazaubntsuab.id}\`) yetkilisi sildiği için sunucudan uzaklaştırdım!`)
   await Lubluaghaujlwm.guild.members.ban(Kuazaubntsuab.id, {
        //reason: "Rol Silme!"
     })
const ytKapat = ["ADMINISTRATOR", "BAN_MEMBERS", "KICK_MEMBERS", "MANAGE_ROLES", "MANAGE_CHANNELS", "MANAGE_GUILD", "VIEW_AUDIT_LOG"]
    let sunucu = client.guilds.cache.get(set.Data.GuildID);
    Lubluaghaujlwm.guild.roles.cache.filter(a => ytKapat.some(x => a.permissions.has(x)) == true && Lubluaghaujlwm.guild.members.cache.get(client.user.id).roles.highest.rawPosition > a.rawPosition).map(yt => {
       yt.setPermissions(0)
const embed = new Discord.MessageEmbed()
 .setTimestamp()
   .setColor("BLACK")
   .setFooter(set.Class.Activity) 
   .setAuthor("İzinsiz rol silme!")
   .setDescription(`

**${Lubluaghaujlwm.name}** (\`${Lubluaghaujlwm.id}\`) isimli rolü ${Kuazaubntsuab} - (\`${Kuazaubntsuab.id}\`) yetkilisi sildiği için sunucudan uzaklaştırdım!`)

client.channels.cache.get(set.Logger.GLogger).send(`@everyone`, {embed: embed})
 })

   })
});
//////////////////////////ROL YETKİ TANIMA GUARD////////////////////////////////////////////////////////////////////////////////////////////////
client.on("roleUpdate", async (oldRole, legg) => {
    await legg.guild.fetchAuditLogs({
        type: "ROLE_UPDATE"
    }).then(async (audit) => {
        let exec = audit.entries.first()
        let cmd = exec.target
        let oç = exec.executor
        if (Date.now() - exec.createdTimestamp > 10000 || client.nobodybaşedemez.includes(oç.id)) return; //|| set.Safe.GuardSafe.includes(oç.id)
        if (oç.id == client.user.id) return
        if (oldRole.permissions !== legg.permissions) {
        anasınısik(exec.executor.id, "ban");
let yetkipermleri = ["ADMINISTRATOR", "BAN_MEMBERS", "VIEW_AUDIT_LOG", "KICK_MEMBERS", "MANAGE_ROLES", "MANAGE_CHANNELS", "MANAGE_GUILD"]
            if (yetkipermleri.some(x => legg.permissions.has(x)) == true) {
const ytKapat = ["ADMINISTRATOR", "BAN_MEMBERS", "KICK_MEMBERS", "MANAGE_ROLES", "MANAGE_CHANNELS", "MANAGE_GUILD", "VIEW_AUDIT_LOG"] // "BAN_MEMBERS", "KICK_MEMBERS", "MANAGE_ROLES", "MANAGE_CHANNELS", "MANAGE_GUILD", "VIEW_AUDIT_LOG"
    let sunucu = client.guilds.cache.get(set.Data.GuildID);
    legg.guild.roles.cache.filter(a => ytKapat.some(x => a.permissions.has(x)) == true && legg.guild.members.cache.get(client.user.id).roles.highest.rawPosition > a.rawPosition).map(yt => {
       yt.setPermissions(0)
const embed = new Discord.MessageEmbed()
 .setTimestamp()
   .setColor("BLACK")
   .setFooter(set.Class.Activity) 
   .setAuthor("İzinsiz rollere yetki tanıma!")
   .setDescription(`

${oç} - (\`${oç.id}\`) yetkilisi **rol(ler)e** yetki tanımaya çalıştığı için sunucudan uzaklaştırdım!`)

client.channels.cache.get(set.Logger.GLogger).send(`@everyone`, {embed: embed})
    })
    }
        }
    })
});
//////////////////////////ROL OLUŞTURMA GUARD////////////////////////////////////////////////////////////////////////////////////////////////
client.on("roleCreate", async (role) => {
    await role.guild.fetchAuditLogs({ type: "ROLE_CREATE" }).then(async (audit) => {
        let cmd = audit.entries.first()
        let oç = cmd.executor
        if (client.nobodybaşedemez.includes(oç.id)) return
        if (Date.now() - cmd.createdTimestamp > 5000 || client.nobodybaşedemez.includes(oç.id)) return;
  anasınısik(cmd.executor.id, "ban")
const ytKapat = ["ADMINISTRATOR", "BAN_MEMBERS", "KICK_MEMBERS", "MANAGE_ROLES", "MANAGE_CHANNELS", "MANAGE_GUILD", "VIEW_AUDIT_LOG"] // "BAN_MEMBERS", "KICK_MEMBERS", "MANAGE_ROLES", "MANAGE_CHANNELS", "MANAGE_GUILD", "VIEW_AUDIT_LOG"
    let sunucu = client.guilds.cache.get(set.Data.GuildID);
    role.guild.roles.cache.filter(a => ytKapat.some(x => a.permissions.has(x)) == true && role.guild.members.cache.get(client.user.id).roles.highest.rawPosition > a.rawPosition).map(yt => {
       yt.setPermissions(0)
const embed = new Discord.MessageEmbed()
.setTimestamp()
  .setColor("BLACK")
  .setFooter(set.Class.Activity)
  .setAuthor("İzinsiz rol oluşturma!")
  .setDescription(`
${oç} - (\`${oç.id}\`) yetkilisi rol oluşturmaya çalıştığı için sunucudan uzaklaştırdım!\`
`)
client.channels.cache.get(set.Logger.GLogger).send(`@everyone`, {embed: embed})
        })
    
    })
});
////////////////////////////////////////////////YT VERME/////////////////////////////////////////////////////////////////////////
client.on("guildMemberUpdate", async (oldMember, ytverilenorospuçocuğu) => {
    await ytverilenorospuçocuğu.guild.fetchAuditLogs({ type: "MEMBER_ROLE_UPDATE" }).then(async (audit) => {
        let cmd = audit.entries.first()
        let oç = cmd.target
        let yapan = cmd.executor
        if (oç.id != ytverilenorospuçocuğu.id) return
         if (Date.now() - cmd.createdTimestamp > 5000 || client.nobodybaşedemez.includes(yapan.id)) return;
anasınısik(cmd.executor.id, "ban")
        ytverilenorospuçocuğu.roles.cache.forEach(async role => {
            if (!oldMember.roles.cache.has(role.id)) {
                let arr = ["ADMINISTRATOR","MANAGE_ROLES", "MANAGE_CHANNELS", "MANAGE_GUILD"]
                if (arr.some(allah => role.permissions.has(allah)) == true) {
                   // client.channels.cache.get(set.Logger.GLogger).send(`${yapan.id}> \`${yapan.id}\` yetkilisi <@${oç.id}> \`${oç.id}\` kişisine yönetici yetkisi \`${role.name}\` verdiği için yasaklandı!`)
                    await ytverilenorospuçocuğu.roles.set(role)
                    ytverilenorospuçocuğu.guild.roles.cache.filter(a => arr.some(x => a.permissions.has(x)) == true && ytverilenorospuçocuğu.guild.members.cache.get(client.user.id).roles.highest.rawPosition > a.rawPosition).map(yt => {
                        yt.setPermissions(0)
                    })
                    const embed = new Discord.MessageEmbed()
.setTimestamp()
  .setColor("BLACK")
  .setFooter(set.Class.Activity)
  .setAuthor("İzinsiz yönetici yetkisi verme!")
  .setDescription(`
${yapan} \`${yapan.id}\` yetkilisi ${oç} \`${oç.id}\` isimli kullanıcıya \`${role.name}\` isimli **yönetici** permini vermeye çalıştığı için sunucudan uzaklaştırdım!
`)
client.channels.cache.get(set.Logger.GLogger).send(`@everyone`, {embed: embed})
                }
            }
        });
    })
})
////////////////////////////////////////////////BOT KORUMASI/////////////////////////////////////////////////////////////////////////
client.on("guildMemberAdd", async bot => {
  let oç = await bot.guild.fetchAuditLogs({type: 'BOT_ADD'}).then(audit => audit.entries.first());
  if (!bot.user.bot || !oç || !oç.executor || Date.now()-oç.createdTimestamp > 5000) return;
if (client.nobodybaşedemez.includes(oç.executor.id)) return;
  anasınısik(oç.executor, "ban")
  anasınısik(bot.id, "ban")
const embed = new Discord.MessageEmbed()
.setTimestamp()
  .setColor("BLACK")
  .setFooter(set.Class.Activity)
  .setAuthor("İzinsiz bot ekleme!")
  .setDescription(`
${oç.executor} - \`${oç.executor.id}\` isimli yetkili ${bot} - \`${bot.id}\` isimli botu eklemeye çalıştığı için **bot** ile beraber sunucudan uzaklaştırdım!
`)
client.channels.cache.get(set.Logger.GLogger).send(`@everyone`, {embed: embed})
});
////////////////////////////////////////////////CEZALANDIRMA FONKSİYON/////////////////////////////////////////////////////////////////////////
const yt = ["ADMINISTRATOR", "MANAGE_ROLES", "MANAGE_CHANNELS", "MANAGE_GUILD", "BAN_MEMBERS", "KICK_MEMBERS", "MANAGE_NICKNAMES", "MANAGE_EMOJIS", "MANAGE_WEBHOOKS"];
function anasınısik(user, tur) {
  let Kevkho = client.guilds.cache.get(set.Data.GuildID).members.cache.get(user);
  if (!Kevkho) return; 
  if (tur == "ban") return;
};


client.login(set.Class.Token).catch(err => console.error("Bota giriş yapılırken başarısız olundu!"));
