const axios = require('axios');
module.exports = {
    name: 'translate',
    aliases: ['trans'],
    utilisation: 'translate [smth]',
    description: 'Dịch từ tiếng anh sang tiếng việt.',
    type: '🥒Làm truyện',

    execute(client, message, args) {
       const content = args.join(' ');
        axios(`https://api.mymemory.translated.net/get?q=${content}&langpair=en|vi`)
            .then(response => {
                const html = response.data;
                message.channel.send(`${message.author} ${html.responseData.translatedText}`);
        });
    },
};