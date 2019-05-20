import axios from 'axios'


export const graphics = () => {
  const endpoint = process.env.REACT_APP_JDGRAPHICS
  const imageSource = axios.get(endpoint).then(res => res.data)

  return {
    imageSource: imageSource
  }
}
