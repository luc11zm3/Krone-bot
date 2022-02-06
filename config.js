module.exports = {
    app: {
        px: '=',
        token: 'OTM4OTM5NTc1NjIyMDc0Mzc4.Yfxlnw._aia5tsBPS1GnNABRc1yDg0eC30'
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
