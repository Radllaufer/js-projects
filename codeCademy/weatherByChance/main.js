const cloudArray = [
    { cloud: 'cumulonimbus',    weather: 'rain'     },
    { cloud: 'cirrocumulus',    weather: 'fair'     },
    { cloud: 'cirrostratus',    weather: 'fair'     },
    { cloud: 'cirrus',          weather: 'fair'     }, 
    { cloud: 'altocumulus',     weather: 'fair'     }, 
    { cloud: 'altostratus',     weather: 'overcast' }, 
    { cloud: 'nimbostratus',    weather: 'rain'     }, 
    { cloud: 'cumulus',         weather: 'fair'     }, 
    { cloud: 'stratocumulus',   weather: 'overcast' }, 
    { cloud: 'stratus',         weather: 'fair'     },
]


const randomCloud = (array) => {
    return array[Math.floor(Math.random() * array.length)];
}


const randomTemperature = () => {
    const currentMonth = (() => {
        const d = new Date;
        return d.getMonth();
    })();

    if (currentMonth >= 4 && currentMonth <= 8) { // Warmer months
        return Math.floor(Math.random() * 30 + 10); // min: 10° C, max: 40° C
    } else { // colder months
        return Math.floor(Math.random() * 40 - 20); // min: -20° C, max: 20° C
    }
}


const randomPressure = () => {
    return Math.floor(Math.random() * (1060 - 960) + 960); // min: 960hPa, max: 1060hPa
}

const randomHumidity = () => {
    return Math.floor(Math.random() * 60 + 40); // min: 40%, max: 100%
}


const randomWeatherForecast = () => {
    let firstTemperature = randomTemperature();
    let secondTemperature = randomTemperature();
    const cloud = randomCloud(cloudArray);
    let weatherSentence = '';

    while (firstTemperature === secondTemperature) {
            secondTemperature = randomTemperature();
    }  
    if (firstTemperature > secondTemperature) {
        const swap = firstTemperature;
        firstTemperature = secondTemperature;
        secondTemperature = swap;
    } 
    
    if (cloud.weather === 'rain') {
        weatherSentence = 'rain';
    } else if (cloud.weather === 'fair') {
        weatherSentence = 'fair weather';
    } else if (cloud.weather === 'overcast') {
        weatherSentence = 'an overcast';
    }

    return `Todays weather forecast brought to you by WeatherByChance.com. The temperatures will range from ${firstTemperature}° C to ${secondTemperature}° C. when we look at the sky we see ${cloud.cloud} clouds, which combined with an atmospheric pressure of ${randomPressure()}hPa and ${randomHumidity()}% humidity will lead to ${weatherSentence}.`
};


console.log(randomWeatherForecast());


/*
    Notes:
    - Edit randomPressure and randomHumidity to stay positive
    - Use one function for multiple random requests
*/