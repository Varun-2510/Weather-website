const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");
const data_hide = document.querySelector(".middle_layer");

const getInfo = async(e) => {
    
    e.preventDefault();

    let cityVal = cityName.value;

    if(cityVal === ""){
        city_name.innerText = "Please Write City name before you Search.";
        data_hide.classList.add('data_hide');
    }
    else{

        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=53348960a0925352ac01bbfaf1883cc4`;
            
            const response = await fetch(url);

            const data = await response.json()

            const arrData = [data];

            city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;

            const tempMood = arrData[0].weather[0].main;

            if(tempMood == "Clear"){
                temp_status.innerHTML = `<i class="fa fa-sun"  style = "color : #eccc68"></i>`
            }

            else if(tempMood == "Clouds"){
                temp_status.innerHTML = `<i class="fa fa-cloud"  style = "color : #a4b0be"></i>`
            }

            else if(tempMood == "Rain"){
                temp_status.innerHTML = `<i class="fa fa-cloud-rain" style = "color : #f1f2f6"></i>`
            }

            else{
                temp_status.innerHTML = `<i class="fa fa-cloud" style = "color : #f1f2f6"></i>`
            }

            data_hide.classList.remove('data_hide');

        }

        catch{
            city_name.innerText = "Please Enter Valid City Name.";
            data_hide.classList.add('data_hide');
        }

    }
}

submitBtn.addEventListener("click" , getInfo);
