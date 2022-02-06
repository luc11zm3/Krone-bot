const axios = require('axios');
const nHentaiAPI = require("nana-api");
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'Download',
    aliases: ['dl'],
    utilisation: 'Download [ID]',
    description: 'Tải truyện từ nHentai.net',
    type: '🥒Làm truyện',

    async execute(client, message, args) {
        //
        const TYPE = {
          j: "jpg",
          p: "png",
          g: "gif"
        };
        let mangadl = "https://mangadl.herokuapp.com/download/nhentai"
        let api = new nHentaiAPI();

        function getById(id) {
            return api.g(id.toString()).then(res => res);
          }

        function getInfo(res) {
            let json = {};

            json.title = res.title.pretty;
            json.cover = `https://i.nhentai.net/galleries/${res.media_id}/1.${
              TYPE[res.images.cover.t]
            }`;

            return json;
          }

        async function download(res, type) {
            let nhentURL = `${mangadl}/${res.id}/${
              type == "cbz" ? "cbz" : "zip"
            }`;
            const concu = new MessageEmbed()
              .setTitle(res.title.pretty)
              .setURL(encodeURI(nhentURL.trim()))
              .setThumbnail(getInfo(res).cover)
              .setColor("RANDOM")
              .setTimestamp()
            return concu;
        }
        //
        let res = await getById(args[0]);
        let type = args[1];
        let embed = await download(res, type);

        message.channel.send({embeds: [embed]});
    },
};