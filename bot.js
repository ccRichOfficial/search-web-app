const { Telegraf } = require("telegraf");
require("dotenv").config();
const bot = new Telegraf(process.env.BOT_TOKEN);

const web_link = "https://flat-voice-3652.on.fleek.co/";

bot.start((ctx) => {
  ctx.reply("Hello 😃", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Open Search Bar", web_app: { url: web_link } }],
      ],
    },
  });
});

console.log("Bot is running...");

bot.launch();
