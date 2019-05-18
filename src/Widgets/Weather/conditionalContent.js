export const conditionalContent = (city, state, countryCode, flag, w) => {
  const localcity = document.getElementById('localcity')
  const countrycode = document.getElementById('countrycode')
  const countryflag = document.getElementById('countryflag')

  localcity.innerHTML = `${city}, ${state}`
  countrycode.innerHTML = `${countryCode}`
  countryflag.src = flag

  if (w !== undefined) {
    w.then(weatherData => {
      // MODAL ON
      const weatherdescription = document.getElementById('weatherdescription')
      weatherdescription.innerHTML = weatherData.weather[0].description

      const weathertemperature = document.getElementById('weathertemperature')
      weathertemperature.innerHTML = `${weatherData.main.temp.toFixed(0)}&deg;${weatherData.unit}`

      const weathericon = document.getElementById('weathericon')
      weathericon.src = `${process.env.REACT_APP_OPENWEA_ICEP}${weatherData.weather[0].icon}.png`

      // MODAL OFF
        // ... code goes here ...
    }).catch(error => console.log('ERROR IN useEffect'))
  } // END if w !== undefined
}
