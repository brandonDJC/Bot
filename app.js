const bedrock = require('bedrock-protocol')
const client = bedrock.createClient({
  host: 'fitman22.aternos.me',   // optional
  port: 48396,         // optional, default 19132
  username: 'Bot',   // the username you want to join as, optional if online mode
  offline: true,       // optional, default false. if true, do not login with Xbox Live. You will not be asked to sign-in if set to true.
  // Optional for some servers which verify the title ID:
  // authTitle: bedrock.title.MinecraftNintendoSwitch
})
client.on('join',client => console.log('Bot conected :3'));
client.on('text', (packet) => { // Listen for chat messages and echo them back.
  if (packet.source_name != client.options.username) {
    client.queue('text', {
      type: 'chat', needs_translation: false, source_name: client.username, xuid: '', platform_chat_id: '',
      message: `${packet.source_name} said: ${packet.message} on ${new Date().toLocaleString()}`
    })
  }
})