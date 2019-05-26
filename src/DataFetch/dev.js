import axios from 'axios'


export const dev = () => {
  const contentep = process.env.REACT_APP_JDDEVCONTENT
  const projectsep = process.env.REACT_APP_JDDEVPROJ
  const devContent = axios.get(contentep).then(res => res.data)
  const devProjects = axios.get(projectsep).then(res => res.data)

  return {
    devContent: devContent,
    devProjects: devProjects
  }
}
