const Command = require('../BaseCmd')

class Avatar extends Command {
  constructor (client) {
    super(client, {
      name: 'avatar',
      group: 'features',
      memberName: 'avatar',
      description: 'Returns a link to the tagged users avatar.',
      details: 'Returns a high quality (if available) version of the tagged users avatar.',
      examples: ['+avatar @Alcha#0042'],
      args: [{
        key: 'user',
        label: 'User',
        prompt: 'Which user did you want the avatar of?',
        type: 'user'
      }]
    })
  }

  async run (msg, { user }) {
    return msg.channel.send(user.displayAvatarURL({ size: 2048 }))
  }
}

module.exports = Avatar
