const axios = require('axios');
const cheerio = require('cheerio');

async function UserInfo(id) {
const info = {}
		const response = await axios.get(`https://hentaivn.moe/user-${id}`)
		const html = response.data;
		    $ = cheerio.load(html);
		    //get info
		    info.name = $(html).find('.wall-name').find('h2').text()
		    info.avatar_url = $(html).find('.wall-avatar').find('img').attr('src') || '';
		    info.introduction = 'Không có';
		    info.role = 'Thành viên nhóm:';
		    info.group = 'Không có';
		    info.upload = false;
			//
			const infoR = $(html).find('.info-row');
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
				case 'Phó nhóm:':{
					info.role = 'Phó nhóm:';
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
					}					}
				    break;
				case 'Giới tính:':{
					info.gender = col2 || 'Không thể xác định';
				    }
				    break;
				case 'Ngày sinh:':{
					info.birthday = col2 || 'Không thể xác định';
				    }
				case 'Gia nhập:':{
					info.join = col2 || 'Không thể xác định';
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
				case 'Giới thiệu:':{
					info.introduction = col2;
				    }
				    break;
			    }
		})
	return info;
}

module.exports = UserInfo;