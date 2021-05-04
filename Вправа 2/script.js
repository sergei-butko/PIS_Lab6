async function showWeather() {
    let response = await fetch('https://api.openweathermap.org/data/2.5/' +
        'weather?lat=50.9216&lon=34.800289&appid=f4022d7e588d515ae06e4cb8c43e2d10');
    let weather = await response.json();
    console.log(weather);

    let d = new Date();
    let date = d.toString().substr(4, 6);
    let time = d.toString().substr(16, 5);
    document.getElementById('datetime').innerText += ' ' + date + ', ' + time;
    document.getElementById('city').innerText += ' ' + weather.name + ', ' + weather.sys.country;
    let img = document.createElement("img");
    img.src = 'icons/' + weather.weather[0].icon + '.png';
    document.getElementById('img').appendChild(img);
    let temp = document.createElement('div');
    temp.id = 'temp';
    temp.innerText = Math.round(weather.main.temp - 273.15) + '°C';
    document.getElementById('img').appendChild(temp);
    document.getElementById('temp')
    let feeltemp = Math.round(weather.main.feels_like - 273.15) + '°C';
    document.getElementById('feeltemp').innerText += ' ' + feeltemp;
    let str = weather.weather[0].description;
    document.getElementById('feeltemp').innerText += '. ' + str[0].toUpperCase() + str.slice(1);
    document.getElementById('wind').innerText += ' ' + weather.wind.speed + ' m/s';
    document.getElementById('pressure').innerText += ' ' + weather.main.pressure/10 + ' kPa';
    document.getElementById('humidity').innerText += ' ' + weather.main.humidity + '%';
    document.getElementById('visibility').innerText += ' ' + weather.visibility/1000 + ' km';
}