module.exports = {
    name: 'init',
	aliases: ['roles', 'borked'],
	usage: '<>',
	description: 'Print role speal',
	guildOnly: true,
	devRole: true,
    execute(message) {
		message.delete();
		message.channel.send(`
		๐๐๐ฅ๐๐จ๐ฆ๐ ๐ญ๐จ ๐ญ๐ก๐ ๐๐๐ง๐ ๐จ๐ฎ๐ญ ๐๐๐ซ๐ฏ๐๐ซ

		Read info about commands & the server at #๐info 
		
		-Roles
			BigBrainGang: :brain:
			DJ:  :musical_note:
			โฐ:  :non_potable_water:
		
		แดตแถ  สณแตหกแตหข แตสณแต โฟแตแต สทแตสณแตโฑโฟแต แตแต @Mad-Chicken
		`).then(sentEmbed => {
		    sentEmbed.react("๐ง ")
		    sentEmbed.react("๐ต")
			sentEmbed.react('๐ฑ')
		});
    },
};
