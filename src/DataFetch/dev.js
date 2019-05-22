import axios from 'axios'


export const dev = () => {
  const endpoint = process.env.REACT_APP_JDDEVCONTENT
  const devContent = axios.get(endpoint).then(res => res.data)

  return {
    devContent: devContent
  }
}
