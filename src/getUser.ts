import { User } from "./types/user";
import axios from 'axios';

export async function getUser(id: string): Promise<User> {
    let res = await axios.get(`https://discord.com/api/v8/users/201345371513946112`, {
        headers: {
            'authorization': `Bot ${process.env.BOT_TOKEN}`
        }
    })

    return {
        id: res.data.data.id,
        tag: `${res.data.username}#${res.data.discriminator}`,
        username: res.data.username,
        avatar: `https://cdn.discordapp.com/avatars/${res.data.id}/${res.data.avatar}.webp`,
        discriminator: res.data.discriminator,
        public_flags: res.data.public_flags,
        banner: `https://cdn.discordapp.com/avatars/${res.data.id}/${res.data.banner}.gif`,
        banner_color: res.data.banner_color,
        accent_color: res.data.accent_color
    } as User;
}