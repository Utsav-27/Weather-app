
    let long;
    let lat;
    let tempratureDescription = document.querySelector('.temperature-description')
    let tempratureDegree = document.querySelector('.temperature-degree')
    let locationTimezone = document.querySelector('.location-timezone')
    let weathericon = document.querySelector('.weather-icon')
    console.log(weathericon.innerHTML)
    let temperatureSection = document.querySelector('.degree-section')
    const temperatureSpan = document.querySelector('.degree-section span');
    console.log(temperatureSpan.textContent)
    const time = document.querySelector('.time')


    //creating function for kelvin to farenheit converter
    function farenHeitConverter(temp){
        newTemp = (temp - 273.15) * 1.8 + 32
        newTemp = newTemp.toFixed(2)
        return newTemp
    }
   

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
            long  = position.coords.longitude;
            lat = position.coords.latitude;
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=YOUR_API_KEY`

            fetch(api)
            .then(response =>{
                return response.json();
            })
            .then(data=>{
                console.log(data)
                const {temp} = data.main 
                console.log(temp)
                const {description} = data.weather[0]
                const {name} = data
                const {country} = data.sys
                const {dt} = data
                console.log(dt)
                var theDate = new Date(dt * 1000);
                
                console.log(theDate)


                const icon = data.weather[0].icon;
                console.log(icon)
                 const iconUrl = `<img src="http://openweathermap.org/img/wn/${icon}@2x.png" />`


                   //formula for celcius
                     let celcius = temp - 273.15

              

              // Set DOM elements from the api
                tempratureDegree.textContent = celcius
                tempratureDescription.textContent = description
                locationTimezone.textContent = name
                weathericon.innerHTML = iconUrl;
                time.textContent = theDate
                // const time = dateString
          


            //onclick celcius 
            temperatureSection.addEventListener('click', ()=>{
                if(temperatureSpan.textContent==='℃'){
                    temperatureSpan.textContent ='F';
                    tempratureDegree.textContent = farenHeitConverter(temp)

                }else{
                    temperatureSpan.textContent ='℃'
                    tempratureDegree.textContent = celcius
                }
            })
          
            });
        });
    }

// function getInputValue(){
//     var inputVal = document.getElementById("search").value
//     alert(inputVal)
// }
