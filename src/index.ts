import { App, LogLevel } from "@slack/bolt";
import { registerEventHandlers } from "./event-handlers";

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  // Socket Mode doesn't listen on a port, but in case you want your app to respond to OAuth,
  // you still need to listen on some port!
  port: 3000, // process.env.PORT ||
});

registerEventHandlers(app);

(async () => {
  // Start your app
  await app.start();

  console.log("⚡️ Bolt app is running!");
})();
