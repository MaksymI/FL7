const marsWeatherArchive = {results: []};

const roundOverage = (a, b) => {
    let res = (a+b)/2;
    return res.toFixed(1);
};


const archiveHandler = data => {
    // console.log(data.next);
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

const archiveUrl = 'http://marsweather.ingenology.com/v1/archive/?format=jsonp&callback=archiveHandler';

const getJSONP = src => {
    let script = document.createElement("script");
    script.src = src;
    document.head.appendChild(script);
    setTimeout(() => {script.parentNode.removeChild(script)}, 0);
}
  
getJSONP(archiveUrl);

const data = document.getElementById('data');

const temperature = document.getElementById('temperature');

const windDirection = document.getElementById('wind_dir');

const windPower = document.getElementById('wind_power');

const nextButton = document.getElementById('next');

const prevButton = document.getElementById('prev');


prevButton.addEventListener('click', function() {
    ++renderArchive.clickCounter;
    renderArchive();
    if ((renderArchive.clickCounter+1)%10 === 0) {
        getJSONP(marsWeatherArchive.next);
    }
});

nextButton.addEventListener('click', function() {
    --renderArchive.clickCounter;
    if (renderArchive.clickCounter < 0) {
        renderArchive.clickCounter = -1;   
    }
    renderArchive();
});

const renderArchive = () => {
    if (renderArchive.clickCounter < 0) {
        renderArchive.clickCounter = 0;
    }
    data.innerText = marsWeatherArchive.results[renderArchive.clickCounter].data;
    temperature.innerText = marsWeatherArchive.results[renderArchive.clickCounter].temp + " \u00B0C";
    windDirection.innerText = marsWeatherArchive.results[renderArchive.clickCounter].windDirection || 'no data';
    windPower.innerText = marsWeatherArchive.results[renderArchive.clickCounter].windSpeed || 'no data';
}

renderArchive.clickCounter = 0;

window.addEventListener("hashchange", renderArchive);

setTimeout(function(){location.hash='start';}, 500);

// document.addEventListener("onload", renderLoad);


// getJSONP(marsWeatherArchive.next);