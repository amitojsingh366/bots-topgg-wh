import topgg from "@top-gg/sdk";
import express from "express";
import { config } from "dotenv";
import { getUser } from "./getUser";
import { sendMessage } from "./sendMessage";

config();

const WH_SECRET = process.env.WH_SECRET;
const PORT = process.env.PORT;
const DISC_WH = process.env.DISC_WH;

if (!WH_SECRET || !PORT || !DISC_WH) process.exit();

const app = express()
const webhook = new topgg.Webhook(WH_SECRET)

app.post("/dblwebhook", webhook.listener(async (vote) => {
    const bot = await getUser(vote.bot || "");
    const user = await getUser(vote.user);

    await sendMessage(bot, user, vote);
}))

app.listen(PORT)




