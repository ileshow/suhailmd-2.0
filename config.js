const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347041435772";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_12_12_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjMzLFxuICAgICAgICA2NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5LFxuICAgICAgICA0OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTUwLFxuICAgICAgICA4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDk2LFxuICAgICAgICA2MixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDc5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDYzLFxuICAgICAgICAxLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDQyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTA4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODYsXG4gICAgICAgIDUsXG4gICAgICAgIDc1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjEyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNixcbiAgICAgICAgMjI4LFxuICAgICAgICA0OCxcbiAgICAgICAgODYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxLFxuICAgICAgICA3MixcbiAgICAgICAgNjcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjI5LFxuICAgICAgICA4NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTIxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjI4LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzksXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAwLFxuICAgICAgICA0NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDQ1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODksXG4gICAgICAgIDcyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODksXG4gICAgICAgIDM0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjksXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDczLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjMyLFxuICAgICAgICA0MixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTExLFxuICAgICAgICA1NSxcbiAgICAgICAgMzksXG4gICAgICAgIDQzLFxuICAgICAgICA3MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzMixcbiAgICAgICAgOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExMixcbiAgICAgICAgNjUsXG4gICAgICAgIDg2LFxuICAgICAgICA4MixcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWnI3dVVhbktWVW8yM29kdlJLenEyaHMzQkJYYlhOdU15UENWMUdqdXdEVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSHFDNDRtZ2tTR2VlUDFGMVZ6OS16Z1wiLFxuICBcInBob25lSWRcIjogXCI1YTI4YmIzYi00ZGFkLTRkYjYtYjQxOS0xYmJkODZlNjMyY2JcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjExLFxuICAgICAgMzksXG4gICAgICA4OCxcbiAgICAgIDg1LFxuICAgICAgMjQwLFxuICAgICAgMTAxLFxuICAgICAgMTQ3LFxuICAgICAgMTAxLFxuICAgICAgMTE5LFxuICAgICAgMTgwLFxuICAgICAgODgsXG4gICAgICAxOTEsXG4gICAgICA1NCxcbiAgICAgIDg0LFxuICAgICAgOTksXG4gICAgICAzLFxuICAgICAgOTMsXG4gICAgICAyOCxcbiAgICAgIDIxMSxcbiAgICAgIDg4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNyxcbiAgICAgIDIyNSxcbiAgICAgIDQwLFxuICAgICAgNzgsXG4gICAgICAxOTcsXG4gICAgICAxOTEsXG4gICAgICAxMyxcbiAgICAgIDYyLFxuICAgICAgOTQsXG4gICAgICA5NCxcbiAgICAgIDU1LFxuICAgICAgMTc5LFxuICAgICAgMTYwLFxuICAgICAgNDQsXG4gICAgICAyMjUsXG4gICAgICAxMyxcbiAgICAgIDQzLFxuICAgICAgMTA0LFxuICAgICAgNjksXG4gICAgICAxOThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiM1hSTVg1WDRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNDE0MzU3NzI6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTc0MDcxMjgzMjA0MjM4OjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUFdQNnFnQ0VKdldqcnNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJKbllPci9xeFVnUFcyNHNZeXUyRkpuL2Nmdmo0a0dRTjBOU0ZPRmNIQjEwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlpNL0xaa2pJdmpEMW1tRFlpeDV2cHZjSlR1K1BXeDdsY3dQVU5rRTFuMWQ4bHRDWXJONlN3cG1RN2V6ZUw1K1BvYWd1MDlRN0hmNitRR1ZySHFVQ0FnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInVEVFRpT2QvamN1dDhaejlHbVY0Wk1EYkFzUlQwc1hwTnFpMFdQZEtVT3R3TWVIR3I1WnRPako5NkQwWHNNVE1Cc2ZhRTBMZjF5NUJSSjNVZno0S2pBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNDE0MzU3NzI6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDU4NTExOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVB2M1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUHYzLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
