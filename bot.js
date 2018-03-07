const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Welcome Again !PL BAKTASH!");
client.on('message', msg => {
  if (msg.content === 'برب') {
    msg.reply('**تُےـيّےـتُ تُےـرجَےـعَ بّےـٱلسًےـلٱمِےـة ♥**');
  }
});
client.login("NDE5ODE2Njc0MTYyNzY5OTMx.DX1oQw.I3bx4KSeGgS91b28b-uiVQOZPW8");
