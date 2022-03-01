const pg = require('pg');
module.exports = {
    name: 'db',
    aliases: [],
    utilisation: 'db. ',
    description: 'Quản lý db',
    type: '',
    showHelp: false,

    async execute(client, message, args) {
        if(message.author.id === '529474880488603659'){
        const info = client.UserInfo(args[0]);
        //
        const sqlClient = new pg.Client({
                  connectionString: 'postgres://oqonintyggihod:d7754cab70d8844a7277308c3f513591f2343ac8aa4a5535210149a694a52019@ec2-54-157-160-218.compute-1.amazonaws.com:5432/dcmsr6g7t7b7b5',
                  ssl: {
                    rejectUnauthorized: false
                  }
                });
            sqlClient.connect();
            const text = args.join(' ');
            const sql = await sqlClient
                .query(`${text}`)
                .then(res =>{ 
                        console.log(res.rows);
                    })
                .catch(e => console.log(e.stack))
            
        /*insert
        INSERT INTO public."LuciChua"(discord_id, hentaivn_id, "like", yen, name) VALUES (?, ?, ?, ?, ?);
            */
        /*select 
        SELECT discord_id, hentaivn_id, "like", yen, name
            FROM public."LuciChua";
        */
        /*delete
        DELETE FROM public."LuciChua"
            WHERE <condition>;
        */
        /*update
        UPDATE public."LuciChua"
            SET discord_id=?, hentaivn_id=?, "like"=?, yen=?, name=?
            WHERE <condition>;
        */
        }
        },
};