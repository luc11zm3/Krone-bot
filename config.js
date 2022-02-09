module.exports = {
    app: {
        px: 'h!',
        token: 'OTM4OTM5NTc1NjIyMDc0Mzc4.Yfxlnw.RB3V-vGRUM3jIad4_ju6_AA7G6c'
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
