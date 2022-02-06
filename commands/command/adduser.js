const pg = require('pg');
module.exports = {
    name: 'adduser',
    aliases: [],
    utilisation: 'adduser [ID]',
    description: 'Thêm user vào list những người theo dõi.',
    type: '📜Thông tin',
   async execute(client, message, args) {
        if(message.author.id = '529474880488603659'){
                        const sqlClient = new pg.Client({
                          connectionString: 'postgres://oqonintyggihod:d7754cab70d8844a7277308c3f513591f2343ac8aa4a5535210149a694a52019@ec2-54-157-160-218.compute-1.amazonaws.com:5432/dcmsr6g7t7b7b5',
                          ssl: {
                            rejectUnauthorized: false
                          }
                        });
                    let ID = args[0];
                if(!ID) return message.channel.send('Cho cái ID vào...');
                const info = await client.UserInfo(ID);
                sqlClient.connect();
                const sql = await sqlClient
                        .query(`INSERT INTO public."User_follower"(author_id, hentaivn_id, "like") VALUES ('${message.author.id}', '${ID}', ${info.like});`)
                        .then(res =>{ 
                                message.channel.send('Đã thêm thành công!')
                        })
                        .catch(e =>{ 
                                console.log(e.stack)
                                message.channel.send('Thêm thất bại! Kiểm tra lại syntax.');
                        })
                }
        },
};