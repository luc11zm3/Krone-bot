const axios = require('axios');
const cheerio = require('cheerio');

async function rule34(name) {
const info = {}
		const response = await axios.get(`https://rule34.xxx/index.php?page=post&s=list&tags=${name}+`)
		const html = response.data;
		    $ = cheerio.load(html);
		    const notfound = $(html).find('.content').find('h1').text().trim()
		    if(notfound.includes('Nobody here but us chickens!')) return 0;
		    let link = [];
			const props = $(html).find('.thumb')
			props.each(function(i,e){
				link.push($(this).find('a').find('img').attr('src'))
			})
			let id = Math.floor(Math.random() * props.length+1);
		return link[id];
}
module.exports = rule34;