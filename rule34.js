const axios = require('axios');
const cheerio = require('cheerio');
async function getImage(link){
	const response = await axios.get(link)
		const html = response.data;
		    $ = cheerio.load(html);
		return $(html).find('.flexi').find('img').attr('src')
}
async function rule34(name) {
const info = {}
		const response = await axios.get(`https://rule34.xxx/index.php?page=post&s=list&tags=${name}+`)
		const html = response.data;
		    $ = cheerio.load(html);
		    const notfound = $(html).find('.content').find('h1').text().trim()
		    if(notfound.includes('Nobody here but us chickens!')) return 0;
		    let link = [];
			let page = ['0',`https://rule34.xxx/index.php?page=post&s=list&tags=${name}+`]
			const pageProps = $(html).find('.pagination').find('a')
			pageProps.each(function(){
				if($(this).attr('href')) page.push('https://rule34.xxx/index.php' + $(this).attr('href'));
			})
			let Pageid = Math.floor(Math.random() * pageProps.length+1);	
			async function getImageInPage(page){
				const response = await axios.get(page)
				const html = response.data;
					$ = cheerio.load(html);
					const props = $(html).find('.thumb')
					props.each(function(i,e){
						link.push('https://rule34.xxx/' + $(this).find('a').attr('href'))
				})
				let id = Math.floor(Math.random() * props.length+1);
				return link[id]
			}
		return await getImage(await getImageInPage(page[Pageid]))
}
module.exports = rule34;