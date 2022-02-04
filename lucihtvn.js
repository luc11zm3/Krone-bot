const axios = require('axios');
const cheerio = require('cheerio');

module.exports.UserInfo = async function(id) {
	const data = []
			axios(`https://hentaivn.moe/user-${id}`)
				.then(response => {
					const html = response.data;
					$ = cheerio.load(html);
					const info = {}
					info.name = $(html).find('.wall-name').find('h2').text() //|| $(html).find('.wall-name').find('.color-27').text();
					info.avatar_url = $(html).find('.wall-avatar').find('img').attr('src');
					const infoR = $(html).find('.info-row');

					infoR.each(function(i, e){
						let col1 = $(this).find('.col-1').text().trim();
						let col2 = $(this).find('.col-2').text().trim();
					switch(col1){
						case 'Thành viên:':{
								info.role = 0;
								info.group = col2;
							}
							break;
						case 'Trưởng nhóm:':{
								info.role = 1;
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
								info.gender = col2;
							}
							break;
						case 'Ngày sinh:':{
								info.birthday = col2;
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
			data.push({info})
			console.log(data)
		})
}