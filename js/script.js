
let apikey = ""

let getWeather = async (city) => {
    let weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=matric`;
    let weatherObj = await fetch(weatherAPI);
    let response = weatherObj.json();
    return response;
}

async function CallWeather() {
    try {
        let city = 'chennai'
        let response = await getWeather(city);
        console.log(response);
        console.log("Country :",response.sys['country']);
        console.log("City :", response.name)
        console.log("Temparature :", response.main['temp']);
        console.log("Minimum Temparature :", response.main['temp_min']);
        console.log("Maximum Temparature :", response.main['temp_max']);
        console.log("Description :",response.weather[0]['description'])
        console.log("Wind Speed :",response.wind['speed'])
            } catch (error) {

        if (error['cod'] == 401) {
            let errorMessage = "Server can't be reached";
            console.log(errorMessage);
        }else{
            console.log(error)
        }
    }
    
    // .then((response)=>{
    //     console.log(response);
    // })
 
    }
    CallWeather();
