module.exports = {
	name: '8ball',
	description: '8ball',
	aliases: ['lucky', 'question'],
	args: true,
	usage: '<question>',
	guildOnly: true,
	execute(message, args) {
		var _8ball_responses = [
		'It is certain',
		'Yes',
		'Without a doubt',
		'You may rely on it',
		'Signs point to yes',
		'Most likely',
		'Fuck off',
		'EEEEEEEE  --Mayo',
		'Don\'t waste my processing power on such a stupid question',
		'That\'s above my pay grade',
		'Ask the wise @roth',
		'Reply hazy, try again',
		'Maybe',
		'No',
		'NO! You absolue dummy',
		'Don\'t count on it',
		'My sources say no',
		'Very doubtful'
		];
		var answer = Math.floor(Math.random() * (_8ball_responses.length + 1));
		console.log(`${_8ball_responses[answer]}`)
		message.channel.send(`Question: ${args}\n${_8ball_responses[answer]}`);
	},
};





