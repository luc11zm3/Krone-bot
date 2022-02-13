module.exports = {
    app: {
        px: 'h!',
        token: process.env.TOKEN || 'ODk3ODQyNTczNzQwMjQ1MDMy.YWbjDg.Bss6EB_R0LCKGR29F520JEi7FpU'
        /*px: '!',
        token: 'ODk3ODQyNTczNzQwMjQ1MDMy.YWbjDg.XQigQ8Qi7Hm9Te-G8EgLgtUyYXg'*/
    },
    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ'
        },
        maxVol: 100,
        loopMessage: true,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
