const marsWeatherLatest = {};
const marsWeatherArchive = {results: []};

const roundOverage = (a, b) => {
    let res = (a+b)/2;
    return res.toFixed(1);
};

const latestHandler = data => {
    marsWeatherLatest.data = data.report.terrestrial_date;
    marsWeatherLatest.temp = roundOverage(data.report.min_temp, data.report.max_temp);
    marsWeatherLatest.maxTemp = data.report.max_temp;
    marsWeatherLatest.windSpeed = data.report.wind_speed;
    marsWeatherLatest.windDirection = data.report.wind_direction;
};

const archiveHandler = data => {
    marsWeatherArchive.next = data.next;
    marsWeatherArchive.previous = data.previous;
    data.results.forEach(element => {marsWeatherArchive.results.push({
            data: element.terrestrial_date,
            temp: roundOverage(element.min_temp, element.max_temp),
            minTemp: element.min_temp,
            maxTemp: element.max_temp,
            windSpeed: element.wind_speed,
            windDirection: element.wind_direction
        });        
    });
};

const latestUrl = 'http://marsweather.ingenology.com/v1/latest/?format=jsonp&callback=latestHandler';
const archiveUrl = 'http://marsweather.ingenology.com/v1/archive/?format=jsonp&callback=archiveHandler';

const getJSONP = src => {
    let script = document.createElement("script");
    script.src = src;
    document.head.appendChild(script);
    setTimeout(() => {script.parentNode.removeChild(script)}, 0);
}
  
getJSONP(latestUrl);
getJSONP(archiveUrl);



// getJSONP(marsWeatherArchive.next);
