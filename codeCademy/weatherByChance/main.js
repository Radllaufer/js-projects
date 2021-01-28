const cloudArray = [
    { cloud: 'cumulonimbus', weather: 'rain' },
    { cloud: 'cirrocumulus', weather: 'fair' },
    { cloud: 'cirrostratus', weather: 'fair' },
    { cloud: 'cirrus', weather: 'fair' },
    { cloud: 'altocumulus', weather: 'fair' },
    { cloud: 'altostratus', weather: 'overcast' },
    { cloud: 'nimbostratus', weather: 'rain' },
    { cloud: 'cumulus', weather: 'fair' },
    { cloud: 'stratocumulus', weather: 'overcast' },
    { cloud: 'stratus', weather: 'fair' },
]


const randomCloud = (array) => { // returns random object from array
    return array[Math.floor(Math.random() * array.length)];
}

const randomNumber = (lower, upper) => { // returns random number between lower and upper number
    return Math.floor(Math.random() * (upper - lower) + lower);
}

const randomTemperature = () => {
    const currentMonth = (new Date).getMonth();

    if (currentMonth >= 4 && currentMonth <= 8) { // Warmer months
        return randomNumber(40, 10);
    } else {                                      // colder months
        return randomNumber(20, -20);
    }
}

const randomPressure = () => {
    return randomNumber(1060, 960);
}

const randomHumidity = () => {
    return randomNumber(100, 40);
}



const randomWeatherForecast = () => {
    // Variables used in return string
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
