const { MessageEmbed } = require('discord.js');
const axios = require('axios');
const cheerio = require('cheerio');

module.exports = {
    name: 'pthh',
    aliases: [],
    utilisation: '[chất tham gia1] [chất tham gia2/có cũng được] [chất sản phẩm]',
    description: 'giải hoá, cân bằng phương trình',
    type: '☣chemistry',

    async execute(client, message, args) {
      if(!args[1]) return message.channel.send('Thiếu kìa chó rách');
      let chatthamgia0, chatthamgia1, chatsanpham;
      if(args[2]){
        chatthamgia0 = args[0]
        chatthamgia1 = '+' + args[1]
        chatsanpham = args[2]
      }else{
        chatthamgia0 = args[0]
        chatthamgia1 = ''
        chatsanpham = args[1]
      }
        //
        const embed = new MessageEmbed();
        embed.setTitle(`Tìm kiếm phương trình hoá học với ${chatthamgia0} ${chatthamgia1} -> ${chatsanpham}`);
        embed.setColor('RANDOM');
        embed.setTimestamp();
        let a = await resovle(chatthamgia0,chatthamgia1,chatsanpham);
          
        embed.setDescription(a);
        if(!a) return message.channel.send('Sai chất rồi xem lại đi.'); 
        message.channel.send({ embeds: [embed] })
        //
    },
  }
async function resovle(chatthamgia0,chatthamgia1,chatsanpham){
let symbol = []
  const response = await axios.get(`https://phuongtrinhhoahoc.com/?chat_tham_gia=${chatthamgia0} ${chatthamgia1}+&chat_san_pham=${chatsanpham}+#item-0`)
        const html = response.data;
          $ = cheerio.load(html);
        //crawling
        let nhietdo = [];
        const tab_pane = $(html).find('.tab-content').find('.tab-pane').find('p');
        tab_pane.each(function(i, e){
          //if(i=0) 
          if($(this).text().toLowerCase().includes('nhiệt độ:')||$(this).text().toLowerCase().includes('điều kiện khác:')||$(this).text() === 'Không có'){
              nhietdo.push($(this).text());
            }
        })
        const td = $(html).find('.formula-row');
        td.each(function(i, e) {
          symbol.push('**#' + (i+1) + '** ' + $(this).find('td').text()+ ' (' + nhietdo[i] + ')'+'\n')
        })
        let text = symbol.join(' ');
  return text;
}