import { WebhookPayload } from "@top-gg/sdk";
import axios from "axios";
import { User } from "./types/user";

export async function sendMessage(bot: User, user: User, vote: WebhookPayload) {
    const payload = {
        "content": "",
        "embeds": [
            {
                "title": 'New Vote',
                "color": 1376000,
                "thumbnail": {
                    "url": user.avatar
                },
                "fields": [
                    {
                        "name": 'User',
                        "value": `<@${user.id}>(${user.tag})`
                    },
                    {
                        "name": 'Type',
                        "value": vote.type
                    },
                    {
                        "name": 'Weekend Multiplier',
                        "value": vote.isWeekend
                    },
                    {
                        "name": 'Time',
                        "value": new Date().toLocaleString()
                    }
                ]
            }
        ],
        "username": bot.username,
        "avatar_url": bot.avatar,
        "timestamp": new Date().toISOString()
    }

    axios.post(process.env.DISC_WH || "", payload);
}