import { CommandInteraction, Message } from "discord.js"

import Command from "../../utils/Command"
import client from "../../main"
import { sendMessage } from "../../utils/Utils"
import { CommandSource, SendMessage } from "../../utils/Types"

export default class About extends Command {
    constructor(name: string) {
        super({
            name,
            category: "Meta",
            help: "Bot credits",
            usage: "credits",
            aliases: ["credits", "invite", "support"],
            options: []
        })
    }

    async runInteraction(source: CommandInteraction): Promise<SendMessage | undefined> {
        return this.run(source)

    }
    async runMessage(source: Message): Promise<SendMessage | undefined> {
        return this.run(source)
    }

    async run(source: CommandSource): Promise<SendMessage | undefined> {
        const me = (await client.users.fetch("127393188729192448")).tag
        return sendMessage(source, `Demo ... !`)
    }
}
