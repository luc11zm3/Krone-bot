const axios = require('axios');
const cheerio = require('cheerio');
const nHentaiAPI = require("nana-api");
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'random',
    aliases: ['random'],
    utilisation: 'random',
    description: 'Random truyện ở nHentai.net',
    type: '🥒Làm truyện',

    async execute(client, message, args) {
        //get comic info

    const TYPE = {
        j: "jpg",
        p: "png",
        g: "gif"
    };
    const api = new nHentaiAPI();
    function getById(id) {
        return api.g(id.toString()).then(res => res);
    }

    function getInfo(res) {
        let json = {};

        json.title = res.title.pretty;
        json.link = `https://nhentai.net/g/${res.id}`;
        json.id = res.id.toString();
        json.num_pages = res.num_pages;
        json.tag = res.tags
          .filter(x => x.type == "tag")
          .map(x => x.name);
        json.category = res.tags
          .filter(x => x.type == "category")
          .map(x => x.name);
        json.artist = res.tags
          .filter(x => x.type == "artist")
          .map(x => x.name);
        json.parody = res.tags
          .filter(x => x.type == "parody")
          .map(x => x.name);
        json.character = res.tags
          .filter(x => x.type == "character")
          .map(x => x.name);
        json.cover = `https://i.nhentai.net/galleries/${res.media_id}/1.${
          TYPE[res.images.cover.t]
        }`;

        let lang = res.tags.filter(x => x.type == "language").map(x => x.name);
        if (lang[0] == "translated") {
          json.lang = lang[1];
        } else {
          json.lang = lang[0];
        }

    return json;
  }
 async function getInfoEmbed(id, msg) {
    let res = await getById(id);
    let nHlogo = "https://cdn.discordapp.com/attachments/466964106692395008/580378765419347968/icon_nhentai.png";
    let info = getInfo(res);
    const embed = new MessageEmbed();
    embed.setAuthor({
        name:"nHentai random generator", 
        iconURL: nHlogo
});
    embed.setColor('RANDOM');
    //embed.setThumbnail(thumb);
    embed.setTitle(`${res.title.pretty}`);
    embed.setDescription(`Made by: **${info.artist.join(', ')}**`);
    embed.setURL(`https://nhentai.net/g/${res.id}`);
    embed.setImage(info.cover);
    embed.addField("Language", info.lang, true);

    if(info.parody[0]){ embed.addField("Parody", info.parody[0] ? info.parody.join(", ") : info.parody,true) }
    if (info.character[0]){ embed.addField("Characters", info.character[0] ? info.character.join(", ") : info.character, true) }
    if(info.category[0]){ embed.addField("Categories", info.category.join(', '), true) }
    embed.addField("Pages", res.num_pages.toString(), true);
    if(info.tag[0]){ embed.addField("Tags", info.tag.join(', ')) };
    embed.setFooter(client.embed.footer)
    msg.channel.send({embeds: [embed]})
  }
     //
        if(!args[0]){
                const response = await axios.get(`https://nhentai.net/`)
                const html = response.data;
                    $ = cheerio.load(html);
                const comics = $(html).find('.gallery');
                    comics.each(function(i, e){
                        if(i === 5){
                            let id = $(this).find('a').attr('href').slice(3, -1)
                            let idRandom = Math.floor(Math.random() * parseInt(id)+1);
        
                            getInfoEmbed(parseInt(idRandom), message)
                        }                
                    })
            }/*else{
                const response = await axios.get(`https://nhentai.net/search/?q=${args.join(' ')}}`)
                const html = response.data;
                    $ = cheerio.load(html);
                const comics = $(html).find('.gallery');
                const not_found = $(html).find('.container').find('h2').text();
                if(not_found != 'No results found'){
                                    comics.each(function(i, e){
                                        if(i === 1){
                                            let id = $(this).find('a').attr('href').slice(3, -1)
                                            let idRandom = Math.floor(Math.random() * parseInt(id)+1);
                                            getInfoEmbed(parseInt(idRandom), message)
                                        }                
                                    })
                    }else{
                        message.channel.send('Mày tìm con cặc gì đéo thấy!')
                    }
            }*/
        },
};