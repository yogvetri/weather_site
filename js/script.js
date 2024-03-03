let apikey = "d2d1ab6d25e27c5ee80c6cd5120d54bd";

let getWeather = async (city) => {
    let weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    let weatherObj = await fetch(weatherAPI);
    let response = await weatherObj.json();
    return response;
}

async function CallWeather() {
    try {
        const group = document.querySelector('.group');
        group.addEventListener('submit', async function (e) {
            e.preventDefault();
            let ci = document.getElementById('search');
            let city = ci.value;

            let response = await getWeather(city);
            console.log(response);
            console.log("Country :", response.sys['country']);
            console.log("City :", response.name)
            console.log("Temperature :", response.main['temp']);
            console.log("Minimum Temperature :", response.main['temp_min']);
            console.log("Maximum Temperature :", response.main['temp_max']);
            console.log("Description :", response.weather[0]['description'])
            console.log("Wind Speed :", response.wind['speed'])
        });
    } catch (error) {
        if (error['cod'] == 401) {
            let errorMessage = "Server can't be reached";
            console.log(errorMessage);
        } else {
            console.log(error)
        }
    }
}

CallWeather();
