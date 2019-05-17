import axios from 'axios'


export const geo = () => {
  const endpoint = process.env.REACT_APP_IPGEOLOC_EP.concat(process.env.REACT_APP_IPGEOLOC_SEC)
  // let geo = axios.get('local.json').then(res => {
  let geoLoc = axios.get(endpoint).then(res => res.data)

  return {
    geoLoc: geoLoc
  }
}

export const { geoLoc } = geo()
