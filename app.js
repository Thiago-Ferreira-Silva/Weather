navigator.geolocation.getCurrentPosition(requestWeather)

//const key = /* use your key from weather api */

function requestWeather(position) {
    position = position.coords
    url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${position.latitude},${position.longitude}`

    const request = new XMLHttpRequest
    request.open('GET', url)
    request.responseType = 'json'
    request.send()
    request.onload = () => {
        const weather = request.response
        mountPage(weather)
    }
}

const text = document.getElementById('text')
const icon = document.getElementById('icon')
const tempC = document.getElementById('temp_c')
const tempF = document.getElementById('temp_f')
const humidity = document.getElementById('humidity')
const position = document.getElementById('position')

function mountPage(weather) {
    text.innerText = weather.current.condition.text
    icon.src = weather.current.condition.icon
    tempC.innerText = weather.current.temp_c + '°C'
    tempF.innerText = weather.current.temp_f + '°F'
    humidity.innerText = weather.current.humidity + '%'
    position.innerText = `${weather.location.name}, ${weather.location.region}, ${weather.location.country}`
}