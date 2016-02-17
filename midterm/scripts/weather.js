var api = 'http://api.openweathermap.org/data/2.5/weather?q=NewYork,us&appid=2de143494c0b295cca9337e1e96b00e0';

var $weather = $('.weather');

console.log(api);
// use .weather[0]
var weatherCall;

$.ajax({
			dataType:'json',
			url:api,
			success:function(returnData, statusValue, weirdNewObject) { 
				weatherCall = returnData;
				console.log ('got it move along');
                runWeatherProgram();
			},
		});

function runWeatherProgram(){
    if (weatherCall.weather[0].main == 'Rain')
        $weather.css("background-image", "url('./images/rainy.jpg')");
    else
    if (weatherCall.weather[0].main == 'Sun')
        $weather.css("background-image", "url('./images/sunny.jpg')");
    if (weatherCall.weather[0].main == 'Clouds')
        $weather.css("background-image", "url('./images/cloudy.jpg')");
    
    $weather.html(KtoFaren(weatherCall.main.temp) + ' degrees');
}

function KtoFaren(kval){
    return Math.ceil( (kval - 273.15)* 1.8000 + 32.00);
}