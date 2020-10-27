// глобальная переменная с текущим названием города
const isCurrentCity = (city) => {
   window.currentCity = city;
}


// определяем геолокацию
const geoLocationRequest = () => {
    fetch('http://ip-api.com/json/?fields=61439')
        .then(response => {
            return response.json();
        })
        .then(data => {
            let city = data.city
            weatherRequest('weather',city);
        })
    }

// запрос при открытии страницы
geoLocationRequest();

// запрос погоды
const weatherRequest = (type,city) => {
    let api_key = '9dbb22786edf5ee63f9373807567d257';
    fetch(`http://api.openweathermap.org/data/2.5/${type}?q=${city}&appid=${api_key}`)
        .then(resp => { return resp.json() })
        .then(data => {
            if(data.cod !== '404' && type === 'weather') {
                isCurrentCity(city);
                document.querySelector('.meteo-block').innerHTML = null;
                document.querySelector('#search-input').value = '';
                oneDayMeteoBlock(data);
            }
            else if(data.cod !== '404' && type === 'forecast') {
                isCurrentCity(city);
                let sortedArray = [];
                let arr = [];
                let n = +`${data.list[0].dt_txt[8]}${data.list[0].dt_txt[9]}`;
                for(let i = 0; i < data.list.length; i++) {
                    if (n !== +`${data.list[i].dt_txt[8]}${data.list[i].dt_txt[9]}`) {
                        n = +`${data.list[i].dt_txt[8]}${data.list[i].dt_txt[9]}`;
                        sortedArray.push(arr);
                        console.log(arr)
                        arr = [];
                    }
                    if (n === +`${data.list[i].dt_txt[8]}${data.list[i].dt_txt[9]}`) arr.push(data.list[i]);
                }
                sortedArray.push(arr);
                document.querySelector('.meteo-block').innerHTML = null;
                document.querySelector('#search-input').value = '';
                fiveDaysMeteoBlock(sortedArray, data.city.name, data.city.country);
            }
            else {
                document.querySelector('#search-input').value = '';
                warningBlock(data.message);
            }
})}
//блок с погодой на 1 день
const oneDayMeteoBlock = (data) => {
//Блок с названием города
    const oneDayMeteoBlock = document.createElement('div');
    oneDayMeteoBlock.classList.add('one-day-meteo-block');
    document.querySelector('.meteo-block').append(oneDayMeteoBlock);
    const cityNameDiv = document.createElement('div');
    cityNameDiv.classList.add('city-name');
    cityNameDiv.innerHTML =`<h1>${data.name}, ${data.sys.country}</h1>`
    document.querySelector('.one-day-meteo-block').append(cityNameDiv);
//Блок с температурой
    const tempDiv = document.createElement('div');
    tempDiv.classList.add('temp_block');
    tempDiv.innerHTML = `<p>${parseInt(data.main.temp - 273)}&degC</p>`;
    document.querySelector('.one-day-meteo-block').append(tempDiv);
// Блок с изображением
   const imgDiv = document.createElement('div');
   imgDiv.classList.add('img_block');
   imgDiv.innerHTML = `<img src=https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png>`;
   document.querySelector('.one-day-meteo-block').append(imgDiv);
}

//блок с погодой на 5 дней
const fiveDaysMeteoBlock = (sortedArray,city,region) => {
    const fiveDaysDivBlock = document.createElement('div');
    let out = '';
    for(let key in sortedArray) {
        let date = `${sortedArray[key][0].dt_txt[8]}${sortedArray[key][0].dt_txt[9]}.${sortedArray[key][0].dt_txt[5]}${sortedArray[key][0].dt_txt[6]}`;
        out += `<div class="ulGroup"><ul class="list-group" >
                    <li class="list-group-item list-group-item-warning">
                        ${city},${region} Date: ${date}
                    </li>`;
        for(let j = 0; j < sortedArray[key].length; j++) {
            out += `<li class="list-group-item">${sortedArray[key][j].dt_txt[11]}${sortedArray[key][j].dt_txt[12]}:00 Temp 
                        ${parseInt(sortedArray[key][j].main.temp - 273)}&deg, Feels like  ${parseInt(sortedArray[key][j].main.feels_like - 273)}&deg
                        <img src=https://openweathermap.org/img/wn/${sortedArray[key][j].weather[0].icon}.png>
                    </li>`;
        }
        out += `</ul></div>`;
    }
    fiveDaysDivBlock.classList.add('five-days-div-block');
    fiveDaysDivBlock.innerHTML = out;
    document.querySelector('.meteo-block').append(fiveDaysDivBlock);
}


// Блок вывода предупреждения
const warningBlock = (str) => {
    let errorBlock = document.querySelector('.error-block');
    errorBlock.innerHTML = `<div class="alert alert-warning" role="alert">
        ${str}</div>`;
    setTimeout(() => {
        document.querySelector('.error-block').innerHTML = '';
    }, 3000);
}

//блок поиска
document.querySelector('#search-city').onclick = () => {
    let city = document.querySelector('#search-input');
    let choiceCurrentDays = city.getAttribute("data-current-days");
    // Проверка на ввод текста
    if(city.value !== '' && choiceCurrentDays === '1') {
        weatherRequest('weather', city.value);
    }
    else if(city.value !== '' && choiceCurrentDays === '5') {
        weatherRequest('forecast', city.value);
    }
    else {
        warningBlock("Entered isn't correct");
    }
}

//событие кнопок
document.querySelector('.one-day').onclick = () => {
    document.querySelector('.five-days').classList.remove('active');
    document.querySelector('.one-day').classList.add('active');
    document.querySelector('#search-input').setAttribute('data-current-days', '1');
    weatherRequest('weather', currentCity);
}
document.querySelector('.five-days').onclick = () => {
    document.querySelector('.one-day').classList.remove('active');
    document.querySelector('.five-days').classList.add('active');
    document.querySelector('#search-input').setAttribute('data-current-days', '5');
    weatherRequest('forecast', currentCity);
}
