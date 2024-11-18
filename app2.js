// https://api.open-meteo.com/v1/forecast?latitude=-6.1818&longitude=106.8223&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min

const WMO = {
    0: {
      day: {
        description: 'Sunny',
        image: 'http://openweathermap.org/img/wn/01d@2x.png',
      },
      night: {
        description: 'Clear',
        image: 'http://openweathermap.org/img/wn/01n@2x.png',
      },
    },
    1: {
      day: {
        description: 'Mainly Sunny',
        image: 'http://openweathermap.org/img/wn/01d@2x.png',
      },
      night: {
        description: 'Mainly Clear',
        image: 'http://openweathermap.org/img/wn/01n@2x.png',
      },
    },
    2: {
      day: {
        description: 'Partly Cloudy',
        image: 'http://openweathermap.org/img/wn/02d@2x.png',
      },
      night: {
        description: 'Partly Cloudy',
        image: 'http://openweathermap.org/img/wn/02n@2x.png',
      },
    },
    3: {
      day: {
        description: 'Cloudy',
        image: 'http://openweathermap.org/img/wn/03d@2x.png',
      },
      night: {
        description: 'Cloudy',
        image: 'http://openweathermap.org/img/wn/03n@2x.png',
      },
    },
    45: {
      day: {
        description: 'Foggy',
        image: 'http://openweathermap.org/img/wn/50d@2x.png',
      },
      night: {
        description: 'Foggy',
        image: 'http://openweathermap.org/img/wn/50n@2x.png',
      },
    },
    48: {
      day: {
        description: 'Rime Fog',
        image: 'http://openweathermap.org/img/wn/50d@2x.png',
      },
      night: {
        description: 'Rime Fog',
        image: 'http://openweathermap.org/img/wn/50n@2x.png',
      },
    },
    51: {
      day: {
        description: 'Light Drizzle',
        image: 'http://openweathermap.org/img/wn/09d@2x.png',
      },
      night: {
        description: 'Light Drizzle',
        image: 'http://openweathermap.org/img/wn/09n@2x.png',
      },
    },
    53: {
      day: {
        description: 'Drizzle',
        image: 'http://openweathermap.org/img/wn/09d@2x.png',
      },
      night: {
        description: 'Drizzle',
        image: 'http://openweathermap.org/img/wn/09n@2x.png',
      },
    },
    55: {
      day: {
        description: 'Heavy Drizzle',
        image: 'http://openweathermap.org/img/wn/09d@2x.png',
      },
      night: {
        description: 'Heavy Drizzle',
        image: 'http://openweathermap.org/img/wn/09n@2x.png',
      },
    },
    56: {
      day: {
        description: 'Light Freezing Drizzle',
        image: 'http://openweathermap.org/img/wn/09d@2x.png',
      },
      night: {
        description: 'Light Freezing Drizzle',
        image: 'http://openweathermap.org/img/wn/09n@2x.png',
      },
    },
    57: {
      day: {
        description: 'Freezing Drizzle',
        image: 'http://openweathermap.org/img/wn/09d@2x.png',
      },
      night: {
        description: 'Freezing Drizzle',
        image: 'http://openweathermap.org/img/wn/09n@2x.png',
      },
    },
    61: {
      day: {
        description: 'Light Rain',
        image: 'http://openweathermap.org/img/wn/10d@2x.png',
      },
      night: {
        description: 'Light Rain',
        image: 'http://openweathermap.org/img/wn/10n@2x.png',
      },
    },
    63: {
      day: {
        description: 'Rain',
        image: 'http://openweathermap.org/img/wn/10d@2x.png',
      },
      night: {
        description: 'Rain',
        image: 'http://openweathermap.org/img/wn/10n@2x.png',
      },
    },
    65: {
      day: {
        description: 'Heavy Rain',
        image: 'http://openweathermap.org/img/wn/10d@2x.png',
      },
      night: {
        description: 'Heavy Rain',
        image: 'http://openweathermap.org/img/wn/10n@2x.png',
      },
    },
    66: {
      day: {
        description: 'Light Freezing Rain',
        image: 'http://openweathermap.org/img/wn/10d@2x.png',
      },
      night: {
        description: 'Light Freezing Rain',
        image: 'http://openweathermap.org/img/wn/10n@2x.png',
      },
    },
    67: {
      day: {
        description: 'Freezing Rain',
        image: 'http://openweathermap.org/img/wn/10d@2x.png',
      },
      night: {
        description: 'Freezing Rain',
        image: 'http://openweathermap.org/img/wn/10n@2x.png',
      },
    },
    71: {
      day: {
        description: 'Light Snow',
        image: 'http://openweathermap.org/img/wn/13d@2x.png',
      },
      night: {
        description: 'Light Snow',
        image: 'http://openweathermap.org/img/wn/13n@2x.png',
      },
    },
    73: {
      day: {
        description: 'Snow',
        image: 'http://openweathermap.org/img/wn/13d@2x.png',
      },
      night: {
        description: 'Snow',
        image: 'http://openweathermap.org/img/wn/13n@2x.png',
      },
    },
    75: {
      day: {
        description: 'Heavy Snow',
        image: 'http://openweathermap.org/img/wn/13d@2x.png',
      },
      night: {
        description: 'Heavy Snow',
        image: 'http://openweathermap.org/img/wn/13n@2x.png',
      },
    },
    77: {
      day: {
        description: 'Snow Grains',
        image: 'http://openweathermap.org/img/wn/13d@2x.png',
      },
      night: {
        description: 'Snow Grains',
        image: 'http://openweathermap.org/img/wn/13n@2x.png',
      },
    },
    80: {
      day: {
        description: 'Light Showers',
        image: 'http://openweathermap.org/img/wn/09d@2x.png',
      },
      night: {
        description: 'Light Showers',
        image: 'http://openweathermap.org/img/wn/09n@2x.png',
      },
    },
    81: {
      day: {
        description: 'Showers',
        image: 'http://openweathermap.org/img/wn/09d@2x.png',
      },
      night: {
        description: 'Showers',
        image: 'http://openweathermap.org/img/wn/09n@2x.png',
      },
    },
    82: {
      day: {
        description: 'Heavy Showers',
        image: 'http://openweathermap.org/img/wn/09d@2x.png',
      },
      night: {
        description: 'Heavy Showers',
        image: 'http://openweathermap.org/img/wn/09n@2x.png',
      },
    },
    85: {
      day: {
        description: 'Light Snow Showers',
        image: 'http://openweathermap.org/img/wn/13d@2x.png',
      },
      night: {
        description: 'Light Snow Showers',
        image: 'http://openweathermap.org/img/wn/13n@2x.png',
      },
    },
    86: {
      day: {
        description: 'Snow Showers',
        image: 'http://openweathermap.org/img/wn/13d@2x.png',
      },
      night: {
        description: 'Snow Showers',
        image: 'http://openweathermap.org/img/wn/13n@2x.png',
      },
    },
    95: {
      day: {
        description: 'Thunderstorm',
        image: 'http://openweathermap.org/img/wn/11d@2x.png',
      },
      night: {
        description: 'Thunderstorm',
        image: 'http://openweathermap.org/img/wn/11n@2x.png',
      },
    },
    96: {
      day: {
        description: 'Light Thunderstorms With Hail',
        image: 'http://openweathermap.org/img/wn/11d@2x.png',
      },
      night: {
        description: 'Light Thunderstorms With Hail',
        image: 'http://openweathermap.org/img/wn/11n@2x.png',
      },
    },
    99: {
      day: {
        description: 'Thunderstorm With Hail',
        image: 'http://openweathermap.org/img/wn/11d@2x.png',
      },
      night: {
        description: 'Thunderstorm With Hail',
        image: 'http://openweathermap.org/img/wn/11n@2x.png',
      },
    },
  };
  
  async function getWeather(latitude, longitude) {
    try {
      document.getElementById('loader').style.display = 'block';
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,surface_pressure,wind_speed_10m,wind_direction_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min`
      );
      const data = await response.json();
  
      document.getElementById('temperature').innerText =
        data.current.temperature_2m;
      document.getElementById('date').innerText = formattedDate(
        data.current.time
      );
      document.getElementById('description').innerText =
        WMO[data.current.weather_code].day.description;
  
      const windSpeed = document.getElementById('wind-speed');
      windSpeed.innerText = data.current.wind_speed_10m + ' km/h';
      const windDirection = document.getElementById('wind-direction');
      windDirection.innerText = data.current.wind_direction_10m + ' °';
      const humidity = document.getElementById('humidity');
      humidity.innerText = data.current.relative_humidity_2m + ' %';
      const airPressure = document.getElementById('air-pressure');
      airPressure.innerText = data.current.surface_pressure + ' hPa';
  
      document.getElementById('daily').innerHTML = '';
      for (let i = 1; i < data.daily.time.length; i++) {
        document.getElementById('daily').innerHTML += `
          <div class="col-2">
            <div class="card bg-dark bg-gradient text-white text-center rounded-5 border-0">
              <div class="card-body">
                <h5 class="fs-5">${
                  i == 1 ? 'Tomorrow' : formattedDate(data.daily.time[i])
                }</h5>
                <img
                  src="${WMO[data.daily.weather_code[i]].day.image}"
                  alt="${WMO[data.daily.weather_code[i]].day.description}"
                />
                <span class="fs-6">${
                  WMO[data.daily.weather_code[i]].day.description
                }</span>
                <div class="d-flex justify-content-between mt-4 mx-2">
                  <span class="text-secondary">${
                    data.daily.temperature_2m_min[i]
                  } °C</span>
                  <span>${data.daily.temperature_2m_max[i]} °C</span>
                </div>
              </div>
            </div>
          </div>
        `;
      }
    } catch (error) {
      console.error(error);
    } finally {
      document.getElementById('loader').style.display = 'none';
    }
  }
  
  async function getGeocoding() {
    try {
      document.getElementById('loader').style.display = 'block';
      let cityName = document.getElementById('city-name').value;
      document.getElementById('city-display').innerText = cityName;
      document.getElementById('city-name').value = '';
  
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1&language=en&format=json`
      );
      const data = await response.json();
      let latitude = data.results[0].latitude;
      let longitude = data.results[0].longitude;
      getWeather(latitude, longitude);
    } catch (error) {
      console.error(error);
    } finally {
      document.getElementById('loader').style.display = 'none';
    }
  }
  
  function getLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      document.getElementById('city-display').innerText = 'Jakarta';
      getWeather(latitude, longitude);
    });
  }
  
  function formattedDate(date) {
    const newDate = new Date(date);
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return newDate.toLocaleDateString('id-ID', options);
  }
  getLocation();