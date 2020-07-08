navigator.geolocation.getCurrentPosition(requestWeather)

const key = '42f40aad8df2409ea0810308200807'

function requestWeather(position) {
    position = position.coords
    url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${position.latitude},${position.longitude}`

    const request = new XMLHttpRequest
    request.open('GET', url)
    request.responseType = 'json'
    request.send()
    request.onload = () => {
        const weather = request.response
        console.log(weather)
    }
}

const text = document.getElementById('text')
const icon = document.getElementById('icon')
const tempC = document.getElementById('temp_c')
const tempF = document.getElementById('temp_f')
const feelslikeC = document.getElementById('feelslike_c')
const feelslikeF = document.getElementById('feelslike_f')
const humidity = document.getElementById('humidity')
const location = document.getElementById('location')