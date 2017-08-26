const data = document.getElementById('data');

const temperature = document.getElementById('temperature');

const windDirection = document.getElementById('wind_dir');

const windPower = document.getElementById('wind_power');

const nextButton = document.getElementById('next');

const prevButton = document.getElementById('prev');

const waitText = 'waiting for data';
const failText = 'failed load data';

const renderWait = () => {
    data.innerText = '';
    temperature.innerText = waitText;
    temperature.setAttribute('class', 'animate');
    windDirection.innerText = waitText;
    windDirection.setAttribute('class', 'animate');
    windPower.innerText = waitText;
    windPower.setAttribute('class', 'animate');
}

const renderFail = () => {
    data.innerText = failText;
    temperature.innerText = failText;
    windDirection.innerText = failText;
    windPower.innerText = failText;
}

const marsWeatherArchive = {results: []};

const archiveUrl = 'http://marsweather.ingenology.com/v1/archive/?format=jsonp&callback=archiveHandler';

const roundOverage = (a, b) => {
    let res = (a+b)/2;
    return res.toFixed(1);
};

const archiveHandler = data => {
    marsWeatherArchive.count = data.count;
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

let failScript = false;

const getJSONP = src => {
    let script = document.createElement("script");
    script.src = src;
    document.head.appendChild(script);
    script.onerror = () => {failScript = true; renderFail()};
    script.onload = () => {failScript = false; renderArchive()};
    if (script.readyState == 'complete') {
        renderArchive();
    }
    setTimeout(() => {
        script.parentNode.removeChild(script)
    }, 0);
}
  
getJSONP(archiveUrl);

prevButton.addEventListener('click', function() {
    ++renderArchive.clickCounter;
    render();
    if ((renderArchive.clickCounter%10 === 0) && (!(marsWeatherArchive.results[renderArchive.clickCounter]))) {
        getJSONP(marsWeatherArchive.next);
    }
});

nextButton.addEventListener('click', function() {
    --renderArchive.clickCounter;
    if (renderArchive.clickCounter < 0) {
        renderArchive.clickCounter = 0;   
    }
    renderArchive();
});

const renderArchive = () => {
    data.innerText = `#${renderArchive.clickCounter + 1} ${marsWeatherArchive.results[renderArchive.clickCounter].data} of total #${marsWeatherArchive.count}`;
    temperature.removeAttribute('class');
    temperature.innerText = `${marsWeatherArchive.results[renderArchive.clickCounter].temp} \u00B0C`;
    windDirection.removeAttribute('class');
    if (marsWeatherArchive.results[renderArchive.clickCounter].windDirection == '--' || marsWeatherArchive.results[renderArchive.clickCounter].windDirection == null) {
        windDirection.innerText = 'no data';
    } else {
        windDirection.innerText = marsWeatherArchive.results[renderArchive.clickCounter].windDirection;
    }
    windPower.removeAttribute('class');
    windPower.innerText = marsWeatherArchive.results[renderArchive.clickCounter].windSpeed || 'no data';
}

const render = () => {
    if (marsWeatherArchive.results[renderArchive.clickCounter]) {
        renderArchive();
    } else if(failScript){
        renderFail();
    } else {
        renderWait();
    }
}

renderArchive.clickCounter = 0;

document.onload = render();