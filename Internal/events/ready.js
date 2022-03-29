const client = global.client;
const set = require("../helpers/elchavopyy.json");

module.exports = async () => {
  
  let Voice = client.channels.cache.get(set.Channels.Voice);
  if (Voice) Voice.join().catch(err => { });
  console.log(`(${client.user.username}) - (${client.user.tag}) adlı hesapta [${client.guilds.cache.get(set.Data.GuildID).name}] adlı sunucuda giriş yapıldı.`)}

module.exports.conf = {
  name: "ready",
};
