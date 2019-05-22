import axios from 'axios'


export const geo = () => {
  const endpoint = process.env.REACT_APP_IPGEOLOC_EP.concat(process.env.REACT_APP_IPGEOLOC_SEC)
  // let geoLoc = axios.get('local.json').then(res => res.data)
  let geoLoc = axios.get(endpoint).then(res => res.data)

  return {
    geoLoc: geoLoc
  }
}

export const { geoLoc } = geo()
