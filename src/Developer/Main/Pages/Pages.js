import React from 'react'
import Page from '../Page/Page'


const PageWrapper = (props) => <div style={{ width: '100%' }}>{ props.children }</div>
const Expertise = (props) => <PageWrapper><Page content={props.content} animation={props.animation} pagename="expertise" heading="expertise & qualifications" navto_left="projects" navto_right="skills" /></PageWrapper>
const Skills = (props) => <PageWrapper><Page animation={props.animation} pagename="skills" heading="technical skills" navto_left="expertise" navto_right="projects" /></PageWrapper>
const Projects = (props) => <PageWrapper><Page animation={props.animation} pagename="projects" heading="project samples" navto_left="skills" navto_right="expertise" /></PageWrapper>


export { Expertise, Skills, Projects }
