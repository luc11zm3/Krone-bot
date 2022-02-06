module.exports = async (client) => {
	console.log(`${client.user.username} running... `);
	//Listening 0-4 watching 5-10;	
function rand(items){ return items[Math.floor(Math.random()*items.length)] }
function getPos(x){
	for(let i=0;i<activity.length;i++){
		if(x === activity[i]){
			return i;
			break;
		}
	}
}
	const activity = [
			'Tiếng ỉa bẹt bẹt',
			'Tiếng ai đó đang ở phòng bên',
			'Nghe con cặc đang buồn',
			'Vài câu nói có khiến người thay đổi',
			'Dù cho mai về sau',
			'Bà quại mày tắm',
			'Sex',
			'Phim cùng mấy con ghệ đít bự',
			'Boku no hero',
			'Luci coding'
		]
let a = rand(activity);
let type;
if(getPos(a)>-1 && getPos(a)<5){
	type = 'LISTENING';
}else if(getPos(a)>4 && getPos(a)<11){
	type = 'WATCHING';
}
	//
	client.user.setActivity(a, { type: type });
	client.users.cache.get("529474880488603659").send(`${client.user.username} bố mày restart rồi.`);

};
