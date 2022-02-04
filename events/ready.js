module.exports = async (client) => {
    console.log(`${client.user.username} running... `);

    client.user.setActivity('Tiếng ỉa bẹt bẹt', { type: 'LISTENING' });

};
