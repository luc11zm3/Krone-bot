const axios = require('axios');
const cheerio = require('cheerio');
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'User',
    aliases: [],
    utilisation: 'User <ID>',
    description: 'Hiển thị thông tin của người dùng thuộc hentaivn.moe.',
    type: 'Thông tin',

    execute(client, message, args) {
    const embed = new MessageEmbed()
        axios(`https://hentaivn.moe/user-${args[0]}`)
                .then(response => {
                    const html = response.data;
                    $ = cheerio.load(html);
                    const info = {}
                    info.name = $(html).find('.wall-name').find('h2').text() //|| $(html).find('.wall-name').find('.color-27').text();
                    info.avatar_url = $(html).find('.wall-avatar').find('img').attr('src');
                    const infoR = $(html).find('.info-row');
                    info.introduction = 'Không có';
                    info.role = 'Thành viên nhóm:';
                    info.group = 'Không có';
                    infoR.each(function(i, e){
                        let col1 = $(this).find('.col-1').text().trim();
                        let col2 = $(this).find('.col-2').text().trim();
                    switch(col1){
                        case 'Thành viên:':{
                                info.role = 'Thành viên nhóm:';
                                info.group = col2;
                            }
                            break;
                        case 'Trưởng nhóm:':{
                                info.role = 'Trưởng nhóm:';
                                info.group = col2;
                            }
                            break;
                        case 'ID:':{
                                info.id = col2;
                            }
                            break;
                        case 'Quyền Upload:':{
                                if(col2 === 'Chủ thớt'){
                                    info.upload = true
                                }else{
                                        info.upload = false
                                    }
                                }
                            break;
                        case 'Giới tính:':{
                                info.gender = col2 || 'Không có';
                            }
                            break;
                        case 'Ngày sinh:':{
                                info.birthday = col2 || 'Không có';
                            }
                            break;
                        case 'Đã bình luận:':{
                                info.comment = parseInt(col2);
                            }
                            break;
                        case 'Được thích:':{
                                info.like = parseInt(col2);
                            }
                            break;
                        case 'Yên:':{
                                info.yen = parseInt(col2);
                            }
                            break;
                        case 'Thành tựu:':{
                                info.point = parseInt(col2);
                            }
                            break;
                        case 'Giới thiệu:':{
                                info.introduction = col2;
                            }
                            break;
                    }

                    //console.log(`${col1}|${col2} \n =======================================`);
            })
        //

        //let urlAvatar = 
        if(info.avatar_url === '/icon/mac_dinh.png'){
            info.avatar_url = 'https://hentaivn.moe'+info.avatar_url
        }else if(info.avatar_url.toLowerCase().includes('/avatar/')){
                info.avatar_url = 'https://hentaivn.moe'+info.avatar_url
        }
        let uploadText = 'Không';
        if(info.upload === true){ uploadText = 'Có' }
        embed.setThumbnail(`${info.avatar_url}`)
        embed.setColor('RANDOM');
        //embed.setImage('https://i.imgur.com/AfFp7pu.png')
        embed.setTitle(`**${info.name}**`);
        embed.addFields(
        { name: 'ID:', value: `${info.id}`, inline: true },
        { name: 'Giới tính:', value: `${info.gender}`, inline: true },
        { name: 'Ngày sinh:', value: `${info.birthday}`, inline: true },
        );
        embed.addFields(
        { name: `${info.role}`, value: `${info.group}`, inline: true },
        { name: 'Quyền Upload:', value: `${uploadText}`, inline: true },
        );
        embed.addFields(
        { name: 'Comment:', value: `${info.comment}`, inline: true },
        { name: 'Like:', value: `${info.like}`, inline: true },
        { name: 'Yên:', value: `${info.yen}`, inline: true },
        );
        embed.addFields(
        { name: 'Giới thiệu:', value: `${info.introduction}`, inline: false },
        );
        message.channel.send({ embeds : [embed] });
        //
       // console.log(info)
        })   
    },
};