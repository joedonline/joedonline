import axios from 'axios'


export const weather = (lat, lon, countryCode) => {
  let weaLoc = undefined
  if (lat !== undefined) {
    const units = countryCode === 'USA' ? 'imperial' : 'metric'
    // const endpoint = process.env.REACT_APP_OPENWEA_EPZCC2U.concat(`lat=${lat}&lon=${lon}&units=${units}&appid=${process.env.REACT_APP_OPENWEA_SEC}`)
    const endpoint = process.env.REACT_APP_OPENWEA_EPZCC2U.concat(`lat=${lat}&lon=${lon}&units=${units}&appid=${process.env.REACT_APP_OPENWEA_SECJD}`)
    weaLoc = axios.get(endpoint).then(res => {
      return {
        unit: countryCode === 'USA' ? 'F' : 'C',
        ...res.data
      }
    })
  }

  return {
    weaLoc: weaLoc
  }
}
