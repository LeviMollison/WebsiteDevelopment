// Following code uses Ajax from the google API for a specific term, anything really, and attaches the search results to your page

var searchNews = function(searchterm) {
	var elem = document.createElement('script');
	elem.src = 'http://ajax.googleapis.com/ajax/services/search/news?v=1.0&q='+searchterm+'&callback=displayNews';
	document.getElementsByTagName('head')[0].appendChild(elem);
};

// Takes JSON result of above request and adds it to an element on our page with ID newsresults
var displayNews = function(news) {
	var html = '',
	items = news.responseData.results,
	total = items.length;
	if (total>0) {
		for (var i=0; i<total; i++) {
			var item = items[i];
			html+= '<article>';
			html+= '<a href="'+item.unescapedUrl+'">';
			html+= '<h3>'+item.titleNoFormatting+'</h3>';
			html+= '</a>';
			html+= '<p>';
			html+= item.content;
			html+= '</p>';
			html+= '</article>';
		}
		document.getElementById('newsresults').innerHTML = html;
	}
};