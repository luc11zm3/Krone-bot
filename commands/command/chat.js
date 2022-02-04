const axios = require('axios');
module.exports = {
    name: 'chat',
    aliases: ['c'],
    utilisation: 'chat <content>',
    description: 'Chat AI.',
    type: 'Funny',

    execute(client, message, args) {
    axios(`https://api.simsimi.net/v2/?text=${encodeURI(args.join(''))}&lc=vn&cf=false`)
        .then(response =>{
            const html = response.data;
            message.channel.send(`${html.success}`);
        })
    },
};