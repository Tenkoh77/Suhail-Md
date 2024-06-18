const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263713210686";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_10_06_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNixcbiAgICAgICAgMTY1LFxuICAgICAgICAyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTksXG4gICAgICAgIDk4LFxuICAgICAgICA4NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTcsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMyxcbiAgICAgICAgNzksXG4gICAgICAgIDY4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzksXG4gICAgICAgIDM4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDcyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNyxcbiAgICAgICAgMTUzLFxuICAgICAgICA0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjMwLFxuICAgICAgICA0MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MixcbiAgICAgICAgMzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI4LFxuICAgICAgICA4NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTg0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjM1LFxuICAgICAgICA2MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODgsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjA5LFxuICAgICAgICA1MixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDcyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDUxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTQwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDUzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODcsXG4gICAgICAgIDg3LFxuICAgICAgICA4NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDM4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYzLFxuICAgICAgICAxODYsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAzNyxcbiAgICAgICAgODIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxODksXG4gICAgICAgIDU4LFxuICAgICAgICA2MixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDczLFxuICAgICAgICAxMzUsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTMxLFxuICAgICAgICA0OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDMzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlV4MUlsenVLNXhwVEN2OWlmK3VXaTVhSExlKzUrVURqZTVNZU5OVC8waUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzEzMjEwNjg2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2Q0YxQTczM0QwODU4NjgxNzEzMjJBMjVENjY0RjJFMVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTg3MjcwMzhcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3MTMyMTA2ODZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjlDMEJCMEQ1QUY1RUQxN0M5QzkwNjI4RDg4MjM4ODI2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODcyNzAzOFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJPbkRwdEFUalI3MkxTYUJVM0RkVGpBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjM5MDgxNjQwLTVhNWItNDI3Ny1hMjJlLTdjZDg1NzA2OTEzOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMyxcbiAgICAgIDI0MCxcbiAgICAgIDk2LFxuICAgICAgNzUsXG4gICAgICAzNixcbiAgICAgIDEsXG4gICAgICAxMTgsXG4gICAgICAyMDUsXG4gICAgICAxMjYsXG4gICAgICA3NSxcbiAgICAgIDE0LFxuICAgICAgNjYsXG4gICAgICA3NCxcbiAgICAgIDE4NCxcbiAgICAgIDI1MyxcbiAgICAgIDUyLFxuICAgICAgMjUxLFxuICAgICAgMzksXG4gICAgICAxNDgsXG4gICAgICA5MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjUsXG4gICAgICAyMDYsXG4gICAgICAxNjEsXG4gICAgICAxODAsXG4gICAgICAyMDYsXG4gICAgICAyNDEsXG4gICAgICAxMzQsXG4gICAgICA4NixcbiAgICAgIDY0LFxuICAgICAgMjE5LFxuICAgICAgMjUyLFxuICAgICAgNjQsXG4gICAgICAxMzMsXG4gICAgICA4NCxcbiAgICAgIDQzLFxuICAgICAgMTE3LFxuICAgICAgMzgsXG4gICAgICAyNTUsXG4gICAgICAxODEsXG4gICAgICA0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSMTlNMTkySlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzEzMjEwNjg2OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJDb21wdW5peFwiLFxuICAgIFwibGlkXCI6IFwiOTE0NDg5NDY5OTU0Mjk6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLQ1Q1cmNDRVBUaXhyTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlpvak93bjJGamtZTEF6TWd1ekhrL2RhNFN3dDl5aVVVUGhEWmQ1WE9oRU09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidzhaREorWTlYcmh0eWpMMTUrc2QrMUtJMDFSNGVDUDBGU3pST21HZUt0UVFpTmhiQ1BJbGk2aVFjNWNJYml2dzltN0k1enZMZ1hzcTkrcWpLVGdUQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidWRkVWJhamdHSWppTGkremdZT2xSQkl2NzU2Z2ZrUTlDdW9VUHhGRk5XL2pSWHJRbDNWVlJoQUtDMDNYWDRrMDhHY1J4SEVnWUlvYnFDUFUxdDE0QWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzEzMjEwNjg2OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4NzI3MDMyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSXUvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJdS8uanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
