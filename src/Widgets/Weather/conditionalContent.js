export const conditionalContentModalOn = (city, state, countryCode, flag, w) => {
  const localcity = document.getElementById('localcity')
  const countrycode = document.getElementById('countrycode')
  const countryflag = document.getElementById('countryflag')

  localcity.innerHTML = `${city}, ${state}`
  countrycode.innerHTML = `${countryCode}`
  countryflag.src = flag
  
  if (w !== undefined) {
    w.then(weatherData => {
      const weatherdescription = document.getElementById('weatherdescription')
      weatherdescription.innerHTML = weatherData.weather[0].description

      const weathertemperature = document.getElementById('weathertemperature')
      weathertemperature.innerHTML = `${weatherData.main.temp.toFixed(0)}&deg;${weatherData.unit}`

      const weathericon = document.getElementById('weathericon')
      const srcVal = `${process.env.REACT_APP_OPENWEA_ICEP}${weatherData.weather[0].icon}.png`
      weatherData.weather[0] !== undefined ? weathericon.src = srcVal : weathericon.alt = '...' // will put a spinner here eventually
    }).catch(error => console.log('ERROR IN useEffect'))
  } // END if w !== undefined
}


export const conditionalContentModalOff = (w) => {
  if (w !== undefined) {
    w.then(weatherData => {
      const weatherdescription = document.getElementById('weatherdescription')
      weatherdescription.innerHTML = `<p>${weatherData.weather[0].description}</p>`

      const weathertemperature = document.getElementById('weathertemperature')
      weathertemperature.innerHTML = `<p>${weatherData.main.temp.toFixed(0)}&deg;${weatherData.unit}</p>`
    }).catch(error => console.log('ERROR IN useEffect'))
  } // END if w !== undefined
}
