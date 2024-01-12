require("dotenv").config();
require('./settings')
const Func = ('./lib/function.js');
const fonts = require('./lib/font.js');
const menufont = require('./lib/menufont.js');
const DB = require('./lib/scraper')
const uploadImage = require('./lib/uploadImage.js');
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const availableStyles = Object.keys(fonts);
const availableFontStyles = Object.keys(menufont);
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser,getAggregateVotesInPollMessage, getContentType } = require('@whiskeysockets/baileys')
const spaceemojis = ["🌌", "🌠", "🚀", "🪐", "🌟"];     // list of emojis for Space CMDs.
const manyemojis = ["😄", "👍", "👏", "👌", "🥇", "🌟", "🎉", "🙌", "🤩", "💯", "🔥", "✨", "🚀", "💖", "🌈", "🌞", "🌠", "🌼", "💪", "😎", "💫", "💓", "🎈", "🎁", "🍾", "🎊", "🥳", "👑", "🌺", "🌻", "🌸"];
const fs = require('fs')
const fsx = require('fs-extra')
const yts = require('yt-search');
const ytsr = require('ytsr');
const ytdl = require('ytdl-core');
const util = require('util')
const truecallerjs = require("truecallerjs");
const ffmpeg = require('fluent-ffmpeg');
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const fg = require('api-dylux');
const cheerio = require('cheerio');
const os = require('os')
const googleTTS = require('google-tts-api');
const search = require('aptoide-scraper').search;
const download = require('aptoide-scraper').download;
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const { pipeline } = require('stream');
const { promisify } = require('util');
const streamPipeline = promisify(pipeline);
const imageSize = require('image-size');
const { PDFDocument, rgb } = require('pdf-lib');
const speed = require('performance-now')
const acrcloud = require ('acrcloud');
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const osu = require("node-os-utils");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const translate = require('translate-google-api');
  const { cpus, totalmem, freemem } = require("os");
  const {  sizeFormatter } = require("human-readable");
 const pingSt = new Date();
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, reSize, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')


const acr = new acrcloud({
    host: 'identify-eu-west-1.acrcloud.com',
    access_key: 'c33c767d683f78bd17d4bd4991955d81',
    access_secret: 'bvgaIAEtADBTbLwiPGYlxupWqkNGIjT7J9Ag2vIu'
});
const apiKey = "AIzaSyAlvaQ_Jv86iNnQlcyHYH0S3XXoqBw0HKs";
const genAI = new GoogleGenerativeAI(apiKey);

const { addPremiumUser, getPremiumExpired, getPremiumPosition,  expiredPremiumCheck, checkPremiumUser, getAllPremiumUser,} = require('./lib/premiun');

// read database
let nttoxic = JSON.parse(fs.readFileSync('./database/antitoxic.json'))
let premium = JSON.parse(fs.readFileSync('./src/data/premium.json'))

// Initialize default values
let AUTO_READ = false;
let ALWAYS_ONLINE = false;
let TYPING_ENABLED = false;
let PUBLIC_MODE = false; // added
let ANTICALL_MODE = false; // added

let akinator = global.db.data.game.akinator = []
let currentPollIndex = 0;
let ytsOptionIndex = 1;
const ytsSearchResults = new Map();
let props;
const audioSearchResults = new Map();
let optionIndex = 1;
let index = 1;
const reportedMessages = {};
const videoSearchResults = new Map();
let titleUrlMap = {}; 
const userContextMap = new Map();

module.exports = gss = async (gss, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        global.prefix = prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        var args = body.trim().split(/ +/).slice(1)
        args = args.concat(['','','','','',''])

//prefix v2
const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : '.'
        const isAsu = body.startsWith(pric)
        const isCommand = isAsu ? body.replace(pric, '').trim().split(/ +/).shift().toLowerCase() : ""
        const pushname = m.pushName || "No Name"
        const botNumber = await gss.decodeJid(gss.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ").trim()
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
const isViewOnce = ["viewOnceMessageV2","viewOnceMessage"].includes(m.type)
	const botname = "Vɪʙʀᴀɴɪᴜɴ-Bᴏᴛ";
	const devlopernumber = "8801853262586";
	
        // Group
        const groupMetadata = m.isGroup ? await gss.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const Badgss = JSON.parse(fs.readFileSync('./database/bad.json'))
        const antiToxic = m.isGroup ? nttoxic.includes(m.from) : false
          const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
 
const isBaileys = chatUpdate?.messages?.[0]?.key?.id?.startsWith("BAE5") && chatUpdate?.messages?.[0]?.key?.id?.length === 16;
	
let format = sizeFormatter({ 
     std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC' 
     decimalPlaces: 2, 
     keepTrailingZeroes: false, 
     render: (literal, symbol) => `${literal} ${symbol}B`, 
 })
 
 
const pickRandom = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)]
  }

	/*
let smallinput = budy.toLowerCase()
if (smallinput.includes('hello')) {
  reply (`Hello ${pushname}, I am ${BotName}. How can i help you?`);
} 

//if (smallinput.includes('hi')) {

//   reply (`Hello ${pushname}, I am ${BotName}. How can i help you?`);

// } 

if (smallinput=='venox') {
    reply (`My Boss is lost in Anime World, and I lost the connection with him...`)
}


if (smallinput=='runtime') {
  reply (`Hey ${pushname} my runtime is ${runtime(process.uptime())}\n\nCurrent Time: ${kaitime}\n\nCurrent Date: ${kaidate}`)
}



if( smallinput.includes('konichiwa') || smallinput.includes('konochiwa') || smallinput.includes('konichiba') || smallinput.includes('salute')){
  reply (`Konichiwa ${pushname}, I am vibranium. How can i help you?`);
}


if (smallinput=='vibranium') {
    reply ('Yes I am Alive 🫂')
}

if (smallinput=='ping') {
    reply (`Hey ${pushname} Pong ${latensie.toFixed(4)} ms`)
}


if (smallinput.includes('good morning') || smallinput.includes('ohayo')) {
  reply (`Good morning to you too ${pushname} ☺️. Have a great day 😇.`);
}

if (smallinput.includes('good afternoon') || smallinput.includes('konnichiwa')) {

  reply (`Good afternoon to you too ${pushname} ✨. Wishing you an enjoyable afternoon too 😇🤞🏻.`);

}


//if (smallinput.includes('good afthernoon')) {
 // reply (`Huh ${pushname} ??. Wishing you an enjoyable afternoon too.`);
//   }


if (smallinput.includes('good night')) {
  reply (`Good night to you too ${pushname} 😇. Sleep well and sweet dreams.`);
}

if (smallinput.includes('arigato')|| smallinput.includes('arigatou') || smallinput.includes('thank')) {
  reply (`Mention not ${pushname} 😇. I am a bot afterall.`);
}
*/


const responses = {

  
  bot: `Hello ${pushname}, I am ${botname}. My current prefix is "${prefix}". How can I help you?`,
  venox: `My Boss is lost in Anime World, and I lost connection with him...`,
  konichiwa: `Konichiwa ${pushname}, I am ${BotName}. How can I help you?`,
  'good morning': `Good morning to you too ${pushname} ☺️. Have a great day 😇.`,
  ohayo: `Good morning to you too ${pushname} ☺️. Have a great day 😇.`,
  'good afternoon': `Good afternoon to you too ${pushname} ✨. Wishing you an enjoyable afternoon too 😇🤞🏻.`,
  konnichiwa: `Good afternoon to you too ${pushname} ✨. Wishing you an enjoyable afternoon too 😇🤞🏻.`,
  'good night': `Good night to you too ${pushname} 😇. Sleep well and sweet dreams.`,
 
};

const smallinput = budy.toLowerCase();

if (responses.hasOwnProperty(smallinput)) {
  reply(responses[smallinput]);
}




//-----------------------------------------------------------------------------------------------------------------------------------//

//  Bot Prosess Time
  const uptime = process.uptime();
const day = Math.floor(uptime / (24 * 3600)); // Calculate days
const hours = Math.floor((uptime % (24 * 3600)) / 3600); // Calculate hours
const minutes = Math.floor((uptime % 3600) / 60); // Calculate minutes
const seconds = Math.floor(uptime % 60); // Calculate seconds
//Uptime
  const uptimeMessage = `*Baby Im yours~ since ${hours}h ${minutes}m ${seconds}s*`;
  
  const runMessage = `*☀️ ${day} Day*\n *🕐 ${hours} Hour*\n *⏰ ${minutes} Minimum*\n *⏱️ ${seconds} Seconds*\n`;
  
async function doReact(emoji) {
      let react = {
        react: {
          text: emoji,
          key: m.key,
        },
      };
      await gss.sendMessage(m.chat, react);
    }


async function sendTypingEffect(gss, m, message, typingSpeed) {
  const gptthink = await gss.sendMessage(m.chat, { text: 'Thinking...' });

  const words = message.split(' ');

  let i = 0;
  const typewriterInterval = setInterval(() => {
    if (i < words.length) {
      const typedText = words.slice(0, i + 1).join(' ');
      gss.relayMessage(m.chat, {
        protocolMessage: {
          key: gptthink.key,
          type: 14,
          editedMessage: {
            conversation: typedText,
          },
        },
      }, {});
      i++;
    } else {
      clearInterval(typewriterInterval); // Stop the typewriter effect
    }
  }, typingSpeed);
}



function formatBytes(bytes) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return '0 Byte';
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}

// Helper function to format upload date
function formatUploadDate(uploadDate) {
  const formattedDate = new Date(uploadDate);
  if (isNaN(formattedDate.getTime())) {
    // If the date is invalid, return a message
    return 'Invalid Date';
  }
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return formattedDate.toLocaleDateString(undefined, options);
}


async function generateProfilePicture(media) {
    return {
        img: 'placeholder_image_data'
    };
}
	
	
async function getIPInfo() {
  try {
    const response = await axios.get('https://api.myip.com');
    const data = response.data;
    
    let ip = data.ip || 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ';
    let cr = data.country || 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ';
    let cc = data.cc || 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ';

    return { ip, cr, cc };
  } catch (error) {
    console.error('Error:', error);
    return { ip: 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ', cr: 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ', cc: 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ' };
  }
}

async function mainSys() {

  let NotDetect = 'Not Detect';
  let cpux = osu.cpu;
  let cpuCore = cpux.count();
  let drive = osu.drive;
  let mem = osu.mem;
  let netstat = osu.netstat;
  let HostN = osu.os.hostname();
  let OS = osu.os.platform();
  let ipx = osu.os.ip();

   // const chats = Object.entries(client.chats).filter(([id, data]) => id && data.isChats) 
   //  const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //groups.filter(v => !v.read_only) 
     const used = process.memoryUsage() 
     const _cpus = cpus().map(cpu => { 
         cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0) 
         return cpu 
     }) 
     const cpu = _cpus.reduce((last, cpu, _, { 
         length 
     }) => { 
         last.total += cpu.total 
         last.speed += cpu.speed / length 
         last.times.user += cpu.times.user 
         last.times.nice += cpu.times.nice 
         last.times.sys += cpu.times.sys 
         last.times.idle += cpu.times.idle 
         last.times.irq += cpu.times.irq 
         return last 
     }, { 
         speed: 0, 
         total: 0, 
         times: { 
             user: 0, 
             nice: 0, 
             sys: 0, 
             idle: 0, 
             irq: 0 
         } 
     })



let cpuPer 
     let p1 = cpux.usage().then(cpuPercentage => { 
         cpuPer = cpuPercentage 
     }).catch(() => { 
         cpuPer = NotDetect 
     }) 
     let driveTotal, driveUsed, drivePer 
     let p2 = drive.info().then(info => { 
         driveTotal = (info.totalGb + ' GB'), 
             driveUsed = info.usedGb, 
             drivePer = (info.usedPercentage + '%') 
     }).catch(() => { 
         driveTotal = NotDetect, 
             driveUsed = NotDetect, 
             drivePer = NotDetect 
     }) 
     let ramTotal, ramUsed 
     let p3 = mem.info().then(info => { 
         ramTotal = info.totalMemMb, 
             ramUsed = info.usedMemMb 
     }).catch(() => { 
         ramTotal = NotDetect, 
             ramUsed = NotDetect 
     }) 
     let netsIn, netsOut 
     let p4 = netstat.inOut().then(info => { 
         netsIn = (info.total.inputMb + ' MB'), 
             netsOut = (info.total.outputMb + ' MB') 
     }).catch(() => { 
         netsIn = NotDetect, 
             netsOut = NotDetect 
     }) 
     await Promise.all([p1, p2, p3, p4]) 
     let _ramTotal = (ramTotal + ' MB') 

  let d = new Date(new Date() + 3600000);
  let locale = 'id';
  let weeks = d.toLocaleDateString(locale, {
    weekday: 'long',
  });
  let dates = d.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  let times = d.toLocaleTimeString(locale, {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });

  // Call the getIPInfo function to retrieve IP, Country, and Country Code
  const { ip, cr, cc } = await getIPInfo();
const reactionMessage = {
            react: {
                text: "🕐",
                key: m.key
            }
        }
        await gss.sendMessage(m.chat, reactionMessage);
        const successReactionMessage = {
            react: {
                text: "💻",
                key: m.key
            }
        }
        await gss.sendMessage(m.chat, successReactionMessage); 
 
 m.reply(`
  - *ᴘ ɪ ɴ ɢ* - 
  ${new Date() - pingSt} ms 
  
  - *ʀ ᴜ ɴ ᴛ ɪ ᴍ ᴇ* - 
  ${runMessage}
  
  - *s ᴇ ʀ ᴠ ᴇ ʀ* - 
  *🛑 Rᴀᴍ:* ${ramUsed} / ${_ramTotal}(${/[0-9.+/]/g.test(ramUsed) &&  /[0-9.+/]/g.test(ramTotal) ? Math.round(100 * (ramUsed / ramTotal)) + '%' : NotDetect}) 
  *🔵 FʀᴇᴇRᴀᴍ:* ${format(freemem())}
 
  *🔭 ᴘʟᴀᴛғᴏʀᴍ:* ${os.platform()} 
  *🧿 sᴇʀᴠᴇʀ:* ${os.hostname()} 
  *💻 ᴏs:* ${OS} 
  *📍 ɪᴘ:* ${ip} 
  *🌎 ᴄᴏᴜɴᴛʀʏ:* ${cr} 
  *📲 ᴄᴏᴜɴᴛʀʏ ᴄᴏᴅᴇ:* ${cc} 

  *🔮 ᴄᴘᴜ ᴄᴏʀᴇ:* ${cpuCore} Core 
  *🎛️ ᴄᴘᴜ:* ${cpuPer}% 
  *⏰ ᴛɪᴍᴇ sᴇʀᴠᴇʀ:* ${times} 
   
    - *ᴏ ᴛ ʜ ᴇ ʀ* - 
  *📅 Wᴇᴇᴋꜱ:* ${weeks} 
  *📆 Dᴀᴛᴇꜱ:* ${dates} 
  *🔁 NᴇᴛꜱIɴ:* ${netsIn} 
  *🔁 NᴇᴛꜱOᴜᴛ:* ${netsOut} 
  *💿 DʀɪᴠᴇTᴏᴛᴀʟ:* ${driveTotal} 
  *💿 DʀɪᴠᴇUꜱᴇᴅ:* ${driveUsed} 
  *⚙️ DʀɪᴠᴇPᴇʀ:* ${drivePer} 
 
  *乂 ᴍᴇᴍᴏʀʏ ᴜsᴀɢᴇ* 
   ${'```' + Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${format(used[key])}`).join('\n') + '```' }
  `);
}


try {
  const textLower = m.text.toLowerCase();

  if (textLower === 'send' || textLower === 'statusdown' || textLower === 'take') {
    const quotedMessage = m.msg.contextInfo.quotedMessage;

    if (quotedMessage) {
      // Check if it's an image
      if (quotedMessage.imageMessage) {
        let imageCaption = quotedMessage.imageMessage.caption;
        let imageUrl = await gss.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
        gss.sendMessage(m.chat, { image: { url: imageUrl }, caption: imageCaption });
        m.reply('Sᴛᴀᴛᴜs Dᴏᴡɴʟᴏᴀᴅᴇᴅ Sᴜᴄᴄᴇssғᴜʟʟʏ.... /n*||©️Vɪʙʀᴀɴɪᴜᴍ-Bᴏᴛ*');
      }

      // Check if it's a video
      if (quotedMessage.videoMessage) {
        let videoCaption = quotedMessage.videoMessage.caption;
        let videoUrl = await gss.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
        gss.sendMessage(m.chat, { video: { url: videoUrl }, caption: videoCaption });
        m.reply('Sᴛᴀᴛᴜs Dᴏᴡɴʟᴏᴀᴅᴇᴅ Sᴜᴄᴄᴇssғᴜʟʟʏ.... /n*||©️Vɪʙʀᴀɴɪᴜᴍ-Bᴏᴛ*');
      }
    }
  }
} catch (error) {
  console.error("Error in 'send message' handling:", error);
}

    
  

const typemenu = process.env.TYPEMENU || global.typemenu;
const onlygroup = process.env.ONLYGROUP || global.onlygroup;
const onlypc = process.env.ONLYPC || global.onlypc;

let TYPING_ENABLED = process.env.AUTO_TYPING === 'false';
let AUTO_READ_ENABLED = process.env.AUTO_READ === 'false';
let ALWAYS_ONLINE = process.env.ALWAYS_ONLINE === 'true';

	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = db.data.users[m.sender]
            if (typeof user !== 'object') db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    


let chats = db.data.chats[m.chat]
            if (typeof chats !== 'object') db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
            
/*
//auto join
if (global.linkGroup.includes("https://chat.whatsapp.com/")) {
try{
gss.groupAcceptInvite(global.linkGroup.split("https://chat.whatsapp.com/")[1])
} catch { console.log(chalk.whiteBright("├"), chalk.keyword("red")("[ ERROR ]"), "link group invalid!") }
}

*/

const isBaileys = (messages) => {
    return messages.some(mek => mek?.key?.id && mek.key.id.startsWith("BAE5"));
};

if (isBaileys(chatUpdate?.messages) && !m.fromMe) {
    m.reply('*Aɴᴛɪ-Bᴏᴛ ʀᴜɪɴɴɪɴɢ!*');
}

// Assuming m.isBaileys is a property you want to check, and isOwner and isGroupAdmins are defined somewhere
if (m.isBaileys && !m.key.fromMe) {
    if (!m.isOwner && !isGroupAdmins) {
        m.reply("```「  BOT DETECTED  」```");
        setTimeout(() => {
            sock.groupParticipantsUpdate(m.chat, [m.sender], "remove");
        }, 2000);
    }
}






	    let setting = db.data.settings[botNumber]
        if (typeof setting !== 'object') db.data.settings[botNumber] = {}
	    if (setting) {
	    if (!('anticall' in setting)) setting.anticall = false
		if (!isNumber(setting.status)) setting.status = 0
if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
	    anticall: false,
		status: 0,
		autobio: true
	    }
	    
        } catch (err) {
            console.error(err)
        }
	    
        // Public & Self
        if (!gss.public) {
            if (!m.key.fromMe) return
        }

        
	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Dhaka"
        })
        
        


if (isCommand) {
            
if (!m.isGroup && !isCreator && global.onlygroup) {
    return m.reply("*Hᴇʟʟᴏ! 👋, ʙᴇᴄᴀᴜsᴇ ᴡᴇ ᴡᴀɴᴛ ᴛᴏ ʀᴇᴅᴜᴄᴇ sᴘᴀᴍ, ᴘʟᴇᴀsᴇ ᴜsᴇ ᴛʜᴇ ʙᴏᴛ ɪɴ ᴀ ɢʀᴏᴜᴘ!*")
}
// Private Only
if (!isCreator && global.onlypc && m.isGroup) {
    return m.reply("*Hᴇʟʟᴏ 👋, ɪғ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ ᴜsᴇ ᴛʜɪs ʙᴏᴛ, ᴘʟᴇᴀsᴇ ᴄʜᴀᴛ ᴘʀɪᴠᴀᴛᴇʟʏ ᴡɪᴛʜ ᴛʜᴇ ʙᴏᴛ!*")
}

if (TYPING_ENABLED && command) {
  // Execute code when REACODING is enabled
  gss.sendPresenceUpdate('composing');
}

if (ALWAYS_ONLINE) {
  gss.sendPresenceUpdate('available', m.chat);
} else {
  gss.sendPresenceUpdate('unavailable', m.chat);
}

// 212 auto block using cmd
if (m.sender.startsWith('212') && global.autoblok212 === false) {
    // Update the block status
    gss.updateBlockStatus(m.sender, 'block');
}

if (AUTO_READ_ENABLED && command) {
  // Execute code when AUTO_READ is enabled
  gss.readMessages([m.key]);
}
}
    



	    
moment.tz.setDefault("Asia/Dhaka").locale("id");

const today = moment.tz('Asia/Dhaka').format('dddd, DD MMMM YYYY');
const wibTime = moment.tz('Asia/Dhaka').format('HH:mm:ss');
const currentTime = moment().tz('Asia/Dhaka').format('HH:mm:ss');

let time; 

if (currentTime < "23:59:00") {
    var greetingTime = 'Good Night 🏙️';
}
if (currentTime < "19:00:00") {
    var greetingTime = 'Good Evening 🌆';
}
if (currentTime < "18:00:00") {
    var greetingTime = 'Good Afternoon 🌇';
}
if (currentTime < "15:00:00") {
    var greetingTime = 'Good Day 🌤️';
}
if (currentTime < "10:00:00") {
    var greetingTime = 'Good Morning 🌄';
}
if (currentTime < "05:00:00") {
    var greetingTime = 'Good Dawn 🌆';
}
if (currentTime < "03:00:00") {
    var greetingTime = 'Good Midnight 🌃';
}


	    
if (antiToxic) {
    if (Badgss.includes(messagesD)) {
        if (m.text) {
            const bvl = `\`\`\`「 Bad Word Detected 」\`\`\`\n\n*Yᴏᴜ ᴀʀᴇ ᴜsɪɴɢ ᴀ ʙᴀᴅ ᴡᴏʀᴅ, ʙᴜᴛ ᴀs ᴀɴ ᴀᴅᴍɪɴ/ᴏᴡɴᴇʀ, ʏᴏᴜ ᴡᴏɴ'ᴛ ʙᴇ ᴋɪᴄᴋᴇᴅ* 😇`;
            
            if (isAdmins || m.key.fromMe || isCreator) {
                return m.reply(bvl);
            } else {
                await gss.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: false,
                        id: m.key.id,
                        participant: m.key.participant
                    }
                });
                
                await gss.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
                
                await gss.sendMessage(m.from, {
                    text: `\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} *ᴡᴀs ᴋɪᴄᴋᴇᴅ ʙᴇᴄᴀᴜsᴇ ᴏғ ᴜsɪɴɢ ʙᴀᴅ ᴡᴏʀᴅs ɪɴ ᴛʜɪs ɢʀᴏᴜᴘ*`,
                    contextInfo: { mentionedJid: [m.sender] }
                }, { quoted: m });
            }
        }
    }
}

	    
	    
	  // Anti LinK
	if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 ANTI LINK 」\n\`)
        if (!isBotAdmins) return m.reply(`*Eʜʜ! ᴛʜᴇ ʙᴏᴛ ɪs ɴᴏᴛ ᴀɴ ᴀᴅᴍɪɴ, ɪᴛ ᴡɪʟʟ ɴᴏᴛ ᴡᴏʀᴋ ʟɪᴋᴇ ᴛʜɪs*`)
        let gclink = (`https://chat.whatsapp.com/`)
        await gss.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`*Eʜʜ! sᴏʀʀʏ ɪᴛ ᴅɪᴅɴ'ᴛ ʜᴀᴘᴘᴇɴ, ʙᴇᴄᴀᴜsᴇ ʏᴏᴜ sᴇɴᴛ ᴛʜᴇ ʟɪɴᴋ ᴛᴏ ᴛʜɪs ɢʀᴏᴜᴘ*`)
        if (isAdmins) return m.reply(`*Oᴘᴘs! I ᴅɪᴅɴ'ᴛ ᴋɴᴇᴡ ᴛʜᴀᴛ ʏᴏᴜ'ʀᴇ Aᴅᴍɪɴ :3*`)
        if (isCreator) return m.reply(`*Oʜʜ! ɪᴛ's ʏᴏᴜ Sᴇɴsᴇɪ! I ᴛʜᴏᴜɢʜᴛ sᴏᴍᴇ ʙᴀsᴛᴀʀᴅs sʜᴏᴡ ᴜᴘ ʜᴇʀᴇ ᴀɴᴅ ᴘʀᴏᴍᴏᴛɪɴɢ ᴛʜᴇɪʀ ғᴜᴄᴋɪɴɢ ʟɪɴᴋs*`)
        gss.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }



if (akinator.hasOwnProperty(m.sender.split('@')[0]) && isCmd && ["0", "1", "2", "3", "4", "5"].includes(body)) {
    kuis = true;
    var {
        server,
        frontaddr,
        session,
        signature,
        question,
        step
    } = akinator[m.sender.split('@')[0]];
    if (step == "0" && body == "5") m.reply("*Sᴏʀʀʏ, ʏᴏᴜ ʜᴀᴠᴇ ʀᴇᴀᴄʜᴇᴅ ᴛʜᴇ ғɪʀsᴛ ϙᴜᴇsᴛɪᴏɴ*");

    // Translate the question to English
    const translatedQuestion = await translate(question, { to: 'en' });
    console.log('Translated Question:', translatedQuestion);

    var ini_url = `https://api.lolhuman.xyz/api/akinator/answer?apikey=GataDios&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&answer=${body}&step=${step}`;
    var get_result = await fetchJson(ini_url);
    var get_result = get_result.result;
    if (get_result.hasOwnProperty("name")) {
        var ini_name = get_result.name;
        var description = get_result.description;
        ini_txt = `${ini_name} - ${description}\n\n`;
        ini_txt += "*Tʜᴀɴᴋ Yᴏᴜ~♡*\n*||©️Vɪʙʀᴀɴɪᴜᴍ-Bᴏᴛ*";
        await gss.sendMessage(m.chat, {
            image: {
                url: get_result.image
            },
            caption: ini_txt
        }).then(() => {
            delete akinator[m.sender.split('@')[0]];
            fs.writeFileSync("./src/data/akinator.json", JSON.stringify(akinator));
        });
        return;
    }

    ini_txt = `${translatedQuestion}\n\n`;
    ini_txt += "0 - Yᴇs\n";
    ini_txt += "1 - Nᴏ\n";
    ini_txt += "2 - I ᴅᴏɴ'ᴛ ᴋɴᴏᴡ\n";
    ini_txt += "3 - Mᴀʏʙᴇ\n";
    ini_txt += "4 - Mᴀʏʙᴇ ɴᴏᴛ\n";
    ini_txt += "5 - Gᴏ Bᴀᴄᴋ ᴛᴏ ᴛʜᴇ Pʀᴇᴠɪᴏᴜs Qᴜᴇsᴛɪᴏɴ";

    if (args[0] === '5') {
        var ini_url = `https://api.lolhuman.xyz/api/akinator/back?apikey=GataDios&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&answer=${body}&step=${step}`;
        var get_result = await fetchJson(ini_url);
        var get_result = get_result.result;
        var {
            question,
            _,
            step
        } = get_result;

        // Translate the question to English
        const translatedBackQuestion = await translate(question, { to: 'en' });
        console.log('Translated Back Question:', translatedBackQuestion);

        ini_txt = `${translatedBackQuestion}\n\n`;
        ini_txt += "0 - Yᴇs\n";
        ini_txt += "1 - No\n";
        ini_txt += "2 -  I ᴅᴏɴ'ᴛ ᴋɴᴏᴡ\n";
        ini_txt += "3 - Mᴀʏʙᴇ\n";
        ini_txt += "4 - Mᴀʏʙᴇ ɴᴏᴛ\n";
        ini_txt += "5 - Gᴏ Bᴀᴄᴋ ᴛᴏ ᴛʜᴇ Pʀᴇᴠɪᴏᴜs Qᴜᴇsᴛɪᴏɴ";
    }

    gss.sendText(m.chat, ini_txt, m).then(() => {
        const data_ = akinator[m.sender.split('@')[0]];
        data_["question"] = question;
        data_["step"] = step;
        akinator[m.sender.split('@')[0]] = data_;
        fs.writeFileSync("./src/data/akinator.json", JSON.stringify(akinator));
    });
}




        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: gss.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, gss.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        gss.ev.emit('messages.upsert', msg)
        }
  	    

        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	'-3': 'Gᴀᴍᴇ ɪs ᴏᴠᴇʀ', 
	'-2': 'Iɴᴠᴀʟɪᴅ', 
	'-1': 'Iɴᴠᴀʟɪᴅ ᴘᴏsɪᴛɪᴏɴ',
	 0: 'Iɴᴠᴀʟɪᴅ ᴘᴏsɪᴛɪᴏɴ',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} win!` : isTie ? `Game over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *surrender* to give up and admit to Lostan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await gss.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await gss.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }
	    
        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            gss.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} stop AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
during ${clockString(new Date - user.afkTime)}`)
            user.afkTime = -1
            user.afkReason = ''
        }
        
        const cmdAi = ["Ai", "Voiceai", "Bug", "Report", "Gpt", "Dalle", "Remini"];
const cmdTool = ["Calculator", "Tempmail", "Checkmail", "Info", "Trt", "Tts"];
const cmdGrup = ["LinkGroup", "Setppgc", "Setname", "Setdesc", "Group", "Gcsetting", "Editinfo", "Add", "Kick", "HideTag", "Tagall", "Totag", "Tagadmin", "AntiLink", "AntiToxic", "Group open/close", "Promote", "Demote", "Revoke", "Poll", "Getbio"];
const cmdDown = ["Apk", "Facebook", "Mediafire", "Pinterestdl", "XnxxSearch", "Xnxxdl", "Gitclone", "Gdrive", "Insta", "Instadoc", "Ytmp3", "Ytmp4", "Play", "Song", "Video", "Ytmp3doc", "Ytmp4doc", "Tiktok", "Tiktokdoc"];
const cmdSearch = ["Play", "Yts", "Imdb", "Google", "Gimage", "Pinterest", "Wallpaper", "Wikimedia", "Ytsearch", "Ringtone", "Lyrics", "Weather"];
const cmdFun = ["Tictactoe", "Delttt", "Soulmate", "Handsomecheck", "beautifulcheck", "awesomecheck", "greatcheck", "gaycheck", "cutecheck", "lesbiancheck", "hornycheck", "prettycheck", "lovelycheck", "uglycheck", "charactercheck", "dare", "truth"];
const cmdConv = ["Removebg", "Sticker", "Emojimix", "Tovideo", "Togif", "Tourl", "Tovn", "Tomp3", "Toaudio", "Ebinary", "dbinary", "Styletext", "Fontchange", "Fancy", "Upscale", "hd", "attp", "attp2", "attp3", "ttp", "ttp2", "ttp3", "ttp4", "ttp5", "qc"];
const cmdMain = ["Ping", "Alive", "Owner", "Menu", "Infochat", "Quoted", "Listpc", "Listgc", "Listonline", "Infobot", "Buypremium"];
const cmdOwner = ["React", "Chat", "Join", "Leave", "Block", "Unblock", "Bcgroup", "Bcall", "Setppbot", "Setexif", "Anticall", "Setstatus", "Setnamebot", "Sleep", "AutoTyping", "AlwaysOnline", "AutoRead"];
const cmdStalk = ["Nowa", "Truecaller", "InstaStalk", "GithubStalk"];





	    
        switch(isCommand) {
	    case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} already Afk${text ? ': ' + text : ''}`)
            }
            break	
            
case 'imdb': case 'movie':
if (!text) return m.reply(`*Gɪᴠᴇ Mᴇ ᴀ Sᴇʀɪᴇs ᴏʀ ᴍᴏᴠɪᴇ Nᴀᴍᴇ*`)
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
            let imdbt = ""
            console.log(fids.data)
            imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n"
            imdbt += "🎬Title      : " + fids.data.Title + "\n"
            imdbt += "📅Year       : " + fids.data.Year + "\n"
            imdbt += "⭐Rated      : " + fids.data.Rated + "\n"
            imdbt += "📆Released   : " + fids.data.Released + "\n"
            imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n"
            imdbt += "🌀Genre      : " + fids.data.Genre + "\n"
            imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n"
            imdbt += "✍Writer     : " + fids.data.Writer + "\n"
            imdbt += "👨Actors     : " + fids.data.Actors + "\n"
            imdbt += "📃Plot       : " + fids.data.Plot + "\n"
            imdbt += "🌐Language   : " + fids.data.Language + "\n"
            imdbt += "🌍Country    : " + fids.data.Country + "\n"
            imdbt += "🎖️Awards     : " + fids.data.Awards + "\n"
            imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n"
            imdbt += "🏙️Production : " + fids.data.Production + "\n"
            imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n"
            imdbt += "✅imdbVotes  : " + fids.data.imdbVotes + ""
           gss.sendMessage(m.chat, {
                image: {
                    url: fids.data.Poster,
                },
                caption: imdbt,
            }, {
                quoted: m,
            })
            break
            
        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw '*Yᴏᴜ ᴀʀᴇ sᴛɪʟʟ ɪɴ ᴛʜᴇ ɢᴀᴍᴇ*'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('*Oᴘᴘᴏɴᴇɴᴛ Fᴏᴜɴᴅ!*')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Waiting @${room.game.currentTurn.split('@')[0]} ᴛʏᴘᴇ *surrender* ᴛᴏ ɢɪᴠᴇ ᴜᴘ ᴀɴᴅ ᴀᴅᴍɪᴛ ᴛʜᴇ ᴅᴇғᴇᴀᴛ`
            if (room.x !== room.o) await gss.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await gss.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Wᴀɪᴛɪɴɢ ғᴏʀ ᴏᴘᴘᴏɴᴇɴᴛ' + (text ? ` typing the command below${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
            if (!roomnya) throw `Yᴏᴜ ᴀʀᴇ ɴᴏᴛ ɪɴ ᴛʜᴇ ᴛɪᴄᴛᴀᴄᴛᴏᴇ ʀᴏᴏᴍ!`
            delete this.game[roomnya.id]
            m.reply(`Sᴜᴄᴄᴇssғᴜʟʟʏ ᴅᴇʟᴇᴛᴇᴅ ᴛɪᴄᴛᴀᴄᴛᴏᴇ ʀᴏᴏᴍ`)
            }
            break
      
            case 'join': {
  if (!isCreator) throw mess.owner;
  if (!text) throw '*Eɴᴛᴇʀ ᴛʜᴇ ɢʀᴏᴜᴘ ʟɪɴᴋ*';
  if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Iɴᴠᴀʟɪᴅ ʟɪɴᴋ';
  m.reply(mess.wait);
  let result = args[0].split('https://chat.whatsapp.com/')[1];
  await gss.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)));
}
break;

case 'leave': {
  if (!isCreator) throw mess.owner;
  await gss.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)));
}
break;

case 'setexif': {
  if (!isCreator) throw mess.owner;
  if (!text) throw `Exᴀᴍᴘʟᴇ: ${prefix + command} ᴘᴀᴄᴋɴᴀᴍᴇ|ᴀᴜᴛʜᴏʀ`;
  global.packname = text.split("|")[0];
  global.author = text.split("|")[1];
  m.reply(`Exɪғ sᴜᴄᴄᴇssғᴜʟʟʏ ᴄʜᴀɴɢᴇᴅ ᴛᴏ\n\n⭔ ᴘᴀᴄᴋɴᴀᴍᴇ: ${global.packname}\n⭔ ᴀᴜᴛʜᴏʀ: ${global.author}`);
}
break;
case 'promote': {
  try {
    if (!m.isGroup) throw mess.group;
    if (!isBotAdmins) throw mess.botAdmin;
    if (!isAdmins) throw mess.admin;

    let metadata = await gss.groupMetadata(m.chat);
    let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'];
    let usernames = await Promise.all(users.map(async (user) => {
      try {
        let contact = await gss.contacts[user];
        return contact.notify || user.split('@')[0];
      } catch (error) {
        return user.split('@')[0];
      }
    }));

    await gss.groupParticipantsUpdate(m.chat, users, 'promote')
      .then(() => {
        let promotedUsernames = usernames.map(username => `@${username}`).join(', ');
        m.reply(`Usᴇʀ ${promotedUsernames} ᴘʀᴏᴍᴏᴛᴇᴅ ᴀs ᴀᴅᴍɪɴ ɪɴ ${metadata.subject}.`);
      })
      .catch(() => m.reply('Pʀᴏᴍᴏᴛᴇ ғᴀɪʟᴇᴅ, ᴇʀʀᴏʀ 404 ᴛʀʏ ᴀɢᴀɪɴ ʟᴀᴛᴇʀ'));
  } catch (error) {
    console.error('Error:', error);
  }
}
break;



case 'kick': {
  try {
    if (!m.isGroup) throw mess.group;
    if (!isBotAdmins) throw mess.botAdmin;
    if (!isAdmins) throw mess.admin;

    let metadata = await gss.groupMetadata(m.chat);
    let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'];
    let usernames = await Promise.all(users.map(async (user) => {
      try {
        let contact = await gss.contacts[user];
        return contact.notify || user.split('@')[0];
      } catch (error) {
        return user.split('@')[0];
      }
    }));

    await gss.groupParticipantsUpdate(m.chat, users, 'remove')
      .then(() => {
        let kickedUsernames = usernames.map(username => `@${username}`).join(', ');
        m.reply(`Tʜᴇ  ${kickedUsernames} ᴜsᴇʀ ʜᴀs ᴋɪᴄᴋᴇᴅ ᴏᴜᴛ ғʀᴏᴍ ${metadata.subject}.`);
      })
      .catch(() => m.reply('Fᴀɪʟᴇᴅ ᴛᴏ ᴋɪᴄᴋ ᴜsᴇʀ(s) ғʀᴏᴍ ᴛʜᴇ ɢʀᴏᴜᴘ'));
  } catch (error) {
    console.error('Error:', error);
  }
}
break;


case 'demote': {
  try {
    if (!m.isGroup) throw mess.group;
    if (!isBotAdmins) throw mess.botAdmin;
    if (!isAdmins) throw mess.admin;

    let metadata = await gss.groupMetadata(m.chat);
    let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'];
    let usernames = await Promise.all(users.map(async (user) => {
      try {
        let contact = await gss.contacts[user];
        return contact.notify || user.split('@')[0];
      } catch (error) {
        return user.split('@')[0];
      }
    }));

    await gss.groupParticipantsUpdate(m.chat, users, 'demote')
      .then(() => {
        let demotedUsernames = usernames.map(username => `@${username}`).join(', ');
        m.reply(`Tʜᴇ ${demotedUsernames} ᴜsᴇʀ ᴅᴇᴍᴏᴛᴇᴅ ᴀs ᴍᴇᴍʙᴇʀ ɪɴ  ${metadata.subject}.`);
      })
      .catch(() => m.reply('Fᴀɪʟᴇᴅ ᴛᴏ ᴅᴇᴍᴏᴛᴇ ᴜsᴇʀ(s) ɪɴ ᴛʜᴇ ɢʀᴏᴜᴘ'));
  } catch (error) {
    console.error('Error:', error);
  }
}
break;




case 'block': {
  if (!isCreator) throw mess.owner;
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  await gss.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)));
}
break;

case 'unblock': {
  if (!isCreator) throw mess.owner;
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  await gss.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)));
}
break;

case 'setname': case 'setsubject': {
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
  if (!text) throw 'Text?';
  await gss.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)));
}
break;

case 'setdesc': case 'setdesk': {
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
  if (!text) throw 'Text?';
  await gss.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)));
}
break;

          case 'setppbot': {
  if (!isCreator) throw mess.owner;
  if (!/image/.test(mime)) throw `Sᴇɴᴅ/Rᴇᴘʟʏ ᴡɪᴛʜ ᴀɴ Iᴍᴀɢᴇ ᴀɴᴅ Cᴀᴘᴛɪᴏɴ ${prefix + command}`;
  if (/webp/.test(mime)) throw `Sᴇɴᴅ/Rᴇᴘʟʏ ᴡɪᴛʜ ᴀɴ Iᴍᴀɢᴇ ᴀɴᴅ Cᴀᴘᴛɪᴏɴ ${prefix + command}`;
  let media = await gss.downloadAndSaveMediaMessage(qmsg);
  await gss.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media));
  m.reply(mess.success);
}
break;
    
case 'toqr': {
                if (!q) return m.reply('Pʟᴇᴀsᴇ ɪɴᴄʟᴜᴅᴇ ʟɪɴᴋ ᴏʀ ᴛᴇxᴛ!')
                const QrCode = require('qrcode-reader')
                const qrcode = require('qrcode')
                let qyuer = await qrcode.toDataURL(q, {
                    scale: 35
                })
                let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
                let buff = getRandom('.jpg')
                await fs.writeFileSync('./' + buff, data)
                let medi = fs.readFileSync('./' + buff)
                await gss.sendMessage(m.chat, {
                    image: medi,
                    caption: mess.success
                }, {
                    quoted: m
                })
                setTimeout(() => {
                    fs.unlinkSync(buff)
                }, 10000)
            }
            break
            
case "readqr": {
try {
mee = await gss.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
const res = await fetch(`http://api.qrserver.com/v1/read-qr-code/?fileurl=${mem}`)
const data = await res.json() 
m.reply(util.format(data[0].symbol))
} catch (err) {
m.reply(`ʀᴇᴘʟʏ ᴀɴ ɪᴍᴀɢᴇ ᴛʜᴀᴛ ʜᴀs ϙʀ`)
}
}
break

case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
                if (!m.isGroup) return m.reply(mess.group)
                if (!isAdmins) return m.reply(mess.admin)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!quoted) return m.reply(`Sᴇɴᴅ/Rᴇᴘʟʏ ᴡɪᴛʜ ᴀɴ Iᴍᴀɢᴇ ᴀɴᴅ Cᴀᴘᴛɪᴏɴ ${prefix + command}`)
                if (!/image/.test(mime)) return m.reply(`Sᴇɴᴅ/Rᴇᴘʟʏ ᴡɪᴛʜ ᴀɴ Iᴍᴀɢᴇ ᴀɴᴅ Cᴀᴘᴛɪᴏɴ ${prefix + command}`)
                if (/webp/.test(mime)) return m.reply(`Sᴇɴᴅ/Rᴇᴘʟʏ ᴡɪᴛʜ ᴀɴ Iᴍᴀɢᴇ ᴀɴᴅ Cᴀᴘᴛɪᴏɴ ${prefix + command}`)
                var medis = await gss.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await gss.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    m.reply(mess.success)
                } else {
                    var memeg = await gss.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    m.reply(mess.success)
                }
                break

case 'sc':
            case 'script':
            case 'scriptbot':
                case 'repo': {
    try {
        await doReact("💎");
        let repoInfo = await axios.get("https://api.github.com/repos/V-E-N-O-X/Vibranium-Bot");
        let repo = repoInfo.data;
        let txt = `🧣 *${botname}'s Script* 🧣\n\n*📚 Total Forks:* ${repo.forks_count}\n*⭐ Total Stars:* ${repo.stargazers_count}\n*📜 License:* ${repo.license.name}\n*📁 Repo Size:* ${(repo.size / 1024).toFixed(2)} MB\n*📅 Last Updated:* ${repo.updated_at}\n\n*🔗 Repo Link:* ${repo.html_url}\n\n❝ Don't forget to give a Star ⭐ to the repo. It's made with hard work by *Team Vɪʙʀᴀɴɪᴜᴍ*. ❞\n\n*©️ Vɪʙʀᴀɴɪᴜᴍ-Bᴏᴛ- 2024*`;
        gss.sendMessage(m.from, { image: pic, caption: txt }, { quoted: m });
    } catch (error) {
        console.error("Error in the script:", error);
        // Handle error gracefully, maybe send a notification or log it
    }
    break;
}


 case 'setvidmenu':
            {
                if (!isCreator) return m.reply(mess.owner)
                let delb = await gss.downloadAndSaveMediaMessage(quoted)
                await fsx.copy(delb, './VenoxMedia/menu1.mp4')
                fs.unlinkSync(delb)
                m.reply(mess.success)
            }
            break
            
            
case 'akinator':
    m.reply(`Aᴋɪɴᴀᴛᴏʀ ɪs ᴀ ɢᴀᴍᴇ ᴀɴᴅ ᴍᴏʙɪʟᴇ ᴀᴘᴘʟɪᴄᴀᴛɪᴏɴ ᴛʜᴀᴛ ᴀᴛᴛᴇᴍᴘᴛs ᴛᴏ ᴀᴄᴄᴜʀᴀᴛᴇʟʏ ɢᴜᴇss ᴛʜᴇ ᴜsᴇʀ's ᴛʜᴏᴜɢʜᴛs ᴛʜʀᴏᴜɢʜ ᴀ sᴇʀɪᴇs ᴏғ ᴅᴇᴛᴀɪʟᴇᴅ ϙᴜᴇsᴛɪᴏɴs.\n\n~> ${prefix}akinatorstart: Tᴏ sᴛᴀʀᴛ\n~> ${prefix}akinatorstop: Tᴏ sᴛᴏᴘ`)
    break;
case 'akinatorstart':
    if (akinator.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Fɪɴɪsʜ ᴛʜᴇ ᴘʀᴇᴠɪᴏᴜs ᴏɴᴇ ғɪʀsᴛ, ᴘʟᴇᴀsᴇ.")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/akinator/start?apikey=GataDios`);
    let {
        server, frontaddr, session, signature, question, step
    } = get_result.result;
    const data = {};
    data["server"] = server;
    data["frontaddr"] = frontaddr;
    data["session"] = session;
    data["signature"] = signature;
    data["question"] = question;
    data["step"] = step;

    // Translate the question to English
    const translatedQuestion = await translate(question, { to: 'en' });
    imi_txt = `${translatedQuestion}\n\n`;
    imi_txt += "0 - Yᴇs\n";
    imi_txt += "1 - No\n";
    imi_txt += "2 - I ᴅᴏɴ'ᴛ ᴋɴᴏᴡ\n";
    imi_txt += "3 - Mᴀʏʙᴇ\n";
    imi_txt += "4 - Mᴀʏʙᴇ ɴᴏᴛ";

    gss.sendText(m.chat, imi_txt, m).then(() => {
        akinator[m.sender.split('@')[0]] = data;
        fs.writeFileSync("./src/data/akinator.json", JSON.stringify(akinator));
    });
    break;
case 'akinatorstop':
    if (!akinator.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Yᴏᴜ ᴅᴏɴ'ᴛ ʜᴀᴠᴇ ᴀɴ ᴏɴɢᴏɪɴɢ ᴀᴋɪɴᴀᴛᴏʀ sᴇssɪᴏɴ.");
    delete akinator[m.sender.split('@')[0]];
    fs.writeFileSync("./src/data/akinator.json", JSON.stringify(akinator));
    m.reply("Sᴜᴄᴄᴇssғᴜʟʟʏ ᴄᴀɴᴄᴇʟᴇᴅ ᴛʜᴇ ᴘʀᴇᴠɪᴏᴜs ᴀᴋɪɴᴀᴛᴏʀ sᴇssɪᴏɴ.");
    break;

case 'tagall': case 'all':{
  if (!m.isGroup) return m.reply('ʏᴏᴜ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ɪɴ ɢʀᴏᴜᴘ ❌')
if (!isAdmins) return m.reply('Tʜɪs ꜰᴇᴀᴛᴜʀᴇ ɪs ᴏɴʟʏ ꜰᴏʀ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴs')
let teks = `乂 *ᴀᴛᴛᴇɴᴛɪᴏɴ ᴇᴠᴇʀʏᴏɴᴇ* 乂 

*Message:* ${args.join(" ") ? args.join(" ") : 'no message'}\n\n`
for (let mem of participants) {
teks += `🔰 @${mem.id.split('@')[0]}\n`
}
gss.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break;

case 'hidetag': {
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
  gss.sendMessage(m.chat, { text: q ? q : '', mentions: participants.map(a => a.id) }, { quoted: m });
}
break;


case 'totag': case 'tag': {
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
  if (!m.quoted) throw `Reply to a message with the command ${prefix + command}`;
  gss.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) });
}
break;

	    case 'style': case 'styletext': {
  if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit); // Response when the limit is exhausted
  db.data.users[m.sender].limit -= 1; // Decrease the limit by 1
  let { styletext } = require('./lib/scraper');
  if (!text) throw 'Eɴᴛᴇʀ ᴛʜᴇ ᴛᴇxᴛ ϙᴜᴇʀʏ !';
  let anu = await styletext(text);
  let teks = `Style Text From ${text}\n\n`;
  for (let i of anu) {
    teks += `⭔ *${i.name}* : ${i.result}\n\n`;
  }
  m.reply(teks);
}
break;

case 'group':
case 'grup': {
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
  if (!args || args.length < 1) {
    gss.sendPoll(m.chat, "Cʜᴏᴏsᴇ Gʀᴏᴜᴘ Sᴇᴛᴛɪɴɢ:", [`${prefix}group close`, `${prefix}group open`]);
  } else {
    const groupSetting = args[0].toLowerCase();
    if (groupSetting === 'close') {
      await gss.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Gʀᴏᴜᴘ Sᴜᴄᴄᴇssғᴜʟʟʏ Cʟᴏsᴇᴅ`)).catch((err) => m.reply(jsonformat(err)));
    } else if (groupSetting === 'open') {
      await gss.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Gʀᴏᴜᴘ Sᴜᴄᴄᴇssғᴜʟʟʏ Oᴘᴇɴᴇᴅ`)).catch((err) => m.reply(jsonformat(err)));
    } else {
      gss.sendPoll(m.chat, "Cʜᴏᴏsᴇ Gʀᴏᴜᴘ Sᴇᴛᴛɪɴɢ:", [`${prefix}group close`, `${prefix}group open`]);
    }
  }
}
break;



case 'editinfo': {
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
  if (!args || args.length < 1) {
    gss.sendPoll(m.chat, "Cʜᴏᴏsᴇ Eᴅɪᴛ Iɴғᴏ Sᴇᴛᴛɪɴɢ:", [`${prefix}editinfo open`, `${prefix}editinfo close`]);
  } else {
    const editInfoSetting = args[0].toLowerCase();
    if (editInfoSetting === 'open') {
      await gss.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Gʀᴏᴜᴘ Eᴅɪᴛ Iɴғᴏ Sᴜᴄᴄᴇssғᴜʟʟʏ Oᴘᴇɴᴇᴅ`)).catch((err) => m.reply(jsonformat(err)));
    } else if (editInfoSetting === 'close') {
      await gss.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Gʀᴏᴜᴘ Eᴅɪᴛ Iɴғᴏ Sᴜᴄᴄᴇssғᴜʟʟʏ Cʟᴏsᴇᴅ`)).catch((err) => m.reply(jsonformat(err)));
    } else {
      gss.sendPoll(m.chat, "Cʜᴏᴏsᴇ Eᴅɪᴛ Iɴғᴏ Sᴇᴛᴛɪɴɢ:", [`${prefix}editinfo open`, `${prefix}editinfo close`]);
    }
  }
}
break;



            case 'antilink': {
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
  if (!args || args.length < 1) {
    gss.sendPoll(m.chat, "*Cʜᴏᴏsᴇ ᴀɴᴛɪ-ʟɪɴᴋ ᴍᴏᴅᴇ:*", [`${prefix}antilink on`, `${prefix}antilink off`]);
  } else {
    const antilinkSetting = args[0].toLowerCase();
    if (antilinkSetting === "on") {
      if (db.data.chats[m.chat]?.antilink) return m.reply(`*Aɴᴛɪ-ʟɪɴᴋ ᴀʟʀᴇᴀᴅʏ ᴀᴄᴛɪᴠᴇ!*`);
      db.data.chats[m.chat].antilink = true;
      m.reply(`*Aɴᴛɪ-ʟɪɴᴋ ᴀᴄᴛɪᴠᴀᴛᴇᴅ..!!*`);
    } else if (antilinkSetting === "off") {
      if (!db.data.chats[m.chat]?.antilink) return m.reply(`*Aɴᴛɪ-ʟɪɴᴋ ᴀʟʀᴇᴀᴅʏ ɪɴᴀᴄᴛɪᴠᴇ!*`);
      db.data.chats[m.chat].antilink = false;
      m.reply(`*Aɴᴛɪ-ʟɪɴᴋ ᴅᴇᴀᴄᴛɪᴠᴀᴛᴇᴅ..*`);
    } else {
      gss.sendPoll(m.chat, "*Cʜᴏᴏsᴇ ᴀɴᴛɪ-ʟɪɴᴋ ᴍᴏᴅᴇ:*", [`${prefix}antilink on`, `${prefix}antilink off`]);
    }
  }
}
break;




case 'antibot': {
    if (!m.isGroup) throw mess.group;
    if (!isBotAdmins) throw mess.botAdmin;
    if (!isAdmins) throw mess.admin;
    
    if (!args || args.length < 1) {
        gss.sendPoll(m.chat, "*Cʜᴏᴏsᴇ ᴀɴᴛɪ-ʙᴏᴛ ᴍᴏᴅᴇ:*", [`${prefix}antibot on`, `${prefix}antibot off`]);
    } else {
        const antibotSetting = args[0].toLowerCase();
        if (antibotSetting === "on") {
            if (db.data.chats[m.chat]?.antibot) return m.reply(`*Aɴᴛɪ-ʙᴏᴛ ᴀʟʀᴇᴀᴅʏ ᴀᴄᴛɪᴠᴇ!*`);
            db.data.chats[m.chat].antibot = true;
            m.reply(`*Aɴᴛɪ-ʙᴏᴛ ᴀᴄᴛɪᴠᴀᴛᴇᴅ..!!*`);
        } else if (antibotSetting === "off") {
            if (!db.data.chats[m.chat]?.antibot) return m.reply(`*Aɴᴛɪ-ʙᴏᴛ ᴀʟʀᴇᴀᴅʏ ɪɴᴀᴄᴛɪᴠᴇ!*`);
            db.data.chats[m.chat].antibot = false;
            m.reply(`*Aɴᴛɪ-ʙᴏᴛ ᴅᴇᴀᴄᴛɪᴠᴀᴛᴇᴅ..*`);
        } else {
            gss.sendPoll(m.chat, "*Cʜᴏᴏsᴇ ᴀɴᴛɪ-ʙᴏᴛ ᴍᴏᴅᴇ:*", [`${prefix}antibot on`, `${prefix}antibot off`]);
        }
    }
}
break;

case 'antidelete': {
if (!isCreator) throw mess.owner;
    if (!args || args.length < 1) {
        gss.sendPoll(m.chat, "*Cʜᴏᴏsᴇ ᴀɴᴛɪ-ᴅᴇʟᴇᴛᴇ ᴍᴏᴅᴇ:*", [`${prefix}antidelete on`, `${prefix}antidelete off`]);
    } else {
        const antideleteSetting = args[0].toLowerCase();
        if (antideleteSetting === "on") {
            if (db.data.chats[m.chat]?.antidelete) return m.reply(`*Aɴᴛɪ-ᴅᴇʟᴇᴛᴇ ᴀʟʀᴇᴀᴅʏ ᴀᴄᴛɪᴠᴇ!*`);
            db.data.chats[m.chat].antidelete = true;
            m.reply(`*Aɴᴛɪ-ᴅᴇʟᴇᴛᴇ ᴀᴄᴛɪᴠᴀᴛᴇᴅ..!!*`);
        } else if (antideleteSetting === "off") {
            if (!db.data.chats[m.chat]?.antidelete) return m.reply(`*Aɴᴛɪ-ᴅᴇʟᴇᴛᴇ ᴀʟʀᴇᴀᴅʏ ɪɴᴀᴄᴛɪᴠᴇ!*`);
            db.data.chats[m.chat].antidelete = false;
            m.reply(`*Aɴᴛɪ-ᴅᴇʟᴇᴛᴇ ᴅᴇᴀᴄᴛɪᴠᴀᴛᴇᴅ..!!*`);
        } else {
            gss.sendPoll(m.chat, "*Cʜᴏᴏsᴇ ᴀɴᴛɪ-ᴅᴇʟᴇᴛᴇ ᴍᴏᴅᴇ:*", [`${prefix}antidelete on`, `${prefix}antidelete off`]);
        }
    }
}
break;

case 'antiviewonce': {
if (!isCreator) throw mess.owner;
    if (!args || args.length < 1) {
        gss.sendPoll(m.chat, "*Cʜᴏᴏsᴇ ᴀɴᴛɪ-ᴠɪᴇᴡᴏɴᴄᴇ ᴍᴏᴅᴇ:*", [`${prefix}antiviewonce on`, `${prefix}antiviewonce off`]);
    } else {
        const antiviewonceSetting = args[0].toLowerCase();
        if (antiviewonceSetting === "on") {
            if (db.data.chats[m.chat]?.antiviewonce) return m.reply(`*Aɴᴛɪ-ᴠɪᴇᴡᴏɴᴄᴇ ᴀʟʀᴇᴀᴅʏ ᴀᴄᴛɪᴠᴇ*`);
            db.data.chats[m.chat].antiviewonce = true;
            m.reply(`*Aɴᴛɪ-ᴠɪᴇᴡᴏɴᴄᴇ ᴀᴄᴛɪᴠᴀᴛᴇᴅ..!!*`);
        } else if (antiviewonceSetting === "off") {
            if (!db.data.chats[m.chat]?.antiviewonce) return m.reply(`*Aɴᴛɪ-ᴠɪᴇᴡᴏɴᴄᴇ ᴀʟʀᴇᴀᴅʏ ɪɴᴀᴄᴛɪᴠᴇ*`);
            db.data.chats[m.chat].antiviewonce = false;
            m.reply(`*Aɴᴛɪ-ᴠɪᴇᴡᴏɴᴄᴇ ᴅᴇᴀᴄᴛɪᴠᴀᴛᴇᴅ..!!*`);
        } else {
            gss.sendPoll(m.chat, "*Cʜᴏᴏsᴇ ᴀɴᴛɪ-ᴠɪᴇᴡᴏɴᴄᴇ ᴍᴏᴅᴇ:*", [`${prefix}antiviewonce on`, `${prefix}antiviewonce off`]);
        }
    }
}
break;



case 'linkgroup': case 'linkgc': {
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  let response = await gss.groupInviteCode(m.chat);
  gss.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup Link: ${groupMetadata.subject}`, m, { detectLink: true });
}
break;



case 'setstatus': case 'setbiobot': case 'setbotbio': {
  if (!isCreator) throw mess.owner;
  if (!text) throw `*Tʜɪs ɪs ᴀ ʟɪɢʜᴛᴡᴇɪɢʜᴛ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ ᴍᴀᴅᴇ ᴜsɪɴɢ ʙᴀɪʟᴇʏs & ɴᴏᴅᴇ.ᴊs*`;
  let name = await gss.updateProfileStatus(text);
  m.reply(`*Sᴜᴄᴄᴇssғᴜʟʟʏ ᴄʜᴀɴɢᴇᴅ ʙᴏᴛ ʙɪᴏ sᴛᴀᴛᴜs ᴛᴏ  ${name}*`);
}
break;

case 'anticall': {
    if (!isCreator) throw mess.owner;

    let ciko = db.data.settings[botNumber]?.anticall;

    if (!args || args.length < 1) {
        gss.sendPoll(m.chat, "*Cʜᴏᴏsᴇ ᴀɴᴛɪ-ᴄᴀʟʟ ᴍᴏᴅᴇ*:", [`${prefix}anticall off`, `${prefix}anticall on`]);
    } else {
        if (args[0].toLowerCase() === "on") {
            if (ciko) return m.reply(`*Aɴᴛɪ-ᴄᴀʟʟ ᴀʟʀᴇᴀᴅʏ ᴀᴄᴛɪᴠᴇ*`);
            db.data.settings[botNumber].anticall = true;
            m.reply(`*Aɴᴛɪ-ᴄᴀʟʟ ᴀᴄᴛɪᴠᴀᴛᴇᴅ..!!*`);
        } else if (args[0].toLowerCase() === "off") {
            if (!ciko) return m.reply(`*Aɴᴛɪ-ᴄᴀʟʟ ᴀʟʀᴇᴀᴅʏ ɪɴᴀᴄᴛɪᴠᴇ*`);
            db.data.settings[botNumber].anticall = false;
            m.reply(`*Aɴᴛɪ-ᴄᴀʟʟ ᴅᴇᴀᴄᴛɪᴠᴀᴛᴇᴅ..!!*`);
        } else {
            gss.sendPoll(m.chat, "*Cʜᴏᴏsᴇ ᴀɴᴛɪ-ᴄᴀʟʟ ᴍᴏᴅᴇ:*", [`${prefix}anticall off`, `${prefix}anticall on`]);
        }
    }
}
break;




            case 'deleteall':
case 'delall':
case 'delete':
case 'del': 
  if (!isCreator) return m.reply('*Yᴏᴜ ᴀʀᴇ ɴᴏᴛ ᴍʏ ᴏᴡɴᴇʀ*')
    
        if (!m.quoted) return m.reply('*Pʟᴇᴀsᴇ ᴍᴇɴᴛɪᴏɴ ᴀ ᴍᴇssᴀɢᴇ*');
        let { chat, id } = m.quoted;

        const key = {
            remoteJid: m.chat,
            id: m.quoted.id,
            participant: m.quoted.sender
        };

        await gss.sendMessage(m.chat, { delete: key });
    break;

case 'bcgc': case 'bcgroup': {
  if (!isCreator) throw mess.owner;
  if (!text) throw `Wʜᴇʀᴇ's ᴛʜᴇ ᴛᴇxᴛ?\n\nExample: ${prefix + command} fatih-san`;
  let getGroups = await gss.groupFetchAllParticipating();
  let groups = Object.entries(getGroups).slice(0).map(entry => entry[1]);
  let anu = groups.map(v => v.id);
  m.reply(`Sᴇɴᴅɪɴɢ Bʀᴏᴀᴅᴄᴀsᴛ ᴛᴏ ${anu.length} Gʀᴏᴜᴘ Cʜᴀᴛs\nEsᴛɪᴍᴀᴛᴇᴅ Tɪᴍᴇ ${anu.length * 1.5} sᴇᴄᴏɴᴅs`);
  for (let i of anu) {
    await sleep(1500);
    let txt = `「 *BʀᴏᴀᴅCᴀsᴛ ᴀᴛᴛᴇɴᴛɪᴏɴ* 」\n\n${text}`;
    gss.sendText(i, txt);
  }
  m.reply(`Sᴜᴄᴄᴇssғᴜʟʟʏ Sᴇɴᴛ Bʀᴏᴀᴅᴄᴀsᴛ ᴛᴏ ${anu.length} Gʀᴏᴜᴘs`);
}
break;
  
case 'bc': case 'broadcast': case 'bcall': {
  if (!isCreator) throw mess.owner;
  if (!text) throw `Wʜᴇʀᴇ's ᴛʜᴇ ᴛᴇxᴛ?\n\nExample: ${prefix + command} fatih-san`;
  let anu = await store.chats.all().map(v => v.id);
  m.reply(`Sᴇɴᴅɪɴɢ Bʀᴏᴀᴅᴄᴀsᴛ ᴛᴏ ${anu.length} ᴄʜᴀᴛs\nEsᴛɪᴍᴀᴛᴇᴅ Tɪᴍᴇ  ${anu.length * 1.5} sᴇᴄᴏɴᴅs`);
  for (let yoi of anu) {
    await sleep(1500);
    gss.sendText(yoi, text);
  }
  m.reply('*Bʀᴏᴀᴅᴄᴀsᴛ Sᴜᴄᴄᴇssғᴜʟʟ..!!'*);
}
break;

case 'infochat': {
  if (!m.quoted) m.reply('*Rᴇᴘʟʏ ᴛᴏ ᴀ ᴍᴇssᴀɢᴇ*');
  let msg = await m.getQuotedObj();
  if (!m.quoted.isBaileys) throw '*Tʜᴇ ᴍᴇssᴀɢᴇ ɪs ɴᴏᴛ sᴇɴᴛ ʙʏ ᴛʜᴇ ʙᴏᴛ!*';
  let teks = '';
  for (let i of msg.userReceipt) {
    let read = i.readTimestamp;
    let unread = i.receiptTimestamp;
    let Time = read ? read : unread;
    teks += `⭔ @${i.userJid.split('@')[0]}\n`;
    teks += ` ┗━⭔ *Time:* ${moment(Time * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status:* ${read ? 'Read' : 'Sent'}\n\n`;
  }
  gss.sendTextWithMentions(m.chat, teks, m);
}
break;

case 'q': case 'quoted': {
  if (!m.quoted) return m.reply('*Rᴇᴘʟʏ ᴛᴏ ᴀ ᴍᴇssᴀɢᴇ!*');
  let wokwol = await gss.serializeM(await m.getQuotedObj());
  if (!wokwol.quoted) return m.reply('*Tʜᴇ ʀᴇᴘʟɪᴇᴅ ᴍᴇssᴀɢᴇ ᴅᴏᴇs ɴᴏᴛ ᴄᴏɴᴛᴀɪɴ ᴀ ʀᴇᴘʟʏ*');
  await wokwol.quoted.copyNForward(m.chat, true);
}
break;

            case 'listpc': {
  let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id);
  let teks = `⬣ *Pᴇʀsᴏɴᴀʟ ᴄʜᴀᴛ-ʟɪsᴛ*\n\nTotal Chats: ${anu.length} Chats\n\n`;
  for (let i of anu) {
    let nama = store.messages[i].array[0].pushName;
    teks += `⬡ *Name:* ${nama}\n⬡ *User:* @${i.split('@')[0]}\n⬡ *Chat:* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`;
  }
  gss.sendTextWithMentions(m.chat, teks, m);
}
break;

case 'listgc': {
  let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id);
  let teks = `⬣ *Gʀᴏᴜᴘ ᴄʜᴀᴛ-ʟɪsᴛ*\n\nTotal Groups: ${anu.length} Groups\n\n`;
  for (let i of anu) {
    let metadata = await gss.groupMetadata(i);
    teks += `⬡ *Name:* ${metadata.subject}\n⬡ *Owner:* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}\n⬡ *ID:* ${metadata.id}\n⬡ *Created:* ${moment(metadata.creation * 1000).tz('Asia/Dhaka').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Members:* ${metadata.participants.length}\n\n────────────────────────\n\n`;
  }
  gss.sendTextWithMentions(m.chat, teks, m);
}
break;

case 'listonline': case 'liston': {
  let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat;
  let online = [...Object.keys(store.presences[id]), botNumber];
  gss.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online });
}
break;


case 'remini': case 'upscale': case 'enhance': case 'hd': {
    if (!quoted) return m.reply(`*Wʜᴇʀᴇ ɪs ᴛʜᴇ ᴘɪᴄᴛᴜʀᴇ?*`);
    if (!/image/.test(mime)) return m.reply(`Sᴇɴᴅ/Rᴇᴘʟʏ Pʜᴏᴛᴏs Wɪᴛʜ Cᴀᴘᴛɪᴏɴs  ${prefix + command}`);
    m.reply(mess.wait);
    const { remini } = require('./lib/remini');
    let media = await quoted.download();

    try {
        let proses = await remini(media, "enhance");

        // Send the enhanced image with the new caption
        gss.sendMessage(m.chat, { image: proses, caption: `${mess.success} Pɪᴄᴛᴜʀᴇ ᴇɴᴄʜᴀɴᴄᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ\n*||©️Vɪʙʀᴀɴɪᴜᴍ-Bᴏᴛ*` }, { quoted: m });
    } catch (error) {
        console.error('Error in Remini Enchancement:', error);
        m.reply(`*Aɴ ᴇʀʀᴏʀ ᴏᴄᴄᴜʀʀᴇᴅ*: ${error.message}`);
        await doReact("❌");
    }
    break;
}

        case 'gemini':
case 'vision': {
    if (!quoted) return m.reply(`*Wʜᴇʀᴇ ɪs ᴛʜᴇ ᴘɪᴄᴛᴜʀᴇ?*`);
    if (!/image/.test(mime)) return m.reply(`Sᴇɴᴅ/Rᴇᴘʟʏ Pʜᴏᴛᴏs Wɪᴛʜ Cᴀᴘᴛɪᴏɴs ${prefix + command}`);
    
    m.reply(mess.wait);

    try {
        const prompt = `${text}`;
        const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
        const media = await quoted.download();

        const imagePart = {
            inlineData: {
                data: Buffer.from(media).toString("base64"),
                mimeType: mime
            },
        };

        const result = await model.generateContent([prompt, imagePart]);
        const response = await result.response;
        const textt = response.text(); // Fix the typo here

        // Send the generated text as the reply
        m.reply(`${textt}`);
    } catch (error) {
        console.error('Error in Gemini Pro Vision:', error);
        m.reply(`*Aɴ ᴇʀʀᴏʀ ᴏᴄᴄᴜʀʀᴇᴅ*: ${error.message}`);
        await doReact("❌");
    }
    break;
}




case 'lyrics': {
if (!text) return m.reply(`Cᴏᴍᴍᴀɴᴅ ᴜsᴀɢᴇ: ${prefix}lyrics Thunder`)
await doReact("❌");
m.reply(mess.wait);
await doReact("🔎");
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
m.reply(`
*✍️ Title:* ${result.title}
*👨‍ Author:* ${result.author}
*🔗 Url:* ${result.link}

*📝 Lyrics:*\n\n ${result.lyrics}
`.trim())
await doReact("🗨");
}
break;



case 'whatmusic': case 'find': case 'shazame':
    if (!m.quoted) {
        m.reply('Yᴏᴜ ᴀsᴋᴇᴅ ᴀʙᴏᴜᴛ ᴍᴜsɪᴄ. Pʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴀ ϙᴜᴏᴛᴇᴅ ᴀᴜᴅɪᴏ ᴏʀ ᴠɪᴅᴇᴏ ᴍᴇssᴀɢᴇ ғᴏʀ ɪᴅᴇɴᴛɪғɪᴄᴀᴛɪᴏɴ.');
    } else if (/audio|video/.test(mime)) {
        try {
            let media = await m.quoted.download();
            const ext = mime.split('/')[1];
            fs.writeFileSync(`./tmp/${m.sender}.${ext}`, media);
            
            m.reply(mess.wait);

            const res = await acr.identify(fs.readFileSync(`./tmp/${m.sender}.${ext}`));
            const { code, msg } = res.status;

            if (code !== 0) {
                throw msg;
            }

            const { title, artists, album, genres, release_date } = res.metadata.music[0];
            const txt = `
                • 🏮 *Tɪᴛʟᴇ:* ${title}
                • 👨‍ *Aʀᴛɪsᴛ:* ${artists !== undefined ? artists.map(v => v.name).join(', ') : 'NOT FOUND'}
                • 💾 *Aʟʙᴜᴍ:* ${album.name || 'NOT FOUND'}
                • 🌐 *Gᴇɴʀᴇ:* ${genres !== undefined ? genres.map(v => v.name).join(', ') : 'NOT FOUND'}
                • 📆 *Rᴇʟᴇᴀsᴇ-Dᴀᴛᴇ:* ${release_date || 'NOT FOUND'}
            `.trim();

            fs.unlinkSync(`./tmp/${m.sender}.${ext}`);
            m.reply(txt);
        } catch (error) {
            console.error(error);
            m.reply('*Aɴ ᴇʀʀᴏʀ ᴏᴄᴄᴜʀʀᴇᴅ ᴅᴜʀɪɴɢ ᴍᴜsɪᴄ ɪᴅᴇɴᴛɪғɪᴄᴀᴛɪᴏɴ.*');
        }
    }
    break;




case 'fetch':
case 'get':
  if (!/^https?:\/\//.test(text)) throw 'Sᴛᴀʀᴛ ᴛʜᴇ Uʀʟ ᴡɪᴛʜ *ʜᴛᴛᴘ://* ᴏʀ *ʜᴛᴛᴘs://*';
  const _url = new URL(text);
  const url = `${_url.origin}${_url.pathname}?${_url.searchParams.toString()}`;
  const res = await fetch(url);

  if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
    throw `Content-Length exceeds the limit: ${res.headers.get('content-length')}`;
  }

  if (!/text|json/.test(res.headers.get('content-type'))) {
    return gss.sendMedia(m.chat, url, 'file', 'API FETCHED FROM GSS_BOTWA', m);
  }

  let content = Buffer.from(await res.arrayBuffer());

  try {
    console.log('Parsed JSON:', JSON.parse(content));
    content = JSON.stringify(JSON.parse(content));
  } catch (e) {
    console.error('Error parsing JSON:', e);
    content = content + '';
  } finally {
    m.reply(content.slice(0, 65536) + '');
  }
  break;
  
  
    case 'send':
case 'take':
  const quotedMessage = m.msg.contextInfo.quotedMessage;
  let caption = null;

  if (quotedMessage && (quotedMessage.imageMessage || quotedMessage.videoMessage)) {
    let mediaMessage = quotedMessage.imageMessage || quotedMessage.videoMessage;

    if (caption === null) {
      caption = `${text}`;
    }

    let mediaUrl = await gss.downloadAndSaveMediaMessage(mediaMessage);
    gss.sendMedia(m.chat, mediaUrl, 'file', caption, m);
  }
  break;

  

case 'updatenow':
  if (global.herokuConfig && global.herokuConfig.heroku) {
    const DB = require('./lib');
    try {
      let commits = await DB.syncgit();
      if (commits.total === 0) {
        m.reply(`Hᴇʏ ${m.pushName} 👋, Yᴏᴜ ʜᴀᴠᴇ ᴛʜᴇ ʟᴀᴛᴇsᴛ ᴠᴇʀsɪᴏɴ ɪɴsᴛᴀʟʟᴇᴅ!`);
      } else {
        m.reply('*Bᴜɪʟᴅ Sᴛᴀʀᴛᴇᴅ....*/n*■■■■□□□ 70%*');
        let update = await DB.updatedb();
        m.reply(update);
      }
    } catch (error) {
      console.error('Error updating database:', error);
      m.reply('*Aɴ ᴇʀʀᴏʀ ᴏᴄᴄᴜʀʀᴇᴅ ᴡʜɪʟᴇ ᴜᴘᴅᴀᴛɪɴɢ ᴛʜᴇ ᴅᴀᴛᴀʙᴀsᴇ :<*');
    }
  }
  break;


case 'ebinary': {
  if (!text) throw `Example: ${prefix + command} text`;
  let { eBinary } = require('./lib/binary');
  let eb = await eBinary(text);
  m.reply(eb);
}
break;

case 'dbinary': {
  if (!text) throw `Example: ${prefix + command} text`;
  let { dBinary } = require('./lib/binary');
  let db = await dBinary(text);
  m.reply(db);
}
break;

case 'tomp4': case 'tovideo': {
  if (!/webp/.test(mime)) throw `Rᴇᴘʟʏ sᴛɪᴄᴋᴇʀ ᴡɪᴛʜ ᴄᴀᴘᴛɪᴏɴ *${prefix + command}*`;
  m.reply(mess.wait);
  let { webp2mp4File } = require('./lib/uploader');
  let media = await gss.downloadAndSaveMediaMessage(qmsg);
  let webpToMp4 = await webp2mp4File(media);
  await gss.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m });
  await fs.unlinkSync(media);
}
break;

case 'toaud': case 'toaudio': {
  if (!/video/.test(mime) && !/audio/.test(mime)) throw `Sᴇɴᴅ/Rᴇᴘʟʏ ᴡɪᴛʜ Vɪᴅᴇᴏ/Aᴜᴅɪᴏ ᴛᴏ ᴄᴏɴᴠᴇʀᴛ ɪɴᴛᴏ Aᴜᴅɪᴏ ᴡɪᴛʜ ᴄᴀᴘᴛɪᴏɴ ${prefix + command}`;
  m.reply(mess.wait);
  let media = await gss.downloadMediaMessage(qmsg);
  let { toAudio } = require('./lib/converter');
  let audio = await toAudio(media, 'mp4');
  gss.sendMessage(m.chat, { audio: audio, mimetype: 'audio/mpeg' }, { quoted: m });
}
break;

            case 'tomp3': {
  if (!/video/.test(mime) && !/audio/.test(mime)) throw `Sᴇɴᴅ/Rᴇᴘʟʏ ᴡɪᴛʜ Vɪᴅᴇᴏ/Aᴜᴅɪᴏ ᴛᴏ ᴄᴏɴᴠᴇʀᴛ ɪɴᴛᴏ MP3 ᴡɪᴛʜ ᴄᴀᴘᴛɪᴏɴ ${prefix + command}`;
  m.reply(mess.wait);
  let media = await gss.downloadMediaMessage(qmsg);
  let { toAudio } = require('./lib/converter');
  let audio = await toAudio(media, 'mp4');
  gss.sendMessage(m.chat, { document: audio, mimetype: 'audio/mpeg', fileName: `Cᴏɴᴠᴇʀᴛᴇᴅ ᴛᴏ ᴍᴘ3..!!/n*||©️Vɪʙʀᴀɴɪᴜᴍ-Bᴏᴛ*` }, { quoted: m });
}
break;

case 'tovn': case 'toptt': {
  if (!/video/.test(mime) && !/audio/.test(mime)) throw `Rᴇᴘʟʏ ᴡɪᴛʜ Vɪᴅᴇᴏ/Aᴜᴅɪᴏ ᴛᴏ ᴄᴏɴᴠᴇʀᴛ ɪɴᴛᴏ VN ᴡɪᴛʜ ᴄᴀᴘᴛɪᴏɴ ${prefix + command}`;
  m.reply(mess.wait);
  let media = await gss.downloadMediaMessage(qmsg);
  let { toPTT } = require('./lib/converter');
  let audio = await toPTT(media, 'mp4');
  gss.sendMessage(m.chat, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: m });
}
break;

case 'togif': {
  if (!/webp/.test(mime)) throw `Rᴇᴘʟʏ sᴛɪᴄᴋᴇʀ ᴡɪᴛʜ ᴄᴀᴘᴛɪᴏɴ *${prefix + command}*`;
  m.reply(mess.wait);
  let { webp2mp4File } = require('./lib/uploader');
  let media = await gss.downloadAndSaveMediaMessage(qmsg);
  let webpToMp4 = await webp2mp4File(media);
  await gss.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m });
  await fs.unlinkSync(media);
}
break;

case 'tourl': case 'url': {
  m.reply(mess.wait);
  let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader');
  let media = await gss.downloadAndSaveMediaMessage(qmsg);
  if (/image/.test(mime)) {
    let anu = await TelegraPh(media);
    m.reply(util.format(anu));
  } else if (!/image/.test(mime)) {
    let anu = await UploadFileUgu(media);
    m.reply(util.format(anu));
  }
  await fs.unlinkSync(media);
}
break;

            case 'imagenobg': case 'removebg': case 'remove-bg': {
  if (!/image/.test(mime)) throw `Sᴇɴᴅ/Rᴇᴘʟʏ ᴡɪᴛʜ Iᴍᴀɢᴇ ᴡɪᴛʜ ᴄᴀᴘᴛɪᴏɴ ${prefix + command}`;
  if (/webp/.test(mime)) throw `Sᴇɴᴅ/Rᴇᴘʟʏ ᴡɪᴛʜ Iᴍᴀɢᴇ ᴡɪᴛʜ ᴄᴀᴘᴛɪᴏɴ ${prefix + command}`;
  let remobg = require('remove.bg');
  let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU', 'S258diZhcuFJooAtHTaPEn4T', '5LjfCVAp4vVNYiTjq9mXJWHF', 'aT7ibfUsGSwFyjaPZ9eoJc61', 'BY63t7Vx2tS68YZFY6AJ4HHF', '5Gdq1sSWSeyZzPMHqz7ENfi8', '86h6d6u4AXrst4BVMD9dzdGZ', 'xp8pSDavAgfE5XScqXo9UKHF', 'dWbCoCb3TacCP93imNEcPxcL'];
  let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)];
  hmm = await './src/remobg-' + getRandom('');
  localFile = await gss.downloadAndSaveMediaMessage(qmsg, hmm);
  outputFile = await './src/hremo-' + getRandom('.png');
  m.reply(mess.wait);
  remobg.removeBackgroundFromImageFile({
    path: localFile,
    apiKey: apinobg,
    size: "regular",
    type: "auto",
    scale: "100%",
    outputFile
  }).then(async result => {
    gss.sendMessage(m.chat, { image: fs.readFileSync(outputFile), caption: mess.success }, { quoted: m });
    await fs.unlinkSync(localFile);
    await fs.unlinkSync(outputFile);
  });
}
break;

case'tagadmins': case 'admins': {
if (!text) return m.reply(`*give me message for admin*`)
let teks = `*「 Tag Admins 」*

*Message : ${text}*\n\n`
for (let mem of groupAdmins) {
teks += `🏮 @${mem.split('@')[0]}\n`
}
gss.sendMessage(m.chat, { text: teks, mentions: groupAdmins}, { quoted: m })
}
break;

  


case 'ytv':
  case 'video': 
    case 'ytmp4':
  try {
    if (!text) {
      m.reply('*Eɴᴛᴇʀ YᴏᴜTᴜʙᴇ Lɪɴᴋ ᴏʀ Sᴇᴀʀᴄʜ Qᴜᴇʀʏ!*');
      doReact("❌");
      return;
    }

    m.reply(mess.wait);
    await doReact("🕘");

    // Check if the input is a valid YouTube URL
    const isUrl = ytdl.validateURL(text);
await doReact("⬇️");
    if (isUrl) {
      // If it's a URL, directly use ytdl-core for audio and video
      const videoStream = ytdl(text, { filter: 'audioandvideo', quality: 'highest' });

      const videoBuffer = [];

      videoStream.on('data', (chunk) => {
        videoBuffer.push(chunk);
      });

      videoStream.on('end', async () => {
        try {
          const finalVideoBuffer = Buffer.concat(videoBuffer);

          const videoInfo = await yts({ videoId: ytdl.getURLVideoID(text) });
          

          const captionText = `
┌┤   🏮 *Vɪʙʀᴀɴɪᴜᴍ-Pʟᴀʏᴇʀ* 🏮
│
┠  ⿻ *Tɪᴛʟᴇ:* ${videoInfo.title}
┠  ⿻ *Dᴜʀᴀᴛɪᴏɴ:* ${videoInfo.duration}
┠  ⿻ *Aᴜᴛʜᴏʀ:* ${videoInfo.author.name}
┠  ⿻ *Sɪᴢᴇ:* ${formatBytes(finalVideoBuffer.length)}
┠  ⿻ *Uᴘʟᴏᴀᴅ:* ${formatUploadDate(videoInfo.uploadDate)} 
╰───────────•∞•───⦿`;

          await gss.sendMessage(m.chat, { video: finalVideoBuffer, mimetype: 'video/mp4', caption: captionText });
          await doReact("✅");
        } catch (err) {
          console.error('Error sending video:', err);
          m.reply('*Eʀʀᴏʀ sᴇɴᴅɪɴɢ ᴠɪᴅᴇᴏ*');
          await doReact("❌");
        }
      });
    } else {
      // If it's a search query, use yt-search for video
      const searchResult = await yts(text);
      const firstVideo = searchResult.videos[0];
await doReact("⬇️");
      if (!firstVideo) {
        m.reply('Vɪᴅᴇᴏ ɴᴏᴛ Fᴏᴜɴᴅ');
        await doReact("❌");
        return;
      }

      const videoStream = ytdl(firstVideo.url, { filter: 'audioandvideo', quality: 'highest' });

      const videoBuffer = [];

      videoStream.on('data', (chunk) => {
        videoBuffer.push(chunk);
      });

      videoStream.on('end', async () => {
        try {
          const finalVideoBuffer = Buffer.concat(videoBuffer);

          const captionText = `
┌┤   🏮 *Vɪʙʀᴀɴɪᴜᴍ-Pʟᴀʏᴇʀ*  🏮
│
┠ ⿻ *Tɪᴛʟᴇ:* ${firstVideo.title}
┠ ⿻ *Dᴜʀᴀᴛɪᴏɴ:* ${firstVideo.duration}
┠ ⿻ *Aᴜᴛʜᴏʀ:* ${firstVideo.author.name}
┠ ⿻ *Sɪᴢᴇ:* ${formatBytes(finalVideoBuffer.length)}  
┠ ⿻ *Uᴘʟᴏᴀᴅ:* ${formatUploadDate(firstVideo.uploadDate)}
╰──────────•∞•───⦿`;

          await gss.sendMessage(m.chat, { video: finalVideoBuffer, mimetype: 'video/mp4', caption: captionText });
          await doReact("✅");
        } catch (err) {
          console.error('Error sending video:', err);
          m.reply('*Eʀʀᴏʀ sᴇɴᴅɪɴɢ ᴠɪᴅᴇᴏ*');
          await doReact("❌");
        }
      });
    }
  } catch (error) {
    console.error('Error during:', error);
    m.reply('*Uɴᴇxᴘᴇᴄᴛᴇᴅ ᴇʀʀᴏʀ ᴏᴄᴄᴜʀʀᴇᴅ*');
    await doReact("❌");
  }
  break;


case 'ytvdoc':
  case 'ytmp4doc':
  try {
    if (!text) {
      m.reply('*Eɴᴛᴇʀ YᴏᴜTᴜʙᴇ Lɪɴᴋ ᴏʀ Sᴇᴀʀᴄʜ Qᴜᴇʀʏ!*');
      doReact("❌");
      return;
    }

    m.reply(mess.wait);
    await doReact("🕘");

    // Check if the input is a valid YouTube URL
    const isUrl = ytdl.validateURL(text);

    if (isUrl) {
      // If it's a URL, directly use ytdl-core for audio and video
      const videoStream = ytdl(text, { filter: 'audioandvideo', quality: 'highest' });

      const videoBuffer = [];

      videoStream.on('data', (chunk) => {
        videoBuffer.push(chunk);
      });

      videoStream.on('end', async () => {
        try {
          const finalVideoBuffer = Buffer.concat(videoBuffer);

          const videoInfo = await yts({ videoId: ytdl.getURLVideoID(text) });

          const captionText = `
┌┤   🏮 *Vɪʙʀᴀɴɪᴜᴍ-Pʟᴀʏᴇʀ* 🏮
│
┠  ⿻ *Tɪᴛʟᴇ:* ${videoInfo.title}
┠  ⿻ *Dᴜʀᴀᴛɪᴏɴ:* ${videoInfo.duration}
┠  ⿻ *Aᴜᴛʜᴏʀ:* ${videoInfo.author.name}
┠  ⿻ *Sɪᴢᴇ:* ${formatBytes(finalVideoBuffer.length)}
┠  ⿻ *Uᴘʟᴏᴀᴅ:* ${formatUploadDate(videoInfo.uploadDate)} 
╰───────────•∞•───⦿`;

          await gss.sendMessage(m.chat, { document: finalVideoBuffer, mimetype: 'video/mp4', fileName: `${videoInfo.title}.mp4`, caption: captionText}, {quoted: m });
          await doReact("✅");
        } catch (err) {
          console.error('Error sending video:', err);
          m.reply('*Eʀʀᴏʀ sᴇɴᴅɪɴɢ ᴠɪᴅᴇᴏ*');
          await doReact("❌");
        }
      });
    } else {
      // If it's a search query, use yt-search for video
      const searchResult = await yts(text);
      const firstVideo = searchResult.videos[0];

      if (!firstVideo) {
        m.reply('*Vɪᴅᴇᴏ ɴᴏᴛ ғᴏᴜɴᴅ*');
        await doReact("❌");
        return;
      }

      const videoStream = ytdl(firstVideo.url, { filter: 'audioandvideo', quality: 'highest' });

      const videoBuffer = [];

      videoStream.on('data', (chunk) => {
        videoBuffer.push(chunk);
      });

      videoStream.on('end', async () => {
        try {
          const finalVideoBuffer = Buffer.concat(videoBuffer);

          const captionText = `
┌┤   🏮 *Vɪʙʀᴀɴɪᴜᴍ-Pʟᴀʏᴇʀ*  🏮
│
┠ ⿻ *Tɪᴛʟᴇ:* ${firstVideo.title}
┠ ⿻ *Dᴜʀᴀᴛɪᴏɴ:* ${firstVideo.duration}
┠ ⿻ *Aᴜᴛʜᴏʀ:* ${firstVideo.author.name}
┠ ⿻ *Sɪᴢᴇ:* ${formatBytes(finalVideoBuffer.length)}  
┠ ⿻ *Uᴘʟᴏᴀᴅ:* ${formatUploadDate(firstVideo.uploadDate)}
╰──────────•∞•───⦿`;

          await gss.sendMessage(m.chat, { document: finalVideoBuffer, mimetype: 'video/mp4', fileName: `${firstVideo.title}.mp4`, caption: captionText}, {quoted: m });
          await doReact("✅");
        } catch (err) {
          console.error('Error sending video:', err);
          m.reply('*Eʀʀᴏʀ sᴇɴᴅɪɴɢ ᴠɪᴅᴇᴏ*');
          await doReact("❌");
        }
      });
    }
  } catch (error) {
    console.error('Error during:', error);
    m.reply('*Uɴᴇxᴘᴇᴄᴛᴇᴅ ᴇʀʀᴏʀ ᴏᴄᴄᴜʀʀᴇᴅ*');
    await doReact("❌");
  }
  break;




case 'yta':
case 'song':
case 'ytmp3':
  try {
    if (!text) {
      m.reply('*Eɴᴛᴇʀ YᴏᴜTᴜʙᴇ Lɪɴᴋ ᴏʀ Sᴇᴀʀᴄʜ Qᴜᴇʀʏ!*');
      doReact("❌");
      return;
    }

    m.reply(mess.wait);
    await doReact("🕘");

    // Check if the input is a valid YouTube URL
    const isUrl = ytdl.validateURL(text);

    if (isUrl) {
      // If it's a URL, directly use ytdl-core
      const audioStream = ytdl(text, { filter: 'audioonly', quality: 'highestaudio' });
      const audioBuffer = [];

      audioStream.on('data', (chunk) => {
        audioBuffer.push(chunk);
      });

      audioStream.on('end', async () => {
        try {
          const finalAudioBuffer = Buffer.concat(audioBuffer);

          const videoInfo = await yts({ videoId: ytdl.getURLVideoID(text) });
          const thumbnailMessage = {
  image: {
    url: videoInfo.thumbnail,
  },
  caption: `
┌┤   🏮 *Vɪʙʀᴀɴɪᴜᴍ-Pʟᴀʏᴇʀ* 🏮
│
┠  ⿻ *Tɪᴛʟᴇ:* ${videoInfo.title}
┠  ⿻ *Dᴜʀᴀᴛɪᴏɴ:* ${videoInfo.duration}
┠  ⿻ *Aᴜᴛʜᴏʀ:* ${videoInfo.author.name}
┠  ⿻ *Sɪᴢᴇ:* ${formatBytes(finalVideoBuffer.length)}
┠  ⿻ *Uᴘʟᴏᴀᴅ:* ${formatUploadDate(videoInfo.uploadDate)} 
╰───────────•∞•───⦿`, 
};


          await gss.sendMessage(m.chat, thumbnailMessage, { quoted: m });
          await gss.sendMessage(m.chat, { audio: finalAudioBuffer, mimetype: 'audio/mpeg' }, { quoted: m });
          await doReact("✅");
        } catch (err) {
          console.error('Error sending audio:', err);
          m.reply('*Eʀʀᴏʀ sᴇɴᴅɪɴɢ ᴀᴜᴅɪᴏ*');
          await doReact("❌");
        }
      });
    } else {
      // If it's a search query, use yt-search
      const searchResult = await yts(text);
      const firstVideo = searchResult.videos[0];

      if (!firstVideo) {
        m.reply('Audio not found.');
        await doReact("❌");
        return;
      }

      const audioStream = ytdl(firstVideo.url, { filter: 'audioonly', quality: 'highestaudio' });
      const audioBuffer = [];

      audioStream.on('data', (chunk) => {
        audioBuffer.push(chunk);
      });

      audioStream.on('end', async () => {
        try {
          const finalAudioBuffer = Buffer.concat(audioBuffer);

          const thumbnailMessage = {
  image: {
    url: firstVideo.thumbnail,
  },
  caption: `
┌┤   🏮 *Vɪʙʀᴀɴɪᴜᴍ-Pʟᴀʏᴇʀ*  🏮
│
┠ ⿻ *Tɪᴛʟᴇ:* ${firstVideo.title}
┠ ⿻ *Dᴜʀᴀᴛɪᴏɴ:* ${firstVideo.duration}
┠ ⿻ *Aᴜᴛʜᴏʀ:* ${firstVideo.author.name}
┠ ⿻ *Sɪᴢᴇ:* ${formatBytes(finalVideoBuffer.length)}  
┠ ⿻ *Uᴘʟᴏᴀᴅ:* ${formatUploadDate(firstVideo.uploadDate)}
╰──────────•∞•───⦿`,
};
          await gss.sendMessage(m.chat, thumbnailMessage, { quoted: m });
          await gss.sendMessage(m.chat, { audio: finalAudioBuffer, mimetype: 'audio/mpeg' }, { quoted: m });
          await doReact("✅");
        } catch (err) {
          console.error('Error sending audio:', err);
          m.reply('*Eʀʀᴏʀ sᴇɴᴅɪɴɢ ᴀᴜᴅɪᴏ*');
          await doReact("❌");
        }
      });
    }
  } catch (error) {
    console.error('Error during:', error);
    m.reply('*Uɴᴇxᴘᴇᴄᴛᴇᴅ ᴇʀʀᴏʀ ᴏᴄᴄᴜʀʀᴇᴅ*');
    await doReact("❌");
  }
  break;




case 'ytadoc':
case 'songdoc':
case 'ytmp3doc':
  try {
    if (!text) {
      m.reply('*Eɴᴛᴇʀ YᴏᴜTᴜʙᴇ Lɪɴᴋ ᴏʀ Sᴇᴀʀᴄʜ Qᴜᴇʀʏ!*');
      doReact("❌");
      return;
    }

    m.reply(mess.wait);
    await doReact("🕘");

    // Check if the input is a valid YouTube URL
    const isUrl = ytdl.validateURL(text);

    if (isUrl) {
      // If it's a URL, directly use ytdl-core
      const audioStream = ytdl(text, { filter: 'audioonly', quality: 'highestaudio' });
      const audioBuffer = [];

      audioStream.on('data', (chunk) => {
        audioBuffer.push(chunk);
      });

      audioStream.on('end', async () => {
        try {
          const finalAudioBuffer = Buffer.concat(audioBuffer);

          const videoInfo = await yts({ videoId: ytdl.getURLVideoID(text) });
          const thumbnailMessage = {
  image: {
    url: videoInfo.thumbnail,
  },
  caption: `
┌┤   🏮 *Vɪʙʀᴀɴɪᴜᴍ-Pʟᴀʏᴇʀ* 🏮
│
┠  ⿻ *Tɪᴛʟᴇ:* ${videoInfo.title}
┠  ⿻ *Dᴜʀᴀᴛɪᴏɴ:* ${videoInfo.duration}
┠  ⿻ *Aᴜᴛʜᴏʀ:* ${videoInfo.author.name}
┠  ⿻ *Sɪᴢᴇ:* ${formatBytes(finalVideoBuffer.length)}
┠  ⿻ *Uᴘʟᴏᴀᴅ:* ${formatUploadDate(videoInfo.uploadDate)} 
╰───────────•∞•───⦿`, 
};


          await gss.sendMessage(m.chat, thumbnailMessage, { quoted: m });
          await gss.sendMessage(m.chat, { document: finalAudioBuffer, mimetype: 'audio/mpeg', fileName: `${videoInfo.title}.mp3` }, { quoted: m });
          await doReact("✅");
        } catch (err) {
          console.error('Error sending audio:', err);
          m.reply('*Eʀʀᴏʀ sᴇɴᴅɪɴɢ ᴀᴜᴅɪᴏ*');
          await doReact("❌");
        }
      });
    } else {
      // If it's a search query, use yt-search
      const searchResult = await yts(text);
      const firstVideo = searchResult.videos[0];

      if (!firstVideo) {
        m.reply('*Aᴜᴅɪᴏ ɴᴏᴛ ғᴏᴜɴᴅ!*');
        await doReact("❌");
        return;
      }

      const audioStream = ytdl(firstVideo.url, { filter: 'audioonly', quality: 'highestaudio' });
      const audioBuffer = [];

      audioStream.on('data', (chunk) => {
        audioBuffer.push(chunk);
      });

      audioStream.on('end', async () => {
        try {
          const finalAudioBuffer = Buffer.concat(audioBuffer);

          const thumbnailMessage = {
  image: {
    url: firstVideo.thumbnail,
  },
  caption: `
┌┤   🏮 *Vɪʙʀᴀɴɪᴜᴍ-Pʟᴀʏᴇʀ*  🏮
│
┠ ⿻ *Tɪᴛʟᴇ:* ${firstVideo.title}
┠ ⿻ *Dᴜʀᴀᴛɪᴏɴ:* ${firstVideo.duration}
┠ ⿻ *Aᴜᴛʜᴏʀ:* ${firstVideo.author.name}
┠ ⿻ *Sɪᴢᴇ:* ${formatBytes(finalVideoBuffer.length)}  
┠ ⿻ *Uᴘʟᴏᴀᴅ:* ${formatUploadDate(firstVideo.uploadDate)}
╰──────────•∞•───⦿`,
};
          await gss.sendMessage(m.chat, thumbnailMessage, { quoted: m });
          await gss.sendMessage(m.chat, { document: finalAudioBuffer, mimetype: 'audio/mpeg', fileName: `${firstVideo.title}.mp3` }, { quoted: m });
          await doReact("✅");
        } catch (err) {
          console.error('Error sending audio:', err);
          m.reply('*Eʀʀᴏʀ sᴇɴᴅɪɴɢ ᴀᴜᴅɪᴏ*');
          await doReact("❌");
        }
      });
    }
  } catch (error) {
    console.error('Error during:', error);
    m.reply('*Uɴᴇxᴘᴇᴄᴛᴇᴅ ᴇʀʀᴏʀ ᴏᴄᴄᴜʀʀᴇᴅ*');
    await doReact("❌");
  }
  break;




case 'yts': case 'ytsearch': {
  if (!text) {
    return m.reply('*Eɴᴛᴇʀ YᴏᴜTᴜʙᴇ Vɪᴅᴇᴏ Lɪɴᴋ ᴏʀ Sᴇᴀʀᴄʜ Qᴜᴇʀʏ!*');
  }
  await doReact("🕘");

  try {
    const results = await yts(text);

    if (results.videos.length > 0) {
      let pollOptions = [];

      const uniqueKey = `yts_${optionIndex}`;
      const urlObject = {};

      for (let i = 0; i < Math.min(5, results.videos.length); i++) {
        const result = results.videos[i];
        const videoUrl = result.url;
        const title = result.title;

        urlObject[`${optionIndex}.${i + 1}`] = videoUrl;
        pollOptions.push(`${prefix}ρᥣᥲყ ${optionIndex}.${i + 1} ${title}`);
      }

      if (!videoSearchResults.has(uniqueKey)) {
        videoSearchResults.set(uniqueKey, {});
      }

      videoSearchResults.set(uniqueKey, Object.assign(videoSearchResults.get(uniqueKey), urlObject));

      await gss.sendPoll(m.chat, '*Cʜᴏᴏsᴇ ᴀ ᴠɪᴅᴇᴏ ᴛᴏ ᴅᴏᴡɴʟᴏᴀᴅ:*', [...pollOptions]);
      await doReact("✅");

      optionIndex += 1;
    } else {
      return m.reply('*Nᴏ sᴇᴀʀᴄʜ ʀᴇsᴜʟᴛs ғᴏᴜɴᴅ.*');
    }
  } catch (error) {
    console.error('Error during yts:', error);
    return m.reply('*Uɴᴇxᴘᴇᴄᴛᴇᴅ ᴇʀʀᴏʀ ᴏᴄᴄᴜʀʀᴇᴅ.*');
  }
  break;
}





function formatUploadDate(uploadDate) {
  const date = new Date(uploadDate);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

case 'ρᥣᥲყ': {
  if (!text) {
    return m.reply('*Pʟᴇᴀsᴇ sᴘᴇᴄɪғʏ ᴛʜᴇ ᴠɪᴅᴇᴏ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ ᴘʟᴀʏ. Usᴇ ᴛʜᴇ ғᴏʀᴍᴀᴛ: ᴘʟᴀʏ [ᴜɴɪϙᴜᴇ-ᴋᴇʏ]*');
    doReact("❌");
  }

  const match = text.match(/(\d+)\.(\d+)/);

  if (!match) {
    return m.reply('*Iɴᴠᴀʟɪᴅ ғᴏʀᴍᴀᴛ. Pʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴀ ᴠᴀʟɪᴅ ᴜɴɪϙᴜᴇ ᴋᴇʏ (ᴇ.ɢ., 1.1)*');
    doReact("❌");
  }

  const optionIndex = parseInt(match[1]);
  const subOption = parseInt(match[2]);

  const uniqueKey = `yts_${optionIndex}`;

  if (videoSearchResults.has(uniqueKey)) {
    const selectedUrl = videoSearchResults.get(uniqueKey)[`${optionIndex}.${subOption}`];

    if (selectedUrl) {
      try {
        const videoInfo = await ytdl.getInfo(selectedUrl);

        const title = videoInfo.title || (videoInfo.videoDetails && videoInfo.videoDetails.title) || 'N/A';
const uploadDate = formatUploadDate(videoInfo.videoDetails.uploadDate) || 'N/A'; 
        // Construct caption with audio details
        const pollMessage = `
┌┤   🏮 *Vɪʙʀᴀɴɪᴜᴍ-Pʟᴀʏᴇʀ*  🏮
│
┠ ⿻ *Tɪᴛʟᴇ:* ${title}
┠ ⿻ *Dᴜʀᴀᴛɪᴏɴ:* ${videoInfo.videoDetails.author.name || 'N/A'}
┠ ⿻ *Aᴜᴛʜᴏʀ:* ${videoInfo.videoDetails.lengthSeconds}s
┠ ⿻ *Sɪᴢᴇ:* ${videoInfo.videoDetails.viewCount.toLocaleString() || 'N/A'}
┠ ⿻ *Uᴘʟᴏᴀᴅ:* ${uploadDate}
╰──────────•∞•───⦿`;

        await gss.sendPoll(m.chat, pollMessage, [
          `${prefix}ᥲᥙdιo ${optionIndex}.${subOption}`,
          `${prefix}vιdᥱo ${optionIndex}.${subOption}`,
          `${prefix}ᥲᥙdιodoᥴᥙmᥱnt ${optionIndex}.${subOption}`,
          `${prefix}vιdᥱodoᥴᥙmᥱnt ${optionIndex}.${subOption}`
        ]);
        await doReact("✅");
      } catch (error) {
        console.error('Error during poll creation:', error);
        return m.reply('*Uɴᴇxᴘᴇᴄᴛᴇᴅ ᴇʀʀᴏʀ ᴏᴄᴄᴜʀʀᴇᴅ ᴅᴜʀɪɴɢ ᴘᴏʟʟ ᴄʀᴇᴀᴛɪᴏɴ*');
        doReact("❌");
      }
    } else {
      return m.reply('*Iɴᴠᴀʟɪᴅ sᴜʙ-ᴏᴘᴛɪᴏɴ. Pʟᴇᴀsᴇ ᴄʜᴏᴏsᴇ ᴀ ᴠᴀʟɪᴅ sᴜʙ-ᴏᴘᴛɪᴏɴ.*');
    }
  } else {
    return m.reply('*Iɴᴠᴀʟɪᴅ ᴜɴɪϙᴜᴇ ᴋᴇʏ. Pʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴀ ᴠᴀʟɪᴅ ᴜɴɪϙᴜᴇ ᴋᴇʏ.*');
  }
  break;
}


async function streamToBuffer(stream) {
  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks);
}


case 'ᥲᥙdιo': {
  if (!text) {
    return m.reply('*Pʟᴇᴀsᴇ sᴘᴇᴄɪғʏ ᴛʜᴇ ᴜɴɪϙᴜᴇ ᴋᴇʏ ғᴏʀ ᴀᴜᴅɪᴏ ᴘʟᴀʏʙᴀᴄᴋ. Usᴇ ᴛʜᴇ ғᴏʀᴍᴀᴛ: ᴀᴜᴅɪᴏ [ᴜɴɪϙᴜᴇ-ᴋᴇʏ]*');
    doReact("❌");
  }

  const match = text.match(/(\d+)\.(\d+)/);

  if (!match) {
    return m.reply('*Iɴᴠᴀʟɪᴅ ғᴏʀᴍᴀᴛ. Pʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴀ ᴠᴀʟɪᴅ ᴜɴɪϙᴜᴇ ᴋᴇʏ (ᴇ.ɢ., 1.1)*');
    doReact("❌");
  }

  const optionIndex = parseInt(match[1]);
  const subOption = parseInt(match[2]);

  const uniqueKey = `yts_${optionIndex}`;

  if (videoSearchResults.has(uniqueKey)) {
    const selectedUrl = videoSearchResults.get(uniqueKey)[`${optionIndex}.${subOption}`];

    if (selectedUrl) {
      try {
        // Fetch video info for additional details
        const videoInfo = await ytdl.getInfo(selectedUrl);

        // Get the video thumbnail
        const thumbnailUrl = videoInfo.videoDetails.thumbnails[0].url;

const title = videoInfo.title || (videoInfo.videoDetails && videoInfo.videoDetails.title) || 'N/A';
const uploadDate = formatUploadDate(videoInfo.videoDetails.uploadDate) || 'N/A'; 
        // Construct caption with audio details
        const caption = `
┌┤   🏮 *Vɪʙʀᴀɴɪᴜᴍ-Pʟᴀʏᴇʀ*  🏮
│
┠ ⿻ *Tɪᴛʟᴇ:* ${title}
┠ ⿻ *Dᴜʀᴀᴛɪᴏɴ:* ${videoInfo.videoDetails.author.name || 'N/A'}
┠ ⿻ *Aᴜᴛʜᴏʀ:* ${videoInfo.videoDetails.lengthSeconds}s
┠ ⿻ *Sɪᴢᴇ:* ${videoInfo.videoDetails.viewCount.toLocaleString() || 'N/A'}
┠ ⿻ *Uᴘʟᴏᴀᴅ:* ${uploadDate}
╰──────────•∞•───⦿`;

        // Fetch audio stream directly
        const audioStream = ytdl(selectedUrl, { quality: 'highestaudio', filter: 'audioonly' });

        // Convert the stream to buffer for sending
        const audioBuffer = await streamToBuffer(audioStream);

        // Send the thumbnail as an image along with audio info
        await gss.sendMessage(m.chat, {
          image: {
            url: thumbnailUrl,
          },
          caption: caption,
        }, {
          quoted: m,
        });

        // Send the audio as a voice message
        await gss.sendMessage(m.chat, { audio: audioBuffer, mimetype: 'audio/mpeg' });
        await doReact("✅");
      } catch (error) {
        console.error('Error during audio playback:', error);
        return m.reply('*Uɴᴇxᴘᴇᴄᴛᴇᴅ ᴇʀʀᴏʀ ᴏᴄᴄᴜʀʀᴇᴅ ᴅᴜʀɪɴɢ ᴀᴜᴅɪᴏ ᴘʟᴀʏʙᴀᴄᴋ*');
      }
    } else {
      return m.reply('*Iɴᴠᴀʟɪᴅ sᴜʙ-ᴏᴘᴛɪᴏɴ. Pʟᴇᴀsᴇ ᴄʜᴏᴏsᴇ ᴀ ᴠᴀʟɪᴅ sᴜʙ-ᴏᴘᴛɪᴏɴ*');
    }
  } else {
    return m.reply('*Iɴᴠᴀʟɪᴅ ᴜɴɪϙᴜᴇ ᴋᴇʏ...Pʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴀ ᴠᴀʟɪᴅ ᴜɴɪϙᴜᴇ ᴋᴇʏ*');
  }
  break;
}



case 'ᥲᥙdιodoᥴᥙmᥱnt': {
  if (!text) {
	    return m.reply('*ex: audiodocument moonlight*');
  }

  const match = text.match(/(\d+)\.(\d+)/);

  if (!match) {
    return m.reply('*Iɴᴠᴀʟɪᴅ ғᴏʀᴍᴀᴛ. Pʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴀ ᴠᴀʟɪᴅ ᴜɴɪϙᴜᴇ ᴋᴇʏ (ᴇ.ɢ., 1.1)*');
  }

  const optionIndex = parseInt(match[1]);
  const subOption = parseInt(match[2]);

  const uniqueKey = `yts_${optionIndex}`;

  if (videoSearchResults.has(uniqueKey)) {
    const selectedUrl = videoSearchResults.get(uniqueKey)[`${optionIndex}.${subOption}`];

    if (selectedUrl) {
      try {
        // Fetch video info for additional details
        const videoInfo = await ytdl.getInfo(selectedUrl);

        // Get the video thumbnail
        const thumbnailUrl = videoInfo.videoDetails.thumbnails[0].url;

const title = videoInfo.title || (videoInfo.videoDetails && videoInfo.videoDetails.title) || 'N/A';
const uploadDate = formatUploadDate(videoInfo.videoDetails.uploadDate) || 'N/A'; 
        // Construct caption with audio details
        const caption = `
┌┤   🏮 *Vɪʙʀᴀɴɪᴜᴍ-Pʟᴀʏᴇʀ*  🏮
│
┠ ⿻ *Tɪᴛʟᴇ:* ${title}
┠ ⿻ *Dᴜʀᴀᴛɪᴏɴ:* ${videoInfo.videoDetails.author.name || 'N/A'}
┠ ⿻ *Aᴜᴛʜᴏʀ:* ${videoInfo.videoDetails.lengthSeconds}s
┠ ⿻ *Sɪᴢᴇ:* ${videoInfo.videoDetails.viewCount.toLocaleString() || 'N/A'}
┠ ⿻ *Uᴘʟᴏᴀᴅ:* ${uploadDate}
╰──────────•∞•───⦿`;

        // Fetch audio stream directly
        const audioStream = ytdl(selectedUrl, { quality: 'highestaudio', filter: 'audioonly' });

        // Convert the stream to buffer for sending
        const audioBuffer = await streamToBuffer(audioStream);

        // Send the thumbnail as an image along with audio info
        await gss.sendMessage(m.chat, {
          image: {
            url: thumbnailUrl,
          },
          caption: caption,
        }, {
          quoted: m,
        });

        // Send the audio as a voice message
        await gss.sendMessage(m.chat, {
  document: audioBuffer,
  mimetype: 'audio/mpeg',
  fileName: `${title}.mp3`,
}, { quoted: m });
await doReact("✅");
      } catch (error) {
        console.error('Error during audio playback:', error);
        return m.reply('*Uɴᴇxᴘᴇᴄᴛᴇᴅ ᴇʀʀᴏʀ ᴏᴄᴄᴜʀʀᴇᴅ ᴅᴜʀɪɴɢ ᴀᴜᴅɪᴏ ᴘʟᴀʏʙᴀᴄᴋ.*');
      }
    } else {
      return m.reply('*Iɴᴠᴀʟɪᴅ sᴜʙ-ᴏᴘᴛɪᴏɴ. Pʟᴇᴀsᴇ ᴄʜᴏᴏsᴇ ᴀ ᴠᴀʟɪᴅ sᴜʙ-ᴏᴘᴛɪᴏɴ.*');
    }
  } else {
    return m.reply('*Iɴᴠᴀʟɪᴅ ᴜɴɪϙᴜᴇ ᴋᴇʏ, Pʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴀ ᴠᴀʟɪᴅ ᴜɴɪϙᴜᴇ ᴋᴇʏ*');
  }
  break;
}



case 'vιdᥱo': {
  if (!text) {
    return m.reply('*Pʟᴇᴀsᴇ sᴘᴇᴄɪғʏ ᴛʜᴇ ᴜɴɪϙᴜᴇ ᴋᴇʏ ғᴏʀ ᴠɪᴅᴇᴏ ᴘʟᴀʏʙᴀᴄᴋ. Usᴇ ᴛʜᴇ ғᴏʀᴍᴀᴛ: ᴠɪᴅᴇᴏ [ᴜɴɪϙᴜᴇ-ᴋᴇʏ]*');
  }

  const match = text.match(/(\d+)\.(\d+)/);

  if (!match) {
    return m.reply('*Iɴᴠᴀʟɪᴅ ғᴏʀᴍᴀᴛ. Pʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴀ ᴠᴀʟɪᴅ ᴜɴɪϙᴜᴇ ᴋᴇʏ (ᴇ.ɢ., 1.1)*');
  }

  const optionIndex = parseInt(match[1]);
  const subOption = parseInt(match[2]);

  const uniqueKey = `yts_${optionIndex}`;

  if (videoSearchResults.has(uniqueKey)) {
    const selectedUrl = videoSearchResults.get(uniqueKey)[`${optionIndex}.${subOption}`];

    if (selectedUrl) {
      try {
        // Fetch video info for additional details
        const videoInfo = await ytdl.getInfo(selectedUrl);

        // Get the video thumbnail
        const thumbnailUrl = videoInfo.videoDetails.thumbnails[0].url;

        // Construct caption with video details
        const title = videoInfo.title || (videoInfo.videoDetails && videoInfo.videoDetails.title) || 'N/A';
        const uploadDate = formatUploadDate(videoInfo.videoDetails.uploadDate) || 'N/A'; 

const captionText = `
┌┤   🏮 *Vɪʙʀᴀɴɪᴜᴍ-Pʟᴀʏᴇʀ*  🏮
│
┠ ⿻ *Tɪᴛʟᴇ:* ${title}
┠ ⿻ *Dᴜʀᴀᴛɪᴏɴ:* ${videoInfo.videoDetails.author.name || 'N/A'}
┠ ⿻ *Aᴜᴛʜᴏʀ:* ${videoInfo.videoDetails.lengthSeconds}s
┠ ⿻ *Sɪᴢᴇ:* ${videoInfo.videoDetails.viewCount.toLocaleString() || 'N/A'}
┠ ⿻ *Uᴘʟᴏᴀᴅ:* ${uploadDate}
╰──────────•∞•───⦿`;


        // Download audio and video together using 'videoandaudio' filter
        const videoAndAudioStream = ytdl(selectedUrl, { quality: 'highest', filter: 'audioandvideo' });

        // Convert the stream to buffer
        const videoAndAudioBuffer = await streamToBuffer(videoAndAudioStream);

        // Send the video and audio as a media message with caption
        await gss.sendMessage(m.chat, {
          video: videoAndAudioBuffer,
          mimetype: 'video/mp4',
          caption: captionText,
        }, { quoted: m });
        
      } catch (error) {
        console.error('Error during video playback:', error);
        return m.reply('*Uɴᴇxᴘᴇᴄᴛᴇᴅ ᴇʀʀᴏʀ ᴏᴄᴄᴜʀʀᴇᴅ ᴅᴜʀɪɴɢ ᴠɪᴅᴇᴏ ᴘʟᴀʏʙᴀᴄᴋ!*');
      }
    } else {
      return m.reply('*Iɴᴠᴀʟɪᴅ sᴜʙ-ᴏᴘᴛɪᴏɴ. Pʟᴇᴀsᴇ ᴄʜᴏᴏsᴇ ᴀ ᴠᴀʟɪᴅ sᴜʙ-ᴏᴘᴛɪᴏɴ.*');
    }
  } else {
    return m.reply('*Iɴᴠᴀʟɪᴅ ᴜɴɪϙᴜᴇ ᴋᴇʏ, Pʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴀ ᴠᴀʟɪᴅ ᴜɴɪϙᴜᴇ ᴋᴇʏ.*');
  }
  break;
}

case 'vιdᥱodoᥴᥙmᥱnt': {
  if (!text) {
    return m.reply('*Pʟᴇᴀsᴇ sᴘᴇᴄɪғʏ ᴛʜᴇ ᴜɴɪϙᴜᴇ ᴋᴇʏ ғᴏʀ ᴠɪᴅᴇᴏ ᴘʟᴀʏʙᴀᴄᴋ. Usᴇ ᴛʜᴇ ғᴏʀᴍᴀᴛ: ᴠɪᴅᴇᴏ [ᴜɴɪϙᴜᴇ-ᴋᴇʏ]*');
  }

  const match = text.match(/(\d+)\.(\d+)/);

  if (!match) {
    return m.reply('*Iɴᴠᴀʟɪᴅ ғᴏʀᴍᴀᴛ. Pʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴀ ᴠᴀʟɪᴅ ᴜɴɪϙᴜᴇ ᴋᴇʏ (ᴇ.ɢ., 1.1)*');
  }

  const optionIndex = parseInt(match[1]);
  const subOption = parseInt(match[2]);

  const uniqueKey = `yts_${optionIndex}`;

  if (videoSearchResults.has(uniqueKey)) {
    const selectedUrl = videoSearchResults.get(uniqueKey)[`${optionIndex}.${subOption}`];

    if (selectedUrl) {
      try {
        // Fetch video info for additional details
        const videoInfo = await ytdl.getInfo(selectedUrl);

        // Get the video thumbnail
        const thumbnailUrl = videoInfo.videoDetails.thumbnails[0].url;

        // Construct caption with video details
        const title = videoInfo.title || (videoInfo.videoDetails && videoInfo.videoDetails.title) || 'N/A';
        const uploadDate = formatUploadDate(videoInfo.videoDetails.uploadDate) || 'N/A'; 

const captionText = `
┌┤   🏮 *Vɪʙʀᴀɴɪᴜᴍ-Pʟᴀʏᴇʀ*  🏮
│
┠ ⿻ *Tɪᴛʟᴇ:* ${title}
┠ ⿻ *Dᴜʀᴀᴛɪᴏɴ:* ${videoInfo.videoDetails.author.name || 'N/A'}
┠ ⿻ *Aᴜᴛʜᴏʀ:* ${videoInfo.videoDetails.lengthSeconds}s
┠ ⿻ *Sɪᴢᴇ:* ${videoInfo.videoDetails.viewCount.toLocaleString() || 'N/A'}
┠ ⿻ *Uᴘʟᴏᴀᴅ:* ${uploadDate}
╰──────────•∞•───⦿`;


        // Download audio and video together using 'videoandaudio' filter
        const videoAndAudioStream = ytdl(selectedUrl, { quality: 'highest', filter: 'audioandvideo' });

        // Convert the stream to buffer
        const videoAndAudioBuffer = await streamToBuffer(videoAndAudioStream);

        // Send the video and audio as a media message with caption
        await gss.sendMessage(m.chat, {
  document: videoAndAudioBuffer,
  mimetype: 'video/mp4',
  fileName: `${title}.mp4`,
  caption: captionText,
}, { quoted: m });
      } catch (error) {
        console.error('Error during video playback:', error);
        return m.reply('*Uɴᴇxᴘᴇᴄᴛᴇᴅ ᴇʀʀᴏʀ ᴏᴄᴄᴜʀʀᴇᴅ ᴅᴜʀɪɴɢ ᴠɪᴅᴇᴏ ᴘʟᴀʏʙᴀᴄᴋ.*');
      }
    } else {
      return m.reply('*Iɴᴠᴀʟɪᴅ sᴜʙ-ᴏᴘᴛɪᴏɴ. Pʟᴇᴀsᴇ ᴄʜᴏᴏsᴇ ᴀ ᴠᴀʟɪᴅ sᴜʙ-ᴏᴘᴛɪᴏɴ.*');
    }
  } else {
    return m.reply('*Iɴᴠᴀʟɪᴅ ᴜɴɪϙᴜᴇ ᴋᴇʏ, Pʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴀ ᴠᴀʟɪᴅ ᴜɴɪϙᴜᴇ ᴋᴇʏ.*');
  }
  break;
}




case 'play': {
  if (!text) return m.reply('*Eɴᴛᴇʀ YᴏᴜTᴜʙᴇ Vɪᴅᴇᴏ Lɪɴᴋ ᴏʀ Sᴇᴀʀᴄʜ Qᴜᴇʀʏ!*');

  try {
    const searchResults = await yts(text);

    if (!searchResults.videos || searchResults.videos.length === 0) {
      return m.reply('*Nᴏ sᴇᴀʀᴄʜ ʀᴇsᴜʟᴛs ғᴏᴜɴᴅ*');
    }

    const resultsArray = searchResults.videos.slice(0, 5).map((result, index) => {
      const { url, title, duration, views, author, timestamp } = result;
      const uniqueKey = title.toLowerCase().replace(/\s/g, '_');
      videoSearchResults.set(`${m.chat}_${index}`, { uniqueKey, url, title, duration, views, author, timestamp });
      return { index, title, duration, views, author, timestamp };
    });

    // Reset the current poll index
    currentPollIndex = 0;

    // Add 'audio', 'video', and 'next' options to the poll
    const pollOptions = ['${prefix}ＡＵＤＩＯ', '${prefix}ＶＩＤＥＯ', '${prefix}ＮＥＸＴ'];

    gss.sendPoll(
      m.chat,
      `Choose an option:\n\n"${resultsArray[currentPollIndex].title}":\nDuration: ${resultsArray[currentPollIndex].duration}\n Views: ${resultsArray[currentPollIndex].views}\n Author: ${resultsArray[currentPollIndex].author}\n Upload Date: ${resultsArray[currentPollIndex].timestamp}`,
      pollOptions
    );
  } catch (error) {
    console.error('Error during play:', error);
    m.reply('*Uɴᴇxᴘᴇᴄᴛᴇᴅ ᴇʀʀᴏʀ ᴏᴄᴄᴜʀʀᴇᴅ!*');
  }

  break;
}

case '𝗔𝗨𝗗𝗜𝗢':
case '𝗩𝗜𝗗𝗘𝗢':
case '𝗡𝗘𝗫𝗧': {
  const pollOption = command.toLowerCase();

  if (!videoSearchResults.has(`${m.chat}_${currentPollIndex}`)) {
    return m.reply('*Nᴏ sᴇᴀʀᴄʜ ʀᴇsᴜʟᴛs ғᴏᴜɴᴅ*');
  }

  const currentResult = videoSearchResults.get(`${m.chat}_${currentPollIndex}`);

  switch (pollOption) {
    
    case 'ＡＵＤＩＯ': {
  try {
    // Audio download with audio only
    const audioStream = ytdl(currentResult.url, { quality: 'highestaudio', filter: 'audioonly' });
    const audioBuffer = await new Promise((resolve, reject) => {
      const chunks = [];
      audioStream.on('data', (chunk) => chunks.push(chunk));
      audioStream.on('end', () => resolve(Buffer.concat(chunks)));
      audioStream.on('error', (error) => reject(error));
    });

    await gss.sendMessage(m.chat, { audio: audioBuffer, mimetype: 'audio/mp4', fileName: `${currentResult.title}.mp3` }, { quoted: m });
  } catch (error) {
    console.error(`Error during audio download:`, error);
    m.reply('Unexpected error occurred.');
  }
  break;
}

case 'ＶＩＤＥＯ': {
  try {
    // Video download with audio and video
    const videoStream = ytdl(currentResult.url, { quality: 'highest', filter: 'audioandvideo' });
    const videoBuffer = await new Promise((resolve, reject) => {
      const chunks = [];
      videoStream.on('data', (chunk) => chunks.push(chunk));
      videoStream.on('end', () => resolve(Buffer.concat(chunks)));
      videoStream.on('error', (error) => reject(error));
    });

    await gss.sendMessage(m.chat, { video: videoBuffer, mimetype: 'video/mp4', caption: `Downloading video: ${currentResult.title}` }, { quoted: m });
  } catch (error) {
    console.error(`Error during video download:`, error);
    m.reply('Unexpected error occurred.');
  }
  break;
}


    case 'ＮＥＸＴ': {
      // Increment the current poll index for the next search result
      currentPollIndex++;

      // Check if there are more search results
      if (videoSearchResults.has(`${m.chat}_${currentPollIndex}`)) {
        const nextResult = videoSearchResults.get(`${m.chat}_${currentPollIndex}`);

        // Add 'audio', 'video', and 'next' options to the poll
        const pollOptions = ['${prefix}ＡＵＤＩＯ', '${prefix}ＶＩＤＥＯ', '${prefix}ＮＥＸＴ'];

        await gss.sendPoll(
          m.chat,
          `Choose an option:\n\n"${nextResult.title}":\nDuration: ${nextResult.duration}\n Views: ${nextResult.views}\n Author: ${nextResult.author}\n Upload Date: ${nextResult.timestamp}`,
          pollOptions
        );
      } else {
        m.reply('*Nᴏ ᴍᴏʀᴇ sᴇᴀʀᴄʜ ʀᴇsᴜʟᴛs ᴀᴠᴀɪʟᴀʙʟᴇ..!*');
      }

      break;
    }

    default:
      m.reply('*Iɴᴠᴀʟɪᴅ ᴏᴘᴛɪᴏɴ..!*'');
      break;
  }

  break;
}

  case 'restart':
                if (!isCreator) return m.reply(mess.owner)
                m.reply('*Rᴇsᴛᴀʀᴛɪɴɢ.....*')
                exec('pm2 restart all')
            break



async function instaDownload(url) {
    try {
        const apiUrl = `https://vihangayt.me/download/instagram?url=${encodeURIComponent(url)}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`API Error (${response.status}): ${errorMessage}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error(`Error with API: ${error.message}`);
        throw error;
    }
}

async function downloadInstagramMedia(url) {
    try {
        const result = await instaDownload(url);

        console.log('API Response:', result);

        if (result.status && result.data && result.data.data && result.data.data.length > 0) {
            const mediaType = result.data.data[0].type;
            const mediaUrl = result.data.data[0].url;

            if (mediaType && mediaUrl) {
                return { type: mediaType, url: mediaUrl };
            } else {
                throw new Error('Media type or URL not found in API response');
            }
        } else {
            throw new Error('Invalid or unexpected API response');
        }
    } catch (error) {
        console.error('Error downloading Instagram media:', error.message);
        throw error;
    }
}




async function downloadAndSendMedia(m, text, isDocument) {
    const url = text;

    if (!url) {
        return m.reply(`Wʜᴇʀᴇ ɪs ᴛʜᴇ ʟɪɴᴋ?\n\nExᴀᴍᴘʟᴇ: ${prefix + command} https://www.instagram.com/p/CK0tLXyAzEI`);
    }

    m.reply(mess.wait);

    try {
        const media = await downloadInstagramMedia(url);

        const response = await fetch(media.url);
        const bufferArray = await response.arrayBuffer();
        const fileBuffer = Buffer.from(bufferArray);

        const fileName = `instagram_media.${media.type === 'image' ? 'jpg' : 'mp4'}`;

        // Send the media using gss.sendMessage with the saved file
        if (isDocument) {
            await gss.sendMessage(m.chat, { document: fileBuffer, mimetype: `video/mp4`, fileName, caption: 'Dᴏᴡɴʟᴏᴀᴅᴇᴅ ᴠɪᴀ Vɪʙʀᴀɴɪᴜᴍ-Bᴏᴛ' }, { quoted: m });
        } else {
            if (media.type === 'image') {
                await gss.sendMessage(m.chat, { image: fileBuffer, mimetype: 'image/jpeg', fileName, caption: 'Dᴏᴡɴʟᴏᴀᴅᴇᴅ ᴠɪᴀ Vɪʙʀᴀɴɪᴜᴍ-Bᴏᴛ' }, { quoted: m });
            } else if (media.type === 'video') {
                await gss.sendMessage(m.chat, { video: fileBuffer, mimetype: 'video/mp4', fileName, caption: 'Dᴏᴡɴʟᴏᴀᴅᴇᴅ ᴠɪᴀ Vɪʙʀᴀɴɪᴜᴍ-Bᴏᴛ' }, { quoted: m });
            } else {
                throw new Error('Unsupported media type');
            }
        }
    } catch (error) {
        console.error('Error while processing Instagram media:', error);
        return m.reply(`Aɴ ᴇʀʀᴏʀ ᴏᴄᴄᴜʀʀᴇᴅ: ${error.message}`);
    }
}

// ...

// Handle Instagram media download
case 'igdl':
case 'insta':
case 'ig':
case 'instagram':
    await downloadAndSendMedia(m, text, false);
    break;

// Handle Instagram media download as document
case 'igdldoc':
case 'instadoc':
case 'igdoc':
case 'instagramdoc':
    await downloadAndSendMedia(m, text, true);
    break;


case 'toanime':
  if (!quoted) return m.reply(`Wʜᴇʀᴇ ɪs ᴛʜᴇ ᴘɪᴄᴛᴜʀᴇ?`);
  if (!/image/.test(mime)) return m.reply(`Sᴇɴᴅ/Rᴇᴘʟʏ Pʜᴏᴛᴏs Wɪᴛʜ Cᴀᴘᴛɪᴏɴs ${prefix + command}`);

  try {
    // Download the image
    const dataaa = await quoted.download();
    if (!dataaa) {
      console.error('No files passed during download');
      throw new Error('No files passed');
    }

    // Upload the image
    try {
      const image = await uploadImage(dataaa);
      console.log('Image uploaded successfully:', image);

      // Generate anime version using Lolhuman API
      try {
        const anime = `https://api.lolhuman.xyz/api/imagetoanime?apikey=GataDios&img=${image}`;
        await gss.sendFile(m.chat, anime, 'error.jpg', null, m);
      } catch (i) {
        // If Lolhuman API fails, try Caliph API as a fallback
        try {
          const anime3 = `https://api.caliph.biz.id/api/animeai?img=${image}&apikey=caliphkey`;
          await gss.sendFile(m.chat, anime3, 'error.jpg', null, m);
        } catch (e) {
          // If both APIs fail, throw an error
          console.error('Error generating anime version:', e);
          throw '*[❗] Error occurred. Unable to generate anime version of the image.*';
        }
      }
    } catch (uploadError) {
      console.error('Error uploading image:', uploadError);
      throw `*[❗] Error uploading image: ${uploadError.message || uploadError}.*`;
    }
  } catch (downloadError) {
    console.error('Error downloading image:', downloadError);
    throw `*[❗] Error downloading image: ${downloadError.message || downloadError}.*`;
  }
  break;






case 'anime':
case 'girl':
case 'animegirl':
case 'sexy':
case 'sexygirl':
case 'sexyanime':
  const maxImageCount = 10;
  const requestedCount = Math.min(parseInt(args[0]) || 1, maxImageCount);
  const imageUrl = requestedCount === 1 ?
    'https://supreme-catfish-goutammallick516.koyeb.app/randomgirl' :
    `https://supreme-catfish-goutammallick516.koyeb.app/randomgirl${text}`;
  const requestTimeout = 10000;

  try {
    gss.sendMessage(m.chat, {
      image: {
        url: imageUrl,
      },
      caption: text,
    }, {
      quoted: m,
    });
  } catch (error) {
    console.error("Error sending random girl image:", error);
    m.reply('*Fᴀɪʟᴇᴅ ᴛᴏ ғᴇᴛᴄʜ ᴏʀ sᴇɴᴅ ᴛʜᴇ ɪᴍᴀɢᴇ. Pʟᴇᴀsᴇ ᴛʀʏ ᴀɢᴀɪɴ ʟᴀᴛᴇʀ*');
  }
  break;


case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': 
case 'kiss': case 'bite': case 'yeet': case 'bully': case 'bonk':
case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': 
case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': 
case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': 
case 'shinobu': case 'handhold': {
axios.get(`https://api.waifu.pics/sfw/${isCommand}`)
.then(({data}) => {
gss.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break



case 'true':
case 'truecaller':
  try {
    if (!text) {
      // Reply when no phone number is provided
    return  m.reply ('*Pʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴀ ᴘʜᴏɴᴇ ɴᴜᴍʙᴇʀ ᴡɪᴛʜᴏᴜᴛ + *');
      break;
    }

    const installationId = 'a1i0g--k3toNiVP-9swCenahQhhokTiqfXRFw2LossLOsZLDh3P-fLD0b75S8iF7';
    const apiUrl = `https://sid-bhai.vercel.app/api/truecaller?phone=${encodeURIComponent(text)}&id=${installationId}`;

    let response = await axios.get(apiUrl);
    console.log(response);
    let json = response.data;

    const { name, alternateName, addresses, email, countryDetails } = json;

    let info = `╭––『 *Pʜᴏɴᴇ-Dᴇᴛᴀɪʟ* 』\n`;
    info += `┆ 🔰 *Nᴀᴍᴇ:* ${name}\n`;

    if (addresses && addresses.length > 0) {
      info += `┆ 🔰 *Aᴅᴅʀᴇss:* ${addresses[0].city}, ${addresses[0].countryCode}\n`;
      info += `┆ 🔰 *Tɪᴍᴇᴢᴏɴᴇ:* ${addresses[0].timeZone}\n`;
      info += `┆ 🔰 *Pɪɴ-Cᴏᴅᴇ:* ${addresses[0].zipCode}\n`;
      info += `┆ 🔰 *Sᴛʀᴇᴇᴛ* ${addresses[0].street}\n`;
    }

    info += `┆ 🔰 *Eᴍᴀɪʟ:* ${email}\n`;
    info += `╰–––––––––––––––༓\n`;

    if (countryDetails) {
      info += `╭––『 *Cᴏᴜɴᴛʀʏ-Dᴇᴛᴀɪʟs* 』\n`;
      info += `┆ 🔰 *Nᴀᴍᴇ:* ${countryDetails.name}\n`;
      info += `┆ 🔰 *Nᴀᴛɪᴠᴇ:* ${countryDetails.native}\n`;
      info += `┆ 🔰 *Pʜᴏɴᴇ-ᴄᴏᴅᴇ:* +${countryDetails.phone[0]}\n`;
      info += `┆ 🔰 *Cᴏɴᴛɪɴᴇɴᴛ:* ${countryDetails.continent}\n`;
      info += `┆ 🔰 *Cᴀᴘɪᴛᴀʟ:* ${countryDetails.capital}\n`;
      info += `┆ 🔰 *Cᴜʀʀᴇɴᴄʏ:* ${countryDetails.currency.join(', ')}\n`;
      info += `┆ 🔰 *Lᴀɴɢᴜᴀɢᴇs:* ${countryDetails.languages.join(', ')}\n`;
      info += `┆ 🔰 *Fʟᴀɢ:* ${countryDetails.flag}\n`;
      info += `╰–––––––––––––––༓`;
    }

    await gss.sendMessage(m.chat, {
      text: info,
    }, {
      quoted: m,
    });

  } catch (error) {
    console.error(error);
  }
  break;


case "xnxxdl": {
	if (!text) return m.reply(`Enter Url`)
        if (!text.includes('xnxx.com')) return m.reply(`Enter an xnxx link`)
        const fg = require('api-dylux')
            let xn = await fg.xnxxdl(text)
gss.sendMessage(m.chat, { caption: `  *XNXX DL*
        
✍ *Title:* ${xn.title}
⌛ *Duration:* ${xn.duration}
📽 *Visual Quality:* ${xn.quality}`, video: {url: xn.url_dl} }, { quoted: m })
}
break


case 'xnxxsearch': {
	if (!text) return m.reply(`Enter Query`)
	const fg = require('api-dylux')
	let res = await fg.xnxxSearch(text)
            let ff = res.result.map((v, i) => `${i + 1}┃ *Title* : ${v.title}\n*Link:* ${v.link}\n`).join('\n') 
              if (res.status) m.reply(ff)
              }
              break
              


case 'qc':
    try {
        if (!text) {
            return m.reply('*Pʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ ғᴏʀ ᴛʜᴇ ϙᴜᴏᴛᴇ!*');
        }

        if (text.length > 30) {
            return m.reply('*Pʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ ᴡɪᴛʜ ᴀ ᴍᴀxɪᴍᴜᴍ ᴏғ 30 ᴄʜᴀʀᴀᴄᴛᴇʀ!*');
        }

        const settings = global.db.setting;
        let profilePicture;

        try {
            profilePicture = await gss.profilePictureUrl(m.quoted ? m.quoted.sender : m.sender, 'image');
        } catch {
            profilePicture = 'https://srv.neoxr.tk/files/z8hI5T.jpg';
        }

        const quoteObject = {
            "type": "quote",
            "format": "png",
            "backgroundColor": "#FFFFFF",
            "width": 512,
            "height": 768,
            "scale": 2,
            "messages": [{
                "entities": [],
                "avatar": true,
                "from": {
                    "id": 1,
                    "name": m.quoted ? global.db.users.find(v => v.jid == m.quoted.sender).name : m.pushName,
                    "photo": {
                        "url": profilePicture
                    }
                },
                "text": text,
                "replyMessage": {}
            }]
        };

        try {
            const response = await axios.post('https://bot.lyo.su/quote/generate', quoteObject, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const buffer = Buffer.from(response.data.result.image, 'base64');

            gss.sendImageAsSticker(m.chat, buffer, m, {
                packname: global.packname,
                author: global.author
            });
        } catch (error) {
            console.error('Error during HTTP request:', error);
            return m.reply('*Eʀʀᴏʀ ɢᴇɴᴇʀᴀᴛɪɴɢ sᴛɪᴄᴋᴇʀ. Pʟᴇᴀsᴇ ᴛʀʏ ᴀɢᴀɪɴ ʟᴀᴛᴇʀ.*');
        }

    } catch (error) {
        console.error('Unexpected error in sticker case:', error);
        // Handle any other unexpected errors
    }
    break;




case 'apk': case 'app': case 'apkdl': {
  if (!text) throw `I need an apk name for download`;

  const getRandomName = (ext) => `${Math.floor(Math.random() * 10000)}${ext}`;
  const randomName = getRandomName(".apk");
  const filePath = `./${randomName}`;

  let searchResults = await search(text);

  if (!searchResults.length) return m.reply("*E-Aᴘᴘ ɴᴏᴛ ғᴏᴜɴᴅ!*");

  const data = await download(searchResults[0].id);

  // No need to check file size, proceed with download

  const url = data.dllink;
  const iconUrl = data.icon;

  let info = `╭───〈 *${data.name}* 〉───●
│ 
│▸ *App Name:* ${data.name} 
│▸ *App Id:* ${data.package}
│▸ *App Size:* ${data.size}
│▸ *App Version:* ${data.version}
│
╰─────────────···▸▸▸`;


  // Download icon
  const iconPath = `./${getRandomName(".png")}`;
  await axios.get(iconUrl, { responseType: 'stream' })
    .then(response => {
      const writer = fs.createWriteStream(iconPath);
      response.data.pipe(writer);

      return new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
      });
    });

  const iconMessage = {
    image: fs.readFileSync(iconPath),
    caption: info
  };

  // Send icon with info
  await gss.sendMessage(m.chat, iconMessage, { quoted: m });

  // Delete temporary icon file
  fs.unlink(iconPath, (err) => {
    if (err) {
      console.error('Error deleting icon file:', err);
    } else {
      console.log('Icon file deleted successfully');
    }
  });

  // Download and send APK
  axios.get(url, { responseType: 'stream' })
    .then(response => {
      const writer = fs.createWriteStream(filePath);
      response.data.pipe(writer);

      return new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
      });
    }).then(() => {
      const apkMessage = {
        document: fs.readFileSync(filePath),
        mimetype: 'application/vnd.android.package-archive',
        fileName: `${data.name}.apk`
      };

      gss.sendMessage(m.chat, apkMessage, { quoted: m });

      // Delete temporary APK file
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error('Error deleting APK file:', err);
        } else {
          console.log('APK file deleted successfully');
        }
      });
    }).catch(error => {
      fs.unlink(filePath);
      return m.reply('*Apk not Found, Sorry, try with apk2 cmd*');
    });

  break;
}



case 'mediafire': {
    // Check if the command has arguments
    if (args.length === 0) {
        return m.reply(`Wʜᴇʀᴇ ɪs ᴛʜᴇ ʟɪɴᴋ? \n\nExample: ${prefix + command} https://www.mediafire.com/file/96mscj81p92na3r/images+(35).jpeg/file`);
    }

    // Check if the argument is a valid MediaFire link
    if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) {
        return m.reply(`The link you provided is invalid`);
    }

    // Import the mediafireDl function from the mediafire.js file
    const { mediafireDl } = require('./lib/mediafire.js');

    // Reply with a "Please wait..." message
    await m.reply(`Please wait...`);

    try {
        // Call the mediafireDl function to get details about the file
        const fileInfo = await mediafireDl(text);

        // Check if the file size is too big
        if (fileInfo[0].size.split('MB')[0] >= 100) {
            return m.reply('Oᴏᴘs, ᴛʜᴇ ғɪʟᴇ ɪs ᴛᴏᴏ ʙɪɢ..');
        }

        // Send the file to the user with a caption
        gss.sendMessage(
            m.chat,
            {
                document: {
                    url: fileInfo[0].link,
                },
                fileName: fileInfo[0].nama,
                mimetype: fileInfo[0].mime,
                caption: `E-Fɪʟᴇ ᴅᴏᴡɴʟᴏᴀᴅᴇᴅ...!!: ${fileInfo[0].nama}/n@Vɪʙʀᴀɴɪᴜᴍ-Bᴏᴛ`,  // Add your desired caption
            },
            { quoted: m }
        );
    } catch (error) {
        // Handle any errors that may occur during the process
        console.error('Error in mediafire download:', error);
        m.reply(`An error occurred: ${error.message}`);
    }

    break;
}


   

case 'buypremium':
            case 'premiumuser': {
                let teks = `Hɪ!  ${pushname}👋\n Wᴀɴᴛ ᴛᴏ Bᴜʏ Pʀᴇᴍɪᴜᴍ?`
                await gss.sendMessage(m.chat, {
                    text: teks,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: false,
                            title: 'V-Sᴜʙsᴄʀɪᴘᴛɪᴏɴ',
                            body: `$0.99/Mᴏɴᴛʜ`,
                            thumbnailUrl: 'https://i.ibb.co/vh4W2N2/images.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: false
                        }
                    }
                }, {
                    quoted: m
                })
            }
            break
            
            


case 'invite': case 'add': {
  if (!m.isGroup) return m.reply('ʏᴏᴜ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ɪɴ ɢʀᴏᴜᴘ ❌');
if (!text) return m.reply(`*Eɴᴛᴇʀ ᴛʜᴇ ɴᴜᴍʙᴇʀ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ ɪɴᴠɪᴛᴇ ᴛᴏ ᴛʜᴇ ɢʀᴏᴜᴘ*\n\nExample :\n*${prefix + command}* 8801694206942`)
if (text.includes('+')) return m.reply(`Enter the number together without *+*`)
if (isNaN(text)) return m.reply(`Enter only the numbers plus your country code without spaces`)
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await gss.groupInviteCode(group)
      await gss.sendMessage(text+'@s.whatsapp.net', {text: `≡ *GROUP INVITATION*\n\nA user invites you to join this group \n\n${link}`, mentions: [m.sender]})
        m.reply(` An invite link is sent to the user`) 
}
break


    


case 'fb': case 'fbdl': case 'facebook': {
    if (!args[0]) {
        throw ` Please send the link of a Facebook video\n\nEXAMPLE :\n *${prefix + command}* https://fb.watch/7B5KBCgdO3`;
    }

    const urlRegex = /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com|fb\.watch)\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
    if (!urlRegex.test(args[0])) {
        throw '⚠️ PLEASE GIVE A VALID URL.';
    }
     await m.reply(`Please wait...`);
    try {
        const result = await fg.fbdl(args[0]);
        const tex = `
  *Video Details* 
📽️ *Title*: ${result.title}
`;


        const response = await fetch(result.videoUrl);
        const arrayBuffer = await response.arrayBuffer();
        const videoBuffer = Buffer.from(arrayBuffer);

        // Save the videoBuffer to a temporary file
        const randomName = `temp_${Math.floor(Math.random() * 10000)}.mp4`;
        fs.writeFileSync(`./${randomName}`, videoBuffer);

        // Send the video using client.sendMessage
        await gss.sendMessage(
            m.chat,
            {
                video: fs.readFileSync(`./${randomName}`),
                caption: tex,
            },
            { quoted: m }
        );

        // Delete the temporary file
        fs.unlinkSync(`./${randomName}`);
    } catch (error) {
        console.log(error);
        m.reply('⚠️ An error occurred while processing the request. Please try again later.');
    }

    break;
}
  
case 'instastalk': case 'igs': {
if (!args[0]) return m.reply(`Enter Instagram Username\n\nExample: ${prefix + command} sla.sher_`)

const igs = require('api-dylux')
await m.reply(`Please wait...`);
    try {
    let res = await igs.igStalk(args[0])
    let te = `
┌──「 *Information* 
▢ *🔖Name:* ${res.name} 
▢ *🔖Username:* ${res.username}
▢ *👥Follower:* ${res.followersH}
▢ *🫂Following:* ${res.followingH}
▢ *📌Bio:* ${res.description}
▢ *🏝️Posts:* ${res.postsH}
▢ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}`
     await gss.sendMessage(m.chat, {image: { url: res.profilePic }, caption: te }, {quoted: m})
      } catch {
        m.reply(`Make sure the username comes from *Instagram*`)
      }
}
break;

 case 'gitclone':
  if (!args[0]) return m.reply(`Where is the link?\nExample :\n${prefix}${command} https://github.com/V-E-N-O-X/Vibranium-Bot`)
  if (!isUrl(args[0]) && !args[0].includes('github.com')) return m.reply(`Link invalid!!`)
  let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
  let [, user, repo] = args[0].match(regex1) || []
  repo = repo.replace(/.git$/, '')
  let gitUrl = `https://api.github.com/repos/${user}/${repo}/zipball`
  let filename = (await fetch(gitUrl, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
  gss.sendMessage(m.chat, { document: { url: gitUrl }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
  break;




case 'google': {
  if (!text) throw `Example : ${prefix + command} fatih arridho`;
  let google = require('google-it');
  google({ 'query': text }).then(res => {
    let teks = `Google Search From : ${text}\n\n`;
    for (let g of res) {
      teks += `⭔ *Title* : ${g.title}\n`;
      teks += `⭔ *Description* : ${g.snippet}\n`;
      teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`;
    }
    m.reply(teks);
  });
}
break;

case 'gimage': {
  if (!text) throw `Example : ${prefix + command} kaori cicak`;
  let gis = require('g-i-s');
  gis(text, async (error, result) => {
    n = result;
    images = n[Math.floor(Math.random() * n.length)].url;
    let Message = {
      image: { url: images },
      caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
    };
    gss.sendMessage(m.chat, Message, { quoted: m });
  });
}
break;




case 'sticker': case 's': case 'stickergif': case 'sgif': {
  if (/image/.test(mime)) {
    m.reply(mess.wait);
    let media = await gss.downloadMediaMessage(qmsg);
    let encmedia = await gss.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author });
    await fs.unlinkSync(encmedia);
  } else if (/video/.test(mime)) {
    m.reply(mess.wait);
    if (qmsg.seconds > 11) return m.reply('*Mᴀxɪᴍᴜᴍ ᴅᴜʀᴀᴛɪᴏɴ ɪs 10 sᴇᴄᴏɴᴅs!*');
    let media = await gss.downloadMediaMessage(qmsg);
    let encmedia = await gss.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author });
    await fs.unlinkSync(encmedia);
  } else {
    m.reply(`Sᴇɴᴅ/ʀᴇᴘʟʏ ᴡɪᴛʜ ᴀɴ ɪᴍᴀɢᴇ/ᴠɪᴅᴇᴏ/ɢɪғ ᴡɪᴛʜ ᴄᴀᴘᴛɪᴏɴ  ${prefix + command}\nVideo/Gif duration 1-9 seconds`);
  }
}
break;

case 'pinterest': {
  m.reply(mess.wait);
  let { pinterest } = require('./lib/scraper');
  anu = await pinterest(text);
  result = anu[Math.floor(Math.random() * anu.length)];
  gss.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : ' + result }, { quoted: m });
}
break;


case 'wallpaper': {
  if (!text) throw 'Enter Query Title';
  let { wallpaper } = require('./lib/scraper');
  anu = await wallpaper(text);
  result = anu[Math.floor(Math.random() * anu.length)];
  let Message = {
    image: { url: result.image[0] },
    caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
  };
  gss.sendMessage(m.chat, Message, { quoted: m });
}
break;

case 'wikimedia': {
  if (!text) throw 'Enter Query Title';
  let { wikimedia } = require('./lib/scraper');
  anu = await wikimedia(text);
  result = anu[Math.floor(Math.random() * anu.length)];
  let Message = {
    image: { url: result.image },
    caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
  };
  gss.sendMessage(m.chat, Message, { quoted: m });
}
break;

        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		gss.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
	    
	    
		      case 'mode': {
    if (!isCreator) throw mess.owner;

    const validModes = ['public', 'self', 'onlygroup', 'onlypc'];

    if (args.length < 1 || !validModes.includes(args[0].toLowerCase())) {
        gss.sendPoll(m.chat, "*Cʜᴏᴏsᴇ Bᴏᴛ Mᴏᴅᴇ:*", validModes.map(mode => `${prefix}mode ${mode}`));
    } else {
        const selectedMode = args[0].toLowerCase();

        if (selectedMode === 'public' || selectedMode === 'self') {
            gss[selectedMode] = true;
            m.reply(`Bᴏᴛ ᴍᴏᴅᴇ ᴄʜᴀɴɢᴇᴅ ᴛᴏ ${selectedMode}. ${mess.success}`);
        } else if (selectedMode === 'onlygroup' || selectedMode === 'onlypc') {
            global[selectedMode] = true;
            m.reply(`Bᴏᴛ ᴍᴏᴅᴇ ᴄʜᴀɴɢᴇᴅ ᴛᴏ ${selectedMode}. ${mess.success}`);
        }
    }
}
break;





            

case 'ping': {
  await doReact("🕘");
  const startTime = new Date();
  const pingMsg = await gss.sendMessage(m.chat, { text: '*■■■■□□ 80% ʟᴏᴀᴅɪɴɢ!*' });

 await gss.relayMessage(m.chat, {
      protocolMessage: {
        key: pingMsg.key,
        type: 14,
        editedMessage: {
          conversation: `*Response speed is:* ${new Date() - startTime} ms`
        }
      }
    }, {});
     await doReact("⁉");
  } 
break;



            
            case 'owner': case 'creator': {
                gss.sendContact(m.chat, global.owner, m)
            }
            break


            
case 'getbio':  
   if (!m.isGroup) return m.reply('ʏᴏᴜ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ɪɴ ɢʀᴏᴜᴘ ❌')
  try {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    else who = m.quoted.sender ? m.quoted.sender : m.sender
    let bio = await gss.fetchStatus(who)
    m.reply(bio.status)
  } catch {
    if (text) throw `bio is private!`
    else try {
      let who = m.quoted ? m.quoted.sender : m.sender
      let bio = await gss.fetchStatus(who)
      m.reply(bio.status)
    } catch {
      throw `bio is private!`
    }
  }
  break; // Don't forget to add the 'break' statement at the end
  
case 'runtime':
mainSys();
break;

case 'setmenu': {
    if (!isCreator) return m.reply(mess.owner);
    if (!text) return m.reply('setmenu has 5 views');

    process.env.TYPEMENU = text; // Set the environment variable
    m.reply(mess.success);
}
break;

case 'onlygroup': {
    if (!isCreator) return m.reply(mess.owner);
    if (!text) return m.reply('onlygroup true/false');

    global.onlygroup = text === 'true'; // Update the global variable
    m.reply(mess.success);
}
break;

case 'onlypc': {
    if (!isCreator) return m.reply(mess.owner);
    if (!text) return m.reply('onlypc true/false');

    global.onlypc = text === 'true'; // Update the global variable
    m.reply(mess.success);
}
break;

case 'tiktok':
case 'tt':
case 'tiktoknowm':
  try {
    if (!text) m.reply ('Enter Query Link!');

    m.reply(mess.wait);

    let anu = await fetchJson(`https://api.lolhuman.xyz/api/tiktok2?apikey=GataDios&url=${encodeURIComponent(text)}`);

    console.log('TikTok API Response:', anu);

    if (anu.status === 200 && anu.message === 'success' && anu.result) {
      const videoUrl = anu.result;

      const response = await axios.get(videoUrl, { responseType: 'arraybuffer' });
      const videoBuffer = Buffer.from(response.data);

      // Save the video to a temporary file
      const randomName = `temp_${Math.floor(Math.random() * 10000)}.mp4`;
      fs.writeFileSync(`./${randomName}`, videoBuffer);

      // Send the video using gss.sendMessage with the saved video
      await gss.sendMessage(m.chat, { video: fs.readFileSync(`./${randomName}`), mimetype: 'video/mp4', caption: 'Dᴏᴡɴʟᴏᴀᴅᴇᴅ!! /n||@Vɪʙʀᴀɴɪᴜᴍ-Bᴏᴛ' }, { quoted: m });

      // Delete the temporary file
      fs.unlinkSync(`./${randomName}`);
    } else {
      console.log ('Error: Unable to fetch TikTok video. Check the console logs for more details.');
    }
  } catch (error) {
    console.error(error);
    m.reply('*Aɴ ᴇʀʀᴏʀ ᴏᴄᴄᴜʀʀᴇᴅ ᴡʜɪʟᴇ ᴘʀᴏᴄᴇssɪɴɢ ʏᴏᴜʀ ʀᴇϙᴜᴇsᴛ!*');
  }
  break;

//tik tok video in document
case 'tiktokdoc':
case 'ttdoc':
case 'tiktoknowmdoc':
  try {
    if (!text) m.reply('Enter Query Link!');

    m.reply(mess.wait);

    let anu = await fetchJson(`https://api.lolhuman.xyz/api/tiktok2?apikey=GataDios&url=${encodeURIComponent(text)}`);

    console.log('TikTok API Response:', anu);

    if (anu.status === 200 && anu.message === 'success' && anu.result) {
      const videoUrl = anu.result;

      const response = await axios.get(videoUrl, { responseType: 'arraybuffer' });
      const videoBuffer = Buffer.from(response.data);

      // Save the video to a temporary file
      const randomName = `temp_${Math.floor(Math.random() * 10000)}.mp4`;
      fs.writeFileSync(`./${randomName}`, videoBuffer);

      // Send the video as a document using gss.sendMessage with the saved video
      await gss.sendMessage(m.chat, { document: fs.readFileSync(`./${randomName}`), mimetype: 'video/mp4', fileName: 'tiktok_video.mp4', caption: 'Dᴏᴡɴʟᴏᴀᴅᴇᴅ!! /n||@Vɪʙʀᴀɴɪᴜᴍ-Bᴏᴛ' }, { quoted: m });

      // Delete the temporary file
      fs.unlinkSync(`./${randomName}`);
    } else {
      console.log ('Error: Unable to fetch TikTok video. Check the console logs for more details.');
    }
  } catch (error) {
    console.error(error);
    m.reply('*Aɴ ᴇʀʀᴏʀ ᴏᴄᴄᴜʀʀᴇᴅ ᴡʜɪʟᴇ ᴘʀᴏᴄᴇssɪɴɢ ʏᴏᴜʀ ʀᴇϙᴜᴇsᴛ.*');
  }
  break;



 case 'ttp':
   case 'ttp3': 
     case 'ttp4':
       case 'ttp5':
case 'attp':
case 'ttp2':
case 'attp2':
case 'attp3':
  if (!q) return m.reply('Gɪᴠᴇ ᴍᴇ ᴛᴇxᴛ');
  m.reply(mess.wait);

  let apiUrl;

  switch (command) {
    case 'attp':
      apiUrl = 'https://api.lolhuman.xyz/api/attp?apikey=GataDios&text=';
      break;
    case 'attp2':
      apiUrl = 'https://api.lolhuman.xyz/api/attp2?apikey=GataDios&text=';
      break;
    case 'attp3':
      apiUrl = 'https://api.lolhuman.xyz/api/attp3?apikey=GataDios&text=';
      break;
    case 'ttp4':
      apiUrl = 'https://api.lolhuman.xyz/api/ttp4?apikey=GataDios&text=';
      break;
      case 'ttp3':
      apiUrl = 'https://api.lolhuman.xyz/api/ttp3?apikey=GataDios&text=';
      break;
      case 'ttp5':
      apiUrl = 'https://api.lolhuman.xyz/api/ttp5?apikey=GataDios&text=';
      break;
    case 'ttp':
      apiUrl = 'https://api.lolhuman.xyz/api/ttp?apikey=GataDios&text=';
      break;
    case 'ttp2':
      apiUrl = 'https://api.lolhuman.xyz/api/ttp2?apikey=GataDios&text=';
      break;
    default:
      return; // handle other cases or commands
  }

  gss.sendMessage(m.chat, {
    sticker: {
      url: apiUrl + encodeURIComponent(q)
    }
  }, {
    quoted: m
  });
  break;

case 'update':
  if (!isCreator) return m.reply('*This command is only for my owner*');
  
  try {
    let commits = await DB.syncgit();

    if (commits.total === 0) {
      m.reply(`Hey ${m.pushName}. You have the latest version installed.`);
    } else {
      let update = await DB.sync();
      let buttonMessaged = {
        text: update,
        footer: 'UPDATER',
        headerType: 4
      };
      await gss.sendMessage(m.chat, buttonMessaged);
    }
  } catch (error) {
    // Handle errors if necessary
    console.error(error);
    m.reply('*An error occurred while processing the command*');
  }
  break;



    case "ai":
case "gpt":
  try {
    if (!text) return m.reply(`*Cʜᴀᴛ Wɪᴛʜ CʜᴀᴛGPT*\n\n*Exᴀᴍᴘʟᴇ ᴜsᴀɢᴇ*\n*◉ ${prefix + command} ʜᴇʟʟᴏ*\n*◉ ${prefix + command} ᴡʀɪᴛᴇ ᴀ ʜᴇʟʟᴏ ᴡᴏʀʟᴅ ᴘʀᴏɢʀᴀᴍ ɪɴ ᴘʏᴛʜᴏɴ*`);

    const apiUrl = `https://vihangayt.me/tools/chatgpt?q=Hi`;
    const response = await axios.get(apiUrl);

    if (response.status === 200) {
      const result = response.data.result;
      const typingSpeed = 100; // Adjust the typing speed as needed (milliseconds per word)

      // Use the typing effect function
      await sendTypingEffect(gss, m, result, typingSpeed);

    } else {
      console.error(`HTTP request failed with status ${response.status}`);
      m.reply("Error: Unable to fetch data from the API.");
    }
  } catch (error) {
    console.error(error);
    m.reply("Error: " + error.message);
  }
  break;





case 'snapshotfull': case 'ssf':
  try {
    if (!text) return m.reply("```Uhh Please, Give me Url!```");
    let urll = `https://image.thum.io/get/fullpage/=${text.match(/\bhttps?:\/\/\S+/gi)[0]}`
    let media = await getBuffer(urll)
    return await gss.sendMessage(m.chat, { image: media }, { quoted: m });
  } catch (err) {
    return m.reply("```Error While Fetching Snapshot```");
  }
  break;
  
  
case 'soulmate':  {

  if (isBan) return reply(mess.banned);
  if (isBanChat) return reply(mess.bangc);
  if (!m.isGroup) return reply(`${mess.grouponly}`);
  gss.sendMessage(from, { react: { text: "✨", key: m.key } });

  let member = participants.map(u => u.id);
  let me = m.sender;
  let jodoh = member[Math.floor(Math.random() * member.length)];

  let message = `👫 Be my Soulmate...\n@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`;
  gss.sendMessage(m.chat, { text: message, mentions: [me, jodoh] }, { quoted: m });
}
break;


case 'handsomecheck':
  if (isBan) return reply(mess.banned);
  if (isBanChat) return reply(mess.bangc);
gss.sendMessage(from, { react: { text: "🗿" , key: m.key }})
      if (!text) return reply(`Tag Someone, Example : ${prefix + command} @⁨VenoxInc`)
        const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
        const teng = gan[Math.floor(Math.random() * gan.length)]
gss.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*` }, { quoted: m })
        break;


case 'beautifulcheck':
  if (isBan) return reply(mess.banned);
  if (isBanChat) return reply(mess.bangc);
  gss.sendMessage(from, { react: { text: "📚" , key: m.key }})
  
      if (!text) return reply(`Tag Someone, Example : ${prefix + command} @⁨VenoxInc`)
        const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
        const tik = can[Math.floor(Math.random() * can.length)]
gss.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${tik}%*` }, { quoted: m })
        break;



case 'awesomecheck':
case 'greatcheck':
  case 'gaycheck':
    case 'cutecheck':
        case 'lesbiancheck':
           case 'hornycheck':
               case 'prettycheck':
                  case 'lovelycheck':
                    case 'uglycheck':
                      if (isBan) return reply(mess.banned);
                      if (isBanChat) return reply(mess.bangc);
  gss.sendMessage(from, { react: { text: "☑" , key: m.key }})
  
      if (!text) return reply(`Tag Someone, Example : ${prefix + command} @⁨VenoxInc`)
        const sangeh = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
        const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
gss.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${sange}%*` }, { quoted: m })
        break;


case 'charactercheck':
  if (isBan) return reply(mess.banned);
  if (isBanChat) return reply(mess.bangc);
gss.sendMessage(from, { react: { text: "🤧" , key: m.key }})

        if (!text) return reply(`Tag Someone, Example : ${prefix + command} @⁨VenoxInc`)
        const gsstttt =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
        const taky = gsstttt[Math.floor(Math.random() * gsstttt.length)]
        gss.sendMessage(from, { text: `Character Check : ${q}\nAnswer : *${taky}*` }, { quoted: m })
           break;
                 

//
case 'dare':
  if (isBan) return reply(mess.banned);
  if (isBanChat) return reply(mess.bangc);
gss.sendMessage(from, { react: { text: "🌝" , key: m.key }})

                 const dare =[
       "eat 2 tablespoons of rice without any side dishes, if it's dragging you can drink",
       "spill people who make you pause",
       "call crush/pickle now and send ss",
       "drop only emote every time you type on gc/pc for 1 day.",
       "say Welcome to Who Wants To Be a Millionaire! to all the groups you have",
       "call ex saying miss",
       "sing the chorus of the last song you played",
       "vn your ex/crush/girlfriend, says hi (name), wants to call, just a moment. I miss🥺👉🏼👈🏼",
       "Bang on the table (which is at home) until you get scolded for being noisy",
       "Tell random people - I was just told I was your twin first, we separated, then I had plastic surgery. And this is the most ciyusss_ thing",
       "mention ex's name",
       "make 1 rhyme for the members!",
       "send ur whatsapp chat list",
       "chat random people with gheto language then ss here",
       "tell your own version of embarrassing things",
       "tag the person you hate",
       "Pretending to be possessed, for example: possessed by dog, possessed by grasshoppers, possessed by refrigerator, etc.",
       "change name to *I AM DONKEY* for 24 hours",
       "shout *ma chuda ma chuda ma chuda* in front of your house",
       "snap/post boyfriend photo/crush",
       "tell me your boyfriend type!",
       "say *i hv crush on you, do you want to be my girlfriend?* to the opposite sex, the last time you chatted (submit on wa/tele), wait for him to reply, if you have, drop here",
       "record ur voice that read *titar ke age do titar, titar ke piche do titar*",
       "prank chat ex and say *i love u, please come back.* without saying dare!",
       "chat to contact wa in the order according to your battery %, then tell him *i am lucky to hv you!*",
       "change the name to *I am a child of randi* for 5 hours",
       "type in bengali 24 hours",
       "Use selmon bhoi photo for 3 days",
       "drop a song quote then tag a suitable member for that quote",
       "send voice note saying can i call u baby?",
       "ss recent call whatsapp",
       "Say *YOU ARE SO BEAUTIFUL DON'T LIE* to guys!",
       "pop to a group member, and say fuck you",
       "Act like a chicken in front of ur parents",
       "Pick up a random book and read one page out loud in vn n send it here",
       "Open your front door and howl like a wolf for 10 seconds",
       "Take an embarrassing selfie and paste it on your profile picture",
       "Let the group choose a word and a well known song. You have to sing that song and send it in voice note",
       "Walk on your elbows and knees for as long as you can",
       "sing national anthem in voice note",
       "break;dance for 30 seconds in the sitting room😂",
       "Tell the saddest story you know",
       "make a twerk dance video and put it on status for 5mins",
       "Eat a raw piece of garlic",
       "Show the last five people you texted and what the messages said",
       "put your full name on status for 5hrs",
       "make a short dance video without any filter just with a music and put it on ur status for 5hrs",
       "call ur bestie, bitch",
       "put your photo without filter on ur status for 10mins",
       "say i love oli london in voice note🤣🤣",
       "Send a message to your ex and say I still like you",
       "call Crush/girlfriend/bestie now and screenshot here",
       "pop to one of the group member personal chat and Say you ugly bustard",
       "say YOU ARE BEAUTIFUL/HANDSOME to one of person who is in top of ur pinlist or the first person on ur chatlist",
       "send voice notes and say, can i call u baby, if u r boy tag girl/if girl tag boy",
       "write i love you (random grup member name, who is online) in personal chat, (if u r boy write girl name/if girl write boy name) take a snap of the pic and send it here",
       "use any bollywood actor photo as ur pfp for 3 days",
       "put your crush photo on status with caption, this is my crush",
       "change name to I AM GAY for 5 hours",
       "chat to any contact in whatsapp and say i will be ur bf/gf for 5hours",
       "send voice note says i hv crush on you, want to be my girlfriend/boyfriend or not? to any random person from the grup(if u girl choose boy, if boy choose girl",
       "slap ur butt hardly send the sound of slap through voice note😂",
       "state ur gf/bf type and send the photo here with caption, ugliest girl/boy in the world",
       "shout bravooooooooo and send here through voice note",
       "snap your face then send it here",
       "Send your photo with a caption, i am lesbian",
       "shout using harsh words and send it here through vn",
       "shout you bastard in front of your mom/papa",
       "change the name to i am idiot for 24 hours",
       "slap urself firmly and send the sound of slap through voice note😂",
       "say i love the bot owner Kai through voice note",
       "send your gf/bf pic here",
       "make any tiktok dance challenge video and put it on status, u can delete it after 5hrs",
       "break;up with your best friend for 5hrs without telling him/her that its a dare",
        "tell one of your frnd that u love him/her and wanna marry him/her, without telling him/her that its a dare",
        "say i love depak kalal through voice note",
        "write i am feeling horny and put it on status, u can delete it only after 5hrs",
        "write i am lesbian and put it on status, u can delete only after 5hrs",
        "kiss your mommy or papa and say i love you😌",
        "put your father name on status for 5hrs",
        "send abusive words in any grup, excepting this grup, and send screenshot proof here"
   ]
                 const gssdareww = dare[Math.floor(Math.random() * dare.length)]
                 buffer = await getBuffer(`https://images4.alphacoders.com/101/1016619.jpg`)
                 gss.sendMessage(from, { image: buffer, caption: '*You have chosen Dare...*\n\n'+ gssdareww }, {quoted:m})
                 break;
                     

case 'truth':
  if (isBan) return reply(mess.banned);
  if (isBanChat) return reply(mess.bangc);
gss.sendMessage(from, { react: { text: "🌝" , key: m.key }})
  
                         const truth =[
               "Have you ever liked anyone? How long?",
               "If you can or if you want, which gc/outside gc would you make friends with? (maybe different/same type)",
               "apa ketakutan terbesar kamu?",
               "Have you ever liked someone and felt that person likes you too?",
               "What is the name of your friend's ex-girlfriend that you used to secretly like?",
               "Have you ever stolen money from your father or mom? The reason?",
               "What makes you happy when you're sad?",
               "Ever had a one sided love? if so who? how does it feel bro?", 
               "been someone's mistress?",
               "the most feared thing",
               "Who is the most influential person in your life?",
               "what proud thing did you get this year", 
               "Who is the person who can make you awesome", 
               "Who is the person who has ever made you very happy?", 
               "Who is closest to your ideal type of partner here", 
               "Who do you like to play with??", 
               "Have you ever rejected people? the reason why?",
               "Mention an incident that made you hurt that you still remember", 
               "What achievements have you got this year??",
               "What's your worst habit at school??",
               "What song do you sing most in the shower",
               "Have you ever had a near-death experience",
               "When was the last time you were really angry. Why?",
               "Who is the last person who called you",
               "Do you have any hidden talents, What are they",
               "What word do you hate the most?",
               "What is the last YouTube video you watched?",
               "What is the last thing you Googled",
               "Who in this group would you want to swap lives with for a week",
               "What is the scariest thing thats ever happened to you",
               "Have you ever farted and blamed it on someone else",
               "When is the last time you made someone else cry",
               "Have you ever ghosted a friend",
               "Have you ever seen a dead body",
               "Which of your family members annoys you the most and why",
               "If you had to delete one app from your phone, which one would it be",
               "What app do you waste the most time on",
               "Have you ever faked sick to get home from school",
               "What is the most embarrassing item in your room",
               "What five items would you bring if you got stuck on a desert island",
               "Have you ever laughed so hard you peed your pants",
               "Do you smell your own farts",
               "have u ever peed on the bed while sleeping ðŸ¤£ðŸ¤£",
               "What is the biggest mistake you have ever made",
               "Have you ever cheated in an exam",
               "What is the worst thing you have ever done",
               "When was the last time you cried",
               "whom do you love the most among ur parents", 
               "do u sometimes put ur finger in ur nosetrilðŸ¤£", 
               "who was ur crush during the school days",
               "tell honestly, do u like any boy in this grup",
               "have you ever liked anyone? how long?",
               "do you have gf/bf','what is your biggest fear?",
               "have you ever liked someone and felt that person likes you too?",
               "What is the name of your ex boyfriend of your friend that you once liked quietly?",
               "ever did you steal your mothers money or your fathers money",
               "what makes you happy when you are sad",
               "do you like someone who is in this grup? if you then who?",
               "have you ever been cheated on by people?",
               "who is the most important person in your life",
               "what proud things did you get this year",
               "who is the person who can make you happy when u r sad",
               "who is the person who ever made you feel uncomfortable",
               "have you ever lied to your parents",
               "do you still like ur ex",
               "who do you like to play together with?",
               "have you ever stolen big thing in ur life? the reason why?",
               "Mention the incident that makes you hurt that you still remember",
               "what achievements have you got this year?",
               "what was your worst habit at school?",
               "do you love the bot creator Kai?",
               "have you ever thought of taking revenge from ur teacher?",
               "do you like current prime minister of ur country",
               "you non veg or veg",
               "if you could be invisible, what is the first thing you would do",
               "what is a secret you kept from your parents",
               "Who is your secret crush",
               "whois the last person you creeped on social media",
               "If a genie granted you three wishes, what would you ask for",
               "What is your biggest regret",
               "What animal do you think you most look like",
               "How many selfies do you take a day",
               "What was your favorite childhood show",
               "if you could be a fictional character for a day, who would you choose",
               "whom do you text the most",
               "What is the biggest lie you ever told your parents",
               "Who is your celebrity crush",
               "Whats the strangest dream you have ever had",
               "do you play pubg, if you then send ur id number"
           ]
                         const gsstruthww = truth[Math.floor(Math.random() * truth.length)]
                         buffer = await getBuffer(`https://images2.alphacoders.com/650/650812.jpg`)
                         gss.sendMessage(from, { image: buffer, caption: '*You have chosen Truth...*\n'+ gsstruthww }, {quoted:m})
                         break;

  
  
case 'snapshot':
case 'ss':
  try {
    if (!text) return m.reply("```Uhh Please, Give me Url!```");
    let urll = `https://api.screenshotmachine.com/?key=c04d3a&url=${encodeURIComponent(text)}&dimension=720x720`;
    let media = await getBuffer(urll);
    return await gss.sendMessage(m.chat, { image: media }, { quoted: m });
  } catch (err) {
    return m.reply("```Error While Fetching Snapshot```");
  }
  break;



    case 'voiceai': case 'voicegpt':
      if (!text) {
        await m.reply(`*You can use the Voice AI command with text to get a spoken response.*\n\n*Example usage:*\n*◉ ${prefix + command} Tell me a joke.*`);
        break;
      }

      try {
        const apiEndpoint = `https://matrix-coder.vercel.app/api/gpt?query=${encodeURIComponent(text)}`;
        let response = await axios.get(apiEndpoint);
        let responseData = response.data;

        if (responseData.result) {
          const result = responseData.result;
          const speechURL = `https://matrix-coder.vercel.app/api/gpt?query=${encodeURIComponent(result)}`;
          await gss.sendMessage(m.chat, {
            audio: {
              url: speechURL,
            },
            mimetype: 'audio/mp4',
            ptt: true,
            fileName: `${text}.mp3`,
          }, {
            quoted: m,
          });
        } else {
          console.log('API returned an unexpected response:', responseData);
        }
      } catch (error) {
        console.error(error);
      }
      break;




case 'imagine': case 'dalle': case 'aiimage':
  if (!text) throw `*You can generate images From text using this command*\n\n*𝙴xample usage*\n*◉ ${prefix + command} Beautiful animegirl*\n*◉ ${prefix + command} Elon musk with Irom man*`; 

async function fetchImageData() {
  let thingMsg = await gss.sendMessage(m.chat, { text: 'Generating Images Please wait...' });
  const texti = text;
  try {
    const response = await axios.get(`https://v2-guru-indratensei.cloud.okteto.net/scrape?query=${texti}`);
    const data = response.data;

    const images = data.image_links;
    const timeforgen = data.execution_time;
    const genetd =  `✅ Sucsessfully generated in ${timeforgen}`
    const randomImageIndex = Math.floor(Math.random() * images.length);
    const randomImageLink = images[randomImageIndex];
    console.log(randomImageLink);
    await gss.sendMessage(m.chat, {
        image: {
          url: randomImageLink,
        },
        caption: genetd,
      }, {
        quoted: m,
      });
  } catch (error) {
    console.error('Error fetching image data:', error);
  }
}

fetchImageData();

break;




  
case 'bug':
case 'request':
case 'report': {

    if (!text) return m.reply(`Example: ${prefix + command} hi dev play command is not working`);

    const messageId = m.key.id;

    if (reportedMessages[messageId]) {
        return m.reply("This report has already been forwarded to the owner. Please wait for a response.");
    }

    reportedMessages[messageId] = true;

    const textt = `*| REQUEST/BUG |*`;
    const teks1 = `\n\n*User*: @${m.sender.split("@")[0]}\n*Request/Bug*: ${text}`;
    const teks2 = `\n\n*Hi ${pushname}, your request has been forwarded to my Owners.*\n*Please wait...*`;

    // Send the message to the first owner in the `owner` array
    gss.sendMessage(devlopernumber + "8801853262586@s.whatsapp.net", {
        text: textt + teks1,
        mentions: [m.sender],
    }, {
        quoted: m,
    });

    // Send a reply to the user
    m.reply("Tʜᴀɴᴋ ʏᴏᴜ ꜰᴏʀ ʏᴏᴜʀ ʀᴇᴘᴏʀᴛ. Iᴛ ʜᴀs ʙᴇᴇɴ ꜰᴏʀᴡᴀʀᴅᴇᴅ ᴛᴏ ᴛʜᴇ ᴏᴡɴᴇʀ. Pʟᴇᴀsᴇ ᴡᴀɪᴛ ꜰᴏʀ ᴀ ʀᴇsᴘᴏɴsᴇ.");

    break;
}




case 'autoread':
if (!isCreator) throw mess.owner
  if (args[0] === 'on') {
    AUTO_READ = true;
    process.env.AUTO_READ = 'true';
    m.reply('*Auto Read turned on.*');
  } else if (args[0] === 'off') {
    AUTO_READ = false;
    process.env.AUTO_READ = 'false';
    m.reply('*Auto Read turned off.*');
  } else {
    gss.sendPoll(m.chat, "Please Choose, I Hope You're Happy!", [`${prefix + command.charAt(0).toUpperCase() + command.slice(1)} on`, `${prefix + command.charAt(0).toUpperCase() + command.slice(1)} off`]);
  }
  break;

  
case 'alwaysonline':
if (!isCreator) throw mess.owner
  if (args[0] === 'on') {
    ALWAYS_ONLINE = true;
    process.env.ALWAYS_ONLINE = 'true';
    m.reply('*Always Online turned on.*');
  } else if (args[0] === 'off') {
    ALWAYS_ONLINE = false;
    process.env.ALWAYS_ONLINE = 'false';
    m.reply('Always Online turned off.');
  } else {
    gss.sendPoll(m.chat, "Please Choose, I Hope You're Happy!", [`${prefix + command.charAt(0).toUpperCase() + command.slice(1)} on`, `${prefix + command.charAt(0).toUpperCase() + command.slice(1)} off`]);
  }
  break;


case 'autotyping':
if (!isCreator) throw mess.owner
  if (args[0] === 'on') {
    TYPING_ENABLED = true;
    process.env.AUTO_TYPING = 'true';
    m.reply('*AUTO TYPING turned on.*');
  } else if (args[0] === 'off') {
    TYPING_ENABLED = false;
    process.env.AUTO_TYPING = 'false';
    m.reply('*AUTO TYPING turned off.*');
  } else {
    gss.sendPoll(m.chat, "Please Choose, I Hope You're Happy!", [`${prefix + command.charAt(0).toUpperCase() + command.slice(1)} on`, `${prefix + command.charAt(0).toUpperCase() + command.slice(1)} off`]);
  }
  break;
  




  
  
case 'gcsetting':
if (!m.isGroup) return m.reply('ʏᴏᴜ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ɪɴ ɢʀᴏᴜᴘ ❌')
if (!isAdmins) return m.reply('Tʜɪs ꜰᴇᴀᴛᴜʀᴇ ɪs ᴏɴʟʏ ꜰᴏʀ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴs')
    const options = ['${prefix}group', '${prefix}revoke', '${prefix}leave', '${prefix}editinfo', '${prefix}tagall','${prefix}antilink', '${prefix}linkgc'];
    gss.sendPoll(m.chat, 'Select your preferences:', options);
    break;


case 'setting':
if (!isCreator) throw mess.owner
  m.reply(`Current Settings:
    Auto Read: ${AUTO_READ ? 'On' : 'Off'}
    Always Online: ${ALWAYS_ONLINE ? 'On' : 'Off'}
    Auto Typing: ${TYPING_ENABLED ? 'On' : 'Off'}`);

  // Delay for 2 seconds
  setTimeout(() => {
    const options = [
      '${prefix}Autoread',
      '${prefix}Alwaysonline',
      '${prefix}Autotyping',
      '${prefix}mode',
      '${prefix}Anticall',
    ];

    gss.sendPoll(m.chat, 'Select your preferences:', options);
  }, 2000);
  break;


case 'antitoxic': case 'antibadword': {
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
if (args[0] === "on") {
if (antiToxic) return m.reply('Already activated')
nttoxic.push(m.from)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
m.reply('Success in turning on antitoxic in this group')
var groupe = await gss.groupMetadata(m.from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
gss.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to use bad words in this group, one who uses will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiToxic) return m.reply('Already deactivated')
let off = nttoxic.indexOf(m.from)
nttoxic.splice(off, 1)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
m.reply('Success in turning off antitoxic in this group')
} else {
  await m.reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
  
  
case 'addbadword':{
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
if (args.length < 1) return m.reply('Whats the word?')
if (Badgss.includes(q)) return m.reply("The word is already in use")
Badgss.push(q)
fs.writeFileSync('./database/bad.json', JSON.stringify(Badgss))
m.reply(`Success Adding Bad Word\nCheck by typing ${prefix}listbadword`)
}
break
case 'delbadword':{
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
if (args.length < 1) return m.reply('Enter the word')
if (!Badgss.includes(q)) return m.reply("The word does not exist in the database")
let wanu = Badgss.indexOf(q)
Badgss.splice(wanu, 1)
fs.writeFileSync('./database/bad.json', JSON.stringify(Badgss))
m.reply(`Success deleting bad word ${q}`)
}
break
case 'listbadword':{
let teks = '┌──⭓「 *BadWord List* 」\n│\n'
for (let x of Badgss) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${Badgss.length}*`
m.reply(teks)
}
break


const languages = require('./lib/languages'); // Import the language codes module

// Function to validate language code
function isValidLanguageCode(code) {
    return (code);
}

case "tts":  case "texttospeech":  case "say": case "speak":{
  if (isBan) return reply(mess.banned);	 			
  if (isBanChat) return reply(mess.bangc);
  gss.sendMessage(from, { react: { text: "⌛" , key: m.key }})

  if (!args[0]) return reply("Please give me a text so that i can speak it!")
    
    let texttosay = text
      ? text
      : m.quoted && m.quoted.text
      ? m.quoted.text
      : m.text;
    const SpeakEngine = require("google-tts-api"); 
    const texttospeechurl = SpeakEngine.getAudioUrl(texttosay, {lang: "en", slow: false, host: "https://translate.google.com",});
    gss.sendMessage(m.chat,{audio: {url: texttospeechurl,},mimetype: "audio/mpeg",fileName: `VibraniumSpeechEngine.mp3`,},{quoted: m,});
  }
  break;



case 'translate': case 'trt': {
  try {
    if (!text) return m.reply( 'Usage: .trt <language code> <text> or reply message');
    if (text && m.quoted && m.quoted.text) {
      let lang = text.slice(0, 2);
      try {
        let data = m.quoted.text;
        let result = await translate(`${data}`, {
          to: lang
        });
        m.reply(result[0]);
      } catch {
        return m.reply(` Language code not supported.`);
      }
    } else if (text) {
      let lang = text.slice(0, 2);
      try {
        let data = text.substring(2).trim();
        let result = await translate(`${data}`, {
          to: lang
        });
        m.reply(result[0]);
      } catch {
        return m.reply(` Language code not supported.`);
      }
    }
  } catch (error) {
    console.error("Error in 'translate' command:", error);
    m.reply(` An error occurred while translating.`);
  }
  break; // Case break statement
}

case 'readmore': {
    if (!text) return m.reply( 'give me text');

    const continuationMessage = `
    ${readmore}${text}`;

    m.reply(continuationMessage);
    break;
}

  
case 'poll': {
  if (!m.isGroup) return m.reply('ʏᴏᴜ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ɪɴ ɢʀᴏᴜᴘ ❌');
    if (!isAdmins) return m.reply('Tʜɪs ғᴇᴀᴛᴜʀᴇ ɪs ᴏɴʟʏ ғᴏʀ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴ, ᴏᴡɴᴇʀ ᴀɴᴅ ʙᴏᴛᴀᴅᴍɪɴ, ʏᴏᴜ ᴄᴀɴɴᴏᴛ ᴜsᴇ ɪᴛ.')
            let [poll, opt] = text.split("|")
            if (text.split("|") < 2)
                return await m.reply(`Mention question and atleast 2 options\nExample: ${prefix}poll Who is best admin?|venox,tobi`
                )
            let options = []
            for (let i of opt.split(',')) {
                options.push(i)
            }
            await gss.sendMessage(m.chat, {
                poll: {
                    name: poll,
                    values: options
                }
            })
        }
        break
        
        
case 'resetlinkgc':
case 'resetlinkgroup':
case 'resetlinkgrup':
case 'revoke':
case 'resetlink':
case 'resetgrouplink':
case 'resetgclink':
case 'resetgruplink': {
  if (!m.isGroup) return m.reply('ʏᴏᴜ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ɪɴ ɢʀᴏᴜᴘ ❌');
    if (!isAdmins) return m.reply('Tʜɪs ғᴇᴀᴛᴜʀᴇ ɪs ᴏɴʟʏ ғᴏʀ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴ, ᴏᴡɴᴇʀ ᴀɴᴅ ʙᴏᴛᴀᴅᴍɪɴ, ʏᴏᴜ ᴄᴀɴɴᴏᴛ ᴜsᴇ ɪᴛ.')
gss.groupRevokeInvite(m.chat)
await m.reply('group link reset ')
}
break

case 'gdrive':
  if (!args[0]) throw ' Eɴᴛᴇʀ ᴀ Gᴏᴏɢʟᴇ Dʀɪᴠᴇ ʟɪɴᴋ';
  try {
    let res = await fg.GDriveDl(args[0]);
    await m.reply(` *Google Drive DL* ▢ *Number:* ${res.fileName} ▢ *Size:* ${res.fileSize} ▢ *type:* ${res.mimetype}`);
    gss.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m });
  } catch {
    m.reply('Eʀʀᴏʀ: Cʜᴇᴄᴋ ᴛʜᴇ ʟɪɴᴋ ᴏʀ ᴛʀʏ ᴀɴᴏᴛʜᴇʀ ʟɪɴᴋ');
  }
  break;


function convertToFontStyle(text, style) {
    let styledText = '';

    if (fonts[style]) {
        for (const char of text) {
            styledText += fonts[style][char] || char;
        }
    } else {
        styledText = text;
    }

    return styledText;
}

case 'fontchange':
case 'fancy': {
    if (args.length === 0) {
        const availableStylesPreview = availableStyles.map(style => {
            const previewText = convertToFontStyle("vibranium", style);
            return `${style}: ${previewText}`;
        }).join('\n');

        m.reply(`Usage:\n${prefix}fontchange <style> <text>\nAvailable font styles with previews:\n${availableStylesPreview}`);
    } else {
        const style = parseInt(args[0]);

        if (isNaN(style) || style < 0 || style > 34) {
            m.reply(`Style number should be between 0 and 34. Please choose a valid style.`);
        } else {
            const inputText = args.slice(1).join(" ");
            const styledText = convertToFontStyle(inputText, style);


            m.reply(`${styledText}`);
        }
    }
}
break;

        

case 'alive':
                let pinga = ` ${uptimeMessage}`
                gss.sendMessage(m.chat, {
        video: fs.readFileSync('./VenoxMedia/alive.mp4'),
        caption: pinga,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: false,
                title: botname,
                sourceUrl: global.link,
                body: `https://wa.me/8801853262586`
                gifPlayback: true
            }
        }
    }, {
      quoted: m
                })
                break
                
case 'addprem':
                if (!isCreator) return m.reply(mess.owner)
                if (args.length < 2)
                    return m.reply(`Usage:\n*#addprem* @tag tag\n*#addprem* tag time\n\nExample: #addprem @tag 30d`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        addPremiumUser(m.mentionedJid[0], args[1], premium);
                    }
                    m.reply("*Success Premium*")
                } else {
                    addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
                    m.reply("*Success Via Number*")
                }
            break
            case 'delprem':
                if (!isCreator) return m.reply(mess.owner)
                if (args.length < 1) return m.reply(`Usage :\n*#delprem* @tag\n*#delprem* number`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
                        fs.writeFileSync("./src/data/role/premium.json", JSON.stringify(premium));
                    }
                    m.reply("*Success Delete*")
                } else {
                    premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
                    fs.writeFileSync("./src/data/premium.json", JSON.stringify(premium));
                    m.reply("*Success Via Number*")
                }
            break
            case 'listprem': {
    if (!isCreator) return m.reply(mess.owner);
    let data = require("./src/data/premium.json");
    let txt = `*------「 LIST PREMIUM 」------*\n\n`;
    
    for (let premiumData of data) {
        txt += `Nomer : ${premiumData.id}\n`;
        txt += `Expired : ${premiumData.expired} Second\n\n`;
    }

    gss.sendMessage(m.chat, { text: txt }, { quoted: m });
}
break;

          

          
          
case 'tempmail':
    const option = ['${prefix}mail 1','${prefix}mail 3','${prefix}mail 5'];
    gss.sendPoll(m.chat, 'Select your mail:', option);
    break;

          
          
case 'tempmail': case 'mail': {
  const maxEmails = 10;
  const count = Math.min(parseInt(args[0]) || 1, maxEmails); // Parse the provided argument as a number, default to 1
  const baseUrl = `https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=${count}`;
  const timeout = 10000; // 10 seconds timeout for Axios requests

  try {
    const response = await axios.get(baseUrl);
    const data = response.data;

    if (data && data.length > 0) {
      const tempMails = data.join('\n');
      const replyMessage = `*Temporary Email Addresses:*\n\n${tempMails}`;
      m.reply(replyMessage);
    } else {
      m.reply(`Failed to generate ${count} temporary email address(es).`);
    }
  } catch (error) {
    console.error('Error:', error);
    m.reply('Failed to fetch temporary email addresses.');
  }
  break;
}

case 'infobot':
    const tod = `

🔖 *Bot Name* : ${botname}
🔖 *Owner Name* : ${ownername}
🔖 *Owner Number* : ${owner}
🔖 *Prefix* :「 ${prefix} 」
🔖 *Runtime* : _*${hours}h ${minutes}m ${seconds}s*_
🔖 *TotalUser* : *${Object.keys(global.db.data.users).length} Users* 
🔖 *TotalChat* : *${Object.keys(global.db.data.chats).length} Group/Chat*`;


    gss.sendMessage(m.chat, {
        image: fs.readFileSync('./VenoxMedia/everymenu.jpg'),
        caption: tod,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: false,
                title: botname,
                sourceUrl: global.link,
                body: `https://wa.me/8801853262586`
            }
        }
    });
    break;



case 'checkmail': {
  if (!text) {
    m.reply('Please provide an email address to read the most recent message.');
    break;
  }

  // Split the provided email address into login and domain
  const [login, domain] = text.split('@');

  // Check if the email address was split correctly
  if (!login || !domain) {
    m.reply('Invalid email address format.');
    break;
  }

  const baseUrl = 'https://www.1secmail.com/api/v1/?action=getMessages';

  // Use the extracted login and domain values
  const url = `${baseUrl}&login=${login}&domain=${domain}`;

  const timeout = 10000; // 10 seconds timeout for Axios requests

  try {
    const response = await axios.get(url, { timeout });
    const data = response.data;

    if (data && data.length > 0) {
      // Extract the latest message ID
      const latestMessageId = data[0].id;

      // Use the latest message ID to read the message
      const readUrl = `https://www.1secmail.com/api/v1/?action=readMessage&login=${login}&domain=${domain}&id=${latestMessageId}`;

      const readResponse = await axios.get(readUrl, { timeout });
      const messageData = readResponse.data;

      if (messageData && messageData.textBody) {
        const sender = messageData.from;
        const date = messageData.date;
        const subject = messageData.subject || 'No Subject';

        const replyMessage = `*Message in* ${text}:\n\n*From:* ${sender}\n*Subject:* ${subject}\n*Date:* ${date}\n\n*Messages:*\n\n${messageData.textBody}`;
        m.reply(replyMessage, m.from, { caption: replyMessage });
        
      } else {
        m.reply(`No message found in ${text}.`);
      }
    } else {
      m.reply(`No messages found in ${text}.`);
    }
  } catch (error) {
    console.error('Error:', error);
    m.reply(`Failed to read the most recent message in ${text}.`);
  }
  break;
}



case 'cal':
case 'calc':
case 'calcular':
case 'calculadora':
  try {
    let id = m.chat;
    gss.math = gss.math ? gss.math : {};

    if (id in gss.math) {
      clearTimeout(gss.math[id][3]);
      delete gss.math[id];
      return m.reply('...');
    }

    let val = text
      .replace(/[^0-9\-\/+*×÷πEe()piPI.]/g, '') // Allow decimal point '.'
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/π|pi/gi, 'Math.PI')
      .replace(/e/gi, 'Math.E')
      .replace(/\/+/g, '/')
      .replace(/\++/g, '+')
      .replace(/-+/g, '-');

    let format = val
      .replace(/Math\.PI/g, 'π')
      .replace(/Math\.E/g, 'e')
      .replace(/\//g, '÷')
      .replace(/\*×/g, '×');
    let result = (new Function('return ' + val))();

    if (isNaN(result)) throw new Error('Invalid result');

    m.reply(`*${format}* = _${result}_`);
  } catch (error) {
    // Handle specific error messages
    if (error instanceof SyntaxError) {
      return m.reply('Invalid syntax. Please check your expression.');
    } else if (error instanceof Error) {
      return m.reply(error.message);
    } else {
      // Handle unexpected errors
      return m.reply('An unexpected error occurred.');
    }
  }
  break;


function formatDate(date) {
}
case 'nowa':
    let regex = /x/g;
    if (!text) throw '*Give a number to search*';
    if (!text.match(regex)) throw `*Example: ${prefix + command} 816xxxxxx`;
    let random = text.match(regex).length, total = Math.pow(10, random), array = [];
    for (let i = 0; i < total; i++) {
        let list = [...i.toString().padStart(random, '0')];
        let result = text.replace(regex, () => list.shift()) + '@s.whatsapp.net';
        if (await gss.onWhatsApp(result).then(v => (v[0] || {}).exists)) {
            let info = await gss.fetchStatus(result).catch(_ => {});
            array.push({ exists: true, jid: result, ...info });
        } else {
            array.push({ exists: false, jid: result });
        }
    }
    let txt = 'Registered\n\n' + array.filter(v => v.exists).map(v => `• Link: wa.me/${v.jid.split('@')[0]}\n*• Bio:* ${v.status || 'description'}\n*• set on:* ${formatDate(v.setAt)}`).join('\n\n') + '\n\n*Not registered*\n\n' + array.filter(v => !v.exists).map(v => v.jid.split('@')[0]).join('\n');
    m.reply(txt);
    break;
    
case 'githubstalk': {
  if (!args[0]) return m.reply('*Mention a GitHub username to stalk*');

  const username = args[0];

  try {
    // Fetch GitHub user data using Axios
    const githubResponse = await axios.get(`https://api.github.com/users/${username}`);
    const userData = githubResponse.data;

    if (githubResponse.status !== 200) {
      return m.reply(`❌ *GitHub user not found*`);
    }

    // Construct the response message
    let responseMessage = `◦ *GitHub Profile - @${userData.login}*\n\n`;
    responseMessage += `  ◦  *Name*: ${userData.name || 'N/A'}\n`;
    responseMessage += `  ◦  *Username*: @${userData.login}\n`;
    responseMessage += `  ◦  *Bio*: ${userData.bio || 'N/A'}\n`;
    responseMessage += `  ◦  *ID*: ${userData.id}\n`;
    responseMessage += `  ◦  *Node ID*: ${userData.node_id}\n`;
    responseMessage += `  ◦  *Profile URL*: ${userData.avatar_url}\n`;
    responseMessage += `  ◦  *GitHub URL*: ${userData.html_url}\n`;
    responseMessage += `  ◦  *Type*: ${userData.type}\n`;
    responseMessage += `  ◦  *Admin*: ${userData.site_admin ? 'Yes' : 'No'}\n`;
    responseMessage += `  ◦  *Company*: ${userData.company || 'N/A'}\n`;
    responseMessage += `  ◦  *Blog*: ${userData.blog || 'N/A'}\n`;
    responseMessage += `  ◦  *Location*: ${userData.location || 'N/A'}\n`;
    responseMessage += `  ◦  *Email*: ${userData.email || 'N/A'}\n`;
    responseMessage += `  ◦  *Public Repositories*: ${userData.public_repos}\n`;
    responseMessage += `  ◦  *Public Gists*: ${userData.public_gists}\n`;
    responseMessage += `  ◦  *Followers*: ${userData.followers}\n`;
    responseMessage += `  ◦  *Following*: ${userData.following}\n`;

   
 const githubReposData = await fetch(`https://api.github.com/users/${username}/repos?per_page=5&sort=stargazers_count&direction=desc`);
    const reposData = await githubReposData.json();

    if (reposData.length > 0) {
      const topRepos = reposData.slice(0, 5); // Display the top 5 starred repositories

      const reposList = topRepos.map(repo => {
        return `  ◦  *Repository*: [${repo.name}](${repo.html_url})
  ◦  *Description*: ${repo.description || 'N/A'}
  ◦  *Stars*: ${repo.stargazers_count}
  ◦  *Forks*: ${repo.forks}`;
      });

      const reposCaption = `📚 *Top Starred Repositories*\n\n${reposList.join('\n\n')}`;
      responseMessage += `\n\n${reposCaption}`;
    } else {
      responseMessage += `\n\nNo public repositories found.`;
    }

    // Send the message with the updated caption and user's avatar
    await gss.sendMessage(m.chat, { image: { url: userData.avatar_url }, caption: responseMessage }, { quoted: m });

    // Add a success reaction message
    const successReactionMessage = {
      react: {
        text: "✔",
        key: m.key
      }
    };
    await gss.sendMessage(m.chat, successReactionMessage);
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    await gss.sendMessage(m.chat, 'An error occurred while fetching GitHub data.', { quoted: m });
  }
  break;
}

    break;
    
case 'emojimix': {
  let [emoji1, emoji2] = text.split`+`;
  if (!emoji1) throw `Example: ${prefix + command} 😅+🤔`;
  if (!emoji2) throw `Example: ${prefix + command} 😅+🤔`;
  let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`);
  for (let res of anu.results) {
    let encmedia = await gss.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags });
    await fs.unlinkSync(encmedia);
  }
}
break;

case 'weather':
        if (isBan) return reply(mess.banned);	 			
        if (isBanChat) return reply(mess.bangc);
        gss.sendMessage(from, { react: { text: "✨", key: m.key }}) 
        if (!args[0]) return reply("Enter your location to search weather.")
        myweather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args.join(" ")}&units=metric&appid=e409825a497a0c894d2dd975542234b0&language=tr`)

        const weathertext = `           🌤 *Weather Report* 🌤  \n\n🔎 *Search Location:* ${myweather.data.name}\n*💮 Country:* ${myweather.data.sys.country}\n🌈 *Weather:* ${myweather.data.weather[0].description}\n🌡️ *Temperature:* ${myweather.data.main.temp}°C\n❄️ *Minimum Temperature:* ${myweather.data.main.temp_min}°C\n📛 *Maximum Temperature:* ${myweather.data.main.temp_max}°C\n💦 *Humidity:* ${myweather.data.main.humidity}%\n🎐 *Wind:* ${myweather.data.wind.speed} km/h\n`
        gss.sendMessage(from, { video: { url: 'https://media.tenor.com/bC57J4v11UcAAAPo/weather-sunny.mp4' }, gifPlayback: true, caption: weathertext }, { quoted: m })

        break;


case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await gss.downloadAndSaveMediaMessage(qmsg)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                gss.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break;
                

            

function getRandomSymbol() {
    const symbols = ['❒', '➫', '❖', '✯','✯','✰','◬','✵','✦']; // Add more symbols as needed
    const randomIndex = Math.floor(Math.random() * symbols.length);
    return symbols[randomIndex];
}
function getRandomFontStyle() {
  const availableFontStyles = Object.keys(menufont);
  const randomIndex = Math.floor(Math.random() * availableFontStyles.length);
  return availableFontStyles[randomIndex];
}

const randomSymbol = getRandomSymbol();

case 'menu':
            case 'help':
            case 'allmenu':
            case 'listmenu': {
            await doReact("✨");
                let mono = '```'
                let a = db.data.users[m.sender];
                let introText = `${mono}
${randomSymbol}│▸  *Nᴏᴡ-ᴛɪᴍᴇ: ${greetingTime}*
${randomSymbol}│▸  *Uꜱᴇʀ: ${pushname}* 👋  
${randomSymbol}│▸  *Pʟᴀᴛғᴏʀᴍ: ${os.platform()}* 💻
${randomSymbol}│▸  *Pʀᴇꜰɪx: 『  ${prefix} 』*  💡
${randomSymbol}│▸  *Dᴀᴛᴇ: ${dates}* 📆
${randomSymbol}│▸  *Rᴀᴍ: ${ramUsed} / ${_ramTotal}(${/[0-9.+/]/g.test(ramUsed) &&  /[0-9.+/]/g.test(ramTotal) ? Math.round(100 * (ramUsed / ramTotal)) + '%' : NotDetect})*
${randomSymbol}│▸  *Pʀᴇᴍɪᴜᴍ: ${isPremium ? '☑' : '❌'}*
${randomSymbol}│▸  *Dᴇᴠᴇʟᴏᴘᴇᴅ ʙʏ Vᴇɴᴏx-Sᴇʀ* 🐉
┬│
│╰───────···▸▸
${readmore}└──────────···▸▸▸


╭––––『 *Mᴀɪɴ-Mᴇɴᴜ* 』
┆
┆${randomSymbol} ${prefix}Ping
┆${randomSymbol} ${prefix}Alive
┆${randomSymbol} ${prefix}Owner
┆${randomSymbol} ${prefix}Menu
┆${randomSymbol} ${prefix}Infochat
┆${randomSymbol} ${prefix}Quoted
┆${randomSymbol} ${prefix}Listpc
┆${randomSymbol} ${prefix}Listgc
┆${randomSymbol} ${prefix}Listonline
┆${randomSymbol} ${prefix}Infobot
┆${randomSymbol} ${prefix}Buypremium
┆
╰–––––––––––––––༓


╭––––『 *Oᴡɴᴇʀ-Mᴇɴᴜ* 』
┆
┆${randomSymbol} ${prefix}React
┆${randomSymbol} ${prefix}Chat
┆${randomSymbol} ${prefix}Join
┆${randomSymbol} ${prefix}Leave
┆${randomSymbol} ${prefix}Block
┆${randomSymbol} ${prefix}Unblock
┆${randomSymbol} ${prefix}Bcgroup
┆${randomSymbol} ${prefix}Bcall
┆${randomSymbol} ${prefix}Setppbot
┆${randomSymbol} ${prefix}Setexif
┆${randomSymbol} ${prefix}Anticall
┆${randomSymbol} ${prefix}Setstatus
┆${randomSymbol} ${prefix}Setnamebot
┆${randomSymbol} ${prefix}Sleep
┆${randomSymbol} ${prefix}AutoTyping
┆${randomSymbol} ${prefix}AlwaysOnline
┆${randomSymbol} ${prefix}AutoRead
┆
╰–––––––––––––––༓


╭––––『 *Gʀᴏᴜᴘ-Mᴇɴᴜ* 』
┆
┆${randomSymbol} ${prefix}LinkGroup
┆${randomSymbol} ${prefix}Setppgc
┆${randomSymbol} ${prefix}Setname
┆${randomSymbol} ${prefix}Setdesc
┆${randomSymbol} ${prefix}Group
┆${randomSymbol} ${prefix}Gcsetting
┆${randomSymbol} ${prefix}Antibot
┆${randomSymbol} ${prefix}Editinfo
┆${randomSymbol} ${prefix}Add
┆${randomSymbol} ${prefix}Kick
┆${randomSymbol} ${prefix}HideTag
┆${randomSymbol} ${prefix}Tagall
┆${randomSymbol} ${prefix}Totag
┆${randomSymbol} ${prefix}Tagadmin
┆${randomSymbol} ${prefix}AntiLink
┆${randomSymbol} ${prefix}AntiToxic
┆${randomSymbol} ${prefix}Group _<open/close>_
┆${randomSymbol} ${prefix}Promote
┆${randomSymbol} ${prefix}Demote
┆${randomSymbol} ${prefix}Revoke
┆${randomSymbol} ${prefix}Poll
┆${randomSymbol} ${prefix}Getbio
┆
╰–––––––––––––––༓


╭––––『 *Dʟ-Mᴇɴᴜ* 』
┆
┆${randomSymbol} ${prefix}Apk
┆${randomSymbol} ${prefix}Facebook
┆${randomSymbol} ${prefix}Mediafire
┆${randomSymbol} ${prefix}XnxxSearch
┆${randomSymbol} ${prefix}Xnxxdl
┆${randomSymbol} ${prefix}Gitclone
┆${randomSymbol} ${prefix}Gdrive
┆${randomSymbol} ${prefix}Insta
┆${randomSymbol} ${prefix}Instadoc
┆${randomSymbol} ${prefix}Tiktok
┆${randomSymbol} ${prefix}Tiktokdoc
╰–––––––––––––––༓


╭––––『 *Sᴇᴀʀᴄʜ-Mᴇɴᴜ* 』
┆
┆${randomSymbol} ${prefix}Ytmp3
┆${randomSymbol} ${prefix}Ytmp4
┆${randomSymbol} ${prefix}Play
┆${randomSymbol} ${prefix}Song
┆${randomSymbol} ${prefix}Video
┆${randomSymbol} ${prefix}Ytmp3doc
┆${randomSymbol} ${prefix}Ytmp4doc
┆${randomSymbol} ${prefix}Yts
┆${randomSymbol} ${prefix}Imdb
┆${randomSymbol} ${prefix}Google
┆${randomSymbol} ${prefix}Gimage
┆${randomSymbol} ${prefix}Pinterest _<dptype>_
┆${randomSymbol} ${prefix}Wallpaper
┆${randomSymbol} ${prefix}Wikimedia
┆${randomSymbol} ${prefix}Ytsearch
┆${randomSymbol} ${prefix}Ringtone
┆${randomSymbol} ${prefix}Lyrics
┆${randomSymbol} ${prefix}Weather
┆
╰–––––––––––––––༓


╭––––『 *Fᴜɴ-Mᴇɴᴜ* 』
┆
┆${randomSymbol} ${prefix}Tictactoe
┆${randomSymbol} ${prefix}Delttt
┆${randomSymbol} ${prefix}Soulmate
┆${randomSymbol} ${prefix}Handsomecheck
┆${randomSymbol} ${prefix}Beautifulcheck
┆${randomSymbol} ${prefix}Awesomecheck
┆${randomSymbol} ${prefix}Greatcheck
┆${randomSymbol} ${prefix}Gaycheck
┆${randomSymbol} ${prefix}Cutecheck
┆${randomSymbol} ${prefix}Lesbiancheck
┆${randomSymbol} ${prefix}Hornycheck
┆${randomSymbol} ${prefix}Prettycheck
┆${randomSymbol} ${prefix}Lovelycheck
┆${randomSymbol} ${prefix}Uglycheck
┆${randomSymbol} ${prefix}Charactercheck
┆${randomSymbol} ${prefix}Dare
┆${randomSymbol} ${prefix}Truth
┆
╰–––––––––––––––༓


╭––––『 *Aɪ-Mᴇɴᴜ* 』
┆
┆${randomSymbol} ${prefix}Ai
┆${randomSymbol} ${prefix}Voiceai
┆${randomSymbol} ${prefix}Bug
┆${randomSymbol} ${prefix}Report
┆${randomSymbol} ${prefix}Gpt
┆${randomSymbol} ${prefix}Dalle
┆${randomSymbol} ${prefix}Remini
┆
╰–––––––––––––––༓


╭––––『 *Sᴛᴀʟᴋᴇʀ-Mᴇɴᴜ* 』
┆
┆${randomSymbol} ${prefix}Nowa
┆${randomSymbol} ${prefix}Truecaller
┆${randomSymbol} ${prefix}InstaStalk
┆${randomSymbol} ${prefix}GithubStalk
┆
╰–––––––––––––––༓


╭––––『 *Tᴏᴏʟs-Mᴇɴᴜ* 』
┆
┆${randomSymbol} ${prefix}Calculator
┆${randomSymbol} ${prefix}Tempmail
┆${randomSymbol} ${prefix}Checkmail
┆${randomSymbol} ${prefix}Info
┆${randomSymbol} ${prefix}Trt
┆${randomSymbol} ${prefix}Tts
┆
╰–––––––––––––––༓


╭––––『 *Cᴏɴᴠᴇʀᴛ-Mᴇɴᴜ* 』
┆
┆${randomSymbol} ${prefix}Removebg
┆${randomSymbol} ${prefix}Sticker
┆${randomSymbol} ${prefix}Emojimix
┆${randomSymbol} ${prefix}Tovideo
┆${randomSymbol} ${prefix}Togif
┆${randomSymbol} ${prefix}Tourl
┆${randomSymbol} ${prefix}Tovn
┆${randomSymbol} ${prefix}Tomp3
┆${randomSymbol} ${prefix}Toaudio
┆${randomSymbol} ${prefix}Ebinary
┆${randomSymbol} ${prefix}Dbinary
┆${randomSymbol} ${prefix}Styletext
┆${randomSymbol} ${prefix}Fontchange
┆${randomSymbol} ${prefix}Fancy
┆${randomSymbol} ${prefix}Upscale
┆${randomSymbol} ${prefix}hd
┆${randomSymbol} ${prefix}attp
┆${randomSymbol} ${prefix}attp2
┆${randomSymbol} ${prefix}attp3
┆${randomSymbol} ${prefix}ttp
┆${randomSymbol} ${prefix}ttp2
┆${randomSymbol} ${prefix}ttp3
┆${randomSymbol} ${prefix}ttp4
┆${randomSymbol} ${prefix}ttp5
┆${randomSymbol} ${prefix}qc
┆
╰–––––––––––––––༓
©️${ownername}
||©️Vɪʙʀᴀɴɪᴜᴍ-Bᴏᴛ || 2024${mono}`;


    else if (typemenu === 'v1') {
        gss.sendMessage(m.chat, {
            video: fs.readFileSync('./VenoxMedia/menu1.mp4'),
            caption: introText,
            sourceUrl: global.link,
            gifPlayback: true
        }, {
            quoted: m
        });
        else if (typemenu === 'v2') {
        gss.sendMessage(m.chat, {
            video: fs.readFileSync('./VenoxMedia/menu2.mp4'),
            caption: introText,
            sourceUrl: global.link,
            gifPlayback: true
        }, {
            quoted: m
        });
    } else if (typemenu === 'v3') {
        gss.sendMessage(m.chat, {
            video: fs.readFileSync('./VenoxMedia/menu3.mp4'),
            caption: introText,
            sourceUrl: global.link,
            gifPlayback: true
        }, {
            quoted: m
        });
    } else if (typemenu === 'v4') {
        gss.relayMessage(m.chat, {
            scheduledCallCreationMessage: {
                callType: "AUDIO",
                scheduledTimestampMs: 1200,
                title: introText
            }
        }, {});
    } else if (typemenu === 'v5') {
        gss.relayMessage(m.chat, {
            requestPaymentMessage: {
                currencyCodeIso4217: 'USD', 
                amount1000: '$4.99', 
                requestFrom: m.sender,
                noteMessage: {
                    extendedTextMessage: {
                        text: introText,
                        sourceUrl: global.link,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: false
                            }
                        }
                    }
                }
            }
        }, {});
    }
    break;
}




// Modify your gcmenu code
case 'gcmenu':
case 'grupmenu':
case 'groupmenu': {
  const randomFontStyle = getRandomFontStyle();
  const randomSymbol = getRandomSymbol();
  
  await doReact("🎀");
  
  const cmdList = cmdGrup.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');

  const introText = `
╭━══〘 *ＧＲＯＵＰ* 〙══━¤⊷¤❍
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
`;

  await gss.sendMessage(m.chat, {
    image: fs.readFileSync('./VenoxMedia/everymenu.jpg'),
    caption: introText,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: false,
        title: botname,
        sourceUrl: global.link,
        body: `https://wa.me/8801853262586`
      }
    }
  }, { quoted: m });
}
break;




            case 'downloadmenu':
case 'dlmenu':
case 'downmenu': {
  await doReact("🎗️");
    const randomSymbol = getRandomSymbol();
    const randomFontStyle = getRandomFontStyle();
    
    let cmdList = cmdDown.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    const introText = `
╭━══〘  *ＤＯＷＮＬＯＡＤ* 〙═━¤⊷¤❍
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
`;

    await gss.sendMessage(m.chat, {
        image: fs.readFileSync('./VenoxMedia/everymenu.jpg'),
        caption: introText,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: false,
                title: botname,
                sourceUrl: global.link,
                body: `https://wa.me/8801853262586`
            }
        }
    }, { quoted: m });
}
break;

case 'searchmenu': {
  await doReact("🔍");
    const randomSymbol = getRandomSymbol();
    const randomFontStyle = getRandomFontStyle();
    
    let cmdList = cmdSearch.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    const introText = `
╭━══〘 *ＳＥＡＲＣＨ* 〙══━¤⊷¤❍
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
`;

    await gss.sendMessage(m.chat, {
        image: fs.readFileSync('./VenoxMedia/everymenu.jpg'),
        caption: introText,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: false,
                title: botname,
                sourceUrl: global.link,
                body: `https://wa.me/8801853262586`
            }
        }
    }, { quoted: m });
}
break;

case 'funmenu': {
  await doReact("🎮");
    const randomSymbol = getRandomSymbol();
    const randomFontStyle = getRandomFontStyle();
    
    let cmdList = cmdFun.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    const introText = `
╭━══〘 *ＦＵＮ* 〙══━¤⊷¤❍
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷✪
`;

    await gss.sendMessage(m.chat, {
        image: fs.readFileSync('./VenoxMedia/everymenu.jpg'),
        caption: introText,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: false,
                title: botname,
                sourceUrl: global.link,
                body: `https://wa.me/8801853262586`
            }
        }
    }, { quoted: m });
}
break;

case 'convertmenu': {
  await doReact("🏮");
    const randomSymbol = getRandomSymbol();
    const randomFontStyle = getRandomFontStyle();
    
    let cmdList = cmdConv.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    const introText = `
╭━══〘 *ＣＯＮＶＥＲＴ* 〙══━¤⊷¤❍
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
`;

    await gss.sendMessage(m.chat, {
        image: fs.readFileSync('./VenoxMedia/everymenu.jpg'),
        caption: introText,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: false,
                title: botname,
                sourceUrl: global.link,
                body: `https://wa.me/8801853262586`
            }
        }
    }, { quoted: m });
}
break;

case 'mainmenu': {
  await doReact("🔖");
    const randomSymbol = getRandomSymbol();
    const randomFontStyle = getRandomFontStyle();
    
    let cmdList = cmdMain.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    const introText = `
╭━══〘 *ＭＡＩＮ* 〙══━¤⊷¤❍
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
`;

    await gss.sendMessage(m.chat, {
        image: fs.readFileSync('./VenoxMedia/everymenu.jpg'),
        caption: introText,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: false,
                title: botname,
                sourceUrl: global.link,
                body: `https://wa.me/8801853262586`
            }
        }
    }, { quoted: m });
}
break;

case 'ownermenu': {
  await doReact("👑");
    const randomSymbol = getRandomSymbol();
    const randomFontStyle = getRandomFontStyle();
    
    let cmdList = cmdOwner.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    const introText = `
╭━══〘 *ＯＷＮＥＲ* 〙══━¤⊷¤❍
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
`;

    await gss.sendMessage(m.chat, {
        image: fs.readFileSync('./VenoxMedia/everymenu.jpg'),
        caption: introText,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: false,
                title: botname,
                sourceUrl: global.link,
                body: `https://wa.me/8801853262586`
            }
        }
    }, { quoted: m });
}
break;

case 'aimenu': {
  await doReact("💻");
    const randomSymbol = getRandomSymbol();
    const randomFontStyle = getRandomFontStyle();
    
    let cmdList = cmdAi.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    const introText = `
╭━══〘 *Ｇ-ＡＩ* 〙══━¤⊷¤❍
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
`;

    await gss.sendMessage(m.chat, {
        image: fs.readFileSync('./VenoxMedia/everymenu.jpg'),
        caption: introText,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: false,
                title: botname,
                sourceUrl: global.link,
                body: `https://wa.me/8801853262586`
            }
        }
    }, { quoted: m });
}
break;



case 'toolmenu': {
  await doReact("🛠");
    const randomSymbol = getRandomSymbol();
    const randomFontStyle = getRandomFontStyle();
    
    let cmdList = cmdTool.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    const introText = `
╭━══〘 *Ｇ-ＴＯＯＬＳ* 〙══━¤⊷¤❍
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
`;

    await gss.sendMessage(m.chat, {
        image: fs.readFileSync('./VenoxMedia/everymenu.jpg'),
        caption: introText,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: false,
                title: botname,
                sourceUrl: global.link,
                body: `https://wa.me/8801853262586`
            }
        }
    }, { quoted: m });
}
break;


            
            default:

      if(isCmd){
          if (isBan) return reply(mess.banned);	 			
          if (isBanChat) return reply(mess.bangc);
          gss.sendMessage(from, { react: { text: "❌", key: m.key }}) 
          reply (`Oiiiiii  *${pushname}* Baka! this is not a Cmd... Type *${prefix}menu* to get my full command list!`)
  
      }	 		
		
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return m.reply(`${err}`)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    let room = Object.values(db.data.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['${prefix}next', '${prefix}leave', '${prefix}stop', '${prefix}start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    gss.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        
    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
