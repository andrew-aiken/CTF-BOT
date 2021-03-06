const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

//When ready
client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}\n`);
	client.user.setStatus('online');
});

//Open all commands in ./commands dir
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

//Message Check
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
	if (message.webhookID) return;
	if (!command) return;

//DM Check
	if (command.guildOnly && message.channel.type === 'dm') {
		return message.reply('I can\'t execute that command inside DMs!');
	}

//ARGS Check
	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

//Check Role Admin
	if(command.adminRole) {
		if (!(message.member.roles.cache.find(r => r.name === "Admin"))) {
			return message.channel.send(`${message.author} you need the Admin role`);
		}
	}

//Check Role Dev
	if(command.devRole) {
		if (!(message.member.roles.cache.find(r => r.name === "Dev"))) {
			return message.channel.send(`${message.author} you need the Dev role`);
		}
	}

//Execute Command
	try {
        command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

/*
// debug
client.on("debug", function(info){
    console.log(`debug -> ${info}`);
});
*/

// warning
client.on("warn", function(info){
    console.log(`warn: ${info}`);
});

client.login(token);
